import React, { useState } from 'react';
import FootballEvent from './footballEvent';
import ws from '../../../config/socketConfig';

import {
	selectLiveFootballEvents,
	setLiveFootballEvents,
} from './footballEventSlice';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';

const LiveFootballEvents: React.FC = () => {
	const liveEvents = useAppSelector(selectLiveFootballEvents);
	const dispatch = useAppDispatch();

	ws.onopen = () => {
		ws.send(JSON.stringify({ type: 'getLiveEvents', primaryMarkets: true }));
	};

	ws.onmessage = function (event) {
		const json = JSON.parse(event.data);

		try {
			if (json.type === 'LIVE_EVENTS_DATA') {
				dispatch(setLiveFootballEvents(json.data));
			}
		} catch (err) {}
	};
	const footballEvents = liveEvents.length && liveEvents.map((event: any) => (
		 <FootballEvent key={event.eventId} event={event} />
	));

	return (
		<div>
			<h1>Live Football Events</h1>
			<p>Here are the live events</p>
			{footballEvents}
		</div>
	);
};

export default LiveFootballEvents;
