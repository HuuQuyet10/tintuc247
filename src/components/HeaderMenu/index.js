import React from 'react';
import Styles from '../../styles/Home_page.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { camnang_white, congdong_white, congnghe_white, game_white, giaitri_white, giaoduc_white, khampha_white, kinhte_white, manga_white, phapluat_white, suckhoe_white, tamsu_white, thethao_white, thosu_white, xeco_white, icon_menu, cam_nang, cong_nghe, game, giai_tri, giao_duc, icon_cong_dong, icon_tam_su, manga, kham_pha, kinh_te, phap_luat, suc_khoe, thoi_su, xe_co, the_thao } from "../../../public/resource";
import { ActiveLink } from "../index";
import { useRouter } from "next/router";
import { listParams } from '../../configs/constants';


export default function Header_Menu(props) {
  const router = useRouter();
  const typeWebsite = props.data;
  const menu = listParams.listParamsMenu;
  var indexToSplit = menu.indexOf(menu[11]);
  var postOne = menu.slice(0, indexToSplit);
  var postTwo = menu.slice(indexToSplit + 1);
  let isActive = false;
  if (router.asPath === "/tin-tuc") {
    isActive = true;
  }
  return (
    <div className={Styles.StylesNav_less}>
      <div className={Styles.navbar}>
        <style jsx>{`.nav-link {text-decoration: none} .active{color: gold; background: #00775B;}`}</style>
        <ActiveLink isActive={isActive} href="/tin-tuc">
          <a>Nổi bật</a>
        </ActiveLink>
        <div className={Styles.menuDesktop}>
          {
            postOne.map((items, index) => {
              let isActive = false;
              if (router.asPath === items.urlPage) {
                isActive = true;
              } else if (props.data === undefined) {
                isActive = false;
              } else if (props.data.urlPage === items.urlPage) {
                isActive = true
              }
              return <div className={Styles.navbar_pc}>
                <div className={Styles.dropdown_pc}>
                  <ActiveLink isActive={isActive} href={items.urlPage} key={index}>
                    <a href={items.urlPage} className={Styles.dropbtn_pc}>{items.name}</a>
                  </ActiveLink>
                  <div className={Styles.dropdown_content_pc}>
                    <div className={Styles.row_pc}>
                      {items.sub_type.map((itemSub, index) => {
                        return <div className={Styles.column_pc}>
                          <a href={itemSub.urlPage}>{itemSub.name}</a>
                        </div>
                      })}
                    </div>
                  </div>
                </div>
              </div>
            })
          }
        </div>
        <div className={Styles.dropdown}>
          <div className={Styles.dropbtn}><Image alt='icon_menu' src={icon_menu}></Image></div>
          <div className={Styles.dropdown_content}>
            <div className={Styles.containnerModal}>
              <div>
                <ActiveLink activeClassName="active" href="/video">
                  <a className={Styles.containnerModal__boxMenu}>
                    <Image alt='Video-tintuc24h' src={manga} className={Styles.BoxMenu__icon_default} />
                    <Image alt='Video-tintuc24h' src={manga_white} className={Styles.BoxMenu__icon_white} />
                    <p>Video</p>
                  </a>
                </ActiveLink>
                <ActiveLink activeClassName="active" href="/danh-muc/thoi-su">
                  <a className={Styles.containnerModal__boxMenu}>
                    <Image alt='Thời sự' src={thoi_su} className={Styles.BoxMenu__icon_default} />
                    <Image alt='Thời sự' src={thosu_white} className={Styles.BoxMenu__icon_white} />
                    <p>Thời sự</p>
                  </a>
                </ActiveLink>
                <ActiveLink activeClassName="active" href="/danh-muc/the-thao">
                  <a className={Styles.containnerModal__boxMenu}>
                    <Image alt='Thể thao' src={the_thao} className={Styles.BoxMenu__icon_default} />
                    <Image alt='Thể thao' src={thethao_white} className={Styles.BoxMenu__icon_white} />
                    <p>Thể thao</p>
                  </a>
                </ActiveLink>
                <ActiveLink activeClassName="active" href="/danh-muc/phap-luat">
                  <a className={Styles.containnerModal__boxMenu}>
                    <Image alt='Pháp luật' src={phap_luat} className={Styles.BoxMenu__icon_default} />
                    <Image alt='Pháp luật' src={phapluat_white} className={Styles.BoxMenu__icon_white} />
                    <p>Pháp luật</p>
                  </a>
                </ActiveLink>
              </div>
              <div>
                <ActiveLink activeClassName="active" href="/danh-muc/kinh-te">
                  <a className={Styles.containnerModal__boxMenu}>
                    <Image alt='Kinh tế' src={kinh_te} className={Styles.BoxMenu__icon_default} />
                    <Image alt='Kinh tế' src={kinhte_white} className={Styles.BoxMenu__icon_white} />
                    <p>Kinh tế</p>
                  </a>
                </ActiveLink>
                <ActiveLink activeClassName="active" href="/danh-muc/giai-tri">
                  <a className={Styles.containnerModal__boxMenu}>
                    <Image alt='Giải trí' src={giai_tri} className={Styles.BoxMenu__icon_default} />
                    <Image alt='Giải trí' src={giaitri_white} className={Styles.BoxMenu__icon_white} />
                    <p>Giải trí</p>
                  </a>
                </ActiveLink>
                <ActiveLink activeClassName="active" href="/danh-muc/suc-khoe">
                  <a className={Styles.containnerModal__boxMenu}>
                    <Image alt='Sức khỏe' src={suc_khoe} className={Styles.BoxMenu__icon_default} />
                    <Image alt='Sức khỏe' src={suckhoe_white} className={Styles.BoxMenu__icon_white} />
                    <p>Sức khỏe</p>
                  </a>
                </ActiveLink>
                <ActiveLink activeClassName="active" href="/danh-muc/giao-duc">
                  <a className={Styles.containnerModal__boxMenu}>
                    <Image alt='Giáo dục' src={giao_duc} className={Styles.BoxMenu__icon_default} />
                    <Image alt='Giáo dục' src={giaoduc_white} className={Styles.BoxMenu__icon_white} />
                    <p>Giáo dục</p>
                  </a>
                </ActiveLink>
              </div>
              <div>
                <ActiveLink activeClassName="active" href="/danh-muc/cong-nghe">
                  <a className={Styles.containnerModal__boxMenu}>
                    <Image alt='Công nghệ' src={cong_nghe} className={Styles.BoxMenu__icon_default} />
                    <Image alt='Công nghệ' src={congnghe_white} className={Styles.BoxMenu__icon_white} />
                    <p>Công nghệ</p>
                  </a>
                </ActiveLink>
                <ActiveLink activeClassName="active" href="/danh-muc/tam-su">
                  <a className={Styles.containnerModal__boxMenu}>
                    <Image alt='Tâm sự' src={icon_tam_su} className={Styles.BoxMenu__icon_default} />
                    <Image alt='Tâm sự' src={tamsu_white} className={Styles.BoxMenu__icon_white} />
                    <p>Tâm sự</p>
                  </a>
                </ActiveLink>
                <ActiveLink activeClassName="active" href="/danh-muc/kham-pha">
                  <a className={Styles.containnerModal__boxMenu}>
                    <Image alt='Khám phá' src={kham_pha} className={Styles.BoxMenu__icon_default} />
                    <Image alt='Khám phá' src={khampha_white} className={Styles.BoxMenu__icon_white} />
                    <p>Khám phá</p>
                  </a>
                </ActiveLink>
                <ActiveLink activeClassName="active" href="/danh-muc/cam-nang">
                  <a className={Styles.containnerModal__boxMenu}>
                    <Image alt='Cẩm nang' src={cam_nang} className={Styles.BoxMenu__icon_default} />
                    <Image alt='Cẩm nang' src={camnang_white} className={Styles.BoxMenu__icon_white} />
                    <p>Cẩm nang</p>
                  </a>
                </ActiveLink>
              </div>
              <div>
                <ActiveLink activeClassName="active" href="/danh-muc/tin-game">
                  <a className={Styles.containnerModal__boxMenu}>
                    <Image alt='Tin game' src={game} className={Styles.BoxMenu__icon_default} />
                    <Image alt='Tin game' src={game_white} className={Styles.BoxMenu__icon_white} />
                    <p>Tin game</p>
                  </a>
                </ActiveLink>
                <ActiveLink activeClassName="active" href="/danh-muc/manga-film">
                  <a className={Styles.containnerModal__boxMenu}>
                    <Image alt='Manga/Film' src={manga} className={Styles.BoxMenu__icon_default} />
                    <Image alt='Manga/Film' src={manga_white} className={Styles.BoxMenu__icon_white} />
                    <p>Manga/Film</p>
                  </a>
                </ActiveLink>
                <ActiveLink activeClassName="active" href="/danh-muc/xe-co">
                  <a className={Styles.containnerModal__boxMenu}>
                    <Image alt='Xe cộ' src={xe_co} className={Styles.BoxMenu__icon_default} />
                    <Image alt='Xe cộ' src={xeco_white} className={Styles.BoxMenu__icon_white} />
                    <p>Xe cộ</p>
                  </a>
                </ActiveLink>
                <ActiveLink activeClassName="active" href="/danh-muc/cong-dong">
                  <a className={Styles.containnerModal__boxMenu}>
                    <Image alt='Cộng đồng' src={icon_cong_dong} className={Styles.BoxMenu__icon_default} />
                    <Image alt='Cộng đồng' src={congdong_white} className={Styles.BoxMenu__icon_white} />
                    <p>Cộng đồng</p>
                  </a>
                </ActiveLink>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.MenuMobile}>
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