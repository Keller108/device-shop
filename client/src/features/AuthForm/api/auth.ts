const REGISTRATION_URL = 'http://localhost:5000/api/user/registration';

const handleResponse = (res: Response) => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)

export const register = (email: string, password: string, role: string = "ADMIN") => {
  return fetch(`${REGISTRATION_URL}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password, role}),
  })
    .then(handleResponse)
};