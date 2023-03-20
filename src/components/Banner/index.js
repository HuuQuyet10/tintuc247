import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { constants } from '../../configs/constants';
import { bannerTop2 } from "../../../public/resource";

const BannerAds = () => {
    return (
        <div style={{ width: '100%', maxWidth: "100%", margin: '0 auto', textAlign: 'center', paddingTop: "18px", paddingBottom: '18px', backgroundColor: "#F2F3F4" }}>
            <div style={{ maxWidth: "1200px", margin: "0px auto" }}>
                <Link href={constants.SHORT_LINKS}>
                    <a href={constants.SHORT_LINKS}>
                        <Image src={bannerTop2} alt="Tin tức 247, tintuc24h" />
                    </a>
                </Link>
            </div>
        </div>
    );
}
export default BannerAds;