import menu from "./food";

describe("food model", () => {
  it("contains items", () => {
    expect(menu).toHaveProperty("items");
  });
});
