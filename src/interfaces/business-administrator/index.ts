import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface BusinessAdministratorInterface {
  id?: string;
  admin_name: string;
  admin_contact: string;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface BusinessAdministratorGetQueryInterface extends GetQueryInterface {
  id?: string;
  admin_name?: string;
  admin_contact?: string;
  user_id?: string;
  organization_id?: string;
}
