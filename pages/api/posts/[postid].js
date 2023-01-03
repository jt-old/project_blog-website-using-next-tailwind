import data from '../data'

const handler = (req, res) => {
  const { postId } = req.query
  const { Posts } = data

  if (postId) {
    const post = Posts.find((value) => value.id == postId)
    return res.status(200).json(post)
  }

  return res.status(404).json({ error: 'Post Not Found' })
}

export default handler
