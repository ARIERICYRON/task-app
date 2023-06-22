import { AppstoreAddOutlined, BarChartOutlined, CalendarOutlined, LineChartOutlined, WarningOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SideBar() {
  const navigate = useNavigate()
  return (
    <div className='SideBar'>
      <Menu
      onClick={(item)=>{
        navigate(item.key)
      }}
      items={[
        {
          label: "Dashboard",
          icon: <AppstoreAddOutlined />,
          key: "/"
        },
        {
          label: "Goal Timeline",
          icon: <BarChartOutlined />,
          key: "/GoalTimeline"
        },
        {
          label: "Daily Routine",
          icon: <CalendarOutlined />,
          key: "/DailyRoutine"
        },
        {
          label: "Weekly Routine",
          icon: <CalendarOutlined />,
          key: "/WeeklyRoutine"
        },
        {
          label: "Monthly Routine",
          icon: <CalendarOutlined />,
          key: "/MonthlyRoutine"
        },
        {
          label: "Report",
          icon: <LineChartOutlined />,
          key: "/Report"
        },
        {
          label: "Help Centre",
          icon: <WarningOutlined />,
          key: "/HelpCentre"
        },
      ]}
      ></Menu>
    </div>
  )
}
