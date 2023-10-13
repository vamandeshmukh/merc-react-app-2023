
// 1. Install redux libraries 
// 2. Create store 
// 3. Provide store to the react app 
// 4. Create reducers / slices 
// 5. Send data to the store 
// 6. Use the data wherever needed 

import { configureStore } from "@reduxjs/toolkit";

// const store = {};
// const store = configureStore();
// const store = configureStore({});
// const store = configureStore({
//     reducer: {}
// });

const store = configureStore({
    reducer: {
        // reducers to be created 
    }
});

export default store;
