import { DateRange } from "./date_range";

describe("DateRange Value Object", () => {
  it("should throw an error if the end date is before the start date", () => {
    expect(() => {
      new DateRange(new Date("2024-12-25"), new Date("2024-12-20"));
    }).toThrow("a data de termino deve ser posterior a data de inicio");
  });
  it("should create a DateRange instance with the start date and end date, \
    and check the return", () => {
    const startDate = new Date("2024-12-20");
    const endDate = new Date("2024-12-25");
    const dateRange = new DateRange(startDate, endDate);
    expect(dateRange.getStartDate()).toEqual(startDate);
    expect(dateRange.getEndDate()).toEqual(endDate);
  });

  it("should calculate the total nights correctly", () => {
    const startDate = new Date("2024-12-20");
    const endDate = new Date("2024-12-25");
    const dateRange = new DateRange(startDate, endDate);
    const totalNights = dateRange.getTotalNights();

    expect(totalNights).toBe(5);
  });
});
