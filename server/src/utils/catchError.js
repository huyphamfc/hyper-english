function catchError(tryBlock) {
  return async function middlewareFunc(req, res, next) {
    try {
      await tryBlock(req, res, next);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = catchError;
