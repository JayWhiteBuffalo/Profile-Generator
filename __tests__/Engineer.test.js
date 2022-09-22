const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  test("Should create an engineer instance", () => {
    const engineer = new Engineer("Tom", 2, "Tom@email.com", "github");

    expect(engineer.name).toEqual("Tom");
    expect(engineer.id).toEqual(2);
    expect(engineer.email).toEqual("Tom@email.com");
    expect(engineer.github).toEqual("github");
  });
});
