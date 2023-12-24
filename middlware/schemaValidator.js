export const validation = (schema) => {
	return (req, res, next) => {
	  const { error } = schema.validate(req.body);
	  if (error) {
		 console.log(error);
		 error.status = 400;
		return next(error);
	  } else {
		 next(); // Вызываем next только в случае успешной валидации
	  }
	};
 };