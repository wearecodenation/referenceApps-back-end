const { mockYargs, mockData } = require("../mock");
const app = require("./app");

describe("chack add functionality", () => {
  it("should add movie", async () => {
    const yargs = mockYargs("add", mockData[0]);
    console.log(yargs);
    expect(await app(yargs)).toHaveProperty("createdAt");
  });
});
