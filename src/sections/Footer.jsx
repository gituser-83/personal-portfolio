import { socialImgs } from "../constants";

const Footer = () => {
  const goToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div
          className="flex flex-col justify-center cursor-pointer"
          onClick={goToTop}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && goToTop(e)}
        >
          <p>Go to top</p>
        </div>

        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.link}
              target={socialImg.name === "email" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="icon"
            >
              <img
                src={socialImg.imgPath}
                alt={`${socialImg.name} icon`}
                className="hover:opacity-80 transition-opacity"
              />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end mt-4 md:mt-0">
            For best experience view on a desktop
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
