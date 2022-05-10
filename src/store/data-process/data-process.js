import { createSlice } from '@reduxjs/toolkit';
import { DefaultQuest, NameSpace } from '../../constants';

export const initialState = {
  quests: [],
  isDataLoaded: false,
  quest: DefaultQuest,
  isQuestLoaded: false,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    loadQuests: (state, action) => {
      state.quests = action.payload;
      state.isDataLoaded = true;
    },
    loadQuest: (state, action) => {
      state.quest = action.payload;
      state.isQuestLoaded = true;
    },
  },
});

export const { loadQuests, loadQuest } = dataProcess.actions;
