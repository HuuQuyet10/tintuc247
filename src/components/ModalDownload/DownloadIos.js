import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Logo_landing_page } from "../../../public/resource";

const DownloadIos = () => {
    return (
        <>
            <div className="Stylebodymodal">
                <div>
                    <Link href="#">
                        <Image src={Logo_landing_page} alt="app-doc-bao"/>
                    </Link>
                </div>
                <div>
                    <p>Cài đặt ứng dụng <span style={{fontWeight: "bold"}}>Tin tức 247</span> để không bỏ sót bất kì tin tức nào trong ngày. Ứng dụng Tin tức 247 hoàn toàn miễn phí. Cài đặt ngay!</p>
                </div>
            </div>
        </>
    );
}

export default DownloadIos;
