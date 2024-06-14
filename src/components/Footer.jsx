import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaHashnode } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <span>
        Dear visitor, I am currently developing a portfolio website. In the
        meantime, I have created this separate site solely dedicated to
        showcasing my projects. This approach allows me to ensure that my
        portfolio site meets the highest standards of quality and presentation.
        Thank you for your understanding and interest in my work. I look forward
        to sharing my portfolio with you in the near future.
      </span>
      <div className="socials">
        <a
          href="https://github.com/sanketmp"
          className="sociallink"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sanketmp/"
          className="sociallink"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/sanketDevs"
          className="sociallink"
          target="_blank"
        >
          <FaXTwitter />
        </a>

        <a
          href="https://sanketdevs.hashnode.dev/"
          className="sociallink"
          target="_blank"
        >
          <FaHashnode />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
