// const baseURL = 'https://blog-website-using-next-tailwind.vercel.app/api/posts'
const baseURL = 'http://localhost:3000'

export default async function getPost(id) {
  const res = await fetch(`${baseURL}/api/posts`)
  const posts = await res.json()

  if (id) {
    return posts.find((value) => value.id == id)
  }

  return posts
}
