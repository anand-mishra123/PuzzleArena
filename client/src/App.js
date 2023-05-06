import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/** import all components */
import LandingPage from './components/LandingPage';
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import ContestPage from './components/ContestPage';
import Dashboard from './Admin/Dashboard'
import Puzzle2 from './components/puzzle2/puzzle2';
import Puzzle2clue from './components/puzzle2/Clue1';
import Puzzle1 from './components/puzzle1/puzzle1';
import Puzzle1clue from './components/puzzle1/Clue1';
import Puzzle3 from './components/puzzle3/Puzzle3'
import Puzzle3clue from './components/puzzle3/Clue3';

import Puzzle4 from './components/puzzle4/Puzzle4'
import Puzzle4clue from './components/puzzle4/Clue4';

import Puzzle5 from './components/puzzle5/src/App'

import CreateContest from './Admin/CreateContest'
import PastContest from './Admin/PastContest'
import LeaderBoard from './Admin/LeaderBoard/LeaderBoard'
import AdminRegister from './Admin/AdminRegister'
import AdminLogin from './Admin/AdminLogin'
import AdminPassword from './Admin/AdminPassword'
/** auth middleware */
import { AuthorizeUser,AuthorizeAdmin, ProtectRoute } from './middleware/auth'

/** root routes */
const router = createBrowserRouter([
    {
        path : '/',
        element : <LandingPage></LandingPage>
    },
    {
        path : '/Username',
        element : <Username></Username>
    },
    {
        path : '/AdminLogin',
        element : <AdminLogin></AdminLogin>
    },
    {
        path : '/AdminPassword',
        element : <ProtectRoute><AdminPassword></AdminPassword></ProtectRoute>
    },
    {
        path : '/register',
        element : <Register></Register>
    },
    {
        path : '/AdminRegister',
        element : <AdminRegister></AdminRegister>
    },
    {
        path : '/password',
        element : <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path : '/Dashboard',
        element : <AuthorizeAdmin><Dashboard/></AuthorizeAdmin>
    },
    {
        path : '/CreateContest',
        element : <AuthorizeAdmin><CreateContest/></AuthorizeAdmin>
    },
    {
        path : '/LeaderBoard',
        element : <AuthorizeAdmin><LeaderBoard/></AuthorizeAdmin>
    },
    {
        path : '/PastContest',
        element : <AuthorizeAdmin><PastContest/></AuthorizeAdmin>
    },
    {
        path : '/profile',
        element : <AuthorizeUser><Profile /></AuthorizeUser>
    },
    {
        path : '/recovery',
        element : <Recovery></Recovery>
    },
    {
        path : '/ContestPage',
        element : <AuthorizeUser><ContestPage></ContestPage></AuthorizeUser>
    },
    {
        path : '/Puzzle2',
        element : <AuthorizeUser><Puzzle2></Puzzle2></AuthorizeUser>
    },
    {
        path : '/Puzzle2clue',
        element : <AuthorizeUser><Puzzle2clue></Puzzle2clue></AuthorizeUser>
    },
    {
        path : '/Puzzle1',
        element : <AuthorizeUser><Puzzle1></Puzzle1></AuthorizeUser>
    },
    {
        path : '/Puzzle1clue',
        element : <AuthorizeUser><Puzzle1clue></Puzzle1clue></AuthorizeUser>
    },
    {
        path : '/Puzzle3',
        element : <AuthorizeUser><Puzzle3></Puzzle3></AuthorizeUser>
    },
    {
        path : '/Puzzle3clue',
        element : <AuthorizeUser><Puzzle3clue></Puzzle3clue></AuthorizeUser>
    },
    {
        path : '/Puzzle4',
        element : <AuthorizeUser><Puzzle4></Puzzle4></AuthorizeUser>
    },
    {
        path : '/Puzzle4clue',
        element : <AuthorizeUser><Puzzle4clue></Puzzle4clue></AuthorizeUser>
    },
    {
        path : '/Puzzle5',
        element : <AuthorizeUser><Puzzle5></Puzzle5></AuthorizeUser>
    },
    {
        path : '/reset',
        element : <Reset></Reset>
    },
    {
        path : '*',
        element : <PageNotFound></PageNotFound>
    },
])

export default function App() {
  return (
    <main>
        {/* <RouterProvider router={router}></RouterProvider> */}
        <LandingPage/>
    </main>
  )
}
