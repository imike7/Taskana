import ThemeContextProvider from '@/context/ThemeProvider';
import IncomingTasks from '@/pages/incomingTasks';
import AppLayout from "./layouts/appLayout";


export const App = () => {
  return (
    <ThemeContextProvider>
      <AppLayout>
        <IncomingTasks />
      </AppLayout>
    </ThemeContextProvider>
  );
};
