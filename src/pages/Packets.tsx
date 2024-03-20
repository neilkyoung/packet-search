import { useQuery } from '@tanstack/react-query'
import { getPackets } from 'api/getPackets'
import Head from 'components/Head'
import Packet from 'components/Packet'
import type { Packet as PacketType } from 'types'
import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { useParams } from 'react-router-dom'

export default function PacketsPage(): ReactElement {
	const { collectionId } = useParams()

	const { isPending, isError, error, data } = useQuery({
		queryKey: [`packets`, collectionId],
		queryFn: async () => getPackets(collectionId as string)
	})

	if (isPending || isError) {
		return <LoadingOrError error={error as Error} />
	}

	return (
		<>
			<Head title='Packets' />
			<div className='m-2 grid min-h-screen grid-cols-[minmax(0,384px)] place-content-center gap-2 md:m-0 md:grid-cols-[repeat(2,minmax(0,384px))] xl:grid-cols-[repeat(3,384px)]'>
				{data.map((packet: PacketType, index: number) => (
					<Packet
						key={`PacketCard-${packet.packet_id}`}
						packet={packet}
						index={index}
					/>
				))}
			</div>
		</>
	)
}
