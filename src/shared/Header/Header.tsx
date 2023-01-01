import React from 'react'
import Select from 'react-select'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import s from './Header.module.scss'

type Props = {}

const Header = (props: Props) => {
	const options = [
		{ value: 'city 1', label: 'Одесса' },
		{ value: 'city 2', label: 'Киев' },
		{ value: 'city 3', label: 'Львов' },
	]

	const colourStyles = {
		control: (styles: any) => ({
			...styles,
			backgroundColor: 'rgba(71, 147, 255, 0.2)',
			width: '194px',
			height: '37px',
			border: 'none',
			borderRadius: '10px',
			zIndex: 100,
		}),
	}
	return (
		<header className={s.header}>
			<div className={s.wrapper}>
				<div className={s.logo}>
					{' '}
					<GlobalSvgSelector id='header-logo' />
				</div>
				<div className={s.title}>React weather</div>
			</div>
			<div className={s.wrapper}>
				<div className={s.changeTheme}>
					<GlobalSvgSelector id='change-theme' />
				</div>
				<Select
					styles={colourStyles}
					options={options}
					defaultValue={options[0]}
				/>
			</div>
		</header>
	)
}

export default Header
