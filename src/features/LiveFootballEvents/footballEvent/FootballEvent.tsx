import React from 'react';

import ws from '../../../config/SocketConfig';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { setMarkets, setEvents, selectMarkets } from '../FootballEventSlice';
import Spinner from '../../../components/Spinner/Spinner';
import FootballEventOutcome from './FootballEventOutcome';
import styles from './FootballEvent.module.scss';

interface IFootballEventOptions {
  event: {
    eventId: number;
    boostCount: number;
    classId: number;
    className: string;
    competitors: ICompetitorsData[];
    displayOrder: number;
    markets: number[];
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
  // Get the Event
  ws.send(JSON.stringify({ type: 'getEvent', id: event.eventId }));

  // Get the Markets
  ws.send(JSON.stringify({ type: 'getMarket', id: event.markets[0] }));

  const markets = useAppSelector(selectMarkets);
  const primaryMarket = event.markets[0];

  console.log(primaryMarket);
  // TODO Fix Type Error
  // @ts-ignore comment
  const market = markets[primaryMarket];
  const dispatch = useAppDispatch();

  ws.onmessage = function (event) {
    const json = JSON.parse(event.data);
    if (json.type === 'MARKET_DATA') {
      dispatch(setMarkets(json.data));
    }

    if (json.type === 'EVENT_DATA') {
      dispatch(setEvents(json.data));
    }
  };

  const marketOutcomes =
    market?.outcomes &&
    market.outcomes.map((outcomeId: any) => {
      return <FootballEventOutcome key={outcomeId} outcomeId={outcomeId} />;
    });

  return (
    <div
      className={styles.liveFootballEvents_footballEvents__container__event}
      key={`Football-${event.eventId}`}
    >
      <div className={styles.liveFootballEvents_footballEvents__container__event__name}>
        <div className={styles.liveFootballEvents_footballEvents__container__event__name__title}>
          {event.name}
        </div>
      </div>
      <div className={styles.liveFootballEvents_footballEvents__container__event__market}>
        Market: {market?.name}
      </div>
      <div className={styles.liveFootballEvents_footballEvents__container__event__outcomes}>
        {marketOutcomes ? marketOutcomes : <Spinner />}
      </div>
    </div>
  );
};

export default FootballEvent;
