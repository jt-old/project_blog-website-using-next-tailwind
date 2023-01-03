import data from './data'

// api/trending
const trending = (req, res) => {
  const { Trending } = data
  if (Trending) {
    return res.status(200).json(Trending)
  }
  return res.status(404).json({ error: 'Data Not Found' })
}

export default trending
