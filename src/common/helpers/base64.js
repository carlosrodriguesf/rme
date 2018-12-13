const BASE_64_REGEX = /data:([A-z/]+);base64,/g

export function isBase64(base64) {
  return BASE_64_REGEX.test(base64)
}

export function base64Data(base64) {
  let result = BASE_64_REGEX.exec(base64)

  if (!result) {
    result = BASE_64_REGEX.exec(base64)
  }

  if (!result) {
    throw new Error(`Invalid base64: ${base64}`)
  }

  const { 0: replace, 1: contentType } = result

  return {
    contentType,
    content: base64.replace(replace, '')
  }
}
