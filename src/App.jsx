import {ThemeProvider, TaskProvider, EditorProvider} from '@/providers';
import AppLayout from "./layouts";


export const App = () => {
  return (
    <ThemeProvider>
      <TaskProvider>
        <EditorProvider>
          <AppLayout />
        </EditorProvider>
      </TaskProvider>
    </ThemeProvider>
  );
};
