import { BookingInterface } from 'interfaces/booking';
import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CargoInterface {
  id?: string;
  cargo_name: string;
  cargo_weight: number;
  cargo_volume: number;
  cargo_type: string;
  organization_id: string;
  driver_id: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {
    booking?: number;
  };
}

export interface CargoGetQueryInterface extends GetQueryInterface {
  id?: string;
  cargo_name?: string;
  cargo_type?: string;
  organization_id?: string;
  driver_id?: string;
}
