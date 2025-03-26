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

  it("should throw when name is missing", () => {
    expect(() => {
      new Property("1", "", "a some description", 4, 200);
    }).toThrow("O nome e obrigatorio.");
  });
  it("should throw when maxGuests is zero or negative", () => {
    expect(() => {
      new Property("1", "a home", "a some description", 0, 200);
    }).toThrow("O numero maximo de hospedes deve ser maior que zero");
  });

  it("should validate maxGustes", () => {
    const property = new Property("1", "a home", "a some description", 5, 150);

    expect(() => {
      property.validateGuestsCount(6);
    }).toThrow("Numero maximo de hospedes excedido. Max permitido: 5");
  });
});
