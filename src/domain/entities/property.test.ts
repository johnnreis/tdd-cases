import { Property } from "./property";
describe("Property Entity", () => {
  it("should create instance of Property with all atributes ", () => {
    const property = new Property("1", "a home", "a some description", 4, 200);

    expect(property.getId()).toBe("1");
    expect(property.getName()).toBe("a home");
    expect(property.getDescription()).toBe("a some description");
    expect(property.getMaxGuests()).toBe(4);
    expect(property.getBasePricePerNight()).toBe(200);
  });
});
