import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Layout from './layouts/Layout'
import Dash from './pages/Dash'
import LandingPage from './pages/LandingPage'

import { useState } from 'react'

function App() {
	const [loggedin, setLoggedin] = useState(false)
	const handleLogin = () => {
		setLoggedin(true);
	}
	const handleLogout = () => {
		setLoggedin(false);
	}

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout loggedin={loggedin}/>,
			children: [
				{ path: "/", element: <LandingPage /> },
				{ path: "/auth/login", element: <Login onLogin={handleLogin}/> },
				{ path: "/auth/signup", element: <Signup /> },
				{ path: "/dash", element: <Dash /> }
			]
		}
	])

	return <RouterProvider router={router} />
}

export default App
