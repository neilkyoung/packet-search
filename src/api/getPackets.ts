import type { Packet } from 'types'

export default async function getPackets(
	collectionId: string | null
): Promise<Packet[]> {
	const apiUrl = collectionId
		? `http://localhost:3001/packet-finder/packets?collection_id_eq=${collectionId}`
		: `http://localhost:3001/packet-finder/packets`

	const response = await fetch(apiUrl)

	return response.json() as Promise<Packet[]>
}
