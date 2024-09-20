import { useEffect, useRef } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Product_detail.css";
function ProductDetail() {
  const elementRef = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Do something when the element is in view
        }
      });
    });

    if (elementRef.current) {
      observer.current.observe(elementRef.current);
    }

    return () => {
      if (observer.current && elementRef.current) {
        observer.current.unobserve(elementRef.current);  // Ensure element exists
      }
    };
  }, []);
  return (
    <div ref={elementRef}>
      <Header />
      <div className="banner-product"></div>
      <div className="content-area-product">
        <div className="content-product-wrapper">
          <h1 className="title-description">Bạn có đang cảm thấy:</h1>
          <ul className="list-description">
            <li>
              Mất quá nhiều thời gian để tìm kiếm một tài liệu quan trọng?
            </li>
            <li>
              Choáng ngợp trước lượng thông tin khổng lồ trên các thiết bị số?
            </li>
            <li>
              Muốn nâng cao hiệu suất làm việc nhưng không biết bắt đầu từ đâu?
            </li>
            <li>
              Cuộc sống số của bạn đang trở nên lộn xộn và ảnh hưởng đến chất
              lượng cuộc sống?
            </li>
          </ul>
          <p>
            Nếu câu trả lời là CÓ, thì "Digital Life | Tạo lập thói quen tài
            liệu hóa & hệ thống hóa cuộc sống số" chính là giải pháp dành cho
            bạn.
          </p>
          <div className="button-solution">Giải Pháp</div>
        </div>
      </div>
      <div className="banner-product-2">
        <div className="wrapper-text">
          <div className="author-lesson">by Mera Cao</div>
          <div className="title-value">
            Giá trị thực tế <br />
            của Digital Life
          </div>
        </div>
      </div>
      <div className="content-area-product">
        <div className="content-product-wrapper">
          <h1 className="title-description">
            Những thứ Digital Life sẽ mang lại cho bạn:
          </h1>
          <ol className="list-description">
            <li>Loại bỏ những thứ không cần thiết, giữ lại giá trị thực sự:</li>
            <div>
              Cuộc sống số hiện nay dễ khiến chúng ta bị quá tải bởi thông tin.
              Thử thách này sẽ giúp bạn học cách lọc bỏ những thứ không quan
              trọng, chỉ giữ lại những gì thực sự có giá trị để cuộc sống số của
              bạn gọn gàng hơn.
            </div>
            <li>Tái tổ chức và kiểm soát digital life hiệu quả:</li>
            <div>
              Từ điện thoại, laptop đến các ứng dụng bạn đang dùng sẽ được sắp
              xếp lại một cách khoa học. Điều này không chỉ giúp bạn dễ dàng
              kiểm soát thông tin mà còn giúp tiết kiệm thời gian, tránh tình
              trạng "lạc trôi" trong chính dữ liệu của mình.
            </div>
            <li>Tài liệu hóa và hệ thống hóa những điều quan trọng:</li>
            <div>
              Bạn sẽ học cách ghi chép, lưu trữ và tổ chức thông tin một cách
              bài bản. Điều này không chỉ giúp bạn dễ dàng theo dõi và phát
              triển bản thân mà còn giúp bạn có một nền tảng vững chắc trong
              công việc và học tập.
            </div>
            <li>
              Xây dựng nền tảng thông tin, dữ liệu vững chắc, sẵn sàng cho cơ
              hội mới:
            </li>
            <div>
              Khi mọi thứ được sắp xếp gọn gàng và có tổ chức, bạn sẽ cảm thấy
              tự tin hơn trong công việc. Điều này không chỉ giúp bạn làm việc
              chuyên nghiệp mà còn mở ra nhiều cơ hội thăng tiến trong sự
              nghiệp.
            </div>
            <li>Hạn chế rủi ro mất mát dữ liệu, bảo vệ tài sản số:</li>
            <div>
              Chương trình sẽ giúp bạn nắm vững cách bảo vệ dữ liệu quan trọng
              và chuẩn bị sẵn các phương án dự phòng. Điều này cực kỳ quan trọng
              để đảm bảo dữ liệu của bạn luôn an toàn, tránh những rủi ro không
              đáng có.
            </div>
          </ol>
          <div className="button-solution">Đăng Ký</div>
        </div>
      </div>
      <div className="banner-product-3"></div>
      <div className="content-area-product">
        <div className="content-product-wrapper">
          <h1 className="title-description">
            Các tính năng nổi bật của Digital Life:
          </h1>
          <p>
            Khi thực hiện thử thách quản lý và sắp xếp cuộc sống số, việc hệ
            thống hóa các bước thực hiện một cách logic, dễ theo dõi là vô cùng
            quan trọng. Để giúp bạn bắt đầu hành trình này, team mình đã tạo ra
            các sheet với thứ tự hợp lý, từ việc loại bỏ những thứ không cần
            thiết, tái tổ chức, tài liệu hóa, đến việc bảo mật và xây dựng nền
            tảng sự nghiệp.
          </p>
          <ul className="list-description">
            <li>
              Home: Nơi cung cấp cái nhìn tổng quan về toàn bộ chương trình,
              hướng dẫn chi tiết cách sử dụng và lưu ý những thông tin quan
              trọng cần biết.
            </li>

            <li>
              Account & Paper: Tập trung vào việc quản lý tài khoản trực tuyến,
              lưu trữ giấy tờ quan trọng và xây dựng thói quen tốt trong việc tổ
              chức, quản lý thông tin hàng ngày một cách hiệu quả.
            </li>
            <li>
              Declutter: Liệt kê và loại bỏ những thứ không cần thiết, giữ lại
              những gì thực sự có giá trị. Bước này có thể bao gồm việc xóa các
              tệp không dùng trên laptop, điện thoại, Google Drive hoặc email.
              Đây là giai đoạn làm sạch không gian số, tạo tiền đề cho sự tập
              trung và tổ chức trong các bước tiếp theo.
            </li>
            <li>
              Organize & Document: Tái tổ chức và kiểm soát cuộc sống số một
              cách hiệu quả hơn bằng việc sắp xếp lại thư mục, ứng dụng, email
              và thông tin trên các thiết bị. Điều này giúp bạn dễ dàng truy cập
              thông tin cần thiết một cách nhanh chóng và tiện lợi.
            </li>
            <li>
              Career Archive: Xây dựng nền tảng sự nghiệp vững chắc bằng cách
              liệt kê và tổ chức các tài liệu, hồ sơ liên quan đến công việc.
              Điều này giúp bạn sẵn sàng nắm bắt mọi cơ hội thăng tiến, không bỏ
              lỡ bất kỳ dịp nào do thiếu sự chuẩn bị.
            </li>
            <li>
              Expertise: Xây dựng cơ sở kiến thức và tạo hệ thống quản lý tài
              liệu, giúp bạn duy trì và phát triển kiến thức chuyên môn một cách
              bền vững.
            </li>
            <li>
              Weekly Recap: Giúp bạn đánh giá, nhìn lại những điểm mạnh và yếu
              trong tuần, từ đó điều chỉnh kế hoạch để cải thiện hiệu quả công
              việc trong thời gian tới.
            </li>
          </ul>
          <div className="button-solution">Đăng Ký</div>
        </div>
      </div>
      <div className="price-area-product">
        <div className="price-product-wrapper">
          <p className="title-price">chi phí Mini Course: 399,99đ</p>
          <p>
            Để truy cập toàn bộ nội dung Digital Life không giới hạn thời gian.
          </p>
          <ul className="list-feature">
            <li>Template Digital Life All-in-one.</li>
            <li>Video hướng dẫn chi tiết cách sử dụng Template.</li>
            <li>Mỗi sheet có 1 bài viết về tư duy các từ khóa đại diện.</li>
            <li>Hình ảnh các mẫu ví dụ trực quan để làm theo.</li>
            <li>
              Video hướng dẫn cách sử dụng Chat GPT để liệt kê các đầu mục giúp
              tài liệu hóa, hệ thống hóa cho sheet Career Archive và Expertise
              phù hợp với mỗi cá nhân.
            </li>
          </ul>
          <div
            className="button-solution"
            onClick={() => {
              window.location.href =
                "https://meracao.substack.com/p/digital-life-30-ngay-thu-thach-tai";
            }}
          >
            Đăng Ký
          </div>
        </div>
      </div>
      <div className="info-author">
        <div className="banner-product-4"></div>
        <div className="description-author">
          <h1 className="title-description">người thiết kế chương trình</h1>
          <p>Mera Cao (Multipotentiality, Solopreneur)</p>
          <p>
            Production Team Leader tại Cấy Nền Radio (420K+ Follower) trên các
            nền tảng mxh.
          </p>
          <p>
            Sáng tạo nội dung tại Mera Cao (120k+ Followers) trên các nền tảng
            mxh.
          </p>
          <p>
            Hơn 9 năm kinh nghiệm vị trí Leader (Team Leader, Head of Branch,
            Project Manager, General Manager) tại các Tổ chức Phi lợi nhuận và
            Start-up về các ngành hàng như FnB, Home Appliances, Education.
          </p>
          <p>
            Hơn 4 năm kinh nghiệm làm việc cùng GS. Phan Văn Trường - Cố vấn
            Chính phủ Pháp về Thương mại Quốc tế.
          </p>
          <p>
            Đạt học bổng toàn phần chương trình “Becoming a Solopreneur Program
            2024” bởi chị Linh Phan.
          </p>
          <p>
            Đại sứ truyền thông: Vietnam Young Lions 2023, AIESEC Vietnam,
            Digital Creatory 2023,…
          </p>
          <p>
            Team lead điều phối các dự án 5000 - 10.000 người tham gia trực
            tiếp. (tiếng anh, du lịch, văn hoá lịch sử, dancing,…)
          </p>
          <p>
            Speaker chia sẻ tại các dự án, CLB tại các trường Đại học như FTU
            II, trường THPT Chuyên Lê Hồng Phong và Phổ Thông Năng Khiếu - Đại
            học Quốc Gia TP HCM (The Bridge Project), ĐH Ngân hàng TP HCM (Mầm
            sống), ĐH Mở TP HCM (YOUM), Trường Quốc tế - Đại học Quốc gia Hà Nội
            (For Future),…
          </p>
          <div className="button-solution">Đăng Ký</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;
