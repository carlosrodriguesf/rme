import { firestore } from 'firebase'

/* eslint-disable-next-line */
export async function savePost(post) {
  await firestore()
    .collection('posts')
    .add(post)

  return post
}

export async function loadPosts() {
  const querySnapshot = await firestore()
    .collection('posts')
    .get()

  const data = []

  querySnapshot.forEach((doc) => {
    data.push(doc.data())
  })

  return data
}
