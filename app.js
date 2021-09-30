const express = require('express')
const messagesController = require('')
const app = express()

app.use(express.json())

app.get('/messages', messagesController.getMessages)

app.get('/messages/:messageId', messagesController.getessageById)

app.post(
  '/messages',
  validate.validateMessage,
  messagesController.createMessage
)

app.patch('/messages/1', messagesController.updateMessage)

app.delete('/messages/1', messagesController.deleteMessage)

module.exports = app
