import s from './ThisDay.module.scss'

type Props = {}

const ThisDay = (props: Props) => {
	return (
		<section className={s.thisDay}>
			<div className={s.topBlock}>
				<div className={s.temperature}>20°</div>
				<div className={s.currentDay}>Сегодня</div>
			</div>
			<div className={s.bottomBlock}>
				<div className={s.currentTime}>Время: 23:12</div>
				<div className={s.currentLocation}>Город: Одесса</div>
			</div>
		</section>
	)
}

export default ThisDay
