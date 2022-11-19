function catchError(tryBlock) {
  return async function middlewareFunc(req, res, next) {
    try {
      await tryBlock(req, res);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = catchError;
