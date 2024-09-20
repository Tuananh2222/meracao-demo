import Header from "@/Layout/Header/Header";
import  { useEffect, useRef } from "react";


import digitalLife from "../../assets/img/digital-life.jpg";
import avatar2 from "../../assets/img/avatar2.png";
import Footer from "@/Layout/Footer/Footer";
import { useNavigate } from "react-router-dom";


function Home() {
  const h1Ref = useRef(null);
  const hiddenRefs = useRef([]);
  const navigate = useNavigate();

  const handleChangePage = () => {
    navigate("/product-detail")
  }

  useEffect(() => {
    const animeTitle = (element) => {
      const arrayText = element.innerHTML.split("");
      element.innerHTML = "";
      arrayText.forEach((letter, indice) => {
        setTimeout(() => (element.innerHTML += letter), 135 * indice);
      });
      element.classList.add("animate__shakeY");
    };

    if (h1Ref.current) {
      animeTitle(h1Ref.current);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    hiddenRefs.current.forEach((el) => observer.observe(el));

    // Cleanup observer on component unmount
    return () => {
      hiddenRefs.current.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Header />

      <div className="banner">
        <h1 className="animate__animated title" ref={h1Ref}>
          Mera Cao
        </h1>
      </div>

      <div className="content-area">
        <div
          className="wrapper hidden"
          ref={(el) => hiddenRefs.current.push(el)}
        >
          <div className="content">
            <h2>About me</h2>
            <p>
              Chào bạn, mình tên là Cao Hồng Phương, một multipotentiality,
              solopreneur với niềm đam mê viết lách và khởi tạo những dự án. Tốt
              nghiệp ngành Luật, mình đã trải qua hơn 9 năm kinh nghiệm trong
              các vị trí như Project Manager, Team Leader và General Manager tại
              nhiều tổ chức NGO và start-up.
            </p>
            <p>
              Hai từ khóa mình luôn hướng đến là "Document & Systematize" – với
              mục tiêu giúp mọi người phát triển bản thân thông qua việc hệ
              thống hóa, sáng tạo nội dung, và chia sẻ những giá trị cá nhân.
              Mình đặc biệt yêu thích việc trải nghiệm thực tế, sau đó đúc kết
              thành những bài học đơn giản, dễ hiểu để chia sẻ với cộng đồng,
              giúp mọi người dễ dàng áp dụng và phát triển
            </p>
          </div>
          <div className="image-area">
            <img src={avatar2} alt="image 1" />
          </div>
        </div>
        <div
          className="wrapper wraper-reverse hidden"
          ref={(el) => hiddenRefs.current.push(el)}
        >
          <div className="image-area">
            <img
              src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7e6f38f7-a4b6-41aa-bb56-95195968a926_3840x2160.png"
              alt="image 1"
            />
          </div>

          <div className="content">
            <h2>EXPERIENCES</h2>
            <p>
              Production Team Leader tại{" "}
              <a
                href="https://www.tiktok.com/@caynenradio"
                className="link-other"
              >
                Cấy Nền Radio
              </a>{" "}
              (420K+ Follower) trên các nền tảng Mạng Xã Hội.
            </p>
            <p>
              Sáng tạo nội dung tại <a className="link-other">Mera Cao</a>{" "}
              (120k+ Followers) trên các nền tảng mxh.
            </p>
            <p>
              Hơn 9 năm kinh nghiệm vị trí <a className="link-other">Leader</a>{" "}
              (Team Leader, Head of Branch, Project Manager, General Manager)
              tại các Tổ chức Phi lợi nhuận và Start-up về các ngành hàng như
              FnB, Home Appliances, Education.
            </p>
            <p>
              Đại sứ truyền thông: Vietnam Young Lions 2023, AIESEC Vietnam,
              Digital Creatory 2023,…
            </p>
            <p>
              <a className="link-other">Team lead</a> điều phối các dự án 5000 -
              10.000 người tham gia trực tiếp. (tiếng anh, du lịch, văn hoá lịch
              sử, dancing,…)
            </p>
            <p>
              Hơn 4 năm kinh nghiệm làm việc cùng{" "}
              <a
                href="https://www.google.com/search?gs_ssp=eJzj4tFP1zc0Mk7JNTQzLzJg9BJLL1YoyEjMUyg70pynUFJ0bMPD3XPz0gHlJA5a&q=gs+phan+v%C4%83n+tr%C6%B0%E1%BB%9Dng&oq=gs+phan+v%C4%83n+tr&aqs=chrome.1.0i355i512j46i512j69i57j0i22i30l2j69i60j69i61l2.7890j0j4&sourceid=chrome&ie=UTF-8"
                className="link-other"
              >
                GS. Phan Văn Trường - Cố vấn Chính phủ Pháp về Thương mại Quốc
                tế.
              </a>
            </p>
            <p>
              Đạt học bổng toàn phần chương trình “Becoming a Solopreneur
              Program 2024” bởi chị
              <a
                href="https://www.freelancetofreedom.info/about"
                className="link-other"
              >
                {" "}
                Linh Phan
              </a>
              .
            </p>

            <p>
              Sáng lập dự án{" "}
              <a
                href="https://insightfulcreations.substack.com/"
                className="link-other"
              >
                {" "}
                Insightful Creations
              </a>{" "}
              với hơn 30 khách mời là các chuyên gia và content creator (100K -
              1M Follower).
            </p>
            <p>
              Đồng sáng lập dự án Cộng đồng{" "}
              <a
                href="https://www.facebook.com/groups/5696753087035302"
                className="link-other"
              >
                {" "}
                Vũ trụ Creator
              </a>{" "}
              hơn 17.000 thành viên.
            </p>
            <p>
              Speaker chia sẻ tại các dự án, CLB tại các trường Đại học như FTU
              II, trường THPT Chuyên Lê Hồng Phong và Phổ Thông Năng Khiếu - Đại
              học Quốc Gia TP HCM (The Bridge Project), ĐH Ngân hàng TP HCM (Mầm
              sống), ĐH Mở TP HCM (YOUM), Trường Quốc tế - Đại học Quốc gia Hà
              Nội (For Future),…
            </p>
            <p>
              Mentor tại <a className="link-other"> Dự án Cộng đồng</a> Give It
              Back (Lead The Change), Menteelogy (YBox), SYS,…
            </p>
            <p>
              Top 15 sinh viên được chọn tham gia{" "}
              <a className="link-other"> Cultural Exchange Program</a> giữa Vinh
              University và the University of South Florida (Mỹ).
            </p>
          </div>
        </div>
      </div>

      <div
        className="content-area hidden"
        ref={(el) => hiddenRefs.current.push(el)}
      >
        <h2 className="feed">Mera Library</h2>

        <div className="flex-div">
          <div
            className="card"
            onClick={() => handleChangePage()}
          >
            <img src={digitalLife} alt="desert photos 01" />

            <span>
              Digital Life | Tạo lập thói quen tài liệu hóa & hệ thống hóa cuộc
              sống số
            </span>

            <span className="description">
              Giúp bạn thay đổi thói quen, tối ưu hóa thời gian, và xây dựng một
              hệ thống thông tin cá nhân vững chắc, từ đó nâng cao hiệu suất học
              tập và làm việc.
            </span>
          </div>
          <div
            className="card"
            onClick={() => {
              window.location.href =
                "https://meracao.substack.com/p/course-document-create-your-life";
            }}
          >
            <img
              src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F20b3dc72-2ba2-42e9-9070-abb5d6caa0d5_3984x2656.png"
              alt="polaroid view"
            />

            <span>Document & Create Your Life | Bằng viết hoặc tạo video</span>

            <span className="description">
              Dành cho những ai muốn phát triển bản thân, sáng tạo nội dung
              thông qua việc tài liệu hóa và chia sẻ những trải nghiệm cá nhân.
            </span>
          </div>
          <div
            className="card"
            onClick={() => {
              window.location.href =
                "https://meracao.substack.com/p/solo-expert-system-he-thong";
            }}
          >
            <img
              src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F272c9a2f-2620-419f-bf3b-0948759d61f7_3984x2656.png"
              alt="Solo Expert System | Hệ thống quản lý chuyên nghiệp với bộ công cụ tối ưu"
            />

            <span>
              Solo Expert System | Hệ thống quản lý chuyên nghiệp với bộ công cụ
              tối ưu
            </span>

            <span className="description">
              Giúp bạn tinh gọn các quy trình, tiết kiệm thời gian và tập trung
              vào những outcome đầu ra, mang đến cho bạn một trải nghiệm quản lý
              toàn diện và chuyên nghiệp.
            </span>
          </div>
          <div
            className="card"
            onClick={() => {
              window.location.href =
                "https://meracao.substack.com/p/xay-dung-blog-bang-substack-trong";
            }}
          >
            <img
              src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9345101d-56c9-4e1d-b333-3d5fdf61a580_3984x2656.png"
              alt="making off"
            />

            <span>Substack Solutions | Giải pháp toàn diện dành cho bạn</span>

            <span className="description">
              Substack Solutions mang đến các dịch vụ và giải pháp toàn diện, từ
              việc thiết kế mẫu cho đến tư vấn chi tiết và đồng hành dựa trên
              từng nhu cầu của bạn
            </span>
          </div>
          <div
            className="card"
            onClick={() => {
              window.location.href =
                "https://meracao.substack.com/p/d-and-s-paid-community-phat-trien";
            }}
          >
            <img
              src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5b516ad1-7da9-43ea-9e87-1357686b292d_3984x2656.png"
              alt="making off"
            />

            <span>
              D&S Paid Community | Phát triển bản thân thông qua Tài liệu hóa và
              Hệ thống hóa
            </span>

            <span className="description">
              Mang lại cho bạn một không gian thực hành và xây dựng thói quen
              Tài liệu hóa và Hệ thống hóa một cách nhất quán và có kết quả.
            </span>
          </div>
          <div
            className="card"
            onClick={() => {
              window.location.href =
                "https://meracao.substack.com/p/ang-ky-tu-van-mentor-11-mien-phi";
            }}
          >
            <img
              src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb55d3e55-eeac-4893-9923-e2763c84af6e_3047x2031.png"
              alt="making off"
            />
            <span>Mentor 1:1 | Đăng ký tư vấn miễn phí 60p cùng Mera Cao</span>

            <span className="description">
              Mình đã từng ở vị trí mà bạn đang đứng - mông lung, chênh vênh và
              thiếu đi niềm tin vào bản thân. Nhưng qua từng bước chân dò dẫm,
              qua những lần vấp ngã và tự mình đứng dậy, mình đã học được cách
              làm
            </span>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default Home;
