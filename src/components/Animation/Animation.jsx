import React from "react"

export const textAnimation = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.5,
            duration: 1.3
        }
    }
}

export const imageAnimation = {
    offscreen: { x: -1000 },
    onscreen: {
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1.3
        }

    }
}