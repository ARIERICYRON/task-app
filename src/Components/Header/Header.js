import { BellFilled, MailOutlined } from '@ant-design/icons'
import { Image, Space, Typography } from 'antd'
import React from 'react'

export default function Header() {
  return (
    <div className='Header'>
        <Image width={50} src='https://www.shutterstock.com/image-vector/task-completed-icon-vector-illustration-600w-519490834.jpg'>
        </Image>
        <Typography.Title>Task Management DashBoard</Typography.Title>
        <Space>
           <MailOutlined />
           <BellFilled />

        </Space>
    </div>
  )
}
