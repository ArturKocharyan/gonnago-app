import React, { useState } from 'react';
import { Drawer, Space } from 'antd';
import style from "./style.module.css"
import { GrClose } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";

function DrawerSearch() {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className={style.mainContainer} >
            <div  onClick={showDrawer}>
            <BsSearch />
            </div>
            <Drawer
                title={<input/>}
                placement={"bottom"}
                closable={false}
                onClose={onClose}
                open={open}
                key={"bottom"}
                extra={
                    <Space>
                      <span onClick={onClose}>
                      <GrClose />
                      </span>
                    </Space>
                  }
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    )
}

export default DrawerSearch