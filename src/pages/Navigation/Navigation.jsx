import React, { useEffect, useState } from "react";
import logo from "../../assets/img/image2.svg";
import search from "../../assets/img/Search2.svg";
import { RiCloseCircleFill } from "react-icons/ri";
import style from "./style.module.css";
import DropDownLang from "./DropDownLang/DropDownLang";
import CitesDropDown from "./CitesDropDown/CitesDropDown";
import { useDispatch, useSelector } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import DrawerLang from "./DrawerLang/DrawerLang";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import DrawerSearch from "./DrawerSearch/DrawerSearch";
import DrawerCities from "./DrawerCities/DrawerCtits";
import { getCitiesStatus, getCities } from "../../redux/slices/citiesSlice";

function Navigation() {
  const dispatch = useDispatch();
  const citiesStatus = useSelector(getCitiesStatus);
  const [inputValue, setInputValue] = useState("");
  const [inputIsEmpty, setInputIsEmpty] = useState(false);
  const citiesList = useSelector((state) => state.cities);
  const [mobailMenu, setMobailMenu] = useState(false);

  useEffect(() => {
    if (citiesStatus === "idle") {
      dispatch(getCities());
    }
  }, [citiesStatus, dispatch]);

  useEffect(() => {
    inputValue.length !== 0 ? setInputIsEmpty(true) : setInputIsEmpty(false);
  }, [inputValue]);

  return (
    <div className={style.mainContainer}>
      <div className={style.iconContainer}>
        <div className={style.icon}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={style.countriesContainer}>
          <CitesDropDown list={citiesList} />
        </div>
      </div>
      <div className={style.searchContainer}>
        <span>
          <img src={search} alt="search" />
        </span>
        <input
          placeholder="MOVE"
          value={inputValue}
          onChange={(e) => {
            e.preventDefault();
            setInputValue(e.target.value);
          }}
        />
        <span
          onClick={(e) => {
            e.preventDefault();
            setInputValue("");
          }}
          className={!inputIsEmpty ? style.closeSpanHied : style.closeSpan}
        >
          <RiCloseCircleFill />
        </span>
      </div>
      <div className={style.accountContainer}>
        <div className={style.lengContainer}>
          <DropDownLang />
        </div>
        <div className={style.singContainer}>
          <button>Sing In</button>
        </div>
      </div>

      <span className={style.alterSearch}>
        <DrawerSearch />
      </span>
      <div
        onClick={() => setMobailMenu(!mobailMenu)}
        className={style.burgerMenu}
      >
        <span>{!mobailMenu ? <RxHamburgerMenu /> : <HiOutlineMenuAlt3 />}</span>
      </div>
      {mobailMenu === true && (
        <div className={style.menuBody}>
          <div className={style.citiesMenu}>
            {/* <CitesDropDown list={citiesList} /> */}
            <DrawerCities list={citiesList} />
          </div>
          <div className={style.langMenu}>
            <DrawerLang />
          </div>

          <div className={style.singContainer}>
            <button>Sing In</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navigation;
