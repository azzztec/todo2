export enum TaskFilterType {
  DONE,
  ACTIVE,
  ALL
}

export interface ITask {
  id: string,
  timestamp: number,
  status: boolean,
  title: string,
  description: string,
}
