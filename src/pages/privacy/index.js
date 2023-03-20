import React from 'react';
import Head from 'next/head';

import { HeaderTop, HeaderMenu, Footer } from '../../components';

import Style from "../../styles/Privacy_page.module.scss";

const PrivacyComponent = () => {
    return (
        <>
            <Head>
                <title>Tin tức 247 - Báo mới, tin mới liên tục 24h</title>
                <link rel="icon" href="/faicon_3.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0"></meta>
                <meta property="og:title" content="Tin tức 247 - Báo mới, tin mới liên tục 24h"></meta>
                <meta property="og:description" content="Ứng dụng đọc báo mới online, tổng hợp tin tức siêu hot, siêu tốc độ 24 giờ."></meta>
            </Head>
            <div>
                <HeaderTop />
                <HeaderMenu />
                <div className={Style.styleMainPgae}>
                    <div className={Style.MainPage}>
                        <p className={Style.titlePrivacy}>ĐIỀU KHOẢN SỬ DỤNG</p>
                        <div className={Style.spandElement} />
                        <div className={Style.valuePrivacy}>
                            <p>Thỏa thuận sử dụng và bảo mật này (sau đây gọi là “Thỏa thuận”) được lập ra bởi và giữa bạn (“bạn”) và Tin tức 247 (hoặc “chúng tôi”) về việc sử dụng bất kỳ hay tất cả các loại dịch vụ (“Dịch vụ”) của tintuc24h (Tin tức 247) của bạn. Bằng việc sử dụng Dịch vụ, bạn đồng ý chịu ràng buộc bởi những điều khoản và điều kiện này.</p>
                            <p>Dịch vụ được thiết kế để giúp bạn tiếp cận thông tin tin tức được liên kết từ các trang không do Tin tức 247 sở hữu hoặc quản lý. Cụ thể, Dịch vụ cung cấp những mô tả ngắn gọn về các bài báo để giúp bạn xác định nội dung chính của bài báo mà bạn quan tâm. Khi bạn lựa chọn một bài báo, bạn sẽ được kết nối tới website chứa bài báo đó (sau đây gọi là “website được kết nối”).</p>
                            <p>Thuật ngữ “bạn” để chỉ tất cả các cá nhân và/hoặc các tổ chức truy cập vào Tin tức 247 vì bất kỳ lý do nào.</p>
                            <p className={Style.styleTitleElement}>I. Thỏa thuận sử dụng</p>
                            <p className={Style.styleTitleElement}>I.1. Quyền gắn với Dịch vụ.</p>
                            <p className={Style.styleElement_privacy}>Tin tức 247 sở hữu và duy trì mọi quyền lợi sở hữu trí tuệ đối với Dịch vụ của mình nhưng Tin tức 247 không tuyên bố là mình có quyền sở hữu trí tuệ đối với các bài báo tại các website được kết nối. Các quyền sở hữu trí tuệ này thuộc về các website được kết nối.</p>
                            <p className={Style.styleElement_privacy}>Tin tức 247 cũng không chịu trách nhiệm về các thông tin, dịch vụ và nội dung của những website được kết nối. Bạn là người chịu hoàn toàn trách nhiệm trong việc sử dụng, khai thác, cung cấp thông tin cá nhân, v.v... cho các website này.</p>
                            <p className={Style.styleTitleElement}>I.2. Sử dụng và chấm dứt sử dụng Dịch vụ.</p>
                            <p className={Style.styleElement_privacy}>Bạn chỉ có thể sử dụng nội dung của Dịch vụ cho mục đích cá nhân của riêng bạn (cụ thể là không dùng cho mục đích thương mại) và không được sao chép, thay đổi, sửa đổi, tạo ra các tác phẩm phái sinh hoặc thể hiện một cách công khai bất kỳ nội dung nào của Dịch vụ. Chẳng hạn, bạn không được sử dụng Dịch vụ để bán một sản phẩm hay dịch vụ; hay sử dụng Dịch vụ để tăng số lượt truy cập tới trang web của bạn vì mục đích thương mại; hay sử dụng các kết quả từ Dịch vụ rồi định dạng lại và thể hiện công khai chúng, hay sử dụng các công cụ hoặc tài liệu khác để theo dõi hay sao chép bất kỳ nội dung nào từ Dịch vụ. Nếu bạn không chắc liệu dự định sử dụng Dịch vụ của bạn có được phép hay không, xin vui lòng liên hệ với chúng tôi.</p>
                            <p className={Style.styleElement_privacy}>Tin tức 247 sẽ không chịu trách nhiệm đối với việc gián đoạn, ngừng hoạt động, mất hoặc sai lệch dữ liệu từ những hành động tấn công của cá nhân hay tổ chức nào khác, cũng như về các sự cố kỹ thuật trong khi cung cấp Dịch vụ. Tin tức 247 cũng không chịu trách nhiệm về các tổn thất phát sinh từ việc sử dụng Dịch vụ hoặc từ sự tương tác giữa bạn với những người dùng khác.</p>
                            <p className={Style.styleElement_privacy}>Tin tức 247 có quyền đơn phương đình chỉ hoặc chấm dứt Dịch vụ hoặc sự truy cập của bạn tới Dịch vụ.</p>
                            <p className={Style.styleTitleElement}>II. Thỏa thuận bảo mật</p>
                            <p className={Style.styleElement_privacy}>Chúng tôi luôn hiểu rằng người dùng rất quan tâm đến việc những thông tin cá nhân mà người dùng đã cung cấp cho chúng tôi được bảo mật và sử dụng như thế nào. Chúng tôi cam kết những thông tin này sẽ được chúng tôi nỗ lực hết sức để bảo mật. Chúng tôi đảm bảo với người dùng thông tin người dùng một cách hợp lý và có cân nhắc nhằm không ngừng nâng cao chất lượng dịch vụ và mang đến cho người dùng những trải nghiệm tốt nhất.</p>
                            <p className={Style.styleTitleElement}>II.1. Những thông tin mà chúng tôi thu thập</p>
                            <p className={Style.styleElement_privacy}>Mỗi khi bạn truy cập Dịch vụ, hệ thống của Tin tức 247 sẽ sử dụng cookies và các kỹ thuật khác để lưu lại những hoạt động của bạn trên Tin tức 247. Server của Tin tức 247 cũng sẽ tự động ghi lại thông tin khi bạn truy cập trang này và sử dụng các Dịch vụ bao gồm nhưng không giới hạn URL, địa chỉ IP, loại trình duyệt, ngôn ngữ, ngày giờ truy cập hoặc sử dụng Dịch vụ.</p>
                            <p className={Style.styleElement_privacy}>Tin tức 247 không giữ mật khẩu của người dùng! Mọi mật khẩu được sử dụng bởi ứng dụng Tin tức 247 sẽ luôn được lưu trữ trên thiết bị của người dùng và sẽ chỉ được sử dụng để truy cập dịch vụ mà người dùng dự định sử dụng. Tin tức 247 không thu thập những mật khẩu này và không lưu trữ chúng trên máy chủ.</p>
                            <p className={Style.styleTitleElement}>II.2. Sử dụng thông tin Chúng tôi sử dụng thông tin cá nhân của bạn để nâng cao chất lượng của Dịch vụ, để gửi tới bạn các thông báo về dịch vụ mới của Tin tức 247 hoặc dịch vụ của bên thứ ba mà chúng tôi tin rằng sẽ hữu ích với bạn.</p>
                            <p className={Style.styleElement_privacy}>Chúng tôi có thể sử dụng thông tin cá nhân của bạn trong việc điều tra, nghiên cứu hoặc phân tích để vận hành và nâng cấp các kỹ thuật của Tin tức 247 và Dịch vụ.</p>
                            <p className={Style.styleElement_privacy}>Về nguyên tắc, chúng tôi không cung cấp cho bên thứ ba thông tin cá nhân của bạn trừ các trường hợp sau:</p>
                            <p className={Style.styleElement_privacy}>Bạn đồng ý để chúng tôi cung cấp thông tin cá nhân của bạn cho bên thứ ba; và/hoặc Chúng tôi cho rằng việc cung cấp thông tin cá nhân của bạn cho bên thứ ba là cần thiết, ví dụ nhằm tuân theo các yêu cầu pháp lý, ngăn chặn tội phạm hoặc bảo vệ an ninh quốc gia, hay bảo vệ an toàn cá nhân của những người sử dụng hoặc công chúng, v.v...; và/hoặc Bên thứ ba là đối tượng mua lại toàn bộ hay phần lớn pháp nhân sở hữu Tin tức 247 và Dịch vụ; và/hoặc Thông tin cá nhân là thông tin vô danh về khách ghé thăm Tin tức 247. Chúng tôi có thể chia sẻ loại thông tin này cho bên thứ ba để họ có thể tìm hiểu về các loại khách tới thăm Tin tức 247 và cách họ sử dụng Dịch vụ.</p>
                            <p className={Style.styleTitleElement}>II.3 Chúng tôi sử dụng dữ liệu của bạn như thế nào?</p>
                            <p className={Style.styleElement_privacy}>Chúng tôi cam kết chỉ sử dụng thông tin người dùng để:</p>
                            <p className={Style.styleElement_privacy}>- Cung cấp các Dịch vụ mà bạn yêu cầu. Đảm bảo dịch vụ chạy ổn định và chính xác.</p>
                            <p className={Style.styleElement_privacy}>- Chúng tôi cũng sử dụng thông tin chúng tôi thu thập theo những cách được mô tả cho bạn tại thời điểm thu thập hoặc với sự đồng ý của bạn.</p>
                            <p className={Style.styleElement_privacy}>- Chúng tôi không chia sẻ thông tin của bạn với bất kỳ bên thứ ba nào hoặc chúng tôi được hướng dẫn bởi tòa án, cơ quan có thẩm quyền hoặc bị pháp luật ép buộc.</p>
                            <p className={Style.styleTitleElement}>II.4 Chúng tôi lưu trữ dữ liệu của bạn trong bao lâu?</p>
                            <p className={Style.styleElement_privacy}>Chúng tôi chỉ lưu trữ dữ liệu thực sự cần thiết để ứng dụng của chúng tôi hoạt động bình thường. Xóa một số dữ liệu này sẽ làm gián đoạn chức năng ứng dụng của chúng tôi. Tuy nhiên, nếu bạn không muốn chúng tôi lưu trữ dữ liệu của bạn, bạn có thể gửi cho chúng tôi yêu cầu của bạn tới docbao24h.me@gmail.com và chúng tôi sẽ xóa vĩnh viễn dữ liệu đó khỏi cơ sở dữ liệu của chúng tôi.</p>
                            <p className={Style.styleTitleElement}>II.5 Chúng tôi chia sẻ dữ liệu của bạn như thế nào?</p>
                            <p className={Style.styleElement_privacy}>Chúng tôi sẽ không bao giờ chuyển, bán, tạo bản sao hoặc chia sẻ bất kỳ dữ liệu nào của bạn được ứng dụng lưu trữ cho các dịch vụ hoặc công ty bên thứ ba trừ khi thực sự cần thiết để cho phép ứng dụng hoạt động bình thường.</p>
                            <p className={Style.styleTitleElement}>II.6. Bảo mật Mật khẩu truy cập tài khoản của tất cả các thành viên của Tin tức 247 đều được Tin tức 247 bảo vệ. Tuy nhiên, an ninh mạng không an toàn tuyệt đối, vì thế Tin tức 247 không chịu trách nhiệm về những thiệt hại có thể xảy ra.</p>
                            <p className={Style.styleTitleElement}>II.7 Việc sử dụng thông tin khác hàng khi đăng nhập</p>
                            <p className={Style.styleElement_privacy}>1. Khi bạn đăng nhập qua facebook chúng tôi sẽ lấy tên và email</p>
                            <p className={Style.styleElement_privacy}>2. Chúng tôi lấy tên và email để định danh và giúp bạn có thể bình luận.</p>
                            <p className={Style.styleElement_privacy}>3. Khi bạn muốn xoá tài khoản cũng như các thông tin cá nhân hãy nhắn trực tiếp cho chúng tôi qua email <a href="mailto:yen@umedia.com.vn" style={{ color: "#00cc66" }}>yen@umedia.com.vn</a></p>
                            <p className={Style.styleTitleElement}>NGÀY CẬP NHẬT: 04/02/2023</p>
                        </div>
                    </div>
                    <div className={Style.spandElement} />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default PrivacyComponent;
