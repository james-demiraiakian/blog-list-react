import { checkError, client } from './client';

export async function getBlogs() {
  const response = await client.from('blogs').select('title, subtitle, text, image, id');
  return checkError(response);
}
