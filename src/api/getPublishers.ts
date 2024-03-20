import type { Publisher } from 'types'

export default async function getPublishers(): Promise<Publisher[]> {
	const response = await fetch('http://localhost:3001/packet-finder/publishers')

	return response.json() as Promise<Publisher[]>
}
