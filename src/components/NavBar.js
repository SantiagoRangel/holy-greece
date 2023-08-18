import React, { useLayoutEffect } from "react"
import gsap from "gsap"
import "../css/NavBar.css"

export default function NavBar() {
  const animateUnderline = (targetSelector) => {
    console.log(targetSelector)
    gsap.to(`.${targetSelector}`, {
      width: "100%",
      duration: 0.5,
      immediateRender: false,
    })
  }
  const animateUnderlineRevert = (targetSelector) => {
    console.log(targetSelector)
    gsap.to(`.${targetSelector}`, {
      width: "0",
      duration: 0.5,
      immediateRender: false,
    })
  }
  useLayoutEffect(() => {
    const elements = document.querySelectorAll(".underline-selector")
    elements.forEach((element) => {
      element.addEventListener("mouseenter", (event) => {
        if (event.target && event.target.hasAttribute("data-target")) {
          let underlineTarget = event.target.getAttribute("data-target")

          animateUnderline(underlineTarget)
        }
      })
      element.addEventListener("mouseleave", (event) => {
        if (event.target && event.target.hasAttribute("data-target")) {
          let underlineTarget = event.target.getAttribute("data-target")

          animateUnderlineRevert(underlineTarget)
        }
      })
    })
  }, [])
  return (
    <div className="nav-bar-container">
      <div className="division nav-bar-container-1">
        <p>#LIVEINGREECE</p>
      </div>
      <div className="flex division nav-bar-container-2">
        <div className="flex division sections">
          <p>For</p>
          <div>
            <p className="hover underline-selector" data-target="underline1">
              TALENTS
            </p>
            <div className="underline underline1"></div>
          </div>
          <div>
            <p className="hover underline-selector" data-target="underline2">
              ENTREPENEURS
            </p>
            <div className="underline underline2"></div>
          </div>
          <div>
            <p className="hover underline-selector" data-target="underline3">
              INVESTORS
            </p>
            <div className="underline underline3"></div>
          </div>
        </div>
        <div className="flex division qa">
          <div>
            <p className="hover underline-selector" data-target="underline4">
              Initiatives
            </p>
            <div className="underline underline4"></div>
          </div>
          <div>
            <p className="hover underline-selector" data-target="underline5">
              Q&A
            </p>
            <div className="underline underline5"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
