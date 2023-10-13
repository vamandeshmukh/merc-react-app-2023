import { createSlice } from "@reduxjs/toolkit";

// const UserSlice = {};
// const UserSlice = createSlice();
// const UserSlice = createSlice({});

// const UserSlice = createSlice({
//     name: '',
//     initialState: {},
//     reducers: {}
// });

// const UserSlice = createSlice({
//     name: 'userData',
//     initialState: {
//         userState: {}
//     },
//     reducers: {
//         setUserState: () => { }
//     }
// });

const UserSlice = createSlice({
    name: 'userData',
    initialState: {
        userState: { username: 'Sonu', password: 'Sonu' }
    },
    reducers: {
        setUserState: (state, action) => {
            console.log(state.userState);
            state.userState = action.payload;
            console.log(state.userState);
        }
        // , more reducers  
    }
});

export default UserSlice.reducer;

export const { setUserState } = UserSlice.actions;






