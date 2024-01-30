import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'

const SignIn = lazy(async () => import('pages/SignIn'))

const Dashboard = lazy(async () => import('pages/Dashboard'))
const Publishers = lazy(async () => import('pages/Publishers'))
const Collections = lazy(async () => import('pages/Collections'))
const Packets = lazy(async () => import('pages/Packets'))
const Packet = lazy(async () => import('pages/Packet'))

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<Navigation />
				<Routes>
					<Route path='/' element={<Dashboard />} />
					<Route path='/publishers' element={<Publishers />} />
					<Route path='/collections/:publisherId?' element={<Collections />} />
					<Route path='/collection/:collectionId?' element={<Packets />} />
					<Route path='/packets' element={<Packets />} />
					<Route path='/packets/:packetId' element={<Packet />} />
					<Route path='/sign-in' element={<SignIn />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
