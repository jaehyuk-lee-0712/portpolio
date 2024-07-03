import React, { useEffect, useRef } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const contextDesc = useRef(null);
  const moveBoxTop = useRef(null);
  const moveBoxBottom = useRef(null);

  useEffect(() => {
    if (contextDesc.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contextDesc.current,
          start: "top 10%",
          end: "top 50%",
          scrub: true,
          markers: true,
          onUpdate: (self) => {
            if (self.progress > 0.5) {
              gsap.to(contextDesc.current, { opacity: 0 });
            } else {
              gsap.to(contextDesc.current, { opacity: 1 });
            }
          },
        },
      });

      tl.fromTo(
        contextDesc.current,
        { opacity: 1 },
        {
          opacity: 0,
          repeat: -1,
          yoyo: true,
          duration: 0.5,
        }
      );
    }

    if (moveBoxTop.current) {
      gsap.fromTo(
        moveBoxTop.current,
        { x: '-1000%',  },
        {
          x: '0%',
          stagger: 0.1,
          scrollTrigger: {
            trigger: moveBoxTop.current,
            start: "top center",
            end: "bottom+=2000px",
            scrub: true,
            markers: true,
          },
        }
      );
    }

    if (moveBoxBottom.current) {
      gsap.fromTo(
        moveBoxBottom.current,
        { x: '1000%',  },
        {
          x: '0%',
          stagger: 0.1,
          scrollTrigger: {
            trigger: moveBoxBottom.current,
            duration : 5,
            start: "top center",
            end: "bottom+=2000px",
            scrub: true,
            markers: true,
          },
        }
      );
    }
  }, []);

  return (
    <>
      <div className="smooth__wrapper cursor-none">
        <div className="smooth__content cursor-none">
          <main className="cursor-none">
            <div className="main__div">
              <div className="base__containner">
                <div className="base__content">
                  <div className="bgc__line">
                    <svg
                      className="line__svg"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 1920 911"
                      preserveAspectRatio="none"
                      stroke="white"
                      fill="white"
                      strokeWidth={2}
                    >
                      <g>
                        <line
                          className="diagonal-1"
                          x1="0"
                          y1="0"
                          x2="1920"
                          y2="911"
                        ></line>
                        <line
                          className="diagonal-2"
                          x1="1920"
                          y1="0"
                          x2="0"
                          y2="911"
                        ></line>
                      </g>
                    </svg>
                  </div>
                  <section className="home__section cursor-none">
                    <div className="border__inner"></div>
                    <div className="home__section__content">
                      <div className="content__home">
                        <div className="content__logo">
                          <div className="logo__wrap">
                            <svg
                              className="sbc-logo-svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              viewBox="0 0 179.785 133.517"
                            >
                              {/* SVG content */}
                            </svg>
                          </div>
                        </div>
                        <div className="content__desc" ref={contextDesc}>
                          <h5>Welcome</h5>
                          <p>
                            As ambassadors of Blockchain technology, we are at
                            the heart of the solutions it offers, being
                            different, secure and agile, adapting to your needs,
                            whatever they may be.
                          </p>
                        </div>
                        <div className="content__title">
                          <h1 className="content__title__wrap">
                            <div className="move__box__top" >
                              <div className="move__box__line">
                                <span ref={moveBoxTop} id="moveBoxTop">In the c3nter Of the</span>
                              </div>
                              <span className="move__box__door"></span>
                            </div>
                            <div className="move__box__bottom" >
                              <div className="move__box__line">
                                 <span ref={moveBoxBottom} id="moveBoxBottom">Blockcha1n solutions</span>
                              </div>
                              <span className="move__box__door"></span>
                            </div>
                          </h1>
                        </div>
                        <div className="content__btn__wrap">
                          <div className="content__btn__inner cursor-none">
                            <button className="content__btn">
                              <span className="btn__left__arrow">
                                <IoIosArrowRoundDown />
                              </span>
                              <span className="btn__text">scroll down</span>
                              <span className="btn__right__arrow">
                                <IoIosArrowRoundDown />
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
