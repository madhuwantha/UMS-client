import {Property} from "./property";

export interface User {
  id: number;
  custom_id: String | null | undefined;
  user_name: String | null | undefined;
  email: String | null | undefined;
  device_token: String | null | undefined;
  is_premium_user: String | null | undefined;
  did_accept_to_sand_privacy_policy: String | null | undefined;
  date_accepted_to_sand_privacy_policy: String | null | undefined;
  fire_monitoring_is_on: String | null | undefined;
  weather_monitoring_is_on: String | null | undefined;
  properties: Property[] | null | undefined;
}
