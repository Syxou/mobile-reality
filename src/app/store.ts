import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import houseReducer from '../reducer/houseSlice';

export const store = configureStore({
    reducer: {
        house: houseReducer,
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
