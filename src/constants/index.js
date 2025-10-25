const navLinks = [
  {
    name: "About",
    link: "#counter",
  },
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Skills",
    link: "#skills-logo",
  },
];

const words = [
  { text: "Frontend Developer", imgPath: "/images/ideas.svg", id: 1 },
  { text: "AI Enthusiast", imgPath: "/images/concepts.svg", id: 2 },
  { text: "Student", imgPath: "/images/code.svg", id: 3 },
  { text: "Frontend Developer", imgPath: "/images/ideas.svg", id: 4 },
  { text: "AI Enthusiast", imgPath: "/images/concepts.svg", id: 5 },
  { text: "Student", imgPath: "/images/code.svg", id: 6 },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Front End Projects Built" },
  { value: 7, suffix: "+", label: "Languages & Frameworks Learned" },
  { value: 20, suffix: "+", label: "GitHub Contributions" },
  { value: 4, suffix: "", label: "Team Collaborations" },
];

const logoIconsList = [
  { imgPath: "/icons/html.svg", id: 1 },
  { imgPath: "/icons/css.svg", id: 2 },
  { imgPath: "/icons/js.svg", id: 3 },
  { imgPath: "/icons/java.svg", id: 4 },
  { imgPath: "/icons/python.svg", id: 5 },
  { imgPath: "/icons/react.svg", id: 6 },
  { imgPath: "/icons/git.svg", id: 7 },
  { imgPath: "/icons/github.svg", id: 8 },
  { imgPath: "/icons/neural-net.svg", id: 9 },
  { imgPath: "/icons/node.svg", id: 10 },
  { imgPath: "/icons/express.svg", id: 11 },
  { imgPath: "/icons/aws.svg", id: 12 },
  { imgPath: "/icons/docker.svg", id: 13 },
  { imgPath: "/icons/numpy.svg", id: 14 },
  { imgPath: "/icons/pandas.svg", id: 15 },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Version Control",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const socialImgs = [
  {
    name: "x",
    imgPath: "/images/x.png",
    link: "https://x.com/pandey_rajat99",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://shorturl.at/okFQm",
  },
  {
    name: "email",
    imgPath: "/images/email.svg",
    link: "mailto:rajat00.tech@gmail.com",
  },
  {
    name: "github",
    imgPath: "/images/github.svg",
    link: "https://github.com/gituser-83",
  },
];

export {
  words,
  logoIconsList,
  counterItems,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
