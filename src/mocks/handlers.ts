import { http, HttpResponse } from 'msw'
import fruits from './data/fruits.json'
import signIn from './data/sign-in.json'

const handlers = [
	http.get('https://614c99f03c438c00179faa84.mockapi.io/fruits', () =>
		HttpResponse.json(fruits)
	),
	http.post('http://localhost:3001/packet-finder/users/sign-in', () =>
		HttpResponse.json(signIn)
	)
]

export default handlers
