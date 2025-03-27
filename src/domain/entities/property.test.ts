import { Property } from "./property";
import { DateRange } from "../value_object/date_range";
import { Booking } from "./booking";
import { User } from "./user";

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

  it("should not apply discount for stays shorter than 7 nights", () => {
    const property = new Property("1", "Home", "Description", 2, 100);
    const dateRange = new DateRange(
      new Date("2025-12-10"),
      new Date("2025-12-16")
    );

    const totalPrice = property.calculateTotalPrice(dateRange);
    expect(totalPrice).toBe(600);
  });

  it("should apply discount for stays shorter than 7 nights", () => {
    const property = new Property("1", "Home", "Description", 2, 100);
    const dateRange = new DateRange(
      new Date("2025-12-10"),
      new Date("2025-12-17")
    );

    const totalPrice = property.calculateTotalPrice(dateRange);
    expect(totalPrice).toBe(630);
  });

  it("should check availability of the property", () => {
    const property = new Property(
      "1",
      "Other name",
      "Other Description",
      2,
      100
    );
    const user = new User("1", "User");
    const dateRange = new DateRange(
      new Date("2025-12-10"),
      new Date("2025-12-17")
    );

    new Booking("1", property, user, dateRange, 2);

    expect(property.isAvaliable(dateRange)).toBe(false);
  });
});
