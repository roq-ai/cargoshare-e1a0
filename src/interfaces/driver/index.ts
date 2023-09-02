import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface DriverInterface {
  id?: string;
  license_number: string;
  vehicle_type: string;
  vehicle_capacity: number;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface DriverGetQueryInterface extends GetQueryInterface {
  id?: string;
  license_number?: string;
  vehicle_type?: string;
  user_id?: string;
  organization_id?: string;
}
