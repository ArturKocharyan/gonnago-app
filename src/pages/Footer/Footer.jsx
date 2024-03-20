import React from "react";
import style from "./style.module.css"
import quar from '../../assets/img/download1.png'
import { FaFacebookSquare,FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { Divider } from "antd";

function Footer() {
    return (
        <div className={style.footerContainer} >
            <div className={style.firstDiv} >
                <div>
                    <img src={quar} alt="quar" />
                </div>
                <div className={style.firstContent} >
                    <div style={{ size: "16px", lineHeight: "21.42px", fontWeight: '500' }} >
                        Մենք միշտ ձգտում ենք լինել նորարար և ստեղծագործ մեր աշխատանքում, իսկ մեր ամենամեծ ճանաչումը ձեր գոհունակությունը, անվտանգությունը
                    </div>
                    <div className={style.inputContent} >
                        <div style={{ marginBottom: "8px" }} >
                            Հետևեք շաբաթվա գլխավոր իրադարձություններին
                        </div>
                        <div className={style.inputContainer} >
                            <input />
                            <button className={style.inputBTN} >Բաժանորդագրվել</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.secondDiv} >

                <ul>
                    <li>GonnaGo </li>
                    <li>Մեր մասին</li>
                    <li>ՀՏՀ</li>
                    <li>Գաղտնիության քաղաքականություն</li>
                    <li>Օգտվելու կանոններ</li>
                    <li>Տոմսերի վերադարձ </li>
                </ul>
                <ul>
                    <li>Գործընկերներ և Կազմակերպիչներ</li>
                    <li>Միջոցառումների կազմակերպիչների համար</li>
                    <li>Կորպորատիվ հաճախորդների համար</li>
                </ul>
                <ul>
                    <li>հեռ. և էլ. հասցե</li>
                    <li>+374 99 15 16 17</li>
                    <li>Կորպորատիվ հաճախորդների համար</li>
                </ul>
                <ul>
                    <li>Հետադարձ կապ</li>
                    <div className={style.feedBack} >
                    <FaFacebookSquare />
                    <FaTwitter />
                    <AiOutlineInstagram />
                    </div>
                </ul>
            </div>
            <Divider />
            <div className={style.footer} >
                <p>© 2023 GonnaGo: Բոլոր իրավունքները պաշտպանված են</p>
                <p>Designed & Develop by Brain Fors</p>
            </div>
        </div>
    )
}

export default Footer