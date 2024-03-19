import React, { useEffect, useState } from "react";
import { Popover, Divider } from 'antd';
import style from './style.module.css'
import { CgClose } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";

const headerCities = [
    {
        id: 1,
        title: "Armenia"
    },
    {
        id: 2,
        title: "Gyumri",
    },
    {
        id: 3,
        title: "Yerevan"
    },
    {
        id: 4,
        title: "Vanadzor"
    }
]

function CitesDropDown({ list }) {

    const [inputValue, setInputValue] = useState('')
    const [isActive, setIsActive] = useState(false)
    const [title, setTitle] = useState(headerCities[0].title)
    const citiesData = list.cities.data;

    const groupByFirstLetter = (cities) => {
        const grouped = {};
        cities?.forEach(city => {
            const firstLetter = city.title.charAt(0).toUpperCase();
            if (grouped[firstLetter]) {
                grouped[firstLetter].push(city);
            } else {
                grouped[firstLetter] = [city];
            }
        });
        return grouped;
    };
    const groupedCities = groupByFirstLetter(citiesData);

    useEffect(() => {
        if (inputValue.length !== 0) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }, [inputValue])

    return (
        <div>
            <Popover content={(
                <div className={style.citiesContainer} >
                    <div className={style.titleContainer} >
                        <span><p>City</p></span>
                        <span><CgClose /></span>
                    </div>
                    <div className={style.headerContainer}>
                        <div className={style.searchContainer} >
                            <span className={style.loopSpan} ><BsSearch /></span>
                            <input onChange={(e) => {
                                setInputValue(e.target.value)
                            }} />
                            <span
                                onClick={() => {
                                    setInputValue('')
                                }}
                                className={isActive ? style.closeSpanHied : style.closeSpan}
                            ><AiFillCloseCircle /></span>
                        </div>
                        <div className={style.bottomContainer} >
                            {
                                headerCities.map((item) => {
                                    return (
                                        <div
                                        onClick={() => {
                                            setTitle(item.title)
                                        }} 
                                        className={style.headerDivs}
                                         key={item.id} >{item.title}</div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <Divider />
                    <div className={style.listContainer} >
                        {Object.entries(groupedCities)?.map(([letter, cities]) => (
                            <ul key={letter}>
                                <li className={style.upperLetter} >{letter}</li>
                                {cities?.map(city => (
                                    <li 
                                    onClick={() => {
                                        setTitle(city.title)
                                    }}
                                    style={{cursor:'pointer', marginTop:'2px'}}
                                    key={city.id}
                                    >{city.title}</li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
            )} trigger="click">
                <div className={style.citiesBtn} >{title}<span><BsChevronDown /></span></div>
            </Popover>
        </div>
    )
}

export default CitesDropDown