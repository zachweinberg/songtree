import { firestore } from 'firebase-admin'
import db from './firebase'

type MaybeNull<T> = T | null
type MaybeEmpty<T> = T | []

type WithID<T> = T & {
  id: string
}

type NormalizedDocument<T> = WithID<T>

interface SearchQuery {
  property: string
  condition: any
  value: any
}

interface OrderBy {
  fieldName: string
  sortDirection: 'asc' | 'desc'
}

const fetchDocumentSnapshot = async (
  collection: string,
  documentID: string
): Promise<MaybeNull<firestore.DocumentSnapshot>> => {
  const snapshot = await db.collection(collection).doc(documentID).get()
  if (!snapshot.exists) {
    return null
  }
  return snapshot
}

const normalizeTimestamps = <T>(value: T): T =>
  Object.keys(value).reduce((final, key) => {
    let finalValue

    if (value[key] instanceof firestore.Timestamp) {
      finalValue = value[key].toDate()
    } else if (
      typeof value[key] === 'object' &&
      value[key]._nanoseconds &&
      value[key]._seconds
    ) {
      finalValue = new Date(value[key]._seconds * 1000)
    } else if (
      value[key] !== null &&
      typeof value[key] === 'object' &&
      !Array.isArray(value[key])
    ) {
      finalValue = normalizeTimestamps(value[key])
    } else {
      finalValue = value[key]
    }

    return {
      ...final,
      [key]: finalValue,
    }
  }, {} as T)

const normalizeDocument = <T>(
  snapshot: firestore.DocumentSnapshot
): NormalizedDocument<T> => {
  return {
    ...normalizeTimestamps<T>(snapshot.data() as T),
    id: snapshot.id,
  }
}

export const getDocument = async <T>(
  collection: string,
  documentID: string
): Promise<MaybeNull<NormalizedDocument<T>>> => {
  const document = await fetchDocumentSnapshot(collection, documentID)
  if (!document) return null
  return normalizeDocument<T>(document)
}

export const createDocument = async (
  collection: string,
  data: any,
  documentID?: string
) => {
  if (documentID) {
    await db.collection(collection).doc(documentID).create(data)
  } else {
    await db.collection(collection).add(data)
  }
}

export const findDocuments = async <T>(
  collection: string,
  queries: SearchQuery[] = [],
  orderBy?: OrderBy,
  limit?: number
): Promise<MaybeEmpty<NormalizedDocument<T>[]>> => {
  let ref: any = db.collection(collection)

  if (queries.length) {
    for (const query of queries) {
      ref = ref.where(query.property, query.condition, query.value)
    }
  }

  if (orderBy) {
    ref = ref.orderBy(orderBy.fieldName, orderBy.sortDirection)
  }

  if (limit) {
    ref = ref.limit(limit)
  }

  const queryResults = await ref.get()

  if (queryResults.empty) {
    return []
  }

  return queryResults.docs.map((doc) => normalizeDocument<T>(doc))
}
