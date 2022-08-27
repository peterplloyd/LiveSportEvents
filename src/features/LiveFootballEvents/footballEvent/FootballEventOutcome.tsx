import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import ws from '../../../config/SocketConfig';
import Spinner from '../../../components/Spinner/Spinner';
import { selectIsDecimal, selectOutcomes, setOutcomes, setPrice } from '../FootballEventSlice';
import styles from './FootballEvent.module.scss';
import RoundNumber from '../../../helpers/RoundNumber';

interface IFootballOutcomeOptions {
  outcomeId: number;
}

const FootballEventOutcome: React.FC<IFootballOutcomeOptions> = ({ outcomeId }) => {
  // Get Outcomes
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

    if (json.type === 'PRICE_CHANGE' && json.data?.outcomeId === outcomeId) {
      dispatch(setPrice(json.data));
    }
  };

  return (
    <div className={styles.liveFootballEvents_footballEvents__container__event__outcomes__outcome}>
      {outcome ? (
        <>
          <p>{outcome.name}</p>
          <p>
            {isDecimalOdds
              ? RoundNumber(true, outcome.price.decimal)
              : outcome.price.den / outcome.price.num}
          </p>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default FootballEventOutcome;
