function App() {
	return (
		<main className='main'>
			<div className='main__top'>
				<div className='main__top-left'>
					<h1 className='main__top-left-title'>Notifications</h1>
					<p className='main__top-left-number'>3</p>
				</div>
				<p className='main__top-mark'> Mark all as read</p>
			</div>
			<div className='main__bottom'>
				<div className='main__bottom-box'>
					<img src='src/assets/img/avatar-mark-webber.webp' alt='Profile picture' className='main__bottom-box-img' />
					<div className='main__bottom-box-texts'>
						<p className='main__bottom-box-texts-text'>
							<span className='main__bottom-box-texts-text-name'>Mark Webber</span> reacted to your recent post
							<span className='main__bottom-box-texts-text-last'>My first tournament today!</span>
							<span className='main__bottom-box-texts-text-dot'></span>
						</p>
						<p className='main__bottom-box-texts-time'>1m ago</p>
					</div>
				</div>
				<div className='main__bottom-box'>
					<img src='src/assets/img/avatar-angela-gray.webp' alt='Profile picture' className='main__bottom-box-img' />
					<div className='main__bottom-box-texts'>
						<p className='main__bottom-box-texts-text'>
							<span className='main__bottom-box-texts-text-name'>Angela Gray</span> followed you
							<span className='main__bottom-box-texts-text-dot'></span>
						</p>
						<p className='main__bottom-box-texts-time'>5m ago</p>
					</div>
				</div>
				<div className='main__bottom-box'>
					<img src='src/assets/img/avatar-jacob-thompson.webp' alt='Profile picture' className='main__bottom-box-img' />
					<div className='main__bottom-box-texts'>
						<p className='main__bottom-box-texts-text'>
							<span className='main__bottom-box-texts-text-name'>Jacob Thompson</span> has joined your group
							<span className='main__bottom-box-texts-text-last main__bottom-box-texts-text-last--chess'>
								Chess Club
							</span>
							<span className='main__bottom-box-texts-text-dot'></span>
						</p>
						<p className='main__bottom-box-texts-time'>1 day ago</p>
					</div>
				</div>
				<div className='main__bottom-box'>
					<img
						src='src/assets/img/avatar-rizky-hasanuddin.webp'
						alt='Profile picture'
						className='main__bottom-box-img'
					/>
					<div className='main__bottom-box-texts'>
						<p className='main__bottom-box-texts-text'>
							<span className='main__bottom-box-texts-text-name'>Rizky Hasanuddin</span> sent you a private message
						</p>
						<p className='main__bottom-box-texts-time'>5 days ago</p>
						<div className='main__bottom-box-texts-message'>
							<p className='main__bottom-box-texts-message-info'>
								Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already
								having lots of fun and improving my game.
							</p>
						</div>
					</div>
				</div>
				<div className='main__bottom-box'>
					<img src='src/assets/img/avatar-kimberly-smith.webp' alt='Profile picture' className='main__bottom-box-img' />
					<div className='main__bottom-box-texts'>
						<p className='main__bottom-box-texts-text'>
							<span className='main__bottom-box-texts-text-name'>Kimberly Smith</span> commented on your picture
						</p>
						<p className='main__bottom-box-texts-time'>1 week ago</p>
					</div>
					<img src='src/assets/img/image-chess.webp' alt='Chess battle' className='main__bottom-box-chess' />
				</div>
				<div className='main__bottom-box'>
					<img
						src='src/assets/img/avatar-nathan-peterson.webp'
						alt='Profile picture'
						className='main__bottom-box-img'
					/>
					<div className='main__bottom-box-texts'>
						<p className='main__bottom-box-texts-text'>
							<span className='main__bottom-box-texts-text-name'>Nathan Peterson</span> reacted to your recent post
							<span className='main__bottom-box-texts-text-last'>5 end-game strategies to increase your win rate</span>
						</p>

						<p className='main__bottom-box-texts-time'>2 weeks ago</p>
					</div>
				</div>
				<div className='main__bottom-box'>
					<img src='src/assets/img/avatar-anna-kim.webp' alt='Profile picture' className='main__bottom-box-img' />
					<div className='main__bottom-box-texts'>
						<p className='main__bottom-box-texts-text'>
							<span className='main__bottom-box-texts-text-name'>Anna Kim</span> left the group
							<span className='main__bottom-box-texts-text-last main__bottom-box-texts-text-last--chess'>
								Chess Club
							</span>
						</p>

						<p className='main__bottom-box-texts-time'>2 weeks ago</p>
					</div>
				</div>
			</div>
		</main>
	);
}

//  3

//

//
//   1m ago

//   Angela Gray followed you
//   5m ago

//   Jacob Thompson has joined your group Chess Club
//   1 day ago

//   Rizky Hasanuddin sent you a private message
//   5 days ago
//

//   Kimberly Smith commented on your picture
//   1 week ago

//   Nathan Peterson
//   2 weeks ago

//   Anna Kim  Chess Club
//   2 weeks ago

export default App;
