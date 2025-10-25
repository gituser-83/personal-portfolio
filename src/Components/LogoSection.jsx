import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="marquee-item">
      <img src={icon.imgPath} alt="logo" />
    </div>
  );
};

const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge"></div>
      <div className="gradient-edge"></div>
      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.id} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
