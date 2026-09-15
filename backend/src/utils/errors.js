// ===============================
// Success Response
// ===============================

export const successResponse = (
  res,
  data = null,
  message = "Success",
  statusCode = 200
) => {
  return res.status(statusCode).json({
    status: true,
    statusCode,
    message,
    data,
  });
};


// ===============================
// Error Response
// ===============================

export const errorResponse = (
  res,
  error,
  message = "Something went wrong",
  statusCode = 500
) => {
  const code = error?.statusCode || statusCode;

  return res.status(code).json({
    status: false,
    statusCode: code,
    message: error?.message || message,
    data: null,
  });
};


// ===============================
// Common Errors
// ===============================

export const notFound = (message = "Data not found") => {
  const error = new Error(message);
  error.statusCode = 404;
  return error;
};

export const badRequest = (message = "Bad request") => {
  const error = new Error(message);
  error.statusCode = 400;
  return error;
};

export const unauthorized = (message = "Unauthorized") => {
  const error = new Error(message);
  error.statusCode = 401;
  return error;
};

export const forbidden = (message = "Forbidden") => {
  const error = new Error(message);
  error.statusCode = 403;
  return error;
};
