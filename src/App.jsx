import ThemeProvider from '@/providers/ThemeProvider.jsx';
import IncomingTasks from '@/pages/incomingTasks';
import AppLayout from "./layouts/appLayout";
import TaskProvider from "@/providers/TaskProvider.jsx";


export const App = () => {
  return (
    <ThemeProvider>
      <TaskProvider>
        <AppLayout>
          <IncomingTasks />
        </AppLayout>
      </TaskProvider>
    </ThemeProvider>
  );
};
