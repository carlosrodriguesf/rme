import { firestore } from 'firebase'

const db = firestore()

export async function addUserData(data) {
  try {
    await db.collection('users')
      .add(data)

    return true
  } catch (e) {
    console.log(e)
    return false
  }
}

export async function getUserData(uid) {
  const querySnapshot = await db.collection('users')
    .where('uid', '==', uid)
    .get()

  let data = null

  querySnapshot.forEach((doc) => {
    data = doc.data()
  })

  return data
}
