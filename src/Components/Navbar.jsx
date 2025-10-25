import { navLinks } from "../constants";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="/" className="logo">
          RP
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="contact-btn group"
          style={{ display: width >= 768 ? "inline-block" : "none" }}
        >
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        {menuOpen && (
          <nav className="mobile-menu">
            <ul>
              {navLinks.map(({ link, name }) => (
                <li key={name}>
                  <a href={link} onClick={() => setMenuOpen(false)}>
                    {name}
                  </a>
                </li>
              ))}
              {width < 768 && (
                <li>
                  <a
                    href="#contact"
                    className="contact-btn-mobile"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact me
                  </a>
                </li>
              )}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
