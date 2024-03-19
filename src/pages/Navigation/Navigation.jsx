import React, { useEffect, useState } from "react";
import logo from '../../assets/img/image2.svg'
import search from '../../assets/img/Search2.svg'
import { RiCloseCircleFill } from "react-icons/ri"
import style from './style.module.css'
import DropDownLang from "./DropDownLang/DropDownLang";
import CitesDropDown from "./CitesDropDown/CitesDropDown";
import { useSelector } from "react-redux";

function Navigation() {

    const [inputValue, setInputValue] = useState('')
    const [inputIsEmpty, setInputIsEmpty] = useState(false)
    const citiesList = useSelector((state) => state.cities)

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
                    <CitesDropDown list={citiesList} />
                </div>
                
            </div>
            <div className={style.searchContainer} >
                <span> <img src={search} alt='search'/> </span>
                <input 
                placeholder="MOVE"
                onChange={(e)=>{
                    e.preventDefault()
                    setInputValue(e.target.value)
                }} />
                <span className={!inputIsEmpty ? style.closeSpanHied :style.closeSpan} > <RiCloseCircleFill /> </span>
            </div>
            <div className={style.accountContainer} >
                <div className={style.lengContainer}>
                    <DropDownLang />
                </div>
                <div className={style.singContainer}>
                    <button>Sing In</button>
                </div>
            </div>
        </div>
    )
}

export default Navigation