import React, { useState } from 'react';
import FootballEvent from './footballEvent';
import ws from '../../config/socketConfig';

import {
	selectLiveFootballEvents,
	setLiveFootballEvents,
} from './footballEventSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import styles from './liveFootballEvents.module.scss';

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
		<div className={styles.footballEvents__container}>
			<div className={styles.footballEvents__container__header}>
				<h1>In-Play Football</h1>
			</div>
			<main className={styles.footballEvents__container__main}>
			{footballEvents}
			</main>
		</div>
	);
};

export default LiveFootballEvents;
