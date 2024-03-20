import { useQuery } from '@tanstack/react-query'
import getPublishers from 'api/getPublishers'
import Head from 'components/Head'
import Publisher from 'components/Publisher'
import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

export default function PublishersPage(): ReactElement {
	const { isPending, isError, error, data } = useQuery({
		queryKey: ['publishers'],
		queryFn: getPublishers
	})

	if (isPending || isError) {
		return <LoadingOrError error={error as Error} />
	}

	if (data.length === 0) {
		return <Navigate to='/' replace />
	}

	return (
		<>
			<Head title='Publishers' />
			<div className='m-2 grid min-h-screen grid-cols-[minmax(0,384px)] place-content-center gap-2 md:m-0 md:grid-cols-[repeat(2,minmax(0,384px))] xl:grid-cols-[repeat(3,384px)]'>
				{data.map((publisher, index: number) => (
					<Publisher
						key={`PublisherCard-${publisher.publisher_id}`}
						publisher={publisher}
						index={index}
					/>
				))}
			</div>
		</>
	)
}
