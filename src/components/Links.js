import React, { useLayoutEffect } from "react"
import gsap from "gsap"
import "../css/Links.css"

export default function Links() {
  const animateContainer = (selector) => {
    gsap.to(`.${selector}`, {
      borderTopColor: "#ef3",
      duration: 0.5,
    })
    gsap.to(`.arrow-${selector} path`, {
      fill: "#ef3",
      duration: 0.5,
    })

    gsap.to(`.yellow-${selector}`, {
      height: 45,
    })

    gsap.to(`.text-${selector}`, { color: "#2E3233", x: 10 })

    gsap.to(".cursor", {
      backgroundColor: "#ef3",
    })
  }

  const animateContainerRevert = (selector) => {
    gsap.to(`.${selector}`, {
      borderTopColor: "#DAE6E6",
      duration: 0.5,
    })
    gsap.to(`.arrow-${selector} path`, {
      fill: "#DAE6E6",
      duration: 0.5,
    })
    gsap.to(".cursor", {
      backgroundColor: "#DAE6E6",
    })
    gsap.to(`.text-${selector}`, { color: "#DAE6E6", x: 0 })

    gsap.to(`.yellow-${selector}`, {
      height: 0,
    })
  }

  useLayoutEffect(() => {
    const containers = document.querySelectorAll(".link-container")
    containers.forEach((container) => {
      container.addEventListener("mouseenter", (event) => {
        if (event.target && event.target.hasAttribute("data-target")) {
          let target = event.target.getAttribute("data-target")

          animateContainer(target)
        }
      })
      container.addEventListener("mouseleave", (event) => {
        if (event.target && event.target.hasAttribute("data-target")) {
          let target = event.target.getAttribute("data-target")

          animateContainerRevert(target)
        }
      })
    })
  }, [])
  return (
    <section className="main-links">
      <h1>
        Discover innovation <br /> opportunities
      </h1>

      <div className="link-container cont1" data-target="cont1">
        <div className="link-div">
          <a className="link-text text-cont1">TALENTS</a>
        </div>
        <div className="link-div-yellow yellow-cont1"></div>
        <div>
          <svg
            className="link-arrow arrow-cont1"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="&#226;&#134;&#151;"
              d="M1.28625 0.148438H13.9088V12.6584H11.7488V4.24344L11.5013 3.99594L1.64625 13.8509L0.09375 12.2984L9.94875 2.44344L9.70125 2.19594H1.28625V0.148438Z"
              fill="#F6FBFB"
            />
          </svg>
        </div>
      </div>
      <div className="link-container cont2" data-target="cont2">
        <div className="link-div">
          <a className="link-text text-cont2">ENTREPENEURS</a>
        </div>
        <div className="link-div-yellow yellow-cont2"></div>
        <div>
          <svg
            className="link-arrow arrow-cont2"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="&#226;&#134;&#151;"
              d="M1.28625 0.148438H13.9088V12.6584H11.7488V4.24344L11.5013 3.99594L1.64625 13.8509L0.09375 12.2984L9.94875 2.44344L9.70125 2.19594H1.28625V0.148438Z"
              fill="#F6FBFB"
            />
          </svg>
        </div>
      </div>
      <div className="link-container cont3" data-target="cont3">
        <div className="link-div">
          <a className="link-text text-cont3">INVESTORS</a>
        </div>
        <div className="link-div-yellow yellow-cont3"></div>
        <div>
          <svg
            className="link-arrow arrow-cont3"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="&#226;&#134;&#151;"
              d="M1.28625 0.148438H13.9088V12.6584H11.7488V4.24344L11.5013 3.99594L1.64625 13.8509L0.09375 12.2984L9.94875 2.44344L9.70125 2.19594H1.28625V0.148438Z"
              fill="#F6FBFB"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
