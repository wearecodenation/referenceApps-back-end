const SequelizeMock = require("sequelize-mock");
const { mockData } = require("../../mock");
const { movieSchema } = require("./movieTable");
const DBConnectionMock = new SequelizeMock();
const TestMovie = DBConnectionMock.define("Movie", movieSchema);

describe("Model tests", () => {
  it("should create a movie and find it", async () => {
    await TestMovie.create(mockData[0]);
    expect(await TestMovie.findOne({ where: mockData[0] })).toHaveProperty(
      "title",
      mockData[0].title
    );
  });
});
