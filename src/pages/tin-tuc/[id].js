import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Head from 'next/head'
import Link from 'next/link';

import { Col, Row, Modal } from "antd";
import videojs from "video.js";
import TimeAgo from 'timeago-react';
import * as timeago from 'timeago.js';
import vi from 'timeago.js/lib/lang/vi';
import 'moment/locale/vi';
import Loader from "react-loader-spinner";
import date from 'date-and-time';
import InfiniteScroll from "react-infinite-scroll-component";


import { FacebookShareButton } from "react-share";
import { isIOS, isAndroid } from 'react-device-detect';
import { parse } from 'node-html-parser';
import { Banner, Footer, HeaderTop, HeaderMenu, DownloadAndroid, DownloadIos, Breadcrumb, SiderBar_Ads_Top, SiderBar_Ads_Bottom } from "../../components";
import { constants, listUrl, listParams } from "../../configs/constants";
import { icon_dow_app, icon_dow_gg, btn_share, btn_source, thanh_line } from "../../../public/resource";
import { getNews, getRelatedNews, getCategories } from "../../services/news";
import Lightbox from "react-image-lightbox";
import { getArticleSource } from '../../configs/constants/inforwebsite';

import Styles from '../../styles/Page_Details.module.scss';


timeago.register('vi', vi);
export default function NewsDetails(props) {
    //--------------handle state-------------
    const ListParams = listParams.listParamsMenu;
    const [isModalVisible1, setIsModalVisible1] = useState(false);
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState(props.categories.articles);
    const [hasMore, setHasMore] = useState(true);
    const imgThumbl = props.articleDetails.thumb;
    const articleId = props.articleId;
    const dataSubType_idBreadcrumb = props.articleDetails;
    const [state, _setState] = useState({
        lastApis: props.categories.last,
        typeWebsite: props.articleDetails.type,
        photoIndex: 0,
        listImageUrl: [],
        isImagePreviewOpen: false
    });
    const setState = (data = {}) => {
        _setState((state) => {
            return { ...state, ...data };
        });
    };



    // ------------Server side method-------------------
    useEffect(() => {
        let listImgDOM = document.getElementsByClassName("content-img");
        for (let imgDOM of listImgDOM) {
            imgDOM.addEventListener('click', function () {
                const domImgs = document.querySelectorAll('#body-content .content-img');
                const listImgUrl = Array.from(domImgs).map((item) => item.src);
                const index = listImgUrl.indexOf(imgDOM.src);
                setState({ photoIndex: index, listImageUrl: listImgUrl, isImagePreviewOpen: true });
            });
        }
    }, [props]);
    useEffect(() => {
        setPosts(props.categories.articles)
    }, [props]);

    useEffect(() => {
        const videoElm = document.querySelectorAll(".video-js");
        const listElementVideo = videoElm;
        if (videojs && videoElm != null) {
            listElementVideo.forEach((element) => videojs(element))
        }

        // if(window && window.videojs && videoElm != null){
        //     listElementVideo.forEach((element) => window.videojs(element))
        // }
    }, [props]);

    // useEffect(() => {
    //     // hiển thị thông báo một lần, sau 15 phút sẽ hiển thị tiếp 1 lần nữa.
    //     if (isAndroid) {
    //         let alerted = localStorage.getItem('alerted') || '';
    //         if (alerted != 'checked') {
    //             setIsModalVisible1(true);
    //             localStorage.setItem('alerted', 'checked');
    //         }
    //     } else if (isIOS) {
    //         let alerted = localStorage.getItem('alerted') || '';
    //         if (alerted != 'checked') {
    //             setIsModalVisible2(true);
    //             localStorage.setItem('alerted', 'checked');
    //         }
    //     }
    // }, []);
    // -------------handle method------------------
    const articleSource = getArticleSource(props.articleDetails.source);
    const getMorePost = async () => {
        setLoading(true);
        const res = await fetch(
            constants.API_BASE_URL + listUrl.CATEGORIES + `_start=${posts.length}&articleId=${decodeURI(articleId)}` + `&last=${state.lastApis}` + "&db24h=" + constants.API_DB_KEY + `&length=10`
        );
        const newPosts = await res.json();
        setState({ lastApis: newPosts.data.last })
        const checkpost = newPosts.data.articles;
        // setPosts((post) => [...post, ...checkpost]);
        setLoading(false)
    };
    const timePost = new Date(props.articleDetails.pubdate);
    const OneHourAgo = (itemTime) => {
        const hour = 1000 * 60 * 60;
        const hourago = Date.now() - hour;
        return itemTime > hourago;
    }

    // check Thumb img
    let urlString = props.articleDetails.thumb;
    let testUrl = new URL(urlString);
    let checkThumbWeight = testUrl.searchParams.get("w");
    let checkThumbHeight = testUrl.searchParams.get("h");


    // check details post of cate ( check chi tiết bài viết thuộc menu nào )
    const checkHeigtLineMenu = ListParams.find((items) => items.id === state.typeWebsite);
    return (
        <div>
            <Head>
                <link rel="icon" href="/faicon_3.ico" />
                <title>{props.articleDetails.title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0"></meta>
                <meta property="og:url" content={props.articleDetails.webUrl} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={props.articleDetails.title} />
                <meta property="og:image:width" content={checkThumbWeight} />
                <meta property="og:image:height" content={checkThumbHeight} />
                <meta property="og:image" content={props.articleDetails.thumb} />
                <meta property="og:description" content={props.articleDetails.desc} />
                <meta name="description" content={props.articleDetails.desc} />
                {/* <link href="//vjs.zencdn.net/7.10.2/video-js.min.css" rel="stylesheet"></link>
                <script src="//vjs.zencdn.net/7.10.2/video.min.js"></script> */}
            </Head>
            <Row>
                <Col span={24}>
                    <div className={Styles.Box__Menus}>
                        <HeaderTop />
                        <HeaderMenu data={checkHeigtLineMenu} />
                    </div>
                </Col>
                <Col span={24}>
                    <br></br>
                    <div style={{ marginTop: "73px" }}>
                        <Banner />
                    </div>
                </Col>
                <Col span={24}>
                    <div className={Styles.bodyContents}>
                        <div className={Styles.contentBodyNews}>
                            <Breadcrumb data={dataSubType_idBreadcrumb} />
                            <p className={Styles.titleContent}>{props.articleDetails.title}</p>
                            <div className={Styles.spanSpace} />
                            <div className={Styles.groupExtenxion}>
                                <Link href={props.articleDetails.url} className={Styles.contentGroup}>
                                    <a href={props.articleDetails.url} target="_blank">
                                        <div className={Styles.IconTacgia}>
                                            <img src={articleSource === undefined ? 'Tin tức 247' : articleSource.icon_url} style={{ width: "40px", height: "40px" }} alt="Tin tức 247"/>
                                            <div style={{ display: "flex" }}>
                                                <p className={Styles.nameTacgia}>{articleSource === undefined ? 'Tin tức 247' : articleSource.name}</p>
                                                <div className={Styles.Box_TimeAnDetails}>
                                                    <i class="bi bi-dot" style={{ color: "#D9DBE1", fontSize: "21px", lineHeight: '10px' }}></i>
                                                    <p className={Styles.styleTimeDetails}>{date.format(timePost, 'HH:mm')}</p>
                                                    <i class="bi bi-dot" style={{ color: "#D9DBE1", fontSize: "21px", lineHeight: '10px' }}></i>
                                                    <p className={Styles.styleTimeDetails}> {date.format(timePost, 'DD/MM/YYYY')}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                <div className={Styles.IconShare}>
                                    <div className={Styles.iconLikefb}>
                                        <a href={constants.Host_Domain + "/tin-tuc/" + props.articleDetails.webUrl2}>
                                            <FacebookShareButton url={constants.Host_Domain + "/tin-tuc/" + props.articleDetails.webUrl2}>
                                                <Image src={btn_share} alt="box-btn-share"/>
                                            </FacebookShareButton>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.spanSpace} />
                            <p style={{ fontWeight: "600", marginTop: "30px" }}>{props.articleDetails.desc}</p>
                            <div id="body-content" dangerouslySetInnerHTML={{ __html: props.articleDetails.content.replace(/<video/g, '<video poster="' + imgThumbl + '"').replace(/<img/g, '<img class="content-img" alt="Tin tức 247"') }} className={Styles.styleDangerous} />
                            <div className={Styles.spanSpace} />
                            <div className={Styles.groupExtenxion}>
                                <a href={props.articleDetails.url} target="_blank">
                                    <div className={Styles.IconTacgia}>
                                        <img src={articleSource === undefined ? 'Tin tức 247' : articleSource.icon_url} style={{ width: "40px", height: "40px" }} alt="Tin tức 247"/>
                                        <div style={{ display: "flex" }}>
                                            <p className={Styles.nameTacgia}>{articleSource === undefined ? 'Tin tức 247' : articleSource.name}</p>
                                            <div className={Styles.Box_TimeAnDetails}>
                                                <i class="bi bi-dot" style={{ color: "#D9DBE1", fontSize: "21px", lineHeight: '10px' }}></i>
                                                <p className={Styles.styleTimeDetails}>{date.format(timePost, 'HH:mm')}</p>
                                                <i class="bi bi-dot" style={{ color: "#D9DBE1", fontSize: "21px", lineHeight: '10px' }}></i>
                                                <p className={Styles.styleTimeDetails}> {date.format(timePost, 'DD/MM/YYYY')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <div className={Styles.IconShare}>
                                    <div className={Styles.iconLikefb}>
                                        <a href={props.articleDetails.url} target="_blank">
                                            <Image src={btn_source} alt="box-btn-share"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.spanSpace} />
                            <div className={Styles.Style_Line}>
                                <Image src={thanh_line} alt="thanh-line" />
                            </div>
                            {/* Chỗ này phát sinh thêm 1 div là vì do bên Design làm UX lẫn lộn nên phải tạo thêm 1 div tạI đây để check trên mobile */}
                            <div className={Styles.TinTucdangxemMobile}>
                                {
                                    JSON.stringify(props.relatedNewsCategory.articles) === '[]' ? null :
                                        <div className={Styles.Topichot} style={{ marginBottom: "14px" }}>
                                            <div className={Styles.Title__RelateNew} />
                                            <p>TIN LIÊN QUAN</p>
                                        </div>
                                }
                                <div>
                                    {
                                        JSON.stringify(props.relatedNewsCategory.articles) === '[]' ? null : props.relatedNewsCategory.articles.map((datas, index) => {
                                            let regexUrl = new URL(datas.webUrl);
                                            let getUrlnew = regexUrl.pathname;
                                            let formatUrl = getUrlnew.replace('/tin-tuc/', '');
                                            // var itemTime = datas.pubdate;
                                            // var dataDays = OneHourAgo(itemTime);
                                            const itemFind = getArticleSource(datas.source);
                                            const FindCateSource = ListParams.find((itemId) => itemId.id === datas.type)
                                            return (
                                                <>

                                                    <Link href={`/tin-tuc/${formatUrl}`} key={index}>
                                                        <div className={Styles.GroupTopicById}>
                                                            <div className={Styles.iconPic}>
                                                                <img src={datas.thumb} width={95} height={73} layout="fixed" className={Styles.imgTitle} alt={datas.title} className={Styles.titleTopicss_imgThuml}/>
                                                            </div>
                                                            <div className={Styles.titleTopicss}>
                                                                <a href={`/tin-tuc/${formatUrl}`}>{datas.title}</a>
                                                                <div className={Styles.titleTopicss__boxDetails}>
                                                                    <img src={itemFind === undefined ? 'https://ecdn.docbao24h.me/icon_wb/news/docbao24h.png' : itemFind.icon_url_horizontal} style={{ maxHeight: "24px", objectFit: "contain"}} alt="icon-docbao"/>
                                                                    <i class="bi bi-dot" style={{ color: "#D9DBE1", fontSize: "21px", lineHeight: '10px', margin: "0px" }}></i>
                                                                    <p className={Styles.titleTopicss__boxDetails__Source}>{FindCateSource === undefined ? 'Tin tức 247' : FindCateSource.name}</p>
                                                                    <i class="bi bi-dot" style={{ color: "#D9DBE1", fontSize: "21px", lineHeight: '10px', margin: "0px" }}></i>
                                                                    <p className={Styles.titleTopicss__boxDetails__Time}>
                                                                        <TimeAgo
                                                                            datetime={datas.pubdate}
                                                                            locale='vi'
                                                                        />
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <div className={Styles.spanSpaceXemthem} />
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            {
                                JSON.stringify(posts) === '[]' ? null : <div className={Styles.bodyContents2}>
                                    <div>
                                        <div className={Styles.Topichot} style={{ marginTop: '20px' }}>
                                            <div className={Styles.Title__RelateNew} />
                                            <p>TIN CÙNG CHUYÊN MỤC</p>
                                        </div>
                                        <div className={Styles.totalFooterPage}>
                                            <InfiniteScroll
                                                dataLength={posts.length}
                                                next={getMorePost}
                                                hasMore={hasMore}
                                                loader={<div style={{ textAlign: "center" }}>{loading === true ? <Loader type="Bars" color="#029875" height={40} width={40} /> : null}</div>}
                                                endMessage={<h4>Không có tin bài để hiển thị</h4>}
                                            >
                                                {
                                                    JSON.stringify(posts) === '[]' ? <p>Không có tin bài để hiển thị</p> : posts.map((items, index) => {
                                                        let regexUrl = new URL(items.webUrl);
                                                        let getUrlnew = regexUrl.pathname;
                                                        let formatUrl = getUrlnew.replace('/tin-tuc/', '');
                                                        const itemFind = getArticleSource(items.source);
                                                        // var itemTime = items.pubdate;
                                                        // var dataDays = OneHourAgo(itemTime);
                                                        const FindCateSource = ListParams.find((itemId) => itemId.id === items.type);
                                                        return (
                                                            <>
                                                                <Link href={`/tin-tuc/${formatUrl}`} key={index}>
                                                                    <div className={Styles.totalFooter}>
                                                                        <div>
                                                                            <img src={items.thumb} width={95} height={73} layout="fixed" className={Styles.imageThumb} alt={items.title} />
                                                                        </div>
                                                                        <div>
                                                                            <a href={`/tin-tuc/${formatUrl}`}>{items.title}</a>
                                                                            <p className={Styles.totalFooter_Decs}>{items.desc}</p>
                                                                            <div className={Styles.totalFooter__BoxDescs}>
                                                                                <img src={itemFind === undefined ? 'https://ecdn.docbao24h.me/icon_wb/news/docbao24h.png' : itemFind.icon_url_horizontal} style={{ marginTop: "4px", maxHeight: "24px", objectFit: "contain" }} className={Styles.imgIcon_BoxDessc} alt="Tin tức 247"/>
                                                                                <i class="bi bi-dot" style={{ color: "#D9DBE1", fontSize: "21px" }}></i>
                                                                                <p className={Styles.totalFooter__BoxDescs__Source}>{FindCateSource === undefined ? 'Tin tức 247' : FindCateSource.name}</p>
                                                                                <i class="bi bi-dot" style={{ color: "#D9DBE1", fontSize: "21px" }}></i>
                                                                                <p className={Styles.totalFooter__BoxDescs__Time}>
                                                                                    <TimeAgo
                                                                                        datetime={items.pubdate}
                                                                                        locale='vi'
                                                                                    />
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                                <div style={{ background: "#EEEFF4", height: "1px", marginTop: '15px', marginBottom: "15px" }} />
                                                            </>
                                                        )
                                                    })
                                                }
                                            </InfiniteScroll>
                                        </div>
                                    </div>
                                    <div />
                                </div>
                            }
                        </div>
                        <div className={Styles.TinTucdangxem}>
                            <SiderBar_Ads_Top />
                            {
                                JSON.stringify(props.relatedNewsCategory.articles) === '[]' ? null :
                                    <div className={Styles.Topichot} style={{ marginBottom: "14px" }}>
                                        <div className={Styles.Title__RelateNew} />
                                        <p>TIN LIÊN QUAN</p>
                                    </div>
                            }

                            <div>
                                {
                                    JSON.stringify(props.relatedNewsCategory.articles) === '[]' ? null : props.relatedNewsCategory.articles.map((datas, index) => {
                                        let regexUrl = new URL(datas.webUrl);
                                        let getUrlnew = regexUrl.pathname;
                                        let formatUrl = getUrlnew.replace('/tin-tuc/', '');
                                        // var itemTime = datas.pubdate;
                                        // var dataDays = OneHourAgo(itemTime);
                                        const itemFind = getArticleSource(datas.source);
                                        const FindCateSource = ListParams.find((itemId) => itemId.id === datas.type)
                                        return (
                                            <>

                                                <Link href={`/tin-tuc/${formatUrl}`} key={index}>
                                                    <div className={Styles.GroupTopicById}>
                                                        <div className={Styles.iconPic}>
                                                            <img src={datas.thumb} width={95} height={73} layout="fixed" className={Styles.imgTitle} alt={datas.title} />
                                                        </div>
                                                        <div className={Styles.titleTopicss}>
                                                            <a href={`/tin-tuc/${formatUrl}`}>{datas.title}</a>
                                                            <div className={Styles.titleTopicss__boxDetails}>
                                                                <img src={itemFind === undefined ? 'https://ecdn.docbao24h.me/icon_wb/news/docbao24h.png' : itemFind.icon_url_horizontal} style={{ maxHeight: "24px", objectFit: "contain" }} alt="icon-docbao" />
                                                                <i class="bi bi-dot" style={{ color: "#D9DBE1", fontSize: "21px", lineHeight: '10px', margin: "0px" }}></i>
                                                                <p className={Styles.titleTopicss__boxDetails__Source}>{FindCateSource === undefined ? 'Tin tức 247' : FindCateSource.name}</p>
                                                                <i class="bi bi-dot" style={{ color: "#D9DBE1", fontSize: "21px", lineHeight: '10px', margin: "0px" }}></i>
                                                                <p className={Styles.titleTopicss__boxDetails__Time}>
                                                                    <TimeAgo
                                                                        datetime={datas.pubdate}
                                                                        locale='vi'
                                                                    />
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className={Styles.spanSpaceXemthem} />
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <a href={constants.SHORT_LINKS} className={Styles.HiddenAdsInmobile}>
                                <SiderBar_Ads_Bottom />
                            </a>
                        </div>
                    </div>
                </Col>
                <Col span={24}>
                    {/* <HeaderMenu /> */}
                </Col>
                <Col span={24}>
                    <Footer />
                </Col>
                <Modal
                    title="Tải ứng dụng Tin tức 247"
                    visible={isModalVisible2}
                    onOk={() => setIsModalVisible2(false)}
                    onCancel={() => setIsModalVisible2(false)}
                    className="StyleModalIos"
                    footer={[
                        <Link href="https://apps.apple.com/app/đọc-báo-24h/id1399377363"><Image src={icon_dow_app} alt="doc-bao-24h-me" /></Link>
                    ]}
                >
                    <DownloadIos />
                </Modal>
                <Modal
                    title="Tải ứng dụng Tin tức 247"
                    visible={isModalVisible1}
                    onOk={() => setIsModalVisible1(false)}
                    onCancel={() => setIsModalVisible1(false)}
                    className="StyleModalIos"
                    footer={[
                        <Link href="https://bit.ly/docbao24h_android_home"><Image src={icon_dow_gg} alt="doc-bao-24h-me" /></Link>
                    ]}
                >
                    <DownloadAndroid />
                </Modal>
                {
                    state.isImagePreviewOpen && (
                        <Lightbox
                            mainSrc={state.listImageUrl[state.photoIndex]}
                            nextSrc={state.listImageUrl[(state.photoIndex + 1) % state.listImageUrl.length]}
                            prevSrc={state.listImageUrl[(state.photoIndex + state.listImageUrl.length - 1) % state.listImageUrl.length]}
                            onCloseRequest={() => setState({ isImagePreviewOpen: false })}
                            onMovePrevRequest={() =>
                                setState({
                                    photoIndex: (state.photoIndex + state.listImageUrl.length - 1) % state.listImageUrl.length
                                })
                            }
                            onMoveNextRequest={() =>
                                setState({
                                    photoIndex: (state.photoIndex + 1) % state.listImageUrl.length
                                })
                            }
                            imageCaption="Tin tức 247"
                        />
                    )
                }

            </Row>
        </div>
    );
}


const getSourceType = (videoUrl) => {
    if (videoUrl.endsWith("mp4")) {
        return 'video/mp4';
    }
    if (videoUrl.endsWith("m3u8")) {
        return 'application/x-mpegURL';
    }
    if (videoUrl.endsWith("ogg")) {
        return 'video/ogg';
    }
    if (videoUrl.endsWith("webm")) {
        return 'video/webm';
    }

    return 'application/x-mpegURL';

}

const generateVideoDOM = (videoUrl) => {
    let newDOM = parse('<video class="video-js video-custom-js" controls  preload="auto" >\
        <source src="" type="application/x-mpegURL"></source>\
    </video>\
    ')
    const sourceType = getSourceType(videoUrl);
    const sourceDOM = newDOM.querySelector('source');
    sourceDOM.setAttribute('src', videoUrl);
    sourceDOM.setAttribute('type', sourceType);
    return newDOM;

}

const preprocessVideo = (articleDetails) => {

    let content = articleDetails.content;
    const root = parse(content);
    const listVideoDom = root.querySelectorAll('video');

    listVideoDom.forEach(videoDom => {
        const newVideoDOM = generateVideoDOM(videoDom.getAttribute('src'));
        videoDom.replaceWith(newVideoDOM)
    });

    if (listVideoDom.length > 0) {
        root.appendChild(parse(` <link href=${constants.Host_Domain + "/lib-videojs/video-js.min.css"} rel="stylesheet"></link> `));
        root.appendChild(parse(` <script src=${constants.Host_Domain + "/lib-videojs/video.min.js"}></script> `));
        root.appendChild(parse(' <script>videojs(document.querySelector(".video-js"));</script>'));
    }
    articleDetails.content = root.innerHTML;
    return articleDetails;
}


export async function getServerSideProps(context) {
    var lastPath = context.params.id;
    var crypto = require('crypto');
    var partsOfStr = lastPath.split('-');
    if (partsOfStr.length < 2) {
        return {
            redirect: {
                destination: '/404',
            }
        };
    }
    var siteId = partsOfStr[partsOfStr.length - 2];
    var catId = partsOfStr[partsOfStr.length - 1];

    if (isNaN(siteId) || isNaN(catId)) {
        return {
            redirect: {
                destination: '/404',
            }
        };
    }
    var hashKey = constants.PHOMOTEAM_KEY + lastPath.replace("-" + siteId + "-" + catId, "");
    var hashValue = crypto.createHash('md5').update(hashKey).digest("hex");

    siteId = (parseInt(siteId) - 5) / 14; //*14 + 5
    catId = (parseInt(catId) - 2) / 5; //*5 + 2

    if (catId < 0 || siteId < 0) {
        return {
            redirect: {
                destination: '/404',
            }
        };
    }
    var articleIds = siteId + ":" + catId + ":" + hashValue;


    var articleDetails = await getNews(articleIds);
    if (articleDetails === null) {
        return {
            redirect: {
                destination: '/404',
            }
        };
    }
    articleDetails = preprocessVideo(articleDetails);


    // // handle call api, tin liên quan
    const articleId = articleDetails.articleId;
    const relatedNewsCategory = await getRelatedNews(articleId);



    // // handle call api, tin cùng chuyên mục
    let last = articleDetails.pubdate;
    const categories = await getCategories(last, articleId);



    return {
        props: {
            articleId,
            articleDetails,
            relatedNewsCategory,
            categories
        },
    };
}