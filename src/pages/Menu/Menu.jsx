import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import Categories from "./Categories/Categories";
import style from "./style.module.css"

function Menu() {

    const menuItems = useSelector((state) => state.menu)
    const [selectItemId, setSelectItemId] = useState(1)
    const [navChilds, setNavChilds] = useState()

    const elRef = useRef();
    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = e => {
                if (e.deltaY === 0) return;
                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY,
                    behavior: "smooth"
                });
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, []);
   

    return (
        <div>
            <div className={style.mainContainerNav}>
                <div className={style.navMenu} ref={elRef} >
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