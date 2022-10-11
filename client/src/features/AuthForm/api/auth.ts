import { REGISTRATION_ROUTE } from "../../../shared/utils/const";

const BASE_URL = 'http://localhost:3000';

const handleResponse = (res: Response) => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)

export const register = (email: string, password: string) => {
  return fetch(`${BASE_URL}${REGISTRATION_ROUTE}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password}),
  })
    .then(handleResponse)
};