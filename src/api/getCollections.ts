import type { Collection } from 'types'

export default async function getCollections(
	publisherId: string | null
): Promise<Collection[]> {
	const apiUrl = publisherId
		? `http://localhost:3001/packet-finder/collections?publisher_id_eq=${publisherId}`
		: `http://localhost:3001/packet-finder/collections`

	const response = await fetch(apiUrl)

	return response.json() as Promise<Collection[]>
}
