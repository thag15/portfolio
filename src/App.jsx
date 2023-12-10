import NavBar from "./pages/navbar/page";
import Profile from "./pages/profile/index";
import IndexProject from './pages/project/index'
import { Container, Box } from "@mui/material";
import { useRoutes, Outlet, useLocation } from "react-router-dom";
import NotFound from './pages/notfound/page'
function App() {
  let location = useLocation();
  const route = "portfolio";
  const LayoutApp = () => (
    <>
      <Box >
        <NavBar />
      </Box>
      <Container >
        {location.pathname === `/${route}/` && <Profile />}
        <Outlet />
      </Container>
    </>
  );
  return useRoutes([
    {
      path: `${route}`,
      element: <LayoutApp />,
      children: [
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "myproject",
          element: <IndexProject />,
        },
      ],
    },
    { path: '*', element: <NotFound /> }
  ]);
}

export default App;
