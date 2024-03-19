import React, { useState } from "react";
import { Menu, Dropdown } from 'antd';
import { AiOutlineDown } from "react-icons/ai";
import style from './style.module.css'



function DropDownLang() {

    const [lang, setLang] = useState("AM")

    const onClick = ({ key }) => {
        setLang(key);
    };

    const menu = (
        <Menu onClick={onClick}>
            <Menu.Item key="AM">AM</Menu.Item>
            <Menu.Item key="EN">EN</Menu.Item>
            <Menu.Item key="RU">RU</Menu.Item>
        </Menu>
    );

    return (
        <div>
            <Dropdown overlay={menu} trigger={['click']}>
                <div style={{display:"flex",justifyContent: "space-between",width: "46px", cursor: "pointer"}} onClick={e => e.preventDefault()}>
                    <div className={style.test} >{lang}</div>
                    <div className={style.icon} ><AiOutlineDown /></div>
                </div>
            </Dropdown>
        </div>
    )
}

export default DropDownLang