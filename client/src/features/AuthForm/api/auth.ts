import { BASE_API_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, USER_PATH } from "../../../shared/utils/routes";

const REGISTRATION_URL = `${BASE_API_ROUTE}/${USER_PATH}${REGISTRATION_ROUTE}`;
const AUTH_URL = `${BASE_API_ROUTE}/${USER_PATH}${LOGIN_ROUTE}`;

const handleResponse = (res: Response) => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)

export const register = (email: string, password: string, role: string = "USER") => {
  return fetch(`${REGISTRATION_URL}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password, role}),
  })
    .then(handleResponse);
};

export const signIn = (email: string, password: string) => {
  return fetch(`${AUTH_URL}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password}),
  })
    .then(handleResponse);
}