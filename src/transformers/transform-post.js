export const transformPost = (dbPost) => ({
  id: dbPost.id,
  title: dbPost.title,
  imageUrl: dbPost.image_url,
  content: dbPost.content,
  registeredAt: dbPost.published_at,
});
