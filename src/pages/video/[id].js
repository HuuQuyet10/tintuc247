import React, { useEffect, useState } from "react";
import { Col, Row, Modal, Spin } from "antd";
import Image from 'next/image';
import Head from 'next/head'
import Link from 'next/link';


import Loader from "react-loader-spinner";
import Lightbox from "react-image-lightbox";
import InfiniteScroll from "react-infinite-scroll-component";
import moment from 'moment';
import videojs from "video.js";
import 'moment/locale/vi';
import { parse } from 'node-html-parser';
import { isIOS, isAndroid } from 'react-device-detect';
import { FacebookShareButton } from "react-share";


import { Banner, Footer, HeaderTop_Video, MenuVideo, DownloadAndroid, DownloadIos, Breadcrumb_video } from "../../components";
import { constants, listUrl } from "../../configs/constants";
import { icon_dow_app, icon_dow_gg, btn_share } from "../../../public/resource";
import { getNews } from "../../services/news";
import { getRelatedVideos } from "../../services/page_video";
import { getArticleSource } from '../../configs/constants/inforwebsite';

import Styles from '../../styles/MenuVideo/PageDetails.module.scss';

export default function NewsDetails(props) {
    //--------------handle state-------------
    const [isModalVisible1, setIsModalVisible1] = useState(false);
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState(props.relatedNewsCategory.articles);
    const [hasMore, setHasMore] = useState(true);
    const imgThumbl = props.articleDetails.thumb;
    const articleId = props.articleId;
    const [state, _setState] = useState({
        lastApis: props.relatedNewsCategory.last,
        typeWebsite: props.articleDetails.topic,
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
        setPosts(props.relatedNewsCategory.articles)
    }, [props]);

    useEffect(() => {
        const videoElm = document.querySelectorAll(".video-js");
        const listElementVideo = videoElm;
        if (videojs && videoElm != null) {
            listElementVideo.forEach((element) => videojs(element))
        }
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
            constants.API_BASE_URL + listUrl.RELATED_VIDEOS + `_start=${posts.length}&articleId=${decodeURI(articleId)}` + `&last=${state.lastApis}` + "&db24h=" + constants.API_DB_KEY + `&length=10`
        );
        const newPosts = await res.json();
        setState({ lastApis: newPosts.data.last })
        const checkpost = newPosts.data.articles;
        // setPosts((post) => [...post, ...checkpost]);
        setLoading(false)
    };
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
    return (
        <div>
            <Head>
                <link rel="icon" href="/faicon_3.ico" />
                <title>{props.articleDetails.title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0"></meta>
                <meta property="og:url" content={props.articleDetails.webUrl}></meta>
                <meta property="og:type" content="article"></meta>
                <meta property="og:title" content={props.articleDetails.title}></meta>
                <meta property="og:image:width" content={checkThumbWeight}></meta>
                <meta property="og:image:height" content={checkThumbHeight}></meta>
                <meta property="og:image" content={props.articleDetails.thumb}></meta>
                <meta property="og:description" content={props.articleDetails.desc}></meta>
                {/* <link href="//vjs.zencdn.net/7.10.2/video-js.min.css" rel="stylesheet"></link>
                <script src="//vjs.zencdn.net/7.10.2/video.min.js"></script> */}
            </Head>
            <Row>
                <Col span={24}>
                    <HeaderTop_Video />
                </Col>
                <Col span={24}>
                    <MenuVideo data={state.typeWebsite} />
                </Col>
                <Col span={24}>
                    <Banner />
                </Col>
                <Col span={24}>
                    <div className={Styles.VideoDetails}>
                        <div className={Styles.bodyContents}>
                            <div className={Styles.contentBodyNews}>
                                <Breadcrumb_video data={state.typeWebsite} />
                                <p className={Styles.titleContent}>{props.articleDetails.title}</p>
                                <div className={Styles.spanSpace} />
                                <div className={Styles.groupExtenxion}>
                                    <Link href={props.articleDetails.url} className={Styles.contentGroup}>
                                        <a href={props.articleDetails.url} target="_blank">
                                            <div className={Styles.IconTacgia}>
                                                <img src={articleSource === undefined ? 'Tin tức 247' : articleSource.icon_url} style={{ width: "40px", height: "40px" }} />
                                                <p className={Styles.nameTacgia}>{articleSource === undefined ? 'Tin tức 247' : articleSource.name}</p>
                                                <p className={Styles.spaceStyle}>|</p>
                                                <p className={Styles.styleTimeDetails}>{moment(props.articleDetails.pubdate).format("DD/MM/YYYY HH:mm")}</p>
                                            </div>
                                        </a>
                                    </Link>
                                    <div className={Styles.IconShare}>
                                        <div className={Styles.iconLikefb}>
                                            <a href={constants.Host_Domain + "/tin-tuc/" + props.articleDetails.webUrl2}>
                                                <FacebookShareButton url={constants.Host_Domain + "/tin-tuc/" + props.articleDetails.webUrl2}>
                                                    <Image src={btn_share} alt="box-btn-share" alt="doc-bao-24h-me" />
                                                </FacebookShareButton>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles.spanSpace} />
                                <div id="body-content" dangerouslySetInnerHTML={{ __html: props.articleDetails.content.replace(/<video/g, '<video poster="' + imgThumbl + '"').replace(/<img/g, '<img class="content-img"') }} className={Styles.styleDangerous} />
                                <div className={Styles.spanSpace} />
                            </div>
                            {
                                JSON.stringify(props.articleDetails) === '[]' ? null :
                                    <div className={Styles.TinTucdangxem}>
                                        <div className={Styles.Topichot}>
                                            <p>VIDEO LIÊN QUAN</p>
                                        </div>
                                        <div>
                                            {/* <InfiniteScroll
                                                dataLength={posts.length}
                                                next={getMorePost}
                                                hasMore={hasMore}
                                                loader={<div style={{ textAlign: "center" }}>{loading === true ? <Loader type="Bars" color="#029875" height={40} width={40} /> : null}</div>}
                                                endMessage={<h4>Không có tin bài để hiển thị</h4>}
                                            > */}
                                                {
                                                    JSON.stringify(posts) === '[]' ? <p style={{ fontSize: "17px", fontWeight: "bold", marginTop: '10px' }}>Không có tin bài để hiển thị</p> : posts.map((datas, index) => {
                                                        let regexUrl = new URL(datas.webUrl);
                                                        let getUrlnew = regexUrl.pathname;
                                                        let formatUrl = getUrlnew.replace('/tin-tuc/', '');
                                                        var itemTime = datas.pubdate;
                                                        var dataDays = OneHourAgo(itemTime);
                                                        return (
                                                            <>
                                                                <Link href={`/video/${formatUrl}`} key={index}>
                                                                    <div className={Styles.GroupTopicById}>
                                                                        <div className={Styles.iconPic}>
                                                                            <img src={datas.thumb} width={169} height={95} layout="fixed" className={Styles.imgTitle} alt={datas.title} />
                                                                            <div class="overlay2">
                                                                                <button href="#" class="play-icon2" title="Video Play">
                                                                                    <i class="bi bi-play-circle style_icon_player2"></i>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                        <div className={Styles.titleTopicss}>
                                                                            <a href={`/video/${formatUrl}`}>{datas.title}</a>
                                                                            <p>{dataDays === false ? moment(datas.pubdate).format("DD/MM/YYYY HH:mm") : moment(datas.pubdate).fromNow()}</p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                                <div className={Styles.spanSpaceXemthem} />
                                                            </>
                                                        )
                                                    })
                                                }
                                            {/* </InfiniteScroll> */}
                                        </div>
                                    </div>
                            }
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
    let newDOM = parse('<video class="video-js video-custom" controls  preload="auto" >\
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
    var lastPath = siteId + ":" + catId + ":" + hashValue;
    var articleDetails = await getNews(lastPath);
    if (articleDetails === null) {
        return {
            redirect: {
                destination: '/video',
            }
        };
    }
    articleDetails = preprocessVideo(articleDetails);


    // // handle call api, tin liên quan
    const articleId = articleDetails.articleId;
    const relatedNewsCategory = await getRelatedVideos(articleId);

    return {
        props: {
            articleId,
            articleDetails,
            relatedNewsCategory,
        },
    };
}