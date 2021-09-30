const yup = require('yup')

module.exports.validateMessage = async (req, res, next) => {
  const { body } = req

  const MESSAGE_VALIDATION_SCHEMA = yup.object().shape({
    firstName: yup
      .string()
      .trim()
      .min(1)
      .max(40)
      .required(),
    text: yup
      .string()
      .min(1)
      .max(300)
      .required(),
    email: yup
      .string()
      .email()
      .required(),
    date: yup
      .date()
      .max(new Date())
      .required()
  })

  try {
    const validatedMessage = await MESSAGE_VALIDATION_SCHEMA.validate(body)
    req.body = validatedMessage
    next()
  } catch (e) {
    next(e)
  }
}
