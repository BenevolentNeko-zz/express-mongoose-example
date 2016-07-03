const request = require("supertest");
const proxyquire = require("proxyquire");
const express = require("express");
const app = express();

//mock data
const testData = {
  some: "data"
};
// load api module, with the DB methods stubbed
const api = proxyquire("../src/api", {
  "./db": {
    findOne: () => new Promise((resolve) => resolve(testData))
  }
});

describe("API route", () => {
  before(() => {
    app.use("/", api);
  });

  it("should return a base resource on a GET", (done) => {
    request(app)
      .get("/")
      .expect(200, testData, done);
  });

  it("should not have resources available on other paths", (done) => {
    request(app)
      .get("/something")
      .expect(404, done);
  });

  it("should not accept POST requests", (done) => {
    request(app)
      .post("/")
      .expect(404, done);
  });

});
