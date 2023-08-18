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
              <img
                className="cta-arrow"
                src="/assets/arrow-sm.png"
                alt="arrow"
              />
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
