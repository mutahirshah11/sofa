import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import checkout from './orders'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products , checkout],
}
