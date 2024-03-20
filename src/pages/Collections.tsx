import { useQuery } from '@tanstack/react-query'
import getCollections from 'api/getCollections'
import Head from 'components/Head'
import Collection from 'components/Collection'
import type { Collection as CollectionType } from 'types'
import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { Navigate, useParams } from 'react-router-dom'

export default function CollectionsPage(): ReactElement {
	const { publisherId } = useParams()

	const { isPending, isError, error, data } = useQuery({
		queryKey: ['collections', publisherId],
		queryFn: async () => getCollections(publisherId as string)
	})

	if (isPending || isError) {
		return <LoadingOrError error={error as Error} />
	}

	if (data.length === 0) {
		return <Navigate to='/' replace />
	}

	return (
		<>
			<Head title='Collections' />
			<div className='m-2 grid min-h-screen grid-cols-[minmax(0,384px)] place-content-center gap-2 md:m-0 md:grid-cols-[repeat(2,minmax(0,384px))] xl:grid-cols-[repeat(3,384px)]'>
				{(data ).map(
					(collection: CollectionType, index: number) => (
						<Collection
							key={`CollectionCard-${collection.collection_id}`}
							collection={collection}
							index={index}
						/>
					)
				)}
			</div>
		</>
	)
}
