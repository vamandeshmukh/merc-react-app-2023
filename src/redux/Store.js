import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './UserSlice';
import Comp1Reducer from './Comp1Slice';
import Comp2Reducer from './Comp2Slice';
import thunk from 'redux-thunk';

const store = configureStore({
    reducer: {
        userData: UserReducer,
        cmp1Data: Comp1Reducer,
        cmp2Data: Comp2Reducer
        // , more reducers 
    },
    middleware: [...getDefaultMiddleware(), thunk]
});

export default store;


// import { configureStore } from "@reduxjs/toolkit";
// import UserReducer from './UserSlice';
// import Comp1Reducer from './Comp1Slice';
// import Comp2Reducer from './Comp2Slice';

// // const store = {};
// // const store = configureStore();
// // const store = configureStore({});
// // const store = configureStore({
// //     reducer: {}
// // });

// const store = configureStore({
//     reducer: {
//         userData: UserReducer,
//         cmp1Data: Comp1Reducer,
//         cmp2Data: Comp2Reducer
//         // , more reducers
//     }
// });

// export default store;


// 0. Install redux libraries
// 1. Create store
// 2. Provide store to the react app
// 3. Create reducers / slices
// 4. Send data to the store
// 5. Use the data wherever needed 

