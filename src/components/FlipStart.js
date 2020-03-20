import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProgressBar from 'react-bootstrap/ProgressBar';
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
	const [ timer, setTimer ] = useState(0);
	const [ fullTime, setFullTime ] = useState(0);
	const [ f, setF ] = useState('F');
	const [ l, setL ] = useState('L');
	const [ i, setI ] = useState('I');
	const [ p, setP ] = useState('P');

	let active = 0;
	let tempId = null;
	let tempLoc = 'testing';
	let tempLoc2 = 'testing';
	let tempLoc3 = null;
	let gameProgress = null;
	let toDel = null;
	let esc = 0;
	let pause = 0;

	const game = (lvl) => {
		let indents = [];
		let iconsLvl = lvl / 2;
		let timing = 0;
		let tempTimer = 0;
		gameProgress = iconsLvl;

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
		iconsRandom = iconsRandom.concat(iconsRandom);

		for (let i = 0; i < lvl; i++) {
			if (i < iconsLvl) {
				indents.push(
					<div className="indent" key={i} id={i} onClick={(e) => tryCard(e, i + iconsLvl, iconsLvl)}>
						<div className="frontCard" />
						<div className="backCard">
							<FontAwesomeIcon icon={iconsRandom[i]} />
						</div>
					</div>
				);
			} else {
				indents.push(
					<div className="indent" key={i} id={i} onClick={(e) => tryCard(e, i, iconsLvl)}>
						<div className="frontCard" />
						<div className="backCard">
							<FontAwesomeIcon icon={iconsRandom[i]} />
						</div>
					</div>
				);
			}
		}

		if (lvl === 16) {
			document.getElementById('gameSelector').style.gridTemplateColumns = 'repeat(4, 1fr)';
			document.getElementById('gameSelector').style.gridTemplateRows = 'repeat(4, 1fr)';
			tempTimer = 32000;
		} else if (lvl === 36) {
			document.getElementById('gameSelector').style.gridTemplateColumns = 'repeat(6, 1fr)';
			document.getElementById('gameSelector').style.gridTemplateRows = 'repeat(6, 1fr)';
			tempTimer = 90000;
		} else if (lvl === 64) {
			document.getElementById('gameSelector').style.gridTemplateColumns = 'repeat(8, 1fr)';
			document.getElementById('gameSelector').style.gridTemplateRows = 'repeat(8, 1fr)';
			tempTimer = 192000;
		}

		setFullTime(tempTimer);

		let letsGo = setInterval(() => {
			if (gameProgress === 0) {
				clearInterval(letsGo);
				document.getElementById('flipCenter').style.opacity = 1;
				document.getElementById('gameActive').id = 'game';
				document.getElementById('paused').style.display = 'none';
				document.removeEventListener('keydown', handleKeyDown);
				setTimer(0);
				setFullTime(0);
				setnumDiv(0);
				timing = 0;
				gameProgress = null;
				if (esc === 1) {
					setF('F');
					setL('L');
					setI('I');
					setP('P');
					esc = 0;
				} else {
					setF('N');
					setL('I');
					setI('C');
					setP('E');
				}
			}
			if (timing === tempTimer) {
				setTimeout(() => {
					clearInterval(letsGo);
					document.getElementById('flipCenter').style.opacity = 1;
					document.getElementById('gameActive').id = 'game';
					document.getElementById('paused').style.display = 'none';
					setTimer(0);
					setFullTime(0);
					setF('F');
					setL('A');
					setI('I');
					setP('L');
					document.removeEventListener('keydown', handleKeyDown);
				}, 2000);
			}
			if (pause === 0) {
				timing += 500;
				setTimer(timing);
			}
		}, 500);

		indents = shuffle(indents);
		setnumDiv(indents);
		document.getElementById('flipCenter').style.opacity = 0;
		setAnimP(0);
		document.getElementById('game').id = 'gameActive';
		document.addEventListener('keydown', handleKeyDown);
	};

	const tryCard = (e, cardId, lvl) => {
		if (e.target.className === 'indent') {
			e.target.className = 'indentAnim';
			if (active === 0) {
				active = 1;
				document.getElementById(tempLoc).className = 'indent';
				document.getElementById(tempLoc2).className = 'indent';
				tempId = cardId;
				tempLoc = e.target.id;
			} else {
				tempLoc2 = e.target.id;
				if (tempLoc2 !== tempLoc) {
					e.target.className = 'indentAnim';
					if (tempId === cardId) {
						toDel = tempId;
						setTimeout(() => {
							document.getElementById(toDel).style.visibility = 'hidden';
							document.getElementById(toDel - lvl).style.visibility = 'hidden';
							gameProgress -= 1;
						}, 200);
					} else {
						tempLoc3 = tempLoc;
						setTimeout(() => {
							document.getElementById(tempLoc2).className = 'indent';
							document.getElementById(tempLoc3).className = 'indent';
						}, 500);
					}
					active = 0;
				}
			}
			if (active === 1 && document.getElementById(tempLoc).className === 'indent') {
				document.getElementById(tempLoc).className = 'indentAnim';
			}
		}
	};

	const handleKeyDown = (event) => {
		if (event.key === 'p') {
			if (pause === 0) {
				document.getElementById('paused').style.display = 'flex';
				pause = 1;
			} else {
				document.getElementById('paused').style.display = 'none';
				pause = 0;
			}
		} else if (event.key === 'Escape') {
			esc = 1;
			gameProgress = 0;
			setF('F');
			setL('L');
			setI('I');
			setP('P');
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
					<div className="front">{f}</div>
					<div className="back">Alpha version</div>
				</div>
				<div className="letter" id={animF ? 'lAnim' : 'l'}>
					{l}
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
					<div className="front">{i}</div>
					<div className="back" id="iback">
						<p id="pIns" className="ibacked">
							Instructions
						</p>
						<p className="ibacked">Press [p] to pause, or [ESC] to abandon game.</p>
						<p className="ibacked">
							Flip is a timed card memory game. Click the green cards to see what symbol they uncover and
							try to find the matching symbol underneath the other cards.
						</p>
						<p className="ibacked">Uncover two matching symbols at once to eliminate them from the game.</p>
					</div>
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
					<div className="front">{p}</div>
					<div className="back">
						<p className="level" onClick={() => game(16)}>
							EASY
						</p>
						<p className="level" onClick={() => game(36)}>
							MEDIUM
						</p>
						<p className="level" onClick={() => game(64)}>
							HARD
						</p>
					</div>
				</div>
			</div>
			<div id="testing" />
			<div id="paused" />
			<div id="game">
				{<ProgressBar now={timer} max={fullTime} />}
				<div className="gameInside" id="gameSelector">
					{numDiv}
				</div>
			</div>
		</React.Fragment>
	);
}

export default FlipStart;
