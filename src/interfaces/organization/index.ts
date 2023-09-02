import { BusinessAdministratorInterface } from 'interfaces/business-administrator';
import { CargoInterface } from 'interfaces/cargo';
import { DriverInterface } from 'interfaces/driver';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  business_administrator?: BusinessAdministratorInterface[];
  cargo?: CargoInterface[];
  driver?: DriverInterface[];
  user?: UserInterface;
  _count?: {
    business_administrator?: number;
    cargo?: number;
    driver?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
