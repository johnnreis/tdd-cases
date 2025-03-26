import { User } from "./user";

describe("User Entity", () => {
  it("should create instace of user with `id` and `name`", () => {
    const user = new User("1", "Other name");
    expect(user.getId()).toBe("1");
    expect(user.getName()).toBe("Other name");
  });
  it("should throw error if name isEmpty", () => {
    expect(() => new User("1", "")).toThrow("Nome e obrigatorio.");
  });

  it("should throw error if id isEmpty", () => {
    expect(() => new User("", "Other name")).toThrow("Id e obrigatorio.");
  });
});
