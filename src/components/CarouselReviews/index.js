import React, {useState} from 'react';
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function CarouselReviews(props) {
    const dataJson = [
        {
            "title": "Cập nhật tin tức rất nhanh",
            "textDecs": "Tin tức trên tintuc24h được cập nhật từng phút nên tôi luôn nắm được các tin tức rất nóng hổi với nội dung chính xác nhanh nhất",
            "avataUser": "https://docbao24h.me/resource/landing/user_Quyet.png",
            "nameUser": "Phạm Quyết",
            "jobs": "Kinh doanh đồ điện tử"
        },
        {
            "title": "Rất tiện ích và dễ dùng",
            "textDecs": "Tôi sử dụng tintuc24h để xem tin tức hàng ngày, app rất dễ sử dụng, giao diện dễ nhìn, thân thiện, nhiều tiện ích đi kèm",
            "avataUser": "https://docbao24h.me/resource/landing/user_Huong.png",
            "nameUser": "Nguyễn Mai Hương",
            "jobs": "Thiết kế thời trang"
        },
        {
            "title": "Ứng dụng nhẹ, đọc nhanh",
            "textDecs": "Do công việc bận rộn nên tôi có rất ít thời gian đọc báo, nhưng tintuc24h đã tổng hợp các tin tiêu điểm quan trọng trong ngay giúp tôi tiết kiệm được rất nhiều thời gian",
            "avataUser": "https://docbao24h.me/resource/landing/user_Anh.png",
            "nameUser": "Nguyễn Lan Anh",
            "jobs": "Kinh doanh tự do"
        },
        {
            "title": "Giao diện rõ ràng, phù hợp với người cao tuổi",
            "textDecs": "App có nhiều lựa chọn thay đổi kích thước chữ và chế độ đọc ban đêm bảo vệ mắt , rất phù hợp với người cao tuổi",
            "avataUser": "https://tintuc24h.me/resource/landing/user_Linh.png",
            "nameUser": "Thuỳ Linh Nguyễn",
            "jobs": "Giao dịch viên"
        },
        {
            "title": "Rất tiện ích và dễ dùng",
            "textDecs": "Tôi rất thích các tiện ích xem thời tiết, giá vàng trên tintuc24h",
            "avataUser": "https://tintuc24h.me/resource/landing/user_VietAnh.png",
            "nameUser": "Viet Anh Nguyen",
            "jobs": "Sinh Viên"
        },
        {
            "title": "Tiện lợi và xem video nhanh",
            "textDecs": "Tôi thường xuyên xem video thời sự, giải trí để thư giãn sau một ngày học tập",
            "avataUser": "https://docbao24h.me/resource/landing/user_Trang.png",
            "nameUser": "Nguyễn Thu Trang",
            "jobs": "Giao dịch viên ngân hàng"
        }

    ];
    
    const [imageIndex, setImageIndex] = useState(0);

    const settings_PC = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        centerPadding: 0,
        centerMode: true,
        autoplay: false,
        autoplaySpeed: 2000,
        draggable: true,
        arrows: false,
        autoplay: true,
        beforeChange: (current, next) => setImageIndex(next),
    };
    const settings_MOBILE = {
        dots: true,
        infinite: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        centerPadding: 0,
        centerMode: true,
        autoplay: false,
        autoplaySpeed: 2000,
        draggable: true,
        arrows: false,
        // autoplay: true,
        beforeChange: (current, next) => setImageIndex(next),
    };
    const settings_TABLET = {
        dots: true,
        infinite: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        centerPadding: 0,
        centerMode: true,
        autoplay: false,
        autoplaySpeed: 2000,
        draggable: true,
        arrows: false,
        // autoplay: true,
        beforeChange: (current, next) => setImageIndex(next),
    };
    return (
        <div>
            <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />
           <div className='slider_PC'>
                <Slider {...settings_PC}>
                    {dataJson.map((img, idx) => (
                    <div className={idx === imageIndex ? "style-active-true" : "style-active-false"}>
                        <div className='slider-content-styles'>
                            <div className='styles-slider-header'>
                                <p>{img.title}</p>
                                <p>{img.textDecs}</p>
                            </div>
                            <div className='silder-silder-insertion-triangle'/>
                            <div className='styles-silder-inforUser'>
                                <img src={img.avataUser} className="style-box-slider-icon" alt="Tin tức 247"/>
                                <p className='styles-name-user'>{img.nameUser}</p>
                                <p className='styles-jobs-user'>{img.jobs}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </Slider>
           </div>
           <div className='slider_MOBILE'>
                <Slider {...settings_MOBILE}>
                    {dataJson.map((img, idx) => (
                    <div className='slider_active_mobile'>
                        <div className='slider-content-styles'>
                            <div className='styles-slider-header'>
                                <p>{img.title}</p>
                                <p>{img.textDecs}</p>
                            </div>
                            <div className='silder-silder-insertion-triangle'/>
                            <div className='styles-silder-inforUser'>
                                <img src={img.avataUser} className="style-box-slider-icon" alt="Tin tức 247"/>
                                <p className='styles-name-user'>{img.nameUser}</p>
                                <p className='styles-jobs-user'>{img.jobs}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </Slider>
           </div>
           <div className='slider_TABLET'>
                <Slider {...settings_TABLET}>
                    {dataJson.map((img, idx) => (
                    <div className='slider_active_mobile'>
                        <div className='slider-content-styles'>
                            <div className='styles-slider-header'>
                                <p>{img.title}</p>
                                <p>{img.textDecs}</p>
                            </div>
                            <div className='silder-silder-insertion-triangle'/>
                            <div className='styles-silder-inforUser'>
                                <img src={img.avataUser} className="style-box-slider-icon" alt="Tin tức 247"/>
                                <p className='styles-name-user'>{img.nameUser}</p>
                                <p className='styles-jobs-user'>{img.jobs}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </Slider>
           </div>
        </div>
    );
}

export default CarouselReviews;