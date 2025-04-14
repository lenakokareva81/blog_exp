export const transformComment = (dbComment) => ({
  id: dbComment.id,
  postId: dbComment.post_id,
  autorId: dbComment.autor_id,
  content: dbComment.content,
  publishedAt: dbComment.published_at,
});
