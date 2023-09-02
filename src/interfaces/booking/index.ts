import { CargoInterface } from 'interfaces/cargo';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  booking_date: any;
  expected_delivery_date: any;
  cargo_id: string;
  shipping_agent_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  cargo?: CargoInterface;
  user?: UserInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  cargo_id?: string;
  shipping_agent_id?: string;
  status?: string;
}
