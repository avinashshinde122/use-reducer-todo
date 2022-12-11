export type Task = {
  id: Number;
  name: string;
  completed: boolean;
};
export type TodoState = {
  tasks: Task[];
};
