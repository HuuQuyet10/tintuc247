import React from 'react';
import Image from 'next/image';
import Styles from '../../styles/Home_page.module.scss';
import { Banner_Left, bannerSiderBar } from "../../../public/resource";
const SiderBar_Ads_Bottom = () => {
    return (
        <div>
            <Image src={bannerSiderBar} alt="Tin tức 247"/>
        </div>
    );
}

export default SiderBar_Ads_Bottom;
