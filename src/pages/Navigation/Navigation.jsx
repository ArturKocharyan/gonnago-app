import React, { useEffect, useState } from "react";
import logo from '../../assets/img/image2.svg'
import search from '../../assets/img/Search2.svg'
import { RiCloseCircleFill } from "react-icons/ri"
import style from './style.module.css'

function Navigation() {

    const [inputValue, setInputValue] = useState('')
    const [inputIsEmpty, setInputIsEmpty] = useState(false)

    useEffect(() => {
        if(inputValue.length !== 0) {
            setInputIsEmpty(true)
        }else{
            setInputIsEmpty(false)
        }
    },[inputValue])

    return (
        <div className={style.mainContainer} >
            <div className={style.iconContainer} >
                <div className={style.icon} >
                    <img src={logo} alt='Logo' />
                </div>
                <div className={style.countriesContainer} >
                    Erevan
                </div>
            </div>
            <div className={style.searchContainer} >
                <span> <img src={search} alt='search'/> </span>
                <input onChange={(e)=>{
                    e.preventDefault()
                    setInputValue(e.target.value)
                }} />
                <span className={!inputIsEmpty ? style.closeSpanHied :style.closeSpan} > <RiCloseCircleFill /> </span>
            </div>
            <div className={style.accountContainer} >
                <div className={style.lengContainer}>
                    <button>ARM</button>
                </div>
                <div className={style.singContainer}>
                    <button>Sing In</button>
                </div>
            </div>
        </div>
    )
}

export default Navigation