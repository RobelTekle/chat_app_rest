const { v4 } = require('uuid')

const checkBody = body => {
  if (typeof body !== 'string') {
    return {
      obj: null,
      error: true,
      message: 'No body filled',
    }
  }
  const obj = JSON.parse(body)
  const keys = Object.keys(obj)

  if (keys.length > 1 || !keys.includes('name') || !obj.name) {
    return {
      obj: null,
      error: true,
      message: 'No valid fields filled. Required field: name',
    }
  }

  return {
    obj: { id: v4(), name: obj.name, messagesId: [] },
    error: false,
    message: null,
  }
}

module.exports = {
  checkBody,
}
