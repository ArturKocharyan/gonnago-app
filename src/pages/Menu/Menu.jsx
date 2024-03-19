import React, { useState } from "react";
import { useSelector } from "react-redux";
import polygone from '../../assets/img/Polygon1.svg'
import Categories from "./Categories/Categories";
import style from "./style.module.css"

function Menu() {

    const menuItems = useSelector((state) => state.menu)
    const [selectItemId, setSelectItemId] = useState(1)
    const [navChilds, setNavChilds] = useState([])

    return (
        <div>
            <div className={style.mainContainerNav}>
                <div className={style.navMenu} >
                    {
                        menuItems.menu.data?.map((item) => {
                            return (
                                <div
                                    className={style.menuDivs}
                                    key={item.id}
                                    onClick={() => {
                                        setSelectItemId(item.id)
                                        setNavChilds(item.childs)
                                    }}
                                >
                                    <div
                                        className={selectItemId === item.id ? style.selectItem : style.menuItems}
                                    >{item.title}
                                    </div>
                                    <span className={selectItemId === item.id ? style.selectMenuSpan : style.menuSpan} >
                                        <img src={polygone} alt='polygone' />
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={style.navCategories} >
                <Categories childs={navChilds} />
            </div>
        </div>
    )
}

export default Menu