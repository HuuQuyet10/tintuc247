import React from 'react';
import { Row, Col } from "antd";
import Styles from '../../styles/Landing.module.scss';

const Footer = () => {
    return (
        <div className={Styles.box_FooterPage}>
            <Row>
                <Col span={24}>
                    <div className={Styles.boxFooter}>
                    <div className={Styles.Footer_Adress_Compaty}>
                        <p>Công ty cổ phần truyền thông và giải trí ESWAY</p>
                        <p>Địa chỉ: Số 380 Trường Chinh, Ngã Tư Sở, Đống Đa, Hà Nội</p>
                    </div>
                    <div className={Styles.Footer_Mails_Adress}>
                        <p className={Styles.Footer_Contract_Ads}>Liên hệ quảng cáo: <a href="mailto:tintuc247@gmail.com">tintuc247@gmail.com</a></p>
                    </div>
                    </div>
                </Col>
                <Col span={24}>
                    <div className={Styles.Footer_Copyright}>
                    <p>@Copyright 2022 tintuc24h, All rights reserved</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Footer;
