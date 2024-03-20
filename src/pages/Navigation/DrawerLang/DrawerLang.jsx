import React, { useState } from 'react';
import { Drawer } from 'antd';
import style from "./style.module.css"
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

function DrawerLang() {

    const [open, setOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState('AM')
    const [checkID, setCheckID] = useState(1)
    const langArr = [
        {
            id: 1,
            title: 'AM'
        },
        {
            id: 2,
            title: 'RU'
        },
        {
            id: 3,
            title: 'EN'
        }
    ]

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    function selectLang(lang) {
        setSelectedLang(lang)
        setOpen(false)
    }

    return (
        <div className={style.mainContainer} >
            <div className={style.btn} type="primary" onClick={showDrawer}>
                <span>{selectedLang}</span><span><BsChevronDown /></span>
            </div>
            <Drawer
                title="Լեզու"
                placement={"bottom"}
                closable={false}
                onClose={onClose}
                open={open}
                key={"bottom"}
            >
                <div >
                    {
                        langArr.map((item) => {
                            return (
                                <div
                                    className={style.itemDiv}
                                    key={item.id}
                                    onClick={() => {
                                        selectLang(item.title)
                                        setCheckID(item.id)
                                    }}
                                >{item.title}<span className={checkID === item.id ? style.checked : style.notChecked} ><AiOutlineCheck /></span></div>
                            )
                        })
                    }
                </div>
            </Drawer>

        </div>
    )
}

export default DrawerLang