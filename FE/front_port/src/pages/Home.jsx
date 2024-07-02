import React from "react";

const Home = () => {
  return (
    <>
      <div className="smooth__wrapper cursor-none">
        <div className="smooth__content cursor-none">
          <main className="cursor-none">
            {/* main div start */}
            <div className="main__div">
              <div className="base__containner">
                <div className="base__content">
                  {/* bgc__line start */}
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
                  {/* bgc__line end */}
                  <section className="home__section cursor-none">
                    <div className="border__inner"></div>
                    <div className="home__section__content">
                      <div className="content__home">
                        <div className="content__logo"></div>
                        <div className="content__desc"></div>
                        <div className="content__title"></div>
                        <div className="content__btn__wrap"></div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            {/* main div end */}
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
