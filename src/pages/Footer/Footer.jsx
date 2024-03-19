import React from "react";
import style from "./style.module.css"
import quar from '../../assets/img/download1.png'

function Footer () {
    return(
        <div className={style.footerContainer} >
            <div className={style.firstDiv} >
                <div>
                    <img src={quar} alt="quar" />
                </div>
                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    )
}

export default Footer