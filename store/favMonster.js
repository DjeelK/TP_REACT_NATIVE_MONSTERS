import { createSlice } from "@reduxjs/toolkit";

const favMonster = createSlice({
    name : 'favMonster',
    initialState : {
        ids : []
    },
    reducers : {
        addIds : (state,action) => {
            state.ids.push(action.payload.id)
        },
        removeIds : (state,action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id),1)
        }
    }
})


export const removeIds = favMonster.actions.removeIds;
export const addIds = favMonster.actions.addIds;
export default favMonster.reducer;