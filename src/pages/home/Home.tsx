import React from 'react'
import ThisDay from './components/ThisDay/ThisDay'
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo'
import s from './home.module.scss'
interface Props {}

export const Home = (props: Props) => {
	return (
		<div className={s.home}>
			<ThisDay />
			<ThisDayInfo />
		</div>
	)
}

export default Home
