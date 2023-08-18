import "./App.css"
import { useLayoutEffect, useRef } from "react"
import Main from "./components/Main.js"
import gsap, { Power3 } from "gsap"

function App() {
  const appRef = useRef(null)
  const yellowcenter1 = useRef(null)
  const yellowcenter2 = useRef(null)
  const yellowcenter3 = useRef(null)
  const yellowcenter4 = useRef(null)

  const arrowRef = useRef(null)
  const arrowRef2 = useRef(null)
  const arrowRef3 = useRef(null)
  const arrowRef4 = useRef(null)

  const scrollRef = useRef({ x: 0, y: 0 })

  const updateScroll = () => {
    scrollRef.current = { x: window.scrollX, y: window.scrollY }
  }

  const animateCursor = (event) => {
    const x = event.clientX + scrollRef.current.x
    const y = event.clientY + scrollRef.current.y

    gsap.to(".cursor", {
      x,
      y,
      duration: 0.7,
      ease: Power3.easeOut,
    })
  }

  const animateYellow = (event) => {
    gsap.to(".yellow-window1", {
      x: event.clientX - yellowcenter1.current.x + scrollRef.current.x,
      y: event.clientY - yellowcenter1.current.y + scrollRef.current.y,
      duration: 0.7,
      ease: Power3.easeOut,
    })

    gsap.to(".yellow-window2", {
      x: event.clientX - yellowcenter2.current.x + scrollRef.current.x,
      y: event.clientY - yellowcenter2.current.y + scrollRef.current.y,
      duration: 0.7,
      ease: Power3.easeOut,
    })
    gsap.to(".yellow-window3", {
      x: event.clientX - yellowcenter3.current.x + scrollRef.current.x,
      y: event.clientY - yellowcenter3.current.y + scrollRef.current.y,
      duration: 0.7,
      ease: Power3.easeOut,
    })
    gsap.to(".yellow-window4", {
      x: event.clientX - yellowcenter4.current.x + scrollRef.current.x,
      y: event.clientY - yellowcenter4.current.y + scrollRef.current.y,
      duration: 0.7,
      ease: Power3.easeOut,
    })
  }

  let currentRotation = 0

  const animateArrowFollow = (event) => {
    const arrowRect = arrowRef.current.getBoundingClientRect()

    const arrowX = arrowRect.left + arrowRect.width / 2
    const arrowY = arrowRect.top + arrowRect.height / 2

    const angleRad = Math.atan2(event.clientY - arrowY, event.clientX - arrowX)
    const angleDeg = angleRad * (180 / Math.PI)

    const diff = angleDeg - currentRotation
    if (Math.abs(diff) > 180) {
      currentRotation += diff > 0 ? -360 : 360
    }

    gsap.to(".pointing-arrow", {
      rotation: currentRotation + diff - 180,
      duration: 0.3,
      ease: "power1.out",
    })

    currentRotation += diff
  }

  const animateArrowFollow2 = (event) => {
    const arrowRect = arrowRef2.current.getBoundingClientRect()

    const arrowX = arrowRect.left + arrowRect.width / 2
    const arrowY = arrowRect.top + arrowRect.height / 2

    const angleRad = Math.atan2(event.clientY - arrowY, event.clientX - arrowX)
    const angleDeg = angleRad * (180 / Math.PI)

    const diff = angleDeg - currentRotation
    if (Math.abs(diff) > 180) {
      currentRotation += diff > 0 ? -360 : 360
    }

    gsap.to(".pointing-arrow2", {
      rotation: currentRotation + diff - 180,
      duration: 0.3,
      ease: "power1.out",
    })

    currentRotation += diff
  }
  const animateArrowFollow3 = (event) => {
    const arrowRect = arrowRef3.current.getBoundingClientRect()

    const arrowX = arrowRect.left + arrowRect.width / 2
    const arrowY = arrowRect.top + arrowRect.height / 2

    const angleRad = Math.atan2(event.clientY - arrowY, event.clientX - arrowX)
    const angleDeg = angleRad * (180 / Math.PI)

    const diff = angleDeg - currentRotation
    if (Math.abs(diff) > 180) {
      currentRotation += diff > 0 ? -360 : 360
    }

    gsap.to(".pointing-arrow3", {
      rotation: currentRotation + diff - 180,
      duration: 0.3,
      ease: "power1.out",
    })

    currentRotation += diff
  }
  const animateArrowFollow4 = (event) => {
    const arrowRect = arrowRef4.current.getBoundingClientRect()

    const arrowX = arrowRect.left + arrowRect.width / 2
    const arrowY = arrowRect.top + arrowRect.height / 2

    const angleRad = Math.atan2(event.clientY - arrowY, event.clientX - arrowX)
    const angleDeg = angleRad * (180 / Math.PI)

    const diff = angleDeg - currentRotation
    if (Math.abs(diff) > 180) {
      currentRotation += diff > 0 ? -360 : 360
    }

    gsap.to(".pointing-arrow4", {
      rotation: currentRotation + diff - 180,
      duration: 0.3,
      ease: "power1.out",
    })

    currentRotation += diff
  }

  const getCenter = (selector) => {
    const targetDiv = document.querySelector(selector)

    const targetRect = targetDiv.getBoundingClientRect()

    const centerX = targetRect.left + targetRect.width / 2 + window.scrollX
    const centerY = targetRect.top + targetRect.height / 2 + window.scrollY

    return { x: centerX, y: centerY }
  }

  const animateMouseEnter = () => {
    gsap.to(".cursor", {
      backgroundColor: "#2E3233",
      duration: 0.3,
    })

    document.removeEventListener("mousemove", animateYellow)

    const targetCenter = getCenter(".wrapper1")

    const moveX = targetCenter.x - yellowcenter1.current.x
    const moveY = targetCenter.y - yellowcenter1.current.y

    gsap.to(".pointing-arrow", {
      opacity: 100,
      duration: 0.2,
    })

    gsap.to(".yellow-window1", {
      x: moveX,
      y: moveY,
      width: 560,
      height: 560,
      duration: 2,
      ease: Power3.easeOut,
    })
  }

  const animateMouseEnter2 = () => {
    gsap.to(".cursor", {
      backgroundColor: "#2E3233",
      duration: 0.3,
    })

    document.removeEventListener("mousemove", animateYellow)

    const targetCenter = getCenter(".wrapper2")

    const moveX = targetCenter.x - yellowcenter2.current.x
    const moveY = targetCenter.y - yellowcenter2.current.y

    gsap.to(".pointing-arrow2", {
      opacity: 100,
      duration: 0.2,
    })

    gsap.to(".yellow-window2", {
      x: moveX,
      y: moveY,
      width: 560,
      height: 560,
      duration: 2,
      ease: Power3.easeOut,
    })
  }
  const animateMouseEnter3 = () => {
    gsap.to(".cursor", {
      backgroundColor: "#2E3233",
      duration: 0.3,
    })

    document.removeEventListener("mousemove", animateYellow)

    const targetCenter = getCenter(".wrapper3")

    const moveX = targetCenter.x - yellowcenter3.current.x
    const moveY = targetCenter.y - yellowcenter3.current.y

    gsap.to(".pointing-arrow3", {
      opacity: 100,
      duration: 0.2,
    })

    gsap.to(".yellow-window3", {
      x: moveX,
      y: moveY,
      width: 560,
      height: 560,
      duration: 2,
      ease: Power3.easeOut,
    })
  }
  const animateMouseEnter4 = () => {
    gsap.to(".cursor", {
      backgroundColor: "#2E3233",
      duration: 0.3,
    })

    document.removeEventListener("mousemove", animateYellow)

    const targetCenter = getCenter(".wrapper4")

    const moveX = targetCenter.x - yellowcenter4.current.x
    const moveY = targetCenter.y - yellowcenter4.current.y

    gsap.to(".pointing-arrow4", {
      opacity: 100,
      duration: 0.2,
    })

    gsap.to(".yellow-window4", {
      x: moveX,
      y: moveY,
      width: 560,
      height: 560,
      duration: 2,
      ease: Power3.easeOut,
    })
  }
  const animateMouseLeave = (event, selector) => {
    gsap.to(".cursor", {
      backgroundColor: "#dae6e6",
      duration: 0.3,
    })

    gsap.to(selector, {
      width: 0,
      height: 0,
      duration: 2,
      ease: Power3.easeOut,
    })
    gsap.to(".pointing-arrow", {
      opacity: 0,
      duration: 0.2,
    })
    gsap.to(".pointing-arrow2", {
      opacity: 0,
      duration: 0.2,
    })
    gsap.to(".pointing-arrow3", {
      opacity: 0,
      duration: 0.2,
    })
    gsap.to(".pointing-arrow4", {
      opacity: 0,
      duration: 0.2,
    })
    document.addEventListener("mousemove", animateYellow)
  }

  useLayoutEffect(() => {
    const yelloWindow1 = document.querySelector(".yellow-window1")
    const yelloWindow1Rect = yelloWindow1.getBoundingClientRect()

    const yelloWindow1x = yelloWindow1Rect.left + yelloWindow1Rect.width / 2
    const yelloWindow1y = yelloWindow1Rect.top + yelloWindow1Rect.height / 2
    yellowcenter1.current = { x: yelloWindow1x, y: yelloWindow1y }

    const yelloWindow2 = document.querySelector(".yellow-window2")
    const yelloWindow2Rect = yelloWindow2.getBoundingClientRect()

    const yelloWindow2x = yelloWindow2Rect.left + yelloWindow2Rect.width / 2
    const yelloWindow2y = yelloWindow2Rect.top + yelloWindow2Rect.height / 2
    yellowcenter2.current = { x: yelloWindow2x, y: yelloWindow2y }

    const yelloWindow3 = document.querySelector(".yellow-window3")
    const yelloWindow3Rect = yelloWindow3.getBoundingClientRect()

    const yelloWindow3x = yelloWindow3Rect.left + yelloWindow3Rect.width / 2
    const yelloWindow3y = yelloWindow3Rect.top + yelloWindow3Rect.height / 2
    yellowcenter3.current = { x: yelloWindow3x, y: yelloWindow3y }

    const yelloWindow4 = document.querySelector(".yellow-window4")
    const yelloWindow4Rect = yelloWindow4.getBoundingClientRect()

    const yelloWindow4x = yelloWindow4Rect.left + yelloWindow4Rect.width / 2
    const yelloWindow4y = yelloWindow4Rect.top + yelloWindow4Rect.height / 2
    yellowcenter4.current = { x: yelloWindow4x, y: yelloWindow4y }

    arrowRef.current = document.querySelector(".pointing-arrow")
    arrowRef2.current = document.querySelector(".pointing-arrow2")
    arrowRef3.current = document.querySelector(".pointing-arrow3")
    arrowRef4.current = document.querySelector(".pointing-arrow4")

    let ctx = gsap.context(() => {
      gsap.from(".cursor", { opacity: 0, duration: 2 })
      document.addEventListener("mousemove", animateCursor)

      document.addEventListener("mousemove", animateYellow)

      window.addEventListener("scroll", updateScroll)

      const wrapper1 = document.querySelector(".wrapper1")
      wrapper1.addEventListener("mouseenter", animateMouseEnter)
      wrapper1.addEventListener("mouseleave", (event) => {
        animateMouseLeave(event, ".yellow-window1")
      })

      const wrapper2 = document.querySelector(".wrapper2")
      wrapper2.addEventListener("mouseenter", animateMouseEnter2)
      wrapper2.addEventListener("mouseleave", (event) => {
        animateMouseLeave(event, ".yellow-window2")
      })

      const wrapper3 = document.querySelector(".wrapper3")
      wrapper3.addEventListener("mouseenter", animateMouseEnter3)
      wrapper3.addEventListener("mouseleave", (event) => {
        animateMouseLeave(event, ".yellow-window3")
      })

      const wrapper4 = document.querySelector(".wrapper4")
      wrapper4.addEventListener("mouseenter", animateMouseEnter4)
      wrapper4.addEventListener("mouseleave", (event) => {
        animateMouseLeave(event, ".yellow-window4")
      })
      document.addEventListener("mousemove", animateArrowFollow)
      document.addEventListener("mousemove", animateArrowFollow2)
      document.addEventListener("mousemove", animateArrowFollow3)
      document.addEventListener("mousemove", animateArrowFollow4)
    }, appRef)

    return () => {
      ctx.revert()
      document.removeEventListener("mousemove", animateCursor)

      // document
      //   .querySelector(".wrapper1")
      //   .addEventListener("mouseenter", animateMouseEnter1)
      // images.forEach((image) => {
      // image.removeEventListener("mouseenter", animateMouseEnter)
      //   image.removeEventListener("mouseleave", animateMouseLeave)
      // })
    }
  }, [])
  return (
    <div className="App" ref={appRef}>
      <div id="cursor" className="cursor" />

      <Main />
    </div>
  )
}

export default App
