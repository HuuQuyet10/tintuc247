import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Logo_landing_page, icon_gg_dask, icon_app_dask, icon_phone_box_ads } from "../../../public/resource";
import { constants } from "../../configs/constants";
import Styles from '../../styles/Home_page.module.scss';

const SiderBar_Ads_Top = () => {
    return (
        <div className={Styles.sidebarBanner}>
            <div className={Styles.BoxAds}>
                <div className={Styles.BoxAds__HeaderAds}>
                    <Image src={Logo_landing_page} width="80" height="80" className={Styles.BoxAds__ImgLogo} alt="Tin tức 247"/>
                    <p className={Styles.BoxAds__title}>Tin tức 247</p>
                    <p className={Styles.BoxAds__desc}>Cập nhật thông tin từng giây</p>
                </div>
                <div className={Styles.groupDownloadApp}>
                    <p className={Styles.styleTitleBoxAds}>Tải ứng dụng Tin tức 247</p>
                    <div className={Styles.groupValueApp}>
                        <i class="bi bi-people" />
                        <p>924k người đang sử dụng</p>
                    </div>
                    <div className={Styles.GroupDownloadAppWithAds}>
                        <div>
                            <a href={constants.DOWNLOAD_IOS} target="_blank">
                                <Image src={icon_app_dask} alt="Tin tức 247" />
                            </a>
                        </div>
                        <div>
                            <a href={constants.DOWNLOAD_ANDROID} target="_blank">
                                <Image src={icon_gg_dask} alt="Tin tức 247" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={Styles.BoxAds___ImgPhone}>
                    <Image src={icon_phone_box_ads} alt="Tin tức 247"/>
                </div>
            </div>
        </div>
    );
}

export default SiderBar_Ads_Top;
