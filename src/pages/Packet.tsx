import { useQuery } from '@tanstack/react-query'
import getPacket from 'api/getPackets'
import Head from 'components/Head'
import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useMediaQuery } from 'utils'

const DESKTOP_IMAGE_WIDTH_PERCENTAGE = 0.4
const MOBILE_IMAGE_HEIGHT_PERCENTAGE = 0.3

export default function PacketPage(): ReactElement {
	const isTabletAndUp = useMediaQuery('(min-width: 600px)')
	const { packetId } = useParams()

	const { isPending, isError, error, data } = useQuery({
		queryKey: ['packet'],
		queryFn: getPacket
	})
	if (isPending || isError) {
		return <LoadingOrError error={error as Error} />
	}

	const packet = data.find(f => f.packet_id === Number(packetId))

	if (!packet) {
		return <Navigate to='/packets' replace />
	}
	const imageWidth =
		(isTabletAndUp
			? window.innerWidth * DESKTOP_IMAGE_WIDTH_PERCENTAGE
			: window.innerWidth) * window.devicePixelRatio
	const imageHeight =
		(isTabletAndUp
			? window.innerHeight
			: window.innerHeight * MOBILE_IMAGE_HEIGHT_PERCENTAGE) *
		window.devicePixelRatio

	return (
		<>
			<Head title={packet.title} />
			<div className='flex min-h-screen flex-col items-center sm:flex-row'>
				<div className='relative'>
					<img
						data-testid='PacketImage'
						width={imageWidth}
						height={imageHeight}
						src={packet.packet_img}
						alt={packet.title}
					/>
				</div>
				<div className='my-8 sm:my-0 sm:ml-16'>
					<Link
						data-testid='BackLink'
						to='/packets'
						className='flex items-center'
					>
						<img src='/icons/arrow-left.svg' alt='' className='h-5 w-5' />
						<span className='ml-4 text-xl'>Back</span>
					</Link>

					<h1
						data-testid='PacketName'
						className='mt-2 text-6xl font-bold sm:mt-8'
					>
						{packet.title}
					</h1>
					<p>{packet.description}</p>
				</div>
			</div>
		</>
	)
}
