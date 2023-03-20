import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import Head from 'next/head';
import { Col, Row, Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { HeaderTop, HeaderMenu } from "../../components";
import { constants } from "../../configs/constants";
import { icon_as_error, Logo_landing_page, icon_app_error, icon_gg_error } from "../../../public/resource";
import Styles from "../../styles/Page404.module.scss";

const Page404 = () => {
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if(e.target.value === ''){
                alert("Bạn chưa nhập thông tin tìm kiếm");
            } else {
                Router.push({
                    pathname: '/tim-kiem',
                    query: { valueSearch: e.target.value }
                })
            }
        }
    }
    return (
        <div>
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
            <Row>
                <Col span={24}>
                    <HeaderTop />
                </Col>
                <Col span={24}>
                    <HeaderMenu />
                </Col>
                <Col span={24}>
                    <div className={Styles.Box_Search}>
                        <div className={Styles.Box_Search_Icon}>
                            <Image src={icon_as_error} />
                        </div>
                        <div className={Styles.input_Search_Page}>
                                <Input
                                    placeholder='Tìm kiếm tin tức'
                                    suffix={
                                        <SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                                    }
                                    onKeyDown={handleKeyDown}
                                    rules={[
                                        {
                                          required: true,
                                        }
                                    ]}
                                />
                        </div>
                        <div className={Styles.Box_go_to_home}>
                            <Link href="/tin-tuc">
                                <a href='/tin-tuc' className={Styles.Btn_go_to_home}>TRANG CHỦ</a>
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col span={24}>
                    <div className={Styles.Box_footer_error}>
                        <div className={Styles.footer_Left}>
                            <div className={Styles.footer_Left_icon}>
                                <Image src={Logo_landing_page} alt="Tin tức 247"/>
                            </div>
                            <div className={Styles.footer_Left_details}>
                                <p>Tin tức 247</p>
                                <p>Tin tức nhanh chóng</p>
                            </div>
                        </div>
                        <div className={Styles.footer_Right}>
                            <p className={Styles.text_download_free}>Tải miễn phí app trên</p>
                            <div className={Styles.box_icon_download}>
                                <a href={constants.DOWNLOAD_IOS}>
                                    <Image src={icon_app_error} alt="Tin tức 247"/>
                                </a>
                            </div>
                            <div className={Styles.box_icon_download}>
                                <a href={constants.DOWNLOAD_ANDROID}>
                                    <Image src={icon_gg_error} alt="Tin tức 247"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Page404;
