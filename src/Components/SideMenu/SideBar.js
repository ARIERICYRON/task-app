import { AppstoreAddOutlined, BarChartOutlined, CalendarOutlined, LineChartOutlined, WarningOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'

export default function SideBar() {
  return (
    <div className='SideBar'>
      <Menu
      items={[
        {
          label: "Dashboard",
          icon: <AppstoreAddOutlined />,
          key: "/"
        },
        {
          label: "Goal Timeline",
          icon: <BarChartOutlined />,
          key: "/"
        },
        {
          label: "Daily Routine",
          icon: <CalendarOutlined />,
          key: "/"
        },
        {
          label: "Weekly Routine",
          icon: <CalendarOutlined />,
          key: "/"
        },
        {
          label: "Monthly Routine",
          icon: <CalendarOutlined />,
          key: "/"
        },
        {
          label: "Report",
          icon: <LineChartOutlined />,
          key: "/"
        },
        {
          label: "Help Centre",
          icon: <WarningOutlined />,
          key: "/"
        },
      ]}
      ></Menu>
    </div>
  )
}
