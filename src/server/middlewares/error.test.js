const { notFoundError, generalError } = require("./error");

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};
describe("Given a 'not found' error middleware", () => {
  describe("When it receives an unexisting endpoint", () => {
    test("Then it should call a response status 404 and a message 'this endpoint was not found'", () => {
      const expectedStatusCode = 404;
      const expectedMessage = { message: "Endpoint was not found" };

      notFoundError(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});

describe("Given a generalError function", () => {
  describe("When it's invoked with a response, a 500 error and a error message 'Internal server error'", () => {
    test("Then it should call the response status method with 500 and the json method with the passed error message", () => {
      const error = {
        statusCode: 500,
        message: "General error",
      };

      const expectedStatusCode = 500;
      const expectedMessage = { message: "General error" };

      generalError(error, null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
