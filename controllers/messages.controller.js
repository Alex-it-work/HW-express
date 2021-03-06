const Message = require('./../models/message')

module.exports.getMessages = (req, res) => {
  const foundMessages = Message.getMessages()
  res.status(200).send(foundMessages)
}

module.exports.getMessageById = (req, res) => {
  const {
    params: { messageId }
  } = req

  const foundMessage = Message.getMessageById(messageId)

  if (foundMessage) {
    res.status(200).send(foundMessage)
  } else {
    res.status(404).send('Message not found')
  }
}

module.exports.createMessage = (req, res) => {
  const { body } = req

  const createdMessage = Message.createMessage(body)

  res.status(201).send(createdMessage)
}

module.exports.updateMessage = (req, res) => {
  const {
    params: { messageId },
    body
  } = req

  const updatedMessage = Message.updateMessage(body, messageId)

  updatedMessage
    ? res.status(201).send(updatedMessage)
    : res.status(404).send('Not found')
}

module.exports.deleteMessage = (req, res) => {
  const {
    params: { messageId }
  } = req

  const deletedMessage = Message.deleteMessage(messageId)

  deletedMessage
    ? res.status(200).send(deletedMessage)
    : res.status(404).send('Not found')
}
