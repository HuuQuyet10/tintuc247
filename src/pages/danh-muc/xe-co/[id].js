import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Row, Col } from "antd";
import TimeAgo from "timeago-react";
import Loader from "react-loader-spinner";
import InfiniteScroll from "react-infinite-scroll-component";

import { Footer, HeaderTop, HeaderMenu, PostOneCategory, SiderBar_Ads_Bottom, SiderBar_Ads_Top, BreadcrumbCategory, ActiveLinkCategory } from "../../../components";
import { getCategorySubId, getMoreCategorySubId } from "../../../services/category";
import { listParams, constants } from "../../../configs/constants";
import { bannerTop2 } from "../../../../public/resource";
import { getArticleSource } from "../../../configs/constants/inforwebsite";
import { getApiFocus } from "../../../services/home";


import Styles from "../../../styles/Home_page.module.scss";

function App(props) {
  const router = useRouter();
  const dataForcus = props.apiForcus;
  const obMenuMiniwithPage = props.findUrlPage.sub_type;
  const urlPage = props.checkResolvedUrl;
  const sub_typeid = props.sub_typeid;
  const topicId = props.topicId;
  const [data, setData] = useState(props.responsivePage.articles);
  const [lastApi, setLastApi] = useState(props.responsivePage.last);
  const [loadingSpin, setLoadingSpin] = useState(false);
  const listUrlCheck = listParams.listParamsMenu;
  const checkHeigtLineMenu = props.findUrlPage;
  useEffect(() => {
    setData(props.responsivePage.articles);
  }, [props]);
  const OneHourAgo = (itemTime) => {
    const hour = 1 * 24 * 60 * 60 * 1000;
    const hourago = Date.now() - hour;
    return itemTime > hourago;
  };

  const fetchMoreData = async () => {
    setLoadingSpin(true);
    const resMore = await getMoreCategorySubId(lastApi, topicId, sub_typeid);
    setLastApi(resMore.last);
    // setData((posts) => [...posts, ...resMore.articles]);
    setLoadingSpin(false);
  };
  useEffect(() => {
    setData(props.responsivePage.articles);
  }, [props]);
  return (
    <>
      <div className="container">
        <style jsx>{`.active{background: #029875 !important; color: #FFFFFF !important;}`}</style>
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
                <HeaderMenu data={checkHeigtLineMenu} />
              </div>
            </Col>
            <Col span={24}>
              <br></br>
              <div className={Styles.Breadcrumb_Top}>
                <div style={{ marginLeft: "10px" }}>
                  <BreadcrumbCategory data={props.checkUrlParams} />
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
                            <ActiveLinkCategory isActive={isActive} href={item.urlPage} key={index}>
                              <p className={Styles.MenuMini_Items}>{item.name}</p>
                            </ActiveLinkCategory>
                        </>
                      );
                    })}
                  </div>
                  <div className={Styles.groupBoxMini}>
                    <PostOneCategory data={data} datapage={urlPage} />
                  </div>
                  <InfiniteScroll
                    next={fetchMoreData}
                    dataLength={data.length}
                    hasMore={true}
                    loader={<div style={{ textAlign: "center" }}>{loadingSpin === true ? <Loader type="Bars" color="#029875" height={40} width={40} /> : null}</div>}
                    endMessage={<h4>Không có tin bài để hiển thị</h4>}
                  >
                    {data.slice(4, 1000000000).map((item, index) => {
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
                                  <p style={{ color: "#D9DBE1", fontSize: "21px", fontWeight: "bold", position: "relative", top: "-5px", margin: "0px 5px" }}>.</p>
                                  <p className={Styles.nameSource}>
                                    {FindCateSource === undefined
                                      ? "Tin tức 247"
                                      : FindCateSource.name}
                                  </p>
                                  <p style={{ color: "#D9DBE1", fontSize: "21px", fontWeight: "bold", position: "relative", top: "-5px", margin: "0px 5px" }}>.</p>
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
      </div>
    </>
  );
}

export default App;

export async function getServerSideProps(context) {
  const checkResolvedUrl = context.resolvedUrl.replace(/(\?.*)|(#.*)/g, "");
  const formatUrl = context.resolvedUrl.slice(0, 15); // format sạch url, để lấy ra url đúng là: /danh-muc/xe-co,
  const urlPageHome = formatUrl;
  const listUrlCheck = listParams.listParamsMenu;
  const findUrlPage = listUrlCheck.find(
    (items) => items.urlPage === urlPageHome
  );
  const paramterUrl = checkResolvedUrl;
  const checkUrlParams = findUrlPage.sub_type.find(
    (items) => items.urlPage === paramterUrl
  );
  if (checkUrlParams === undefined) {
    return {
        redirect: {
            destination: '/404',
        }
    };
  }
  const sub_typeid = checkUrlParams.id;
  const topicId = findUrlPage.id;
  const responsivePage = await getCategorySubId(sub_typeid, topicId);

  const apiForcus = await getApiFocus();
  return {
    props: {
      formatUrl,
      responsivePage,
      sub_typeid,
      topicId,
      checkResolvedUrl,
      checkUrlParams,
      findUrlPage,
      apiForcus,
    },
  };
}
