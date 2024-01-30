import type { Packet } from 'types'

export async function getPackets(
	collectionId: string | null
): Promise<Packet[]> {
	const apiUrl = collectionId
		? `http://localhost:3001/packet-finder/packets?collection_id_eq=${collectionId}`
		: `http://localhost:3001/packet-finder/packets`

	const response = await fetch(apiUrl)

	return response.json() as Promise<Packet[]>
}

export async function getPacket(packetId: string | null): Promise<Packet[]> {
	const response = await fetch(
		`http://localhost:3001/packet-finder/packets?packet_id_eq=${packetId}`
	)

	return response.json() as Promise<Packet[]>
}

export default { getPackets, getPacket }
