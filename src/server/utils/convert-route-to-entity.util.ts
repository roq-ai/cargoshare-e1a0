const mapping: Record<string, string> = {
  bookings: 'booking',
  'business-administrators': 'business_administrator',
  cargos: 'cargo',
  drivers: 'driver',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
