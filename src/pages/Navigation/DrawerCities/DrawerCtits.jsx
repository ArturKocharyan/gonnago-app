import React, { useState, useEffect } from "react";
import { Drawer } from 'antd';
import style from "./style.module.css"
import { BsSearch } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

const headerCities = [
    {
        id: 1,
        title: "Armenia",
    },
    {
        id: 2,
        title: "Gyumri",
    },
    {
        id: 3,
        title: "Yerevan",
    },
    {
        id: 4,
        title: "Vanadzor",
    },
];

function DrawerCities({ list }) {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [title, setTitle] = useState(headerCities[0].title);
    const citiesData = list.cities.data;
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const groupByFirstLetter = (cities) => {
        const grouped = {};
        cities?.forEach((city) => {
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

    const filteredCities = Object.entries(groupedCities).reduce(
        (acc, [letter, cities]) => {
            const filtered = cities.filter((city) =>
                city.alias.toLowerCase().includes(inputValue.toLowerCase())
            );
            if (filtered.length > 0) {
                acc[letter] = filtered;
            }
            return acc;
        },
        {}
    );

    useEffect(() => {
        if (inputValue.length !== 0) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [inputValue]);

    return (
        <div className={style.mainContainer}>
            <div className={style.btn} type="primary" onClick={showDrawer}>
                <span>{title}</span><span><BsChevronDown /></span>
            </div>
            <Drawer
                title="Քաղաք"
                placement={"bottom"}
                closable={false}
                onClose={onClose}
                open={open}
                key={"bottom"}
                height={"90%"}
                width={"100%"}
                className={style.drawerCitiesStyle}
            >
                <div className={style.searchContainer}>
                    <span className={style.loopSpan}>
                        <BsSearch />
                    </span>
                    <input
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                        }}
                    />
                    <span
                        onClick={(e) => {
                            e.preventDefault();
                            setInputValue("");
                        }}
                        className={isActive ? style.closeSpanHied : style.closeSpan}
                    >
                        <AiFillCloseCircle />
                    </span>
                </div>
                <div className={style.bottomContainer}>
                    {headerCities.map((item) => {
                        return (
                            <div
                                onClick={() => {
                                    setTitle(item.title);
                                    onClose();
                                }}
                                className={item.title === title ? style.headerDivsCheck : style.headerDivs}
                                key={item.id}
                            >
                                <span><AiOutlineCheck /></span>{item.title}
                            </div>
                        );
                    })}
                </div>
                <div className={style.listContainer}>
                    {Object.entries(filteredCities)?.map(([letter, cities]) => (
                        <ul key={letter}>
                            <li className={style.upperLetter}>{letter}</li>
                            {cities?.map((city) => (
                                <li
                                    onClick={() => {
                                        setTitle(city.title);
                                        onClose();
                                    }}
                                    style={{ cursor: "pointer", marginTop: "2px" }}
                                    key={city.id}
                                >
                                    {city.title}
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </Drawer>

        </div>
    )
}

export default DrawerCities