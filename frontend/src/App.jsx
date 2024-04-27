import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Layout from './layouts/Layout'
import Dash from './pages/Dash'
// import Home from './pages/Home'

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				// { path: "/", element: < /> }
				{ path: "/auth/login", element: <Login/> },
				{ path: "/auth/signup", element: <Signup/> },
				{ path: "/dash", element: <Dash/> }
			]
		}
	])

	return <RouterProvider router={router} />
}

export default App
