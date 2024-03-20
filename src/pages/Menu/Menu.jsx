import React, { useState } from "react";
import { useSelector } from "react-redux";
import Categories from "./Categories/Categories";
import style from "./style.module.css"

function Menu() {

    const menuItems = useSelector((state) => state.menu)
    const [selectItemId, setSelectItemId] = useState(1)
    const [navChilds, setNavChilds] = useState([
        {
            "id": 54,
            "title": "Թատրոն",
            "menu_id": 37,
            "alias": "theater",
            "ordering": 28,
            "type": "entertainment",
            "parent_id": 3
        },
        {
            "id": 55,
            "title": "Ֆիլմեր",
            "menu_id": 38,
            "alias": "cinema",
            "ordering": 29,
            "type": "entertainment",
            "parent_id": 3
        },
        {
            "id": 56,
            "title": "Համերգներ",
            "menu_id": 39,
            "alias": "concerts",
            "ordering": 30,
            "type": "entertainment",
            "parent_id": 3
        },
        {
            "id": 58,
            "title": "Սպորտ",
            "menu_id": 43,
            "alias": "sports",
            "ordering": 34,
            "type": "entertainment",
            "parent_id": 3
        },
        {
            "id": 59,
            "title": "Արվեստ",
            "menu_id": 44,
            "alias": "arts",
            "ordering": 35,
            "type": "entertainment",
            "parent_id": 3
        },
        {
            "id": 60,
            "title": "Քվեստ",
            "menu_id": 45,
            "alias": "quest",
            "ordering": 36,
            "type": "entertainment",
            "parent_id": 3
        },
        {
            "id": 61,
            "title": "Ակումբային կյանք",
            "menu_id": 46,
            "alias": "clublife",
            "ordering": 37,
            "type": "entertainment",
            "parent_id": 3
        },
        {
            "id": 62,
            "title": "Ստենդափ",
            "menu_id": 47,
            "alias": "standup",
            "ordering": 38,
            "type": "entertainment",
            "parent_id": 3
        },
        {
            "id": 57,
            "title": "Փառատոններ",
            "menu_id": 81,
            "alias": "festivals",
            "ordering": 72,
            "type": "entertainment",
            "parent_id": 3
        }
    ])

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
                                    </div  >
                                    <div className={style.containerSpan} >
                                      <div className={selectItemId === item.id ? style.selectMenuSpan : style.menuSpan} />
                                    </div>
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