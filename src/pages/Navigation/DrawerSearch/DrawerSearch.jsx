import React, { useEffect, useState } from 'react';
import { Drawer, Space, Input } from 'antd';
import style from "./style.module.css"
import { GrClose } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import { CloseCircleOutlined } from '@ant-design/icons';

function DrawerSearch() {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState('')
    const [switchBtn, setSwitchBtn] = useState(false)
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if(inputValue.length > 0) {
            setSwitchBtn(true)
        }else {
            setSwitchBtn(false)
        }
    },[inputValue])

    return (
        <div className={style.mainContainer} >
            <div onClick={showDrawer}>
                <BsSearch />
            </div>
            <Drawer
                title="Որոնում"
                placement={"bottom"}
                closable={false}
                onClose={onClose}
                open={open}
                key={"bottom"}
                enterButton="Search"
                extra={
                    <Space>
                        <span onClick={onClose}>
                            <GrClose />
                        </span>
                    </Space>
                }
            >
                <Input
                    placeholder="Enter your username"
                    prefix={<BsSearch  />}
                    suffix={!switchBtn ? <></>  : <CloseCircleOutlined onClick={() => {
                        setInputValue("")
                    }} />}
                    value = {inputValue}
                    onChange={(e) => (setInputValue(e.target.value))}
                />
            </Drawer>
        </div>
    )
}

export default DrawerSearch