import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Row, Col, Spin } from 'antd';
import Loader from "react-loader-spinner";
import TimeAgo from 'timeago-react';
import * as timeago from 'timeago.js';
import vi from 'timeago.js/lib/lang/vi';


import { MenuVideo, HeaderTop_Video, Banner, Footer } from "../../../components";
import { icon_choban, icon_tron } from "../../../../public/resource";
import { getVideoCatalog } from "../../../services/page_video";
import InfiniteScroll from "react-infinite-scroll-component";
import { constants, listUrl, ListMenuVideo } from "../../../configs/constants";
import { getArticleSource } from "../../../configs/constants/inforwebsite";

import Styles from "../../../styles/MenuVideo/HomePage.module.scss"

timeago.register('vi', vi);
export default function Video(props) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const listItemMenu = ListMenuVideo.videos;
    let checkurlPage = listItemMenu.find((element) => element.url === props.paramid);
    let breadCumbID = checkurlPage.name;
    let breadCumbHref = checkurlPage.urlPage;
    let itemsTopicId = props.topicId;
    const [post, setPost] = useState(props.ListDataVideo.articles);
    const [state, _setState] = useState({
        lastTime: props.ListDataVideo.last,
    });
    const setState = (data = {}) => {
        _setState((state) => {
            return { ...state, ...data };
        });

    };
    useEffect(() => {
        setPost(props.ListDataVideo.articles)
    }, [props]);
    const OneHourAgo = (itemTime) => {
        const hour = 1 * 24 * 60 * 60 * 1000;
        const hourago = Date.now() - hour;
        return itemTime > hourago;
    }
    const fetchMoreData = async () => {
        setLoading(true);
        const res = await fetch(constants.API_BASE_URL + listUrl.CATEGORY_VIDEOS + `_start=${post.length}&` + "db24h=" + constants.API_DB_KEY + `&last=${state.lastTime}&length=10&topic=${itemsTopicId}`);
        const newPosts = await res.json();
        setState({ lastTime: newPosts.data.last })
        const checkpost = newPosts.data.articles;
        // setPost((post) => [...post, ...checkpost]);
        setLoading(false)
    }
    return (
        <>
            <Head>
                <title>Tin tức 247 - Báo mới, tin mới liên tục 24h</title>
                <link rel="icon" href="/faicon_3.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0"></meta>
                <meta property="og:title" content="Tin tức 247 - Báo mới, tin mới liên tục 24h"></meta>
                <meta property="og:url" content={`${constants.Host_Domain}${router.asPath}`}></meta>
                <meta property="og:image:width" content="575"></meta>
                <meta property="og:image:height" content="452"></meta>
                <meta property="og:image" href="/resource/icon_Mobile.png" />
                <meta property="og:description" content="Ứng dụng đọc báo mới online, tổng hợp tin tức siêu hot, siêu tốc độ 24 giờ."></meta>
            </Head>
            <Row>
                <Col span={24}>
                    <HeaderTop_Video />
                </Col>
                <Col span={24}>
                    <MenuVideo />
                </Col>
                <Col span={24}>
                    <Banner />
                </Col>
                <Col span={24}>
                    <div className={Styles.Header__ListVideoOfMe}>
                        <div className={Styles.HeaderMain}>
                            <div className={Styles.Header__TitleIcon}>
                                <Image src={icon_choban} alt="doc-bao-24h-me" />
                                <p>Trang chủ</p>
                                <i class="bi bi-chevron-right"></i>
                                <a>{breadCumbID}</a>
                            </div>
                            <InfiniteScroll
                                next={fetchMoreData}
                                dataLength={post.length}
                                hasMore={true}
                                loader={<div style={{ textAlign: "center" }}>{loading === true ? <Loader type="Bars" color="#029875" height={40} width={40} /> : null}</div>}
                                endMessage={<h4>Không có tin bài để hiển thị</h4>}
                            >
                                <Col span={24}>
                                    <div className={Styles.Header__BoxContetMainVideo}>
                                        {
                                            JSON.stringify(post) === '[]' ? <p>Không có tin bài để hiển thị</p> : post.map((item, index) => {
                                                let regexUrl = new URL(item.webUrl);
                                                let getUrlnew = regexUrl.pathname;
                                                let formatUrl = getUrlnew.replace('/tin-tuc/', '')
                                                var itemFind = getArticleSource(item.source);
                                                let itemTime = item.pubdate;
                                                let dataDays = OneHourAgo(itemTime);
                                                const FindCateSource = listItemMenu.find((itemId) => itemId.id === item.type);
                                                return (
                                                    <a href={`/video/${formatUrl}`}>
                                                        <Link href={`/video/${formatUrl}`}>
                                                            <div className={Styles.Header__BoxItemMenu} key={index}>
                                                                <img className={Styles.Header__ImgThubl} src={item.thumb} />
                                                                <div class="overlay">
                                                                    <button href="#" class="play-icon" title="Video Play">
                                                                        <i class="bi bi-play-circle style_icon_player"></i>
                                                                    </button>
                                                                </div>
                                                                <a href={`/video/${formatUrl}`} className={Styles.Header__ItemTitle}>{item.title}</a>
                                                                <div className={Styles.Header__BoxInfortNews}>
                                                                    <img src={itemFind === undefined ? 'https://ecdn.docbao24h.me/icon_wb/news/docbao24h.png' : itemFind.icon_url_horizontal} style={{ maxWidth: "80px", maxHeight: "33px", objectFit: "contain" }} />
                                                                    <i class="bi bi-dot" style={{ color: "#D9DBE1", fontSize: "21px" }}></i>
                                                                    <p className={Styles.Header__SourceNews}>{FindCateSource === undefined ? 'Tin tức 247' : FindCateSource.name}</p>
                                                                    <i class="bi bi-dot" style={{ color: "#D9DBE1", fontSize: "21px" }}></i>
                                                                    <p className={Styles.Header__dateMenu}>
                                                                        <TimeAgo
                                                                            datetime={item.pubdate}
                                                                            locale='vi'
                                                                        />
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </a>
                                                )
                                            })
                                        }
                                    </div>
                                </Col>
                            </InfiniteScroll>
                        </div>
                    </div>
                </Col>
                <Col span={24}>
                    <Footer />
                </Col>
            </Row>
        </>
    );
}


export async function getServerSideProps(context) {
    let paramid = context.params.id;
    const listItemMenu = ListMenuVideo.videos; // get List item Menu
    let checkurlPage = listItemMenu.find((element) => element.url === paramid)
    let topicId = checkurlPage.id;  // get id topic
    const ListDataVideo = await getVideoCatalog(topicId);
    return {
        props: {
            ListDataVideo,
            topicId,
            paramid
        }
    }
}
