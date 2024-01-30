import Head from 'components/Head'
import type { ReactElement } from 'react'

export default function DashboardPage(): ReactElement {
	return (
		<>
			<Head title='Packet Finder' />
			<div>
				<p>Welcome to Packet Finder!</p>

				<a href='/publishers'>Find by Publisher</a>
			</div>
		</>
	)
}
