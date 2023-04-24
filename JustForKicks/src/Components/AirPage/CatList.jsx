import React from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io"
import { useState } from "react";

function CatList({cat}) {
    const [arrow, setArrow] = useState("up")
    const [menu, setMenu] = useState('none')
    const [color, setColor] = useState("#000")

    const handleShowMenu = (e) => {
        //the arrow and showing menu
        if (arrow === "up") {
            setArrow("down")
            setMenu("flex")
            setColor("#F5761A") 
        } else {
            setArrow("up")
            setMenu("none") 
            setColor("#000")
        }
    }

    return (
        <div className="list">
            <div className="catList">
                <div className="catName" style={{color: color}}>
                    {cat.name}
                </div>
                <div className="catDrop">
                    { arrow === "up" ?
                        (<span className="catArrow" onClick={handleShowMenu}><IoIosArrowForward/></span>)
                        : 
                        (<span className="catArrow" onClick={handleShowMenu}><IoIosArrowDown/></span>)
                    }
                </div>
            </div>
            <div className="catMenu" style={{display: menu}}>
                {
                    cat.list.map((l, index) => (
                        <div className="item" key={index}>{l}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default CatList;