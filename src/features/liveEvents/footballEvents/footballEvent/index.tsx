// @ts-nocheck

import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../app/hooks';
import ws from '../../../../config/socketConfig';
import {
	setMarkets,
	setEvents,
	selectMarkets,
} from '../footballEventSlice';
import FootballEventOutcome from './outcome';

interface IFootballEventOptions {
	event: {
		eventId: number;
		boostCount: number;
		classId: number;
		className: string;
		competitors: ICompetitorsData[];
		displayOrder: number;
		markets: string[];
		name: string;
		scores: object;
		sort: string;
		startTime: string;
		status: {
			active: boolean;
			started: boolean;
			live: boolean;
			resulted: boolean;
			finished: boolean;
			requestabet: boolean;
			suspended: boolean;
		};
		superBoostCount: number;
		typeId: number;
		typeName: string;
	};
}

interface ICompetitorsData {
	name: string;
	position: string;
}

const FootballEvent: React.FC<IFootballEventOptions> = ({ event }) => {
	const markets = useAppSelector(selectMarkets);
	const market = markets[event.markets[0]];
	const dispatch = useAppDispatch();

	useEffect(() => {
		ws.send(JSON.stringify({ type: 'getEvent', id: event.eventId }));
		ws.send(JSON.stringify({ type: 'getMarket', id: event.markets[0] }));

		ws.onmessage = function (event) {
			const json = JSON.parse(event.data);

			if (json.type === 'MARKET_DATA') {
				dispatch(setMarkets(json.data));
			}

			if (json.type === 'EVENT_DATA') {
				dispatch(setEvents(json.data));
			}
		};
	}, [dispatch, event.eventId, event.markets]);

	const marketOutcomes = market?.outcomes && market.outcomes.map((outcomeId: any) => {
		return (<FootballEventOutcome key={outcomeId} outcomeId={outcomeId}/>)
	})

	return (
		<div key={`Football-${event.eventId}`}>
			<div>{event.name}</div>
			<div>Market: {market?.name}</div>
			<div>{marketOutcomes}</div>
		</div>
	);
};

export default FootballEvent;
