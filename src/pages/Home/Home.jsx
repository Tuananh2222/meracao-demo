import AnimatedValue from "@/components/animatedValue";
import avatar2 from "../../assets/img/avatar-border.png";
import avatar from "../../assets/img/avatar.png";
import avatarNoBG from "../../assets/img/avatar-nobg.png";
import { FaConciergeBell, FaFolderOpen } from "react-icons/fa";
import show1 from "../../assets/img/show1.png";
import show2 from "../../assets/img/show2.png";
import show3 from "../../assets/img/show3.png";
import show4 from "../../assets/img/show4.png";
import show5 from "../../assets/img/show5.png";
import show6 from "../../assets/img/show6.png";
import show7 from "../../assets/img/show7.png";
import show8 from "../../assets/img/show8.png";
import TestimonialSlider from "@/Layout/Testimonials";
function Home() {
  const handleSubmitRegister = () => {
    window.location.href =
      "https://meracao.substack.com/account?utm_medium=web&utm_source=magaziney-home-page&next=https%3A%2F%2Fmeracao.substack.com%2F";
  };
  return (
    <>
      <div className="banner-wrapper">
        <header>
          <div className="social-links">
            <a href="https://www.instagram.com/mera.cao/">Instagram</a> /<a href="https://meracao.substack.com/">Substack</a> /
            <a href="https://www.threads.net/@mera.cao">Threads</a> /<a href="https://www.youtube.com/@meracao">Youtube</a>
          </div>
        </header>

        <div className="main-banner">
          <div className="profile-picture">
            <img src={avatar2} alt="Mera Cao" />

            <div className="name-badge">
              <span className="name-author">Mera Cao 👋🏼</span>
            </div>
          </div>
          <h1 className="slogan-text">
            Simplify your life and workflow with Document & Systematize
          </h1>
          <button className="latest-shots">Latest Shots</button>
        </div>
      </div>
      <div className="outstanding-numbers">
        <div className="outstanding-container">
          <div className="stat">
            <div className="followers">
              &gt;
              <AnimatedValue start={0} end={120000} duration={1500} />
            </div>
            <span>Followers</span>
          </div>
          <div className="stat">
            <div className="followers">
              &gt;
              <AnimatedValue start={0} end={100} duration={1500} />
            </div>
            <span>Mentees, Clients</span>
          </div>
          <div className="stat">
            <div className="followers">
              &gt;
              <AnimatedValue start={0} end={12000} duration={1500} />
            </div>
            <span>Blog Views/Month</span>
          </div>
          <div className="stat">
            <div className="followers">
              &gt;
              <AnimatedValue start={0} end={100} duration={1500} />
            </div>
            <span>Speaker, Host</span>
          </div>
        </div>
      </div>
      <div className="about-wrapper">
        <div className="about-container">
          <div className="header text-center">
            <h1 className="main-title">About Me</h1>
          </div>
          <div className="grid">
            <div className="image-wrapper">
              <img src={avatarNoBG} alt="Image 1" />
            </div>
            <div className="content-box">
              <h1 className="section-title">Thông tin ngắn gọn</h1>
              <p className="section-text">
                <p>
                  Production Team Leader tại <i>Cấy Nền Radio</i> (420K+
                  Follower).
                </p>
                <p>Sáng tạo nội dung tại Mera Cao (120k+ Followers).</p>
                <p>
                  Đại sứ truyền thông: Vietnam Young Lions 2023, Digital
                  Creatory 2023,…
                </p>
                <p>
                  Hơn 4 năm kinh nghiệm làm việc cùng <i>GS. Phan Văn Trường</i>{" "}
                  - Cố vấn Chính phủ Pháp về Thương mại Quốc tế.
                </p>
                <p>
                  Đồng sáng lập dự án Cộng đồng <i>Vũ trụ Creator</i> hơn 17.000
                  thành viên.
                </p>
              </p>
            </div>
          </div>
          <div className="experience-container">
            <h1>Các chương trình mình từng làm Speak, Host</h1>
            <div className="grid-image">
              <div className="card">
                <div className="card__img">
                  <img src={show1} alt="Big Ben" />
                </div>
              </div>
              <div className="card">
                <div className="card__img">
                  <img src={show2} alt="Big Ben" />
                </div>
              </div>
              <div className="card">
                <div className="card__img">
                  <img src={show3} alt="Big Ben" />
                </div>
              </div>
              <div className="card">
                <div className="card__img">
                  <img src={show4} alt="Big Ben" />
                </div>
              </div>
              <div className="card">
                <div className="card__img">
                  <img src={show5} alt="Big Ben" />
                </div>
              </div>
              <div className="card">
                <div className="card__img">
                  <img src={show6} alt="Big Ben" />
                </div>
              </div>
              <div className="card">
                <div className="card__img">
                  <img src={show7} alt="Big Ben" />
                </div>
              </div>
              <div className="card">
                <div className="card__img">
                  <img src={show8} alt="Big Ben" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-wrapper">
        <div className="product-container">
          <h2 className="feed">Mera Library</h2>
          <div className="flex-div">
            <div
              className="card-product"
              onClick={() => {
                window.location.href =
                  "https://meracao.substack.com/p/d-and-s-paid-community-phat-trien";
              }}
            >
              <img
                src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5b516ad1-7da9-43ea-9e87-1357686b292d_3984x2656.png"
                alt="making off"
              />
              <div className="info-product">
                <span>
                  <FaConciergeBell /> JOIN NOW | Document & Systematize
                  Community
                </span>

                <span className="description">
                  Mang lại cho bạn một không gian thực hành và xây dựng thói
                  quen Tài liệu hóa và Hệ thống hóa một cách nhất quán và có kết
                  quả.
                </span>
              </div>
            </div>
            <div
              className="card-product"
              onClick={() => {
                window.location.href =
                  "https://meracao.substack.com/p/solo-expert-system-he-thong";
              }}
            >
              <img
                src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F272c9a2f-2620-419f-bf3b-0948759d61f7_3984x2656.png"
                alt="Solo Expert System | Hệ thống quản lý chuyên nghiệp với bộ công cụ tối ưu"
              />
              <div className="info-product">
                <span>
                  <FaFolderOpen /> Template | Hệ thống hỗ trợ quản lý toàn diện
                  cho Solo Creator, Solo Expert
                </span>

                <span className="description">
                  Giúp bạn tinh gọn các quy trình, tiết kiệm thời gian và tập
                  trung vào những outcome đầu ra, mang đến cho bạn một trải
                  nghiệm quản lý toàn diện và chuyên nghiệp.
                </span>
              </div>
            </div>
            <div
              className="card-product"
              onClick={() => {
                window.location.href =
                  "https://meracao.substack.com/p/ang-ky-tu-van-mentor-11-mien-phi";
              }}
            >
              <img
                src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdc907e77-fa34-47e5-b083-4015f37798cb_3984x2656.png"
                alt="making off"
              />
              <div className="info-product">
                <span>
                  Mentor 1:1 | Từ ý tưởng đến hệ thống với Substack và Instagram
                </span>

                <span className="description">
                  Dành cho những ai muốn phát triển bản thân, sáng tạo nội dung
                  thông qua việc tài liệu hóa và chia sẻ những trải nghiệm cá
                  nhân.
                </span>
              </div>
            </div>
            <div
              className="card-product"
              onClick={() => {
                window.location.href =
                  "https://meracao.substack.com/p/xay-dung-blog-bang-substack-trong";
              }}
            >
              <img
                src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9345101d-56c9-4e1d-b333-3d5fdf61a580_3984x2656.png"
                alt="making off"
              />
              <div className="info-product">
                <span>
                  Course | Tạo Blog cá nhân chuyên nghiệp từ con số 0 bằng
                  Substack
                </span>

                <span className="description">
                  Nếu bạn đã từng trải qua những khoảnh khắc đáng nhớ, tại sao
                  không viết chúng xuống? Nếu bạn có những suy nghĩ, cảm xúc
                  muốn chia sẻ, hãy mạnh dạn ghi chép lại.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials-container">
          <h1>Khách hàng nói gì về tôi</h1>
          <TestimonialSlider />
        </div>
      </div>
      <div className="register-email-wrapper">
        <div className="register-email-container">
          <img src={avatar} alt="" />
          <div className="description-register">
            <h1>
              Giúp bạn phát triển bản thân thông qua hệ thống hóa, sáng tạo nội
              dung và chia sẻ. Đăng ký để nhận Newsletter hàng tuần nhé!
            </h1>
            <button className="btn-register" onClick={handleSubmitRegister}>
              <FaFolderOpen /> Đăng Ký
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
