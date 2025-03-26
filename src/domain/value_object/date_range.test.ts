import { DateRange } from "./date_range";

describe("DateRange Value Object", () => {
  it("should throw an error if the end date is before the start date", () => {
    expect(() => {
      new DateRange(new Date("2025-12-25"), new Date("2025-12-20"));
    }).toThrow("a data de termino deve ser posterior a data de inicio.");
  });
  it("should create a DateRange instance with the start date and end date, \
    and check the return", () => {
    const startDate = new Date("2025-12-20");
    const endDate = new Date("2025-12-25");
    const dateRange = new DateRange(startDate, endDate);
    expect(dateRange.getStartDate()).toEqual(startDate);
    expect(dateRange.getEndDate()).toEqual(endDate);
  });

  it("should calculate the total nights correctly", () => {
    const startDate = new Date("2025-12-20");
    const endDate = new Date("2025-12-25");
    const dateRange = new DateRange(startDate, endDate);
    const totalNights = dateRange.getTotalNights();

    expect(totalNights).toBe(5);
  });

  it("should check if two date ranges overlap", () => {
    const dateRange1 = new DateRange(
      new Date("2025-12-22"),
      new Date("2025-12-27")
    );

    const dateRange2 = new DateRange(
      new Date("2025-12-22"),
      new Date("2025-12-27")
    );

    const overlaps = dateRange1.overlaps(dateRange2);
    expect(overlaps).toBe(true);
  });

  it("should throw error if startDate & endDate to Equals", () => {
    const date = new Date("2025-12-20");
    expect(() => {
      new DateRange(date, date);
    }).toThrow("a data de incio e termino nao podem ser iguais");
  });
});
