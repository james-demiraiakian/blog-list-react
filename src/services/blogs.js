import { checkError, client } from './client';

export async function getBlogs() {
  const response = await client
    .from('blogs')
    .select('id, title, subtitle, text, image, authors ( name )');
  return checkError(response);
}
