import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);
  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/expense-tracker.png" alt="Expense tracker" />
            </div>
            <div className="text-content">
              <h2>Personal Expense Tracker</h2>
              <p className="text-white-50 md:text-xl">
                This project allows users to track their daily expenses and
                manage their finances effectively. Built with React for a
                dynamic front-end, and Node.js with Express for the back-end
                API, this application helps users log, categorize, and visualize
                their spending habits in real-time. Users can view expense
                reports, set budgets, and receive reminders for upcoming
                payments.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src="/images/price-pred.png" alt="price prediction" />
              </div>
              <h2>House Price Prediction Model</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/todo.png" alt="todo" />
              </div>
              <h2>Todo List App</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
