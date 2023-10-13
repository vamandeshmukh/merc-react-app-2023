import { createSlice } from "@reduxjs/toolkit";

const Comp2Slice = createSlice({
    name: cmp2Data,
    initialState: {
        cmp2State: 'Comp2 Initial state'
    },
    reducers: {
        setCmp2State: (state, action) => {
            console.log(action.payload);
            state.cmp2State = action.payload;
        }
    }
});
export const { setCmp2State } = Comp2Slice.actions;
export default Comp2Slice.reducer;