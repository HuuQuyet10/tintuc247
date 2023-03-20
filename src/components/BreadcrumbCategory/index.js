import React from 'react';
import Styles from "../../styles/GlobalStyle.module.scss";
import Link from 'next/link';

const BreadcrumbCategory = (props) => {
    return (
        <>
         <div className={Styles.groupBoxBreadcrumb}>
            <Link href="/tin-tuc">
                <div className={Styles.PageIndex}>
                    <a href="/tin-tuc">TRANG CHỦ</a>
                </div>
            </Link>
            <div className={Styles.IconArrow}> <i class="bi bi-chevron-right" /> </div>
            <Link href={props.data.urlPage === undefined ? '/tin-tuc' : props.data.urlPage}>
                <div className={Styles.PageCurrent}>
                    <a href={props.data.urlPage === undefined ? '/tin-tuc' : props.data.urlPage}>{props.data.name === undefined ? 'Tin tức 247' : props.data.ofCate.toUpperCase()}</a>
                </div>
            </Link>
        </div> 
        </>
    );
}

export default BreadcrumbCategory;
