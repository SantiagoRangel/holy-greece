import React from "react"
import "../css/Hero.css"

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-div ">
        <div className="title-div flex1 ">
          <div className="title-wrapper">
            <h1 className="">
              Greece <br /> the <br />
              birthplace <br /> of ideas
            </h1>
          </div>
        </div>

        <div className="flex1 text-align-center">
          <div className="hero-image-wrapper wrapper1">
            <div className="yellow-window1">
              <img
                className="pointing-arrow"
                src="/assets/arrow.svg"
                alt="arrow"
              />
            </div>
            <img
              className="hero-image"
              src="/assets/hero-img-01.png"
              alt="stone stairs"
            />
          </div>
        </div>
        <div className="flex1 text-align-center">
          <div className="hero-image-wrapper wrapper2">
            <div className="yellow-window2">
              <img
                className="pointing-arrow2"
                src="/assets/arrow.svg"
                alt="arrow"
              />
            </div>
            <img
              className="hero-image"
              src="/assets/hero-img-02.png"
              alt="stone stairs"
            />
          </div>
        </div>
      </div>
      <div className="hero-div">
        <div className="flex1 text-align-center">
          <div className="hero-image-wrapper wrapper3">
            <div className="yellow-window3">
              <img
                className="pointing-arrow3"
                src="/assets/arrow.svg"
                alt="arrow"
              />
            </div>
            <img
              className="hero-image"
              src="/assets/hero-img-03.png"
              alt="stone stairs"
            />
          </div>
        </div>
        <div className="flex1 ">
          <div>
            <p className="hero-text">
              Right in the cradle of Western civilization and at the heart of
              contemporary innovation, we invite innovative minds,
              ecosystem-driving entrepreneurs and leading investors to explore,
              grow, and invest in a country that blends rich history,
              captivating culture and a promising entrepreneurial ecosystem.
            </p>

            <button className="hero-cta hover">
              Become a citizen
              {/* <img
                className="cta-arrow"
                src="/assets/arrow-sm.png"
                alt="arrow"
              /> */}
              <svg
                className="cta-arrow"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="&#226;&#134;&#151;"
                  d="M1.28625 0.148438H13.9088V12.6584H11.7488V4.24344L11.5013 3.99594L1.64625 13.8509L0.09375 12.2984L9.94875 2.44344L9.70125 2.19594H1.28625V0.148438Z"
                  fill="#2e3233"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex1 text-align-center">
          <div className="hero-image-wrapper wrapper4">
            <div className="yellow-window4">
              <img
                className="pointing-arrow4"
                src="/assets/arrow.svg"
                alt="arrow"
              />
            </div>
            <img
              className="hero-image"
              src="/assets/hero-img-04.png"
              alt="stone stairs"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
