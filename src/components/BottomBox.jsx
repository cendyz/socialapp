import { PersonsInfo } from "./PersonsInfo";

const PersonBox = () => {
	return (
		<>
			{PersonsInfo.map(person => {
				return <Person {...person} key={person.id} />;
			})}
		</>
	);
};

const Person = props => {
	const { name, picture, occassion, desc, time, club, secondPicture, message, dot } = props;
	return (
		<div className='main__bottom-box'>
			<img src={picture} alt='Profile picture' className='main__bottom-box-img' />
			<div className='main__bottom-box-texts'>
				<p className='main__bottom-box-texts-text'>
					<span className='main__bottom-box-texts-text-name'>{name}</span> {desc}
					{occassion && <span className='main__bottom-box-texts-text-last'>{occassion}</span>}
					{club && (
						<span className='main__bottom-box-texts-text-last main__bottom-box-texts-text-last--chess'>{club}</span>
					)}
					{dot && <span className='main__bottom-box-texts-text-dot'>{dot}</span>}
				</p>
				<p className='main__bottom-box-texts-time'>{time} ago</p>
				{message && (
					<div className='main__bottom-box-texts-message'>
						<p className='main__bottom-box-texts-message-info'>{message}</p>
					</div>
				)}
			</div>
			{secondPicture && <img src={secondPicture} alt='Chess battle' className='main__bottom-box-chess' />}
		</div>
	);
};

export default PersonBox;
