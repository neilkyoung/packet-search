import type { User } from 'types'

export default async function hasSession(id: string): Promise<User> {
	const response = await fetch(
		`http://localhost:3001/packet-finder/users/session?id=${id}`
	)
	return response.json() as Promise<User>
}
