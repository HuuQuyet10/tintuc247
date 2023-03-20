import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Styles from "../../styles/MenuVideo/HomePage.module.scss";
import { icon_back_menu, LogoTinZ } from "../../../public/resource"

const HeaderTop_Video = () => {
    return <>
        <div className={Styles.Header__menu}>
            <div className={Styles.Header__GroupMenu}>
                <div className={Styles.Header__IconMenu} style={{marginTop: "7px"}}>
                    <a href="/video">
                        <Image src={LogoTinZ} alt="Logo" />
                    </a>
                </div>
                <div className={Styles.Header__BtnBackHome}>
                    <Link href="/tin-tuc">
                        <a href="/tin-tuc"><Image src={icon_back_menu} /></a>
                    </Link>
                </div>
            </div>
        </div>
    </>
}

export default HeaderTop_Video;
