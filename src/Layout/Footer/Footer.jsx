
import { FaFacebook, FaInstagram, FaThreads, FaTiktok, FaYoutube } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import footer1 from "../../assets/img/3.png";

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-wrapper-top">
        <div
          className="social"
          role="navigation"
          aria-labelledby="social-heading"
        >
          <h3 id="social-heading" className="sr-only">
            Follow me on social media
          </h3>
          <a href="https://www.facebook.com/meracao11/" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://meracao.substack.com/" aria-label="Substack">
            <SiSubstack />
          </a>
          <a href="https://www.tiktok.com/@meracao" aria-label="Tiktok">
            <FaTiktok />
          </a>
          <a
            href="https://www.instagram.com/mera.cao/?hl=en"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a href="https://www.threads.net/@mera.cao" aria-label="Threads">
            <FaThreads />
          </a>
          <a href="https://www.youtube.com/@meracao" aria-label="Youtube">
            <FaYoutube />
          </a>
        </div>
        <div className="quotes-vietnam">
          <img src={footer1} alt="" width={500} height={100} />
        </div>
      </div>
      <hr className="footer-break" />
      <p className="copyright">© 2024 Mera Cao</p>
    </footer>
  );
}

export default Footer;
