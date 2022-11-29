import React, { useState } from 'react'
import {Modal, Button, Progress} from "antd";

export default function ModalExample() {
    const [visible,setVisible] = useState(false);
    const [confirmLoaidng,setConfirmLoading] = useState(false);
    const [modalText,setModalText] = useState("모달창이 떠 올랐다.");
    const showModal = () =>{
        setVisible(true);
        setModalText("모달창이 떠 올랐다.");
    }
    const handleOk = () =>{
        setModalText("여기는 ok를 누른것이다");
        setConfirmLoading(true);
        setTimeout(()=>{
            setVisible(false);
            setConfirmLoading(false);
        }, 2000)
    }
    const handleCancel = () =>{
        console.log("clicked cancel button");
        setVisible(false);
    }
  return (
    <div>
        <>
        <Progress strokeLinecap='square' percent={75} />
        <Progress strokeLinecap='square' type="circle" percent={60}/>
        <Progress strokeLinecap='square' type="dashboard" percent={65} trailColor="red"/>
        </>
        <Button type="primary" onClick={showModal}>
            Open Modal with asyn logic
        </Button>
        <Modal title="Title" visible={visible} onOk={handleOk} confirmLoading={confirmLoaidng} onCancel={handleCancel}>
            <p>{modalText}</p>
        </Modal>
    </div>
  )
}
