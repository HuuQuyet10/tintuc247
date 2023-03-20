import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { LogoTinZ, Icon_Search, icon_mess } from '../../../public/resource';
import { constants } from "../../configs/constants";
import Styles from '../../styles/Home_page.module.scss';
import Router from 'next/router'


const { Search } = Input;
const Header = () => {
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if(e.target.value === ''){
                alert("Bạn chưa nhập thông tin tìm kiếm");
            } else {
                Router.push({
                    pathname: '/tim-kiem',
                    query: { valueSearch: e.target.value }
                })
            }
        }
    }
    return (
        <div className={Styles.contentTop}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0"></meta>
            </Head>
            <div className={Styles.contentTop_less}>
                <div className={Styles.styleLogo}>
                    <a href="/tin-tuc">
                        <Image src={LogoTinZ} alt="Logo" />
                    </a>
                </div>
                <a href={constants.SHORT_LINKS}>
                    <div className={Styles.Header__titlePage}>
                        <Image src={icon_mess} alt="Tin tức 247"/>
                        <p className={Styles.Header__iconMess}>Tải app Tin tức 247 - Để cập nhật tin tức nhanh nhất trong ngày</p>
                    </div>
                </a>
                <div className={Styles.groupUser}>
                    <Input 
                        placeholder="Từ khoá tìm kiếm..."
                        allowClear
                        className="Header__styleInputSearch"
                        onKeyDown={handleKeyDown}
                        suffix={
                            <SearchOutlined style={{ color: 'rgba(0,0,0,.45)', fontSize: "20px", marginTop: "1px" }}/>
                        }
                        rules={[
                            {
                              required: true,
                            }
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
