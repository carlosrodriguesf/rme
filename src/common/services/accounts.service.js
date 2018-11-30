import { auth } from 'firebase'
import { setAvatar } from '@/common/services/storage.service'
import { getUserData, addUserData } from '@/common/services/database.service'

/* eslint-disable-next-line */
export async function login(email, password) {
  // try {
  //   const credentials = await createUserWithEmailAndPassword(
  //     email, password
  //   )
  //
  //   console.log(credentials)
  //
  //   return true
  // } catch (e) {
  //   console.log(e)
  // }
  //
  // return false
}

export async function createAccount(data) {
  const {
    avatar, email, password
  } = data

  const ref = await auth()
    .createUserWithEmailAndPassword(email, password)

  const { uid } = ref.user

  const downloadURL = await setAvatar(uid, avatar)

  Object.assign(data, {
    uid,
    avatar: downloadURL
  })

  addUserData(data)

  return data
}

auth()
  .onAuthStateChanged(async (user) => {
    console.log('changed', await getUserData(user.uid))
  })
