import React, { useState } from 'react';
import { Drawer } from 'antd';
import style from "./style.module.css"
import { BsChevronDown } from "react-icons/bs"; 

function DrawerLang() {

    const [open, setOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState('AM')
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
                title="Basic Drawer"
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
                                <div  key={item.id} onClick={() => selectLang(item.title)} >{item.title}</div>
                            )
                        })
                    }
                </div>
            </Drawer>

        </div>
    )
}

export default DrawerLang