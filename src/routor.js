import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./components/NotFound";
import Main from "./pages/Main";
import Goal from "./pages/Goal";
import Statistics from "./pages/Statistics";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Main />,
            },
            {
                path: "goal",
                element: <Goal />,
            },
            {
                path: "stat",
                element: <Statistics />,
            },
        ]
    }
])