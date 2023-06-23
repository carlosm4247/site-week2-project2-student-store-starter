import * as React from "react"
import "./CategoryButton.css"

export default function CategoryButton({ label = "", isActive = false , categoryClicked }) {

    const buttonClassName = isActive ? "category active" : "category";

    return (
      <button className={buttonClassName} onClick={categoryClicked}>
        <p className="label">{label}</p>
      </button>
    )
  }