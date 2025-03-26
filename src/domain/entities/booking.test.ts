import { Property } from "./property";
import { DateRange } from "../value_object/date_range";
import { User } from "../entities/user";
import { Booking } from "./booking";

describe("Booking Entity", () => {
  it("should create a instance of Booking", () => {
    const property = new Property("1", "Home", "Description", 4, 100);
    const user = new User("1", "User");
    const dateRange = new DateRange(
      new Date("2025-12-20"),
      new Date("2025-12-25")
    );

    const booking = new Booking("1", property, user, dateRange, 2);

    expect(booking.getId()).toBe("1");
    expect(booking.getProperty()).toBe(property);
    expect(booking.getUser()).toBe(user);
    expect(booking.getDateRange()).toBe(dateRange);
    expect(booking.getGuestCount()).toBe(2);
  });
});
