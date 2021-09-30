const express = require('express')
const messagesController = require('./controllers/messages.controller')
const validate = require('./middleware/validate.mw')
const app = express()

app.use(express.json())

app.get('/messages', messagesController.getMessages)
app.get('/messages/:messageId', messagesController.getMessageById)
app.post(
  '/messages',
  validate.validateMessage,
  messagesController.createMessage
)
app.patch('/messages/1', messagesController.updateMessage)
app.delete('/messages/1', messagesController.deleteMessage)

app.use((err, req, res, next) => {
  res.status(500).send(err)
})

module.exports = app
