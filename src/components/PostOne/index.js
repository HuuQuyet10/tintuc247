import React from 'react';
import Styles from "../../styles/Home_page.module.scss";
import Image from 'next/image';
import Link from 'next/link';
import { icon_tron, thanh_line } from "../../../public/resource";
import { listParams } from "../../configs/constants";
import { getWebsite } from '../../configs/constants/inforwebsite';
import TimeAgo from 'timeago-react';
import * as timeago from 'timeago.js';
import vi from 'timeago.js/lib/lang/vi';


timeago.register('vi', vi);
const PostOne = (props) => {
    const inforwebsite = getWebsite();
    var indexToSplit = props.data.indexOf(props.data[0]);
    var bigPost = props.data.slice(0, 1);
    var remainingPost = props.data.slice(indexToSplit + 1);
    return (
        <div>
            {
                bigPost.map((item, index) => {
                    const itemFind = inforwebsite.find((items) => items.id === item.source || null || undefined);
                    const ListParams = listParams.listParamsMenu.find((itemId) => itemId.id === item.type);
                    return (
                        <Link href={item.webUrl.replace('https://docbao24h.me/', '')} key={index}>
                            <div className={Styles.firstPost}>
                                <div className={Styles.ImageTitle}>
                                    <img src={item.thumb} alt={item.title} />
                                </div>
                                <a href={item.webUrl.replace('https://docbao24h.me/', '')} className={Styles.titlePost}>{item.title}</a>
                                <div className={Styles.Time_Source}>
                                    <img alt='Tin tức 247' src={itemFind === undefined ? 'https://ecdn.docbao24h.me/icon_wb/news/docbao24h.png' : itemFind.icon_url_horizontal} style={{ height: "24px", marginRight: "10px", objectFit: "contain", marginTop: '3px' }} />
                                    <Image src={icon_tron} className={Styles.contenImages_icon} alt={item.title} />
                                    <p className={Styles.SourcePost}>{ListParams === undefined ? 'Tin tức 247' : ListParams.name}</p>
                                    <Image src={icon_tron} className={Styles.contenImages_icon} alt={item.title} />
                                    <p className={Styles.TimePost}>
                                        <TimeAgo
                                            datetime={item.pubdate}
                                            locale='vi'
                                        />
                                    </p>
                                </div>
                                <p className={Styles.descPost}>{item.desc}</p>
                            </div>
                        </Link>
                    )
                })
            }
            <div className={Styles.groupBoxItem}>
                {
                    remainingPost.map((item, index) => {
                        const itemFind = inforwebsite.find((items) => items.id === item.source || null || undefined);
                        const ListParams = listParams.listParamsMenu.find((itemId) => itemId.id === item.type);
                        return (
                            <Link href={item.webUrl.replace('https://docbao24h.me/', '')} key={index}>
                                <div className={Styles.groupItemMini}>
                                    <img src={item.thumb} alt={item.title} />
                                    <a href={item.webUrl.replace('https://docbao24h.me/', '')} className={Styles.titlePost}>{item.title}</a>
                                    <div className={Styles.BoxMini}>
                                        <img alt='Tin tức 247' src={itemFind === undefined ? 'https://ecdn.docbao24h.me/icon_wb/news/docbao24h.png' : itemFind.icon_url_horizontal} style={{ maxWidth: "82px", height: "24px", objectFit: "contain", marginTop: "3px"}} />
                                        <i class="bi bi-dot" style={{ color: "#D9DBE1", fontSize: "21px", lineHeight: '10px', paddingTop: "7px" }}></i>
                                        <p className={Styles.SourcePost}>{ListParams === undefined ? 'Tin tức 247' : ListParams.name}</p>
                                        <i class="bi bi-dot" style={{ color: "#D9DBE1", fontSize: "21px", lineHeight: '10px', paddingTop: "7px" }}></i>
                                        <p className={Styles.TimePost}>
                                            <TimeAgo
                                                datetime={item.pubdate}
                                                locale='vi'
                                            />
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
            <div className={Styles.Style_Line}>
                <Image src={thanh_line} alt="thanh-line"/>
            </div>
        </div>
    );
}

export default PostOne;
