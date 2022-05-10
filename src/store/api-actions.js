import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../constants';
import { loadQuests, loadQuest } from './data-process/data-process';

const FETCH_QUESTS_ACTION = 'data/fetchQuests';
const FETCH_QUEST_ACTION = 'data/fetchQuest';

export const fetchQuestsAction = createAsyncThunk(
  FETCH_QUESTS_ACTION,
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get(APIRoute.Quests);
      dispatch(loadQuests(data));
    } catch (error) {
      throw new Error(error);
    }
  },
);

export const fetchQuestAction = createAsyncThunk(
  FETCH_QUEST_ACTION,
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get(`${APIRoute.Quests}/${id}`);
      dispatch(loadQuest(data));
    } catch (error) {
      throw new Error(error);
    }
  },
);
