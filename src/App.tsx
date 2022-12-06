import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './styles/index.scss'
import Header from './shared/Header/Header'
import Home from './pages/home/Home'
import MonthStatistics from './pages/monthStatistics/MonthStatistics'
function App() {
	return (
		<div className='container'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/monthStatistics' element={<MonthStatistics />} />
			</Routes>
		</div>
	)
}

export default App
