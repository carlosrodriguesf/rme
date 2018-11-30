import { storage } from 'firebase'

const ref = storage()
  .ref()

/* eslint-disable-next-line */
export async function setAvatar(uid, base64) {
  const regex = /data:([A-z/]+);base64,/g

  const { 0: replace, 1: contentType } = regex.exec(base64)

  const child = await ref.child(`${uid}/avatar`)

  await child.putString(base64.replace(replace, ''), 'base64', { contentType })

  const downloadURL = await child.getDownloadURL()

  return downloadURL
}
