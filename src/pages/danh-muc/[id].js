import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Loader from "react-loader-spinner";
import TimeAgo from 'timeago-react';
import * as timeago from 'timeago.js';
import vi from 'timeago.js/lib/lang/vi';
import { Col, Row, Spin } from 'antd';
import InfiniteScroll from "react-infinite-scroll-component";


import { HeaderMenu, HeaderTop, Footer, BreadcrumbPC, PostOneCategory, SiderBar_Ads_Top, SiderBar_Ads_Bottom } from "../../components";
import { bannerTop2 } from "../../../public/resource";
import { listUrl, listParams, constants } from "../../configs/constants";
import { getCategory } from '../../services/category';
import { getApiFocus } from '../../services/home';
import { getArticleSource } from '../../configs/constants/inforwebsite';

import Styles from '../../styles/Home_page.module.scss';


timeago.register('vi', vi);
export default function PageDetails(props) {
    // Create state
    const router = useRouter();
    const [loadingSpin, setLoadingSpin] = useState(false);
    const [posts, setPosts] = useState(props.ListTopic.articles);

    // create variable
    const dataForcus = props.apiForcus;
    const listUrlCheck = listParams.listParamsMenu;
    const obMenuMiniwithPage = props.findUrlPage.sub_type;
    const listItemMenu = listParams.listParamsMenu;
    let checkurlPage = listItemMenu.find((element) => element.url === props.paramid);
    let breadCumbID = checkurlPage.id;
    const urlPage = props.checkResolvedUrl;
    const [state, _setState] = useState({
        hasMore: true,
        lastApis: props.ListTopic.last
    });
    const setState = (data = {}) => {
        _setState((state) => {
            return { ...state, ...data };
        });
    };

    useEffect(() => {
        setPosts(props.ListTopic.articles);
        setState(state)
    }, [props]);

    const fetchMoreData = async () => {
        setLoadingSpin(true);
        const res = await fetch(
            constants.API_BASE_URL + listUrl.CATEGORY + `?_start=${posts.length}&last=${state.lastApis}&topic=${props.topicId}&source=666666&length=10&db24h=` + constants.API_DB_KEY
        );
        const newPosts = await res.json();
        setState({ lastApis: newPosts.data.last })
        const checkpost = newPosts.data.articles;
        // setPosts((post) => [...post, ...checkpost]);
        setLoadingSpin(false)
    }

    const OneHourAgo = (itemTime) => {
        const hour = 1 * 24 * 60 * 60 * 1000;
        const hourago = Date.now() - hour;
        return itemTime > hourago;
    }
    return (
        <div className={Styles.BodyNews}>
            <Head>
                <title>Tin tức 247 - Báo mới, tin mới liên tục 24h</title>
                <link rel="icon" href="/faicon_3.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0"></meta>
                <meta property="og:title" content="Tin tức 247 - Báo mới, tin mới liên tục 24h"></meta>
                <meta property="og:url" content={`${constants.Host_Domain}${router.asPath}`}></meta>
                <meta property="og:image" href="/resource/icon_Mobile.png" />
                <meta property="og:description" content="Ứng dụng đọc báo mới online, tổng hợp tin tức siêu hot, siêu tốc độ 24 giờ."></meta>
                <meta name="description" content="Ứng dụng đọc báo mới online, tổng hợp tin tức siêu hot, siêu tốc độ 24 giờ."></meta>
            </Head>
            <Row>
                <Col span={24}>
                    <div className={Styles.Box__Menus}>
                        <HeaderTop />
                        <HeaderMenu />
                    </div>
                </Col>
                <Col span={24}>
                    <br></br>
                    <div className={Styles.Breadcrumb_Top}>
                        <div style={{ marginLeft: "13px" }}>
                            <BreadcrumbPC data={breadCumbID} />
                        </div>
                    </div>
                </Col>
                <Col span={24}>
                    <div className={Styles.bodyContents}>
                        <div className={Styles.contentBodyNews}>
                            <div className={Styles.listMenu_Mini}>
                                {obMenuMiniwithPage.map((item, index) => {
                                    let isActive = false;
                                    if (router.asPath === item.urlPage) {
                                        isActive = true;
                                    }
                                    return (
                                        <>
                                            {/* <div key={index} className={Styles.MenuMini}> */}
                                                <a href={item.urlPage} className={Styles.MenuMini_Items}>{item.name}</a>
                                            {/* </div> */}
                                        </>
                                    );
                                })}
                            </div>
                            <div className={Styles.groupBoxMini}>
                                <PostOneCategory data={posts} datapage={urlPage} />
                            </div>
                            <InfiniteScroll
                                next={fetchMoreData}
                                dataLength={posts.length}
                                hasMore={true}
                                loader={<div style={{ textAlign: "center" }}>{loadingSpin === true ? <Loader type="Bars" color="#029875" height={40} width={40} /> : null}</div>}
                                endMessage={<h4>Không có tin bài để hiển thị</h4>}
                            >
                                {posts.slice(4, 1000000000).map((item, index) => {
                                    let regexUrl = new URL(item.webUrl);
                                    let getUrlnew = regexUrl.pathname;
                                    let formatUrl = getUrlnew.replace("/tin-tuc/", "");
                                    const itemFind = getArticleSource(item.source);
                                    const FindCateSource = listUrlCheck.find(
                                        (itemId) => itemId.id === item.type
                                    );
                                    return (
                                        <>
                                            <Link href={`/tin-tuc/${formatUrl}`}>
                                                <div className={Styles.blockTopic} key={index}>
                                                    <div className={Styles.picTopicc}>
                                                        <img
                                                            src={item.thumb}
                                                            layout="fixed"
                                                            className={Styles.StyleImgTitle}
                                                            alt={item.title}
                                                        />
                                                    </div>
                                                    <div className={Styles.contenTopic}>
                                                        <a
                                                            className={Styles.Title}
                                                            href={`/tin-tuc/${formatUrl}`}
                                                        >
                                                            {item.title}
                                                        </a>
                                                        <p className={Styles.content}>{item.desc}</p>
                                                        <div className={Styles.contentFooter}>
                                                            <img
                                                                alt={item.title}
                                                                src={
                                                                    itemFind === undefined
                                                                        ? "https://ecdn.docbao24h.me/icon_wb/news/docbao24h.png"
                                                                        : itemFind.icon_url_horizontal
                                                                }
                                                                style={{
                                                                    maxHeight: "24px",
                                                                    objectFit: "contain",
                                                                    marginTop: "3px",
                                                                }}
                                                            />
                                                            <i
                                                                class="bi bi-dot"
                                                                style={{
                                                                    color: "#D9DBE1",
                                                                    fontSize: "21px",
                                                                }}
                                                            ></i>
                                                            <p className={Styles.nameSource}>
                                                                {FindCateSource === undefined
                                                                    ? "Tin tức 247"
                                                                    : FindCateSource.name}
                                                            </p>
                                                            <i
                                                                class="bi bi-dot"
                                                                style={{
                                                                    color: "#D9DBE1",
                                                                    fontSize: "21px",
                                                                }}
                                                            ></i>
                                                            <p>
                                                                <TimeAgo
                                                                    datetime={item.pubdate}
                                                                    locale="vi"
                                                                />
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div
                                                style={{ background: "#EEEFF4", height: "1px" }}
                                            />
                                            {index === 3 ? (
                                                <div className={Styles.Banner_Main}>
                                                    <a
                                                        href={constants.SHORT_LINKS}
                                                        style={{ textAlign: "center" }}
                                                    >
                                                        <Image src={bannerTop2} alt="Tin tức 247" />
                                                    </a>
                                                </div>
                                            ) : null}
                                        </>
                                    );
                                })}
                            </InfiniteScroll>
                        </div>
                        <div className={Styles.Homepage__SiderBar}>
                            <SiderBar_Ads_Top />
                            <div>
                                <div
                                    className={Styles.Topichot}
                                    style={{ marginBottom: "14px" }}
                                >
                                    <div className={Styles.Title__RelateNew} />
                                    <p>TIN TIÊU ĐIỂM</p>
                                </div>
                                <div>
                                    {
                                        dataForcus.articles.slice(0, 8).map((item, index) => {
                                            let regexUrl = new URL(item.webUrl);
                                            let getUrlnew = regexUrl.pathname;
                                            let formatUrl = getUrlnew.replace('/tin-tuc/', '');
                                            var itemTime = item.pubdate;
                                            var dataDays = OneHourAgo(itemTime);
                                            const itemFind = getArticleSource(item.source);
                                            const FindCateSource = listUrlCheck.find((itemId) => itemId.id === item.type)
                                            return <>
                                                <Link href={`/tin-tuc/${formatUrl}`}>
                                                    <div className={Styles.Focus}>
                                                        <div className={Styles.Focus__ImgThumb}>
                                                            <img src={item.thumb} alt={item.title} />
                                                        </div>
                                                        <div className={Styles.Focus__Content}>
                                                            <a href={`/tin-tuc/${formatUrl}`} className={Styles.Focus__title}>{item.title}</a>
                                                            <div className={Styles.Focus__Box_decs}>
                                                                <img src={itemFind === undefined ? 'https://ecdn.docbao24h.me/icon_wb/news/docbao24h.png' : itemFind.icon_url_horizontal} style={{ maxHeight: "23px", objectFit: "contain" }} />
                                                                <i class="bi bi-dot" style={{ color: "#D9DBE1", fontSize: "21px", lineHeight: '10px', paddingTop: "0px" }}></i>
                                                                <p className={Styles.Focus__Source}>{FindCateSource === undefined ? 'Tin tức 247' : FindCateSource.name}</p>
                                                                <i class="bi bi-dot" style={{ color: "#D9DBE1", fontSize: "21px", lineHeight: '10px' }}></i>
                                                                <p className={Styles.Focus__timeDate}>
                                                                    <TimeAgo
                                                                        datetime={item.pubdate}
                                                                        locale='vi'
                                                                    />
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className={Styles.spanSpaceXemthem}></div>
                                            </>
                                        })
                                    }
                                </div>
                            </div>
                            <a href={constants.SHORT_LINKS}>
                                <SiderBar_Ads_Bottom />
                            </a>
                        </div>
                    </div>

                </Col>
                <Col span={24}>
                    <Footer />
                </Col>
            </Row>
        </div>
    );
}

export async function getServerSideProps(context) {
    // const checkResolvedUrl = context.resolvedUrl.replace(/(\?.*)|(#.*)/g, "");
    const formatUrl = context.query.id;
    const urlPageHome = formatUrl;
    let paramid = context.params.id;
    const listItemMenu = listParams.listParamsMenu; // get List item MENU
    let checkurlPage = listItemMenu.find((element) => element.url === paramid);
    if (checkurlPage === undefined) {
        return {
            redirect: {
                destination: '/404',
            }
        };
    }
    let topicId = checkurlPage.id;  // get id topic
    const listUrlCheck = listParams.listParamsMenu;
    const findUrlPage = listUrlCheck.find(
        (items) => items.url === urlPageHome
    );

    const ListTopic = await getCategory(topicId);
    const apiForcus = await getApiFocus();
    return {
        props: {
            ListTopic,
            paramid,
            topicId,
            apiForcus,
            formatUrl,
            findUrlPage
        },
    };
}