import React, {useRef, useEffect} from "react";
import style from './style.module.css'

function Categories ({childs}) {

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

    return(
        <div className={style.categoriesContainer} ref={elRef} >
            {
                childs?.map((item) => {
                    return(
                        <div key={item.id} className={style.itemsDiv} > {item.title} </div>
                    )
                })
            }
        </div>
    )
}

export default Categories