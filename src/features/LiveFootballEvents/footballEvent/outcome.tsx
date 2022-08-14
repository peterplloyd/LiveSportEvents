import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import ws from '../../../config/socketConfig';
import {
	selectIsDecimal,
	selectOutcomes,
	setOutcomes,
} from '../footballEventSlice';

interface IFootballOutcomeOptions {
	outcomeId: number;
}

const FootballEventOutcome: React.FC<IFootballOutcomeOptions> = ({
	outcomeId,
}) => {
	ws.send(JSON.stringify({ type: 'getOutcome', id: outcomeId }));

	const outcomes = useAppSelector(selectOutcomes);
	const isDecimalOdds = useAppSelector(selectIsDecimal);

	// TODO Fix Type Error
	// @ts-ignore comment
	const outcome = outcomes[outcomeId];
	const dispatch = useAppDispatch();

	ws.onmessage = function (event) {
		const json = JSON.parse(event.data);

		if (json.type === 'OUTCOME_DATA') {
			dispatch(setOutcomes(json.data));
		}
	};

	if (isDecimalOdds && outcome) {
		return (
			<div>
				<p>{outcome.name}</p>
				<p>{outcome.price.decimal}</p>
			</div>
		);
	} else if (!isDecimalOdds && outcome) {
		return (
			<div>
				<p>{outcome.name}</p>
				<p>
					{outcome.price.den} / {outcome.price.num}
				</p>
			</div>
		);
	} else {
		return (
			<div>
				<p>No outcome found</p>
			</div>
		);
	}
};

export default FootballEventOutcome;
