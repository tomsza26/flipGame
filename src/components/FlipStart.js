import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCoffee,
	faAmbulance,
	faAngry,
	faAirFreshener,
	faAsterisk,
	faAt,
	faAtom,
	faAward,
	faBacon,
	faBahai,
	faBalanceScale,
	faBatteryFull,
	faBaseballBall,
	faBed,
	faBeer,
	faBiohazard,
	faBox,
	faBreadSlice,
	faBug,
	faCalendar,
	faCannabis,
	faChessKing,
	faChurch,
	faCode,
	faCoins,
	faCross,
	faCrown,
	faCubes,
	faDragon,
	faFireAlt,
	faFrog,
	faSpider
} from '@fortawesome/free-solid-svg-icons';

function FlipStart() {
	const [ animF, setAnimF ] = useState(0);
	const [ animI, setAnimI ] = useState(0);
	const [ animP, setAnimP ] = useState(0);
	const [ numDiv, setnumDiv ] = useState(0);
	const [ active, setActive ] = useState(0);

	const game = (lvl) => {
		let indents = [];
		let iconsLvl = lvl / 2;
		const shuffle = (a) => {
			for (let i = a.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[ a[i], a[j] ] = [ a[j], a[i] ];
			}
			return a;
		};

		let icons = [
			faCoffee,
			faAmbulance,
			faAngry,
			faAirFreshener,
			faAsterisk,
			faAt,
			faAtom,
			faAward,
			faBacon,
			faBahai,
			faBalanceScale,
			faBatteryFull,
			faBaseballBall,
			faBed,
			faBeer,
			faBiohazard,
			faBox,
			faBreadSlice,
			faBug,
			faCalendar,
			faCannabis,
			faChessKing,
			faChurch,
			faCode,
			faCoins,
			faCross,
			faCrown,
			faCubes,
			faDragon,
			faFireAlt,
			faFrog,
			faSpider
		];

		icons = shuffle(icons);

		let iconsRandom = icons.slice(0, iconsLvl);
		for (let q = 0; q < iconsLvl; q++) {
			iconsRandom.push(iconsRandom[q]);
		}

		iconsRandom = shuffle(iconsRandom);

		for (let i = 0; i < lvl; i++) {
			if (i < iconsLvl) {
				indents.push(
					<div className="indent" key={i} onClick={(e) => tryCard(e, i + iconsLvl)}>
						<div className="frontCard" />
						<div className="backCard">
							<FontAwesomeIcon icon={iconsRandom[i]} />
						</div>
					</div>
				);
			} else {
				indents.push(
					<div className="indent" key={i} onClick={(e) => tryCard(e, i)}>
						<div className="frontCard" />
						<div className="backCard">
							<FontAwesomeIcon icon={iconsRandom[i]} />
						</div>
					</div>
				);
			}
		}
		setnumDiv(indents);

		document.getElementById('flipCenter').style.opacity = 0;
		document.getElementById('pAnimation').id = 'p';
		document.getElementById('game').id = 'gameActive';
	};

	const tryCard = (e, cardId) => {
		if (active === 0) {
			console.log(active);
			e.target.className = 'indentAnim';
			setActive(1); //huj
		} else {
			console.log('elo');
			document.getElementsByClassName('indentAnim').className = 'indent';
		}
	};

	return (
		<React.Fragment>
			<div id="flipCenter">
				<div
					className="letter"
					id={animF ? 'fAnim' : 'f'}
					onClick={() => {
						setAnimI(0);
						setAnimP(0);
						animF === 1 ? setAnimF(0) : setAnimF(1);
					}}
				>
					<div className="front">F</div>
					<div className="back">zasadowy</div>
				</div>
				<div className="letter" id={animF ? 'lAnim' : 'l'}>
					L
				</div>
				<div
					className="letter"
					id={animI === 1 ? 'iAnim' : 'i'}
					onClick={() => {
						setAnimF(0);
						setAnimP(0);
						animI === 1 ? setAnimI(0) : setAnimI(1);
					}}
				>
					<div className="front">I</div>
					<div className="back">zasadowy</div>
				</div>
				<div
					className="letter"
					id={
						animI && !document.getElementById('pAnimation') ? (
							'pAnim'
						) : animP ? (
							'pAnimation'
						) : animI ? (
							'pAnimation'
						) : (
							'p'
						)
					}
					onClick={() => {
						if (animP === 0) {
							setAnimF(0);
							setAnimI(0);
							animP === 1 ? setAnimP(0) : setAnimP(1);
						}
					}}
				>
					<div className="front">P</div>
					<div className="back">
						<p className="level" onClick={() => game(16)}>
							EASY
						</p>
						<p className="level" onClick={() => game(48)}>
							MEDIUM
						</p>
						<p className="level" onClick={() => game(64)}>
							HARD
						</p>
					</div>
				</div>
			</div>
			<div id="game">{numDiv}</div>
		</React.Fragment>
	);
}

export default FlipStart;
