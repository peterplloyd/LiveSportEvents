// @ts-nocheck

import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface EventState {
  decimalOdds: boolean;
  events: object;
  liveEvents: object[];
  markets: object;
  outcomes: object;
}

const initialState: EventState = {
  decimalOdds: true,
  events: {},
  liveEvents: [],
  markets: {},
  outcomes: {}
};

export const eventSlice = createSlice({
  name: 'LiveFootballEvents',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setEvents: (state, action) => {
      state.events[action.payload.eventId] = action.payload;
    },
    setIsDecimal: (state, action) => {
      state.decimalOdds = action.payload;
    },
    setLiveFootballEvents: (state, action) => {
      state.liveEvents = action.payload;
    },
    setMarkets: (state, action) => {
      state.markets[action.payload.marketId] = action.payload;
    },
    setOutcomes: (state, action) => {
      state.outcomes[action.payload.outcomeId] = action.payload;
    },
    setPrice: (state, action) => {
      state.outcomes[action.payload.outcomeId].price = action.payload.price;
    }
  }
});

export const { setEvents, setIsDecimal, setLiveFootballEvents, setMarkets, setOutcomes, setPrice } =
  eventSlice.actions;

export const selectEvents = (state: RootState) => state.liveFootballEvents.events;
export const selectIsDecimal = (state: RootState) => state.liveFootballEvents.decimalOdds;
export const selectLiveFootballEvents = (state: RootState) => state.liveFootballEvents.liveEvents;
export const selectMarkets = (state: RootState) => state.liveFootballEvents.markets;
export const selectOutcomes = (state: RootState) => state.liveFootballEvents.outcomes;

export default eventSlice.reducer;
