import { ThemeProvider, TaskProvider } from '@/providers';
import AppLayout from "./layouts";


export const App = () => {
  return (
    <ThemeProvider>
      <TaskProvider>
        <AppLayout />
      </TaskProvider>
    </ThemeProvider>
  );
};
