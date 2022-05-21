const { notFoundError } = require("./error");

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
