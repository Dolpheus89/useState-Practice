import { useEffect, useRef } from "react";
import "../../styles/container/Dice.css";

export default function Dice({ value }) {
	const diceRef = useRef(null);

	useEffect(() => {
		if (diceRef.current) {
			for (let i = 1; i <= 6; i++) {
				diceRef.current.classList.remove(`show-${i}`);
			}
			diceRef.current.classList.add(`show-${value}`);
		}
	}, [value]);

	return (
		<div id="dice" ref={diceRef}>
			<div id="dice-side-one" className="side one">
				<div className="dot one-1" />
			</div>
			<div id="dice-side-two" className="side two">
				<div className="dot two-1" />
				<div className="dot two-2" />
			</div>
			<div id="dice-side-three" className="side three">
				<div className="dot three-1" />
				<div className="dot three-2" />
				<div className="dot three-3" />
			</div>
			<div id="dice-side-four" className="side four">
				<div className="dot four-1" />
				<div className="dot four-2" />
				<div className="dot four-3" />
				<div className="dot four-4" />
			</div>
			<div id="dice-side-five" className="side five">
				<div className="dot five-1" />
				<div className="dot five-2" />
				<div className="dot five-3" />
				<div className="dot five-4" />
				<div className="dot five-5" />
			</div>
			<div id="dice-side-six" className="side six">
				<div className="dot six-1" />
				<div className="dot six-2" />
				<div className="dot six-3" />
				<div className="dot six-4" />
				<div className="dot six-5" />
				<div className="dot six-6" />
			</div>
		</div>
	);
}
