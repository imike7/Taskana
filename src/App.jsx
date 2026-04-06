import { TaskProvider, EditorProvider } from '@/providers';
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
