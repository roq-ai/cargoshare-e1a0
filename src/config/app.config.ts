interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Platform Owner'],
  customerRoles: [],
  tenantRoles: ['Platform Owner', 'Business Administrator', 'Driver', 'Shipping Agent'],
  tenantName: 'Organization',
  applicationName: 'cargoshare',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage Organizations',
    'Invite Business Administrators, Drivers, and Shipping Agents to join an Organization',
    'Delete a user from an Organization',
    'Update the details of an Organization',
  ],
};
