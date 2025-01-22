import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, sanityToken} from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: sanityToken, // Add your Sanity API token here
});
