import { auth, firestore, storage } from 'firebase'
import { base64Data, isBase64 } from '@/common/helpers/base64'

const $data = {
  user: undefined,
  listeners: [],
  onLoadListeners: []
}

/* eslint-disable-next-line */
export async function login(email, password) {
  await auth().signInWithEmailAndPassword(
    email, password
  )
}

export async function setUserAvatar(uid, base64) {
  const { contentType, content } = base64Data(base64)
  const path = `${uid}/avatar`
  const child = await storage()
    .ref()
    .child(path)

  await child.putString(content, 'base64', { contentType })

  return await child.getDownloadURL()
}

export async function saveUserData(user) {
  const { uid, avatar } = user

  if (isBase64(avatar)) {
    user.avatar = await setUserAvatar(uid, avatar)
  }

  delete user.password

  await firestore()
    .collection('users')
    .add(user)

  return user
}

export async function createUser(user) {
  const { email, password } = user

  const ref = await auth()
    .createUserWithEmailAndPassword(email, password)

  const { uid } = ref.user

  user.uid = uid

  return await saveUserData(user)
}

export async function getUserData(uid) {
  const querySnapshot = await firestore()
    .collection('users')
    .where('uid', '==', uid)
    .get()

  let data = null

  querySnapshot.forEach((doc) => {
    data = doc.data()
  })

  return data
}

export function isAuthenticated() {
  return !!$data.user
}

export function addUserStateListener(callback) {
  const { user, listeners } = $data

  listeners.push(callback)

  if (user !== undefined) {
    callback(user)
  }
}

export function waitLoad() {
  return new Promise((resolve) => {
    if ($data.user !== undefined) {
      resolve()

      return
    }

    $data.onLoadListeners.push(resolve)
  })
}

export function signOut() {
  auth().signOut()
}

async function authStateChangedHandler(user) {
  const firstTime = $data.user === undefined

  user = user && await getUserData(user.uid)

  $data.user = user

  $data.listeners.forEach(callback => callback(user))

  if (firstTime) {
    $data.onLoadListeners.forEach(resolve => resolve())

    delete $data.onLoadListeners
  }
}


auth().onAuthStateChanged(authStateChangedHandler)
