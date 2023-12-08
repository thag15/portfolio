import NavBar from "./pages/navbar/page";
import Profile from './pages/profile/page'
import { useRoutes, Outlet } from "react-router-dom";
function App() {
  const route = "portfolio";
  const LayoutApp = () => (
    <>
      <NavBar />
      <Outlet />
    </>
  );
  return useRoutes([
    {
      path: `${route}`,
      element: <LayoutApp />,
      children: [{
        path: 'profile', element: <Profile />
      }]
    },
  ]);
}

export default App;
