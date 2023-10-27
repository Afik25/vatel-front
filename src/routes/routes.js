import MainLayout from "../MainLayout";
import PersistLogin from "../state/context/hooks/PersistLogin";
import RequireAuth from "../state/context/hooks/RequireAuth";
// pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Administration from "../pages/Administration";
import Student from "../pages/Student";
// pages layouts
import Dashboard from "../pages/layouts/Dashboard";
import Documents from "../pages/layouts/Documents";
import Signings from "../pages/layouts/Signing";
import Recruitment from "../pages/layouts/Recruitment";
import Personnel from "../pages/layouts/Personnel";
import Users from "../pages/layouts/Users";
import UsersDetails from "../pages/layouts/UsersDetails";
import Setting from "../pages/layouts/Setting";
// student layouts
import Document from "../pages/student/Document";
import Contracts from "../pages/student/Contracts";
// setting fragments
import General from "../pages/layouts/settings/General";
import Profile from "../pages/layouts/settings/Profile";
import AboutApp from "../pages/layouts/settings/AboutApp";
//
import NotFound from "../pages/404";
import Unauthorized from "../pages/Unauthorized";

const ROLES = {
  admin: "admin",
  user: "user",
  student: "student",
};

export const routes = [
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      {
        element: <PersistLogin />,
        children: [
          {
            element: <RequireAuth allowedRoles={[ROLES.admin]} />,
            children: [
              {
                path: "/admin",
                element: <Administration />,
                children: [
                  { path: "/admin", element: <Dashboard /> },
                  { path: "documents", element: <Documents /> },
                  { path: "signings/:id/:title/:thumbnails", element: <Signings /> },
                  { path: "recruitment", element: <Recruitment /> },
                  { path: "personnel", element: <Personnel /> },
                  { path: "users", element: <Users /> },
                  { path: "user-details/:id", element: <UsersDetails /> },
                  {
                    path: "settings",
                    element: <Setting />,
                    children: [
                      // { path: "settings", element: <General /> },
                      { index: true, element: <General /> },
                      { path: "profil", element: <Profile /> },
                      { path: "about", element: <AboutApp /> },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        element: <PersistLogin/>,
        children:[
          {
            element: <RequireAuth allowedRoles={[ROLES.student]} />,
            children: [
              {
                path: "/student",
                element: <Student />,
                children: [
                  { path: "/student", element: <Document /> },
                  { path: "contracts", element: <Contracts /> },
                  {
                    path: "settings",
                    element: <Setting />,
                    children: [
                      // { path: "settings", element: <General /> },
                      { index: true, element: <General /> },
                      { path: "profil", element: <Profile /> },
                      { path: "about", element: <AboutApp /> },
                    ],
                  },
                ],
              },
            ],
          },
        ]
      },
      { path: "*", element: <NotFound /> },
      { path: "/unauthorized", element: <Unauthorized /> },
    ],
  },
];
