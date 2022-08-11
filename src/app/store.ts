import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import LiveFootballEventsReducer from '../features/liveEvents/footballEvents/footballEventSlice';


export const store = configureStore({
  reducer: {
    liveFootballEvents: LiveFootballEventsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
