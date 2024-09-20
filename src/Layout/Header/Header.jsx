import { RxAvatar } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleChangePage = () => {
    navigate("/product-detail")
  }
  return (
    <div className="header-wrapper">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "85%",
        }}
      >
        <div className="logo-wrapper">
          <div className="logo-img"></div>
        </div>
        <div className="main-header">
          <nav id="main-nav">
            <ul className="main-nav-wrapper">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">Blog</a>
              </li>
              <li className="dropdown">
                <a href="#portfolio">Academy</a>
                <ul className="dropdown-content">
                  <li>
                    <a onClick={handleChangePage}>Digital Life</a>
                  </li>
                  <li>
                    <a href="#document-create">Document & Create Your Life</a>
                  </li>
                  <li>
                    <a href="#solo-expert">Solo Expert System</a>
                  </li>
                  <li>
                    <a href="#substack-solutions">Substack Solutions</a>
                  </li>
                  <li>
                    <a href="#paid-community">D&S Paid Community</a>
                  </li>
                  <li>
                    <a href="#mentor-1-1">Mentor 1:1</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#contact">Library</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="login-wrapper">
          <RxAvatar className="text-icon" />
          <div className="title-login">Đăng nhập</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
