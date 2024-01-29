export interface IFruit {
	name: string
	image: {
		author: {
			name: string
			url: string
		}
		color: string
		url: string
	}
	metadata: {
		name: string
		value: string
	}[]
}

export interface Packet {
	title: string
	description: string
	packet_img: string
	country_id: number
	country_code: string
	packet_id: number
	collection_id: number
}

export interface User {
	name: string
	id: number
	email: string
}
