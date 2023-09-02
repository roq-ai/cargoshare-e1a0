import axios from 'axios';
import queryString from 'query-string';
import {
  BusinessAdministratorInterface,
  BusinessAdministratorGetQueryInterface,
} from 'interfaces/business-administrator';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBusinessAdministrators = async (
  query?: BusinessAdministratorGetQueryInterface,
): Promise<PaginatedInterface<BusinessAdministratorInterface>> => {
  const response = await axios.get('/api/business-administrators', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createBusinessAdministrator = async (businessAdministrator: BusinessAdministratorInterface) => {
  const response = await axios.post('/api/business-administrators', businessAdministrator);
  return response.data;
};

export const updateBusinessAdministratorById = async (
  id: string,
  businessAdministrator: BusinessAdministratorInterface,
) => {
  const response = await axios.put(`/api/business-administrators/${id}`, businessAdministrator);
  return response.data;
};

export const getBusinessAdministratorById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/business-administrators/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteBusinessAdministratorById = async (id: string) => {
  const response = await axios.delete(`/api/business-administrators/${id}`);
  return response.data;
};
