import React from "react";
import style from './style.module.css'

function Categories ({childs}) {
    return(
        <div className={style.categoriesContainer} >
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