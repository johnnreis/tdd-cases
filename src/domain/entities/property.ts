import { DateRange } from "../value_object/date_range";

export class Property {
  constructor(
    private id: string,
    private name: string,
    private description: string,
    private maxGuests: number,
    private basePricePerNight: number
  ) {
    if (!name) {
      throw new Error("O nome e obrigatorio.");
    }
    if (maxGuests < 0) {
      throw new Error("O maxGuests nao deve ser menor que 0");
    }

    if (maxGuests === 0) {
      throw new Error("O numero maximo de hospedes deve ser maior que zero");
    }
    this.id = id;
    this.name = name;
    this.description = description;
    this.maxGuests = maxGuests;
    this.basePricePerNight = basePricePerNight;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getMaxGuests(): number {
    return this.maxGuests;
  }

  getBasePricePerNight(): number {
    return this.basePricePerNight;
  }

  validateGuestsCount(guestCount: number): void {
    if (guestCount > this.maxGuests) {
      throw new Error(
        `Numero maximo de hospedes excedido. Max permitido: ${this.maxGuests}.`
      );
    }
  }

  calculateTotalPrice(dateRange: DateRange): number {
    const totalNights = dateRange.getTotalNights();
    let totalPrice = totalNights * this.basePricePerNight;

    if (totalNights >= 7) {
      totalPrice *= 0.9;
    }
    return totalPrice;
  }
}
