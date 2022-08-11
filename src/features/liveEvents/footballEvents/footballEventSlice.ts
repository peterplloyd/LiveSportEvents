// @ts-nocheck

import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

export interface EventState {
	liveEvents: [];
	events: object;
	markets: {};
	outcomes: object;
}

const initialState: EventState = {
	liveEvents: [],
	events: {},
	markets: {},
	outcomes: {},
};

export const eventSlice = createSlice({
	name: 'LiveFootballEvents',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		setEvents: (state, action) => {
			state.events[action.payload.eventId] = action.payload;
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
	},
});

export const { setEvents, setLiveFootballEvents, setMarkets, setOutcomes } =
	eventSlice.actions;

export const selectLiveFootballEvents = (state: RootState) =>
	state.liveFootballEvents.liveEvents;
export const selectEvents = (state: RootState) =>
	state.liveFootballEvents.events;
export const selectMarkets = (state: RootState) =>
	state.liveFootballEvents.markets;
export const selectOutcomes = (state: RootState) =>
	state.liveFootballEvents.outcomes;

export default eventSlice.reducer;
