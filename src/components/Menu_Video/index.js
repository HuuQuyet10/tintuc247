import React from 'react';
import Styles from '../../styles/Home_page.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { icon_menu } from "../../../public/resource";
import { ActiveLink } from "../index";
import { useRouter } from "next/router";
import { ListMenuVideo } from '../../configs/constants';


export default function Header_Menu(props) {
  const router = useRouter();
  const typeWebsite = props.data;
  const menu = ListMenuVideo.videos;
  let isActive = false;
  if (router.asPath === "/video") {
    isActive = true;
  }
  return (
    <div className={Styles.StylesNav_less}>
      <div className={Styles.navbar}>
        <style jsx>{`.nav-link {text-decoration: none} .active{color: gold}`}</style>
        <div>
          {
            menu.map((item, index) => {
              let isActive = false;
              if (item.id === typeWebsite || router.asPath === item.urlPage) {
                isActive = true;
              }
              return <>
                <ActiveLink isActive={isActive} href={item.urlPage} key={index}>
                  <a>{item.name}</a>
                </ActiveLink>
              </>
            })
          }
        </div>
      </div>
    </div>
  );
}