import { Flight as TFlight } from "../api/flight/Flight";

export const FLIGHT_TITLE_FIELD = "id";

export const FlightTitle = (record: TFlight): string => {
  return record.id?.toString() || String(record.id);
};
