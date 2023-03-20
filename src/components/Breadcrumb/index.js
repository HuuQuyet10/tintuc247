import React from 'react';
import Link from 'next/link';
import { listParams } from '../../configs/constants';
import Styles from "../../styles/GlobalStyle.module.scss";
const Breadcrumb = (props) => {
    const typeWebsite = props.data.type;
    const checkTypeWebsite = listParams.listParamsMenu.find((items) => items.id === typeWebsite);
    const checkHeightParamBreadcrumb = props.data.sub_type_id;
    // const getBreadcrumbChild = checkTypeWebsite.sub_type.find((items) => items.id === checkHeightParamBreadcrumb);
    const getBreadcrumbChild = checkTypeWebsite === undefined ? 0 : checkTypeWebsite.sub_type.find((items) => items.id === checkHeightParamBreadcrumb);
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
            {
               checkTypeWebsite === undefined ? null : getBreadcrumbChild == 0 ? null : getBreadcrumbChild == undefined ? null : <>
                    <div className={Styles.IconArrow}> <i class="bi bi-chevron-right" /> </div>
                    <Link href={getBreadcrumbChild.urlPage}>
                        <div className={Styles.PageCurrent}>
                            <a href={getBreadcrumbChild.urlPage}>{getBreadcrumbChild.name.toUpperCase()}</a>
                        </div>
                    </Link>
                </>
            }
        </div>
    </>
}

export default Breadcrumb;
