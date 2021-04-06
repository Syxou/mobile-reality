import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState, AppThunk } from '../app/store';


export interface House {
    address: string,
    floorsNumber: number,
    description: string,
    label: string,
    _id?: number,
}

export interface HouseState {
    houses: House[],
    singleHouse: House,
    status: string,
}

const initialState: HouseState = {
    houses: [],
    singleHouse: {
        address: '',
        floorsNumber: 0,
        description: '',
        label: '',
    },
    status: '',
};

export const houseReducer = createSlice({
    name: 'house',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        set: (state, action: PayloadAction<House[]>) => {
            state.houses = action.payload;
        },
        setSingle: (state, action: PayloadAction<House>) => {
            state.singleHouse = action.payload;
        },
        setStats: (state, action: PayloadAction<string>) => {
            state.status = action.payload;
        },
    },
});

export const { set, setSingle, setStats } = houseReducer.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectHouse = (state: RootState) => state.house;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const fetchHouses = (): AppThunk => async (dispatch, getState) => {
    await axios({
        method: 'get',
        url: 'http://mobile-reality-backend.sadek.usermd.net/houses/all'
    }).then(({ data }) => {
        console.log(data)
        dispatch(set(data.results))
    }).catch((err) => {
        console.log(err)
    })
};

export const fetchHouseById = (id: number): AppThunk => async (dispatch, getState) => {
    await axios({
        method: 'get',
        url: `http://mobile-reality-backend.sadek.usermd.net/houses/${id}`
    }).then(({ data }) => {
        console.log(data)
        dispatch(setSingle(data.result));
        dispatch(fetchHouses());
    }).catch((err) => {
        console.log(err)
    })
};


export const removeHouseById = (id: number): AppThunk => async (dispatch, getState) => {
    await axios({
        method: 'delete',
        url: `http://mobile-reality-backend.sadek.usermd.net/houses/${id}`
    }).then(({ data }) => {
        console.log(data)
        dispatch(setStats(`house ${id}: deleted`))
    }).catch((err) => {
        dispatch(setStats(`house ${id}: not deleted`))
    })
};

export default houseReducer.reducer;
