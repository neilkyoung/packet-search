import type { User } from 'types'

export default async function signIn(
	email: string,
	password: string
): Promise<User> {
	const response = await fetch(
		'http://localhost:3001/packet-finder/users/sign-in',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password })
		}
	)

	return response.json() as Promise<User>
}
