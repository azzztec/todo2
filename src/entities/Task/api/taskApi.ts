import { getFromLocalStorageByKey } from '@shared/services/localStorageService';
import { ITask } from '../model/types/task';
import { StorageFields } from '@shared/constants/localStorage';

export const getTasks = (): ITask[] => {
  return getFromLocalStorageByKey(StorageFields.TASKS) || [];
};
