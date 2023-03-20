import React from 'react';
import Link from 'next/link';
import { listParams } from '../../configs/constants';
import Styles from "../../styles/GlobalStyle.module.scss";
const BreadcrumbPC = (props) => {
    const typeWebsite = props.data
    const checkTypeWebsite = listParams.listParamsMenu.find((items) => items.id === typeWebsite)
    return <>
        <div className={Styles.groupBoxBreadcrumb}>
            <Link href="/tin-tuc">
                <div className={Styles.PageIndex}>
                    <a href="/tin-tuc">TRANG CHỦ</a>
                </div>
            </Link>
            <div className={Styles.IconArrow}> <i class="bi bi-chevron-right" /> </div>
            <Link href={checkTypeWebsite === undefined ? '/tin-tuc' : checkTypeWebsite.urlPage}>
                <div className={Styles.PageCurrent}>
                    <a href={checkTypeWebsite === undefined ? '/tin-tuc' : checkTypeWebsite.urlPage}>{checkTypeWebsite === undefined ? 'Tin tức 247' : checkTypeWebsite.name.toUpperCase()}</a>
                </div>
            </Link>
        </div>
    </>
}

export default BreadcrumbPC;
