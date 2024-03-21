import React from "react";
import style from "./style.module.css"
import Qr from "./components/qr/Qr";


function Footer() {
    return (
        <div className={style.main_container} >
            <div className={style.footer_container} >
                <Qr />
            </div>
        </div>
    )
}

export default Footer