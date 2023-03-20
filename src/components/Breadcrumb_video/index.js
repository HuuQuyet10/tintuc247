import React from 'react';
import Link from 'next/link';
import { ListMenuVideo } from '../../configs/constants';
import Styles from "../../styles/GlobalStyle.module.scss";
const Breadcrumb = (props) => {
    const typeWebsite = props.data
    const checkTypeWebsite = ListMenuVideo.videos.find((items) => items.id === typeWebsite)
    return <>
        <div className={Styles.groupBoxBreadcrumb}>
            <Link href="/video">
                <div className={Styles.PageIndex}>
                    <a href="/video">TRANG CHỦ</a>
                </div>
            </Link>
            <div className={Styles.IconArrow}> <i class="bi bi-chevron-right" /> </div>
            <Link href={checkTypeWebsite === undefined ? '/video' : checkTypeWebsite.urlPage}>
                <div className={Styles.PageCurrent}>
                    <a href={checkTypeWebsite === undefined ? '/video' : checkTypeWebsite.urlPage}>{checkTypeWebsite === undefined ? 'Tin tức 247' : checkTypeWebsite.name.toUpperCase()}</a>
                </div>
            </Link>
        </div>
    </>
}

export default Breadcrumb;
