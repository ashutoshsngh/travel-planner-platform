import { createClient, type Entry, type EntryCollection } from 'contentful'

const space = process.env.CONTENTFUL_SPACE_ID || process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_DELIVERY_TOKEN || process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN

if (!space || !accessToken) {
  throw new Error(
    'Contentful credentials are missing. Please set CONTENTFUL_SPACE_ID and CONTENTFUL_DELIVERY_TOKEN (or their NEXT_PUBLIC_ equivalents) in your environment variables.'
  )
}

const client = createClient({
  space,
  accessToken,
})

export async function getEntries<T>(
  contentType: string,
  query?: Record<string, unknown>
): Promise<Entry<T>[]> {
  const response: EntryCollection<T> = await client.getEntries<T>({
    content_type: contentType,
    ...query,
  })
  return response.items
}

export async function getEntry<T>(
  contentType: string,
  uid: string
): Promise<Entry<T> | null> {
  const response: EntryCollection<T> = await client.getEntries<T>({
    content_type: contentType,
    'sys.id': uid,
    limit: 1,
  })
  return response.items.length > 0 ? response.items[0] : null
}