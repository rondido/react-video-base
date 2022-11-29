import React from 'react'
import {Form, Input, Button, Checkbox} from "antd";

export default function FormExample() {
    const onFinish = (values) =>{
        console.log("Success:", values);
    }
    const onFinishFailed = (errorInfo) =>{
        console.log("Failed :", errorInfo);
    }
  return (
    <Form name="basic" labelCol={{span:8}} wrapperCol={{span:16}} initialValues={{remember:true}} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item label="Username" name="username" rules={[{required: true, message:"Plase input your user"}]}>
            <Input/>
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{required: true, message:"Plase input your password"}]}>
            <Input.Password/>
        </Form.Item>
        <Form.Item name="remember" valuePropName='checkd' wrapperCol={{offset:8, span:16}}>
            <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
