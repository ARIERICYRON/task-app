import React from 'react'
import './/App.css'
import Header from './Components/Header/Header'
import { Space } from 'antd'
import SideBar from './Components/SideMenu/SideBar'
import Page from './Components/Pages/Page'
import Footer from './Components/Footer/Footer'
export default function App() {
  return (
    <div className='App'>
      <Header />
      <Space>
        <SideBar />
        <Page />
      </Space>
      <Footer />
    </div>
  )
}
