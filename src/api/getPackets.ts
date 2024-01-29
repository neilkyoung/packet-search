import type { Packet } from 'types'

export default async function getPackets(): Promise<Packet[]> {
	const response = await fetch('http://localhost:3001/packet-finder/packets')
	return response.json() as Promise<Packet[]>
}
