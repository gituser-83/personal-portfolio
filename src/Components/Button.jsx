const Button = ({ text, className, id }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector("#work");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href="#projects"
      onClick={handleClick}
      className={`${className ?? ""} cta-wrapper`}
      id={id}
    >
      <div className="cta-button group">
        <div className="bg-circle"></div>
        <span className="text">{text}</span>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
