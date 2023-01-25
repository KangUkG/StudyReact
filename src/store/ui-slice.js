import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: { isVisualize: false, notificationDetail: null },
    reducers: {
        toggle: (state)=>{
            state.isVisualize = !state.isVisualize;
        },
        changeNotificationDetail: (state, action) => {
            const body = action.payload;
            state.notificationDetail = {
                status: body.status,
                title: body.title,
                message: body.message
            }
        }
    }
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;