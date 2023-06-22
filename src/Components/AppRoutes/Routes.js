import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from '../../Pages/DashBoard/DashBoard'
import DailyRoutine from '../../Pages/DailyRoutine/DailyRoutine'
import GoalTimeline from '../../Pages/GoalTimeline/GoalTimeline'
import HelpCentre from '../../Pages/HelpCentre/HelpCentre'
import MonthlyRoutine from '../../Pages/MonthlyRoutine/MonthlyRoutine'
import Report from '../../Pages/Report/Report'
import WeeklyRoutine from '../../Pages/WeeklyRoutine/WeeklyRoutine'

export default function AppRoutes() {
  return (
    
  <Routes>
      <Route path='/' element={<DashBoard />}></Route>
      <Route path='/DailyRoutine' element={<DailyRoutine />}></Route>
      <Route path='/GoalTimeline' element={<GoalTimeline />}></Route>
      <Route path='/HelpCentre' element={<HelpCentre />}></Route>
      <Route path='/MonthlyRoutine' element={<MonthlyRoutine />}></Route>
      <Route path='/Report' element={<Report />}></Route>
      <Route path='/WeeklyRoutine' element={<WeeklyRoutine />}></Route>
  </Routes>
  )
}
