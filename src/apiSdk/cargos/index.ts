import axios from 'axios';
import queryString from 'query-string';
import { CargoInterface, CargoGetQueryInterface } from 'interfaces/cargo';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCargos = async (query?: CargoGetQueryInterface): Promise<PaginatedInterface<CargoInterface>> => {
  const response = await axios.get('/api/cargos', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCargo = async (cargo: CargoInterface) => {
  const response = await axios.post('/api/cargos', cargo);
  return response.data;
};

export const updateCargoById = async (id: string, cargo: CargoInterface) => {
  const response = await axios.put(`/api/cargos/${id}`, cargo);
  return response.data;
};

export const getCargoById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/cargos/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCargoById = async (id: string) => {
  const response = await axios.delete(`/api/cargos/${id}`);
  return response.data;
};
