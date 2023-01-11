const catchAsyncError = function (tryBlock) {
  return async function middlewareFn(req, res, next) {
    try {
      await tryBlock(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

module.exports = catchAsyncError;
