
/*
import Home from '../pages/home'
import Login from '../pages/login'
import Register from '../pages/register'
import ForgotPassword from '../pages/forgotPassword'
import ResetPassword from '../pages/resetPassword'
import Dashboard from '../pages/dashboard'
import NoMatch from '../pages/noMatch'
*/

import Login from '../components/login'
import Register from '../components/register'
import Dashboard from '../common/dashboard'

const routes = [
    /*
    {
        path: '/login/:social',
        exact: false,
        auth: false,
        component: Home
    },
    */
    {
        path: '/login',
        exact: false,
        auth: false,
        component: Login
    },
    {
        path: '/register',
        exact: false,
        auth: false,
        component: Register
    },
    /*
    {
        path: '/forgot-password',
        exact: true,
        auth: false,
        component: ForgotPassword
    },
    {
        path: '/reset-password/:token/:email',
        exact: true,
        auth: false,
        component: ResetPassword
    },
    */
    {
        path: '/dashboard',
        exact: true,
        auth: true,
        component: Dashboard
    },
    /*
    {
        path: '',
        exact: true,
        auth: false,
        component: NoMatch
    }
    */
];

export default routes;