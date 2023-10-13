import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './UserSlice';
// const store = {};
// const store = configureStore();
// const store = configureStore({});
// const store = configureStore({
//     reducer: {}
// });

const store = configureStore({
    reducer: {
        userState: UserReducer
    }
});

export default store;


// 0. Install redux libraries
// 1. Create store
// 2. Provide store to the react app
// 3. Create reducers / slices
// 4. Send data to the store
// 5. Use the data wherever needed 

