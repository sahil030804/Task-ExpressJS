const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body);
    return next();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default validate;
