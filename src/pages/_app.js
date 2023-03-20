import React, { useEffect, useRef, memo } from 'react'
import NextNprogress from 'nextjs-progressbar';
import * as gtag from '../../lib/gtag';
import Script from 'next/script';
import { useRouter } from 'next/router'
import 'antd/dist/antd.css';
import '../styles/ModalDownload.css';
import '../styles/CarouselReviews/Carousels.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "react-image-lightbox/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
// import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { BackTop } from 'antd';


// Thêm các đường dẫn vào đây, để khi click vào 1 bài nào đó. đến khi quay lại thì sẽ quay lại đúng điểm đã click;
const ROUTES_TO_RETAIN = [
  '/',
  '/tin-tuc',
  '/danh-muc/tin-moi',
  '/danh-muc/covid-19',
  '/danh-muc/thoi-su',
  '/danh-muc/tin-moi',
  '/danh-muc/phap-luat',
  '/danh-muc/the-thao',
  '/danh-muc/kinh-te',
  '/danh-muc/giai-tri',
  '/danh-muc/suc-khoe',
  '/danh-muc/giao-duc',
  '/danh-muc/cong-nghe',
  '/danh-muc/tam-su',
  '/danh-muc/kham-pha',
  '/danh-muc/cam-nang',
  '/danh-muc/tin-game',
  '/danh-muc/manga-film',
  '/danh-muc/xe-co',
  '/danh-muc/cong-dong',
  '/danh-muc/the-gioi',
  '/video',
  '/video/danh-muc/thoi-su',
  '/video/danh-muc/phap-luat',
  '/video/danh-muc/the-thao',
  '/video/danh-muc/giai-tri',
  '/video/danh-muc/kham-pha',
  '/danh-muc/sea-game',
  '/danh-muc/thoi-su/chinh-tri',
  '/danh-muc/thoi-su/xa-hoi',
  '/danh-muc/thoi-su/quoc-phong',
  '/danh-muc/thoi-su/moi-truong',
  '/danh-muc/the-gioi/quan-su',
  '/danh-muc/the-gioi/nuoc-ngoai',
  '/danh-muc/the-gioi/the-goi-do-day',
  '/danh-muc/the-gioi/binh-luan',
  '/danh-muc/the-thao/bong-da-viet-nam',
  '/danh-muc/the-thao/bong-da-anh',
  '/danh-muc/the-thao/bong-da-tay-ban-nha',
  '/danh-muc/the-thao/bong-da-y',
  '/danh-muc/the-thao/bong-da-duc',
  '/danh-muc/the-thao/bong-da-phap',
  '/danh-muc/the-thao/cup-c1',
  '/danh-muc/the-thao/hau-truong',
  '/danh-muc/the-thao/the-thao-khac',
  '/danh-muc/the-thao/chuyen-nhuong',
  '/danh-muc/phap-luat/tin-nong',
  '/danh-muc/phap-luat/phap-dinh',
  '/danh-muc/phap-luat/ho-so-vu-an',
  '/danh-muc/phap-luat/ky-an',
  '/danh-muc/kinh-te/tai-chinh',
  '/danh-muc/kinh-te/chung-khoan',
  '/danh-muc/kinh-te/doanh-nghiep',
  '/danh-muc/kinh-te/tieu-dung',
  '/danh-muc/kinh-te/bat-dong-san',
  '/danh-muc/kinh-te/kinh-te',
  '/danh-muc/giai-tri/vbiz',
  '/danh-muc/giai-tri/sao-quoc-te',
  '/danh-muc/giai-tri/tivi-show',
  '/danh-muc/giai-tri/phim-viet',
  '/danh-muc/giai-tri/phim-chau-a',
  '/danh-muc/giai-tri/phim-au-my',
  '/danh-muc/giai-tri/hau-truong-phim',
  '/danh-muc/suc-khoe/lam-dep',
  '/danh-muc/suc-khoe/tin-tuc-suc-khoe',
  '/danh-muc/suc-khoe/tu-van',
  '/danh-muc/suc-khoe/tin-y-te',
  '/danh-muc/suc-khoe/suc-khoe-gioi-tinh',
  '/danh-muc/giao-duc/tin-tuc',
  '/danh-muc/giao-duc/tuyen-sinh',
  '/danh-muc/giao-duc/du-hoc',
  '/danh-muc/giao-duc/giao-duc',
  '/danh-muc/cong-nghe/the-gioi-so',
  '/danh-muc/cong-nghe/do-2tek',
  '/danh-muc/tam-su/tinh-yeu',
  '/danh-muc/tam-su/tam-su-chia-se',
  '/danh-muc/cam-nang/beauty-fashion',
  '/danh-muc/cam-nang/an-ngon',
  '/danh-muc/cam-nang/vao-bep',
  '/danh-muc/kham-pha/du-lich',
  '/danh-muc/kham-pha/tu-vi',
  '/danh-muc/kham-pha/chuyen-la',
  '/danh-muc/tin-game/tin-tuc',
  '/danh-muc/tin-game/esport',
  '/danh-muc/tin-game/game-online',
  '/danh-muc/xe-co/o-to',
  '/danh-muc/xe-co/xe-may',
  '/danh-muc/cong-dong/cong-dong-mang',
  '/danh-muc/cong-dong/ban-doc',
];
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const retainedComponents = useRef({});
  const isRetainableRoute = ROUTES_TO_RETAIN.includes(router.asPath);
  // Add Component to retainedComponents if we haven't got it already
  if (isRetainableRoute && !retainedComponents.current[router.asPath]) {
    const MemoComponent = memo(Component);
    retainedComponents.current[router.asPath] = {
      component: <MemoComponent {...pageProps} />,
      scrollPos: 0
    };
  }
  // Save the scroll position of current page before leaving
  const handleRouteChangeStart = () => {
    if (isRetainableRoute) {
      retainedComponents.current[router.asPath].scrollPos = window.scrollY;
    }
  };
  // Save scroll position - requires an up-to-date router.asPath
  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStart);
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
    };
  }, [router.asPath]);

  // Scroll to the saved position when we load a retained component
  useEffect(() => {
    if (isRetainableRoute) {
      window.scrollTo(0, retainedComponents.current[router.asPath].scrollPos);
    }
  }, [Component, pageProps]);


  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return <>
    <NextNprogress
      color="#028c73"
      startPosition={0.3}
      stopDelayMs={200}
      height={5}
      showOnShallow={true}
      className="styles_progressBar"
    />
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=UA-120536209-1`}
    />
    <Script
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-120536209-1', {
              page_path: window.location.pathname,
            });
          `,
      }}
    />
    <div>
      <div style={{ display: isRetainableRoute ? 'block' : 'none' }}>
        {Object.entries(retainedComponents.current).map(([path, c]) => (
          <div key={path} style={{ display: router.asPath === path ? 'block' : 'none' }}>
            {c.component}
          </div>
        ))}
      </div>
      {!isRetainableRoute && <Component {...pageProps} />}
    </div>
    {/* <Component {...pageProps} /> */}
    {/* <GoogleReCaptchaProvider reCaptchaKey="6Leo_ykfAAAAACb2Par2AXaRkPLGRWAynjypwnTj" /> */}
    <BackTop>
      <div className="styleBtnGoTop">
       <i class="bi bi-chevron-up"></i>
      </div>
    </BackTop>
  </>
}

export default MyApp;