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

export interface Publisher {
	publisher_id: number
	logo_img: string
	name: string
	description: string
}

export interface Collection {
	collection_id: number
	publisher_id: number
	collection_img: string
	name: string
	description: string
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
