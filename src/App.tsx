import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'

const Gallery = lazy(async () => import('pages/Gallery'))
const Details = lazy(async () => import('pages/Details'))
const SignIn = lazy(async () => import('pages/SignIn'))
const Packets = lazy(async () => import('pages/Packets'))
const Packet = lazy(async () => import('pages/Packet'))

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<Navigation />
				<Routes>
					<Route path='/' element={<Gallery />} />
					<Route path='/packets' element={<Packets />} />
					<Route path='/packet/:packetId' element={<Packet />} />
					<Route path='/sign-in' element={<SignIn />} />
					<Route path=':fruitName' element={<Details />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
