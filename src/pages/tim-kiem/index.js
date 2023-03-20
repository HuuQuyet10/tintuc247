import React, { useState, useEffect } from 'react';
import { Col, Row, Spin, Input } from 'antd';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';


import InfiniteScroll from "react-infinite-scroll-component";
import TimeAgo from 'timeago-react';
import * as timeago from 'timeago.js';
import vi from 'timeago.js/lib/lang/vi';
import Loader from "react-loader-spinner";


import { constants, listUrl, listParams } from "../../configs/constants";
import { HeaderMenu, HeaderTop, Footer, Breadcrumb } from "../../components";
import { getListItemSearch } from "../../services/search";
import { getArticleSource } from '../../configs/constants/inforwebsite';

import Styles from "../../styles/ListTopic.module.scss";


timeago.register('vi', vi);
const { Search } = Input;
export default function Homesearch({ SearchPage, KeySearch }) {
    const ListParams = listParams.listParamsMenu;
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState(SearchPage.articles);
    const [state, _setState] = useState({
        keyvaluesearch: String,
        hasMore: true,
        typeBreadcumb: 199999999999
    });
    const setState = (data = {}) => {
        _setState((state) => {
            return { ...state, ...data };
        });
    };

    const getMorePost = async () => {
        // last post id
        setLoading(true);
        const lastID = posts[posts.length - 1];
        const articlesID = lastID.articleId;
        const scrollApi = await fetch(
            constants.API_BASE_URL + listUrl.SEARCH + `db24h=${constants.API_DB_KEY}&keywords=${encodeURI(KeySearch)}&limit=10&articleId=${articlesID}`
        );
        const newPosts = await scrollApi.json();
        const checkpost = newPosts.data.articles;
        const upDatePost = checkpost[checkpost.length - 1];
        if (upDatePost === undefined || []) {
            null
        } else {
            setState({ articlessId: upDatePost.articleId });
        }
        setPosts((post) => [...post, ...checkpost]);
        setLoading(false);
    };
    useEffect(() => {
        setPosts(SearchPage.articles);
    }, [SearchPage]);

    const OneHourAgo = (itemTime) => {
        const hour = 1 * 24 * 60 * 60 * 1000;
        const hourago = Date.now() - hour;
        return itemTime > hourago;
    };
    const onSearch = (e) => {
        Router.push({
            pathname: '/tim-kiem',
            query: { valueSearch: e }
        })
    };
    return (
        <div className={Styles.BodyNews}>
            <Head>
                <title>Tin tức 247 - Báo mới, tin mới liên tục 24h</title>
                <link rel="icon" href="/faicon_3.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0"></meta>
                <meta property="og:title" content="Tin tức 247 - Báo mới, tin mới liên tục 24h"></meta>
                <meta property="og:url" content={constants.Host_Domain}></meta>
                <meta property="og:description" content="Ứng dụng đọc báo mới online, tổng hợp tin tức siêu hot, siêu tốc độ 24 giờ."></meta>
            </Head>
            <Row>
                <Col span={24}>
                    <div className={Styles.Box__Menus}>
                        <HeaderTop />
                        <HeaderMenu />
                    </div>
                </Col>
                <Col span={24}>

                </Col>
                <Col span={24}>
                    <Row className={Styles.bodyContents_Search}>
                        <Col span={18} xs={24}>
                            <div style={{ display: "flex" }}>
                                <Link href="/tin-tuc">
                                    <p style={{ fontWeight: "600", fontSize: "15px", cursor: "pointer", margin: "25px -2px" }}>TRANG CHỦ</p>
                                </Link>
                                <i class="bi bi-chevron-right" style={{ margin: "24px 11px", fontSize: "17px" }} />
                                <p style={{ fontWeight: "600", fontSize: "15px", cursor: "pointer", margin: "25px -2px" }}>TÌM KIẾM</p>
                                <i class="bi bi-chevron-right" style={{ margin: "24px 11px", fontSize: "17px" }} />
                                <p style={{ fontWeight: "600", fontSize: "15px", cursor: "pointer", margin: "25px -2px" }}>{KeySearch.toUpperCase()}</p>
                            </div>
                            <Search placeholder="Từ khoá tìm kiếm..." allowClear onSearch={onSearch} className="Header__styleInputSearchInList" />
                            <InfiniteScroll
                                dataLength={posts.length}
                                next={getMorePost}
                                hasMore={state.hasMore}
                                loader={<div style={{ textAlign: "center" }}>{loading === true ? <Loader type="Bars" color="#029875" height={40} width={40} /> : null}</div>}
                                endMessage={<h4>Không có tin bài để hiển thị</h4>}
                            >
                                {
                                    JSON.stringify(posts) === '[]' ? <p>Không có tin bài để hiển thị</p> : posts.map((item, index) => {
                                        const itemFind = getArticleSource(item.source);
                                        var itemTime = item.pubdate;
                                        var dataDays = OneHourAgo(itemTime);
                                        const FindCateSource = ListParams.find((itemId) => itemId.id === item.type);
                                        return (
                                            <>
                                                <Link href={`/tin-tuc/${item.webUrl2}`}>
                                                    <div className={Styles.blockTopic} key={index}>
                                                        <div className={Styles.picTopicc}>
                                                            <img src={item.thumb} layout="fixed" className={Styles.imageThumb} alt={item.title} />
                                                        </div>
                                                        <div className={Styles.contenTopic}>
                                                            <a className={Styles.Title}>{item.title}</a>
                                                            <p className={Styles.content}>{item.desc}</p>
                                                            <div className={Styles.contentFooter}>
                                                                <img src={itemFind === undefined ? 'https://ecdn.docbao24h.me/icon_wb/news/docbao24h.png' : itemFind.icon_url_horizontal} style={{ maxHeight: "30px", objectFit: "contain" }} />
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
                                            </>
                                        )
                                    })
                                }
                            </InfiniteScroll>
                        </Col>
                        <Col xs={0}></Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Footer />
                </Col>
            </Row>
        </div>
    );
}


export async function getServerSideProps(context) {
    let KeySearch = context.query.valueSearch;
    if (KeySearch == undefined) {
        return {
            redirect: {
                destination: '/tin-tuc',
            }
        }
    }
    const SearchPage = await getListItemSearch(KeySearch);
    return {
        props: {
            SearchPage,
            KeySearch
        },
    };
}