import React from 'react';
import ws from '../../config/SocketConfig';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import Spinner from '../../components/Spinner/Spinner';
import Button from '../../components/Button/Button';

import FootballEvent from './FootballEvent/FootballEvent';
import {
  selectLiveFootballEvents,
  setLiveFootballEvents,
  selectIsDecimal,
  setIsDecimal
} from './FootballEventSlice';
import styles from './LiveFootballEvents.module.scss';

const LiveFootballEvents: React.FC = () => {
  const liveEvents = useAppSelector(selectLiveFootballEvents);
  const isDecimalOdds = useAppSelector(selectIsDecimal);
  const dispatch = useAppDispatch();

  ws.onopen = () => {
    ws.send(JSON.stringify({ type: 'getLiveEvents', primaryMarkets: true }));
    // Subscribe to outcome changes
    ws.send(JSON.stringify({ type: 'subscribe', keys: [`o.*`] }));
  };

  ws.onmessage = function (event) {
    const json = JSON.parse(event.data);

    try {
      if (json.type === 'LIVE_EVENTS_DATA') {
        dispatch(setLiveFootballEvents(json.data));
      }
    } catch (err) {}
  };

  const footballEvents =
    liveEvents.length &&
    liveEvents.map((event: any) => <FootballEvent key={event.eventId} event={event} />);

  const onClickOddsFormat = () => {
    dispatch(setIsDecimal(!isDecimalOdds));
  };

  return (
    <div className={styles.footballEvents__container}>
      <div className={styles.footballEvents__container__header}>
        <div className={styles.footballEvents__container__header__title}>
          <h1>In-Play Football</h1>
        </div>
        <div className={styles.footballEvents__container__header__toggleOdds}>
          <Button onClick={onClickOddsFormat}>
            Toggle {isDecimalOdds ? 'Decimals' : 'Fractions'}
          </Button>
        </div>
      </div>
      <main className={styles.footballEvents__container__main}>
        {footballEvents ? footballEvents : <Spinner />}
      </main>
    </div>
  );
};

export default LiveFootballEvents;
