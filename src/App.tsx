import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import { GetStart } from "./pages/getStarted";
import { Learning } from "./pages/learning";
import { Events } from "./pages/events";
import { Profile } from "./pages/profile";
import { Notification } from "./pages/notification";

function App() {
	const router = createBrowserRouter([
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/404",
      element: <NotFound />,
    },

    {
      path: "/",
      element: <GetStart />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/learning",
      element: <Learning />,
    },
    {
      path: "/events",
      element: <Events />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/notification",
      element: <Notification />,
    },
  ]);
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
