const yup = require('yup');

module.exports.validateMessage = async (req, res, next) => {
  const { body } = req;

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
    date: yup.date().max(new Date()),
  });

  try {
    const validatedMessage = await MESSAGE_VALIDATION_SCHEMA.validate(body);
    req.body = validatedMessage;
    next();
  } catch (e) {
    next(e);
  }
};

module.exports.validateUpdatedMessage = async (req, res, next) => {
  const { body } = req;

  const UPDATED_MESSAGE_VALIDATION_SCHEMA = yup.object().shape({
    firstName: yup
      .string()
      .trim()
      .min(1)
      .max(40),

    text: yup
      .string()
      .min(1)
      .max(300),
    email: yup.string().email(),
    date: yup.date().max(new Date()),
  });

  try {
    const validateUpdatedMessage = await UPDATED_MESSAGE_VALIDATION_SCHEMA.validate(
      body
    );
    req.body = validateUpdatedMessage;
    next();
  } catch (e) {
    next(e);
  }
};
