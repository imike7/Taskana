import { TaskProvider, EditorProvider } from '@/context';
import AppLayout from "./layouts";


export const App = () => {
  return (
    <TaskProvider>
      <EditorProvider>
        <AppLayout />
      </EditorProvider>
    </TaskProvider>
  );
};
