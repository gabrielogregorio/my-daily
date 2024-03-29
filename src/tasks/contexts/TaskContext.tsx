import { useHandleTasks } from '@/tasks/hooks/useHandleTasks';
import { ITask } from '@/tasks/types';
import { Context, ReactElement, ReactNode, createContext, useMemo } from 'react';

interface ITaskContextType {
  handleDropTask: (taskId: string) => void;
  handleUpdateTask: (taskId: string, newStatus: Partial<ITask>) => void;
  handleAddBatchNewTasks: (tasks: ITask[]) => void;
  handleAddNewTask: () => void;
  tasks: ITask[];
}

export const TaskContext: Context<ITaskContextType> = createContext({} as ITaskContextType);

interface ITaskProviderProps {
  children: ReactNode;
}

export const TaskProvider = ({ children }: ITaskProviderProps): ReactElement => {
  const { handleDropTask, handleUpdateTask, handleAddNewTask, handleAddBatchNewTasks, tasks } = useHandleTasks();

  const value = useMemo(
    () => ({
      tasks,
      handleAddNewTask,
      handleUpdateTask,
      handleDropTask,
      handleAddBatchNewTasks,
    }),
    [tasks, handleAddNewTask, handleUpdateTask, handleDropTask, handleAddBatchNewTasks],
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
