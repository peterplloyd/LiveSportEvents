// @ts-nocheck
import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import ws from '../../../config/socketConfig';
import { selectOutcomes, setOutcomes } from '../footballEventSlice';

interface IFootballOutcomeOptions {
	outcomeId: any;
}

const FootballEventOutcome: React.FC<IFootballOutcomeOptions> = ({
	outcomeId,
}) => {
	const outcomes = useAppSelector(selectOutcomes);
	const outcome = outcomes[outcomeId];
	const dispatch = useAppDispatch();

	ws.send(JSON.stringify({ type: 'getOutcome', id: outcomeId }));

	useEffect(() => {
		ws.onmessage = function (event) {
			const json = JSON.parse(event.data);

			if (json.type === 'OUTCOME_DATA') { 
				dispatch(setOutcomes(json.data));
			}
		};
	}, [dispatch, outcomeId]);

	return (
		<div>
			<p>{outcome?.name}</p>
		</div>
	);
};

export default FootballEventOutcome;
