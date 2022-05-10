import { NameSpace } from '../../constants';

export const getQuests = (state) => state[NameSpace.Data].quests;
export const getIsDataLoaded = (state) => state[NameSpace.Data].isDataLoaded;
export const getQuest = (state) => state[NameSpace.Data].quest;
export const getIsQuestLoaded = (state) => state[NameSpace.Data].isQuestLoaded;
