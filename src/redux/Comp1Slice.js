import { createSlice } from "@reduxjs/toolkit";

const Comp1Slice = createSlice({
    name: 'cmp1Data',
    initialState: {
        cmp1State: 'Comp1 Initial state'
    },
    reducers: {
        setCmp1State: (state, action) => {
            console.log(action.payload);
            state.cmp1State = action.payload;
        }
    }
});
export const { setCmp1State } = Comp1Slice.actions;
export default Comp1Slice.reducer;