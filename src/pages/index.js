import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';


import { Row, Col, Spin } from 'antd';
import TimeAgo from 'timeago-react';
import * as timeago from 'timeago.js';
import vi from 'timeago.js/lib/lang/vi';
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "react-loader-spinner";


import { bannerTop2 } from "../../public/resource";
import { constants, listUrl, listParams } from "../configs/constants";
import { getArticleSource } from '../configs/constants/inforwebsite';
import { Banner, Footer, HeaderTop, HeaderMenu, PostOne, SiderBar_Ads_Bottom, SiderBar_Ads_Top } from "../components";
import { getApiHomepage, getApiFocus } from "../services/home";

import Styles from '../styles/Home_page.module.scss';


timeago.register('vi', vi);
export default function HomePages(props) {
    const dataForcus = props.apiForcus.articles;
    const ListParams = listParams.listParamsMenu;
    var indexToSplitForcus = dataForcus.indexOf(dataForcus[4]);
    var indexToSplitForcus2 = dataForcus.indexOf(dataForcus[3]);
    var dataFocusTop = dataForcus.slice(0, indexToSplitForcus);
    var dataFocusBar = dataForcus.slice(indexToSplitForcus2 + 1);
    // var indexToSplit = props.homepage.data.articles.indexOf(props.homepage.data.articles[4]);
    var postOne = dataFocusTop;
    var postTwo = props.homepage.data.articles;
    const [posts, setPosts] = useState(postTwo);
    const [loading, setLoading] = useState(false);
    const [state, _setState] = useState({
        lastApis: props.homepage.data.homeSegments,
    });
    const setState = (data = {}) => {
        _setState((state) => {
            return { ...state, ...data };
        });

    };
    const fetchMoreData = async () => {
        setLoading(true);
        const bodyContentHomePage = {
            "homeSegments": state.lastApis,
            "last": 1,
            "length": 10,
            "db24h": constants.API_DB_KEY
        }
        const res = await getApiHomepage(bodyContentHomePage);
        setState({ lastApis: res.data.homeSegments })
        const updatePosts = res.data.articles;
        // setPosts((post) => [...post, ...updatePosts]);
        setLoading(false)
    }
    const OneHourAgo = (itemTime) => {
        const hour = 1 * 24 * 60 * 60 * 1000;
        const hourago = Date.now() - hour;
        return itemTime > hourago;
    }
    return (
        <div className="container">
            <Head>
                <title>Tin tức 247 - Báo mới, tin mới liên tục 24h</title>
                <link rel="icon" href="/faicon_3.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0"></meta>
                <meta property="og:title" content="Tin tức 247 - Báo mới, tin mới liên tục 24h"></meta>
                <meta property="og:url" content={constants.Host_Domain}></meta>
                <meta property="og:image" href="/resource/icon_Mobile.png" />
                <meta property="og:image:width" content="575"></meta>
                <meta property="og:image:height" content="452"></meta>
                <meta property="og:description" content="Ứng dụng đọc báo mới online, tổng hợp tin tức siêu hot, siêu tốc độ 24 giờ."></meta>
                <meta name="description" content="Ứng dụng đọc báo mới online, tổng hợp tin tức siêu hot, siêu tốc độ 24 giờ."></meta>
            </Head>
            <div className={Styles.BodyNews}>
                <Row>
                    <Col span={24}>
                        <div className={Styles.Box__Menus}>
                            <HeaderTop />
                            <HeaderMenu />
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
                                <div className={Styles.groupBoxMini}>
                                    <PostOne data={postOne} />
                                </div>
                                <InfiniteScroll
                                    next={fetchMoreData}
                                    dataLength={posts.length}
                                    hasMore={true}
                                    loader={<div style={{ textAlign: "center" }}>{loading === true ? <Loader type="Bars" color="#029875" height={40} width={40} /> : null}</div>}
                                    endMessage={<h4>Không có tin bài để hiển thị</h4>}
                                >
                                    {
                                        JSON.stringify(posts) === '[]' ? <p>Không có tin bài để hiển thị</p> : posts.map((item, index) => {
                                            let regexUrl = new URL(item.webUrl);
                                            let getUrlnew = regexUrl.pathname;
                                            let formatUrl = getUrlnew.replace('/tin-tuc/', '')
                                            const itemFind = getArticleSource(item.source);
                                            var itemTime = item.pubdate;
                                            var dataDays = OneHourAgo(itemTime);
                                            const FindCateSource = ListParams.find((itemId) => itemId.id === item.type);
                                            return <>
                                                <Link href={`/tin-tuc/${formatUrl}`}>
                                                    <div className={Styles.blockTopic} key={index}>
                                                        <div className={Styles.picTopicc}>
                                                            <img src={item.thumb} layout="fixed" className={Styles.StyleImgTitle} alt={item.title} />
                                                        </div>
                                                        <div className={Styles.contenTopic}>
                                                            <a className={Styles.Title} href={`/tin-tuc/${formatUrl}`}>{item.title}</a>
                                                            <p className={Styles.content}>{item.desc}</p>
                                                            <div className={Styles.contentFooter}>
                                                                <img alt={item.title} src={itemFind === undefined ? 'https://ecdn.docbao24h.me/icon_wb/news/docbao24h.png' : itemFind.icon_url_horizontal} style={{ maxHeight: "24px", objectFit: "contain", marginTop: "3px" }} />
                                                                <i class="bi bi-dot" style={{ color: "#D9DBE1", fontSize: "21px" }}></i>
                                                                <p className={Styles.nameSource}>{FindCateSource === undefined ? 'Tin tức 247' : FindCateSource.name}</p>
                                                                <i class="bi bi-dot" style={{ color: "#D9DBE1", fontSize: "21px" }}></i>
                                                                <p>
                                                                    <TimeAgo
                                                                        datetime={item.pubdate}
                                                                        locale='vi'
                                                                    />
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div style={{ background: "#EEEFF4", height: "1px" }} />
                                                {
                                                    index === 3 ? <div className={Styles.Banner_Main}>
                                                        <a href={constants.SHORT_LINKS} style={{ textAlign: "center" }}>
                                                            <Image src={bannerTop2} alt="Tin tức 247" />
                                                        </a>
                                                    </div>
                                                        : null
                                                }
                                            </>
                                        })
                                    }
                                </InfiniteScroll>
                            </div>
                            <div className={Styles.Homepage__SiderBar}>
                                <SiderBar_Ads_Top />
                                <div>
                                    <div className={Styles.Topichot} style={{ marginBottom: "14px" }}>
                                        <div className={Styles.Title__RelateNew} />
                                        <p>TIN TIÊU ĐIỂM</p>
                                    </div>
                                    <div>
                                        {
                                            dataFocusBar.map((item, index) => {
                                                let regexUrl = new URL(item.webUrl);
                                                let getUrlnew = regexUrl.pathname;
                                                let formatUrl = getUrlnew.replace('/tin-tuc/', '');
                                                var itemTime = item.pubdate;
                                                var dataDays = OneHourAgo(itemTime);
                                                const itemFind = getArticleSource(item.source);
                                                const FindCateSource = ListParams.find((itemId) => itemId.id === item.type)
                                                return <>
                                                    <Link href={`/tin-tuc/${formatUrl}`}>
                                                        <div className={Styles.Focus}>
                                                            <div className={Styles.Focus__ImgThumb}>
                                                                <img src={item.thumb} alt={item.title} />
                                                            </div>
                                                            <div className={Styles.Focus__Content}>
                                                                <a href={`/tin-tuc/${formatUrl}`} className={Styles.Focus__title}>{item.title}</a>
                                                                <div className={Styles.Focus__Box_decs}>
                                                                    <img alt={`Tin tức 247`} src={itemFind === undefined ? 'https://ecdn.docbao24h.me/icon_wb/news/docbao24h.png' : itemFind.icon_url_horizontal} style={{ maxHeight: "23px", objectFit: "contain" }} />
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
                                {/* <SiderBar_Ads_Bottom /> */}
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
        </div>
    )
}



export async function getServerSideProps() {
    // api home page
    const bodyContentHomePage = {
        "homeSegments": [],
        "last": -1,
        "length": 20,
        "db24h": constants.API_DB_KEY
    }
    const homepage = await getApiHomepage(bodyContentHomePage);
    const apiForcus = await getApiFocus();
    return {
        props: {
            homepage,
            apiForcus
        },
    };
}