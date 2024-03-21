import React from "react";
import style from "./style.module.css"
import QR from "../../../../assets/img/download1.png"

function Qr() {
    return (
        <div className={style.main_container} >
            <div>
                <img src={QR} alt="quar" />
            </div>
            <div className={style.content_container} >
                <span className={style.content} >
                    Մենք միշտ ձգտում ենք լինել նորարար և ստեղծագործ մեր աշխատանքում, իսկ մեր ամենամեծ ճանաչումը ձեր գոհունակությունը, անվտանգությունը
                </span>
                <div>
                    <span>
                        Հետևեք շաբաթվա գլխավոր իրադարձություններին
                    </span>
                    <div className={style.input_container} >
                        <input />
                        <span>
                            <button className={style.button} >Բաժանորդագրվել</button>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Qr