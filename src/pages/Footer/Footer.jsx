import React from "react";
import style from "./style.module.css"
import Qr from "./components/qr/Qr";
import Contacts from "./components/contacts/Contacts";


function Footer() {
    return (
        <div className={style.main_container} >
            <div className={style.footer_container} >
                <Qr />
                <Contacts />
            </div>
        </div>
    )
}

export default Footer