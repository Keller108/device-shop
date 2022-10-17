import { handleResponse } from "../../../shared/utils/handleResponse";
import { BASE_API_ROUTE, USER_PATH } from "../../../shared/utils/routes"

export const check = (id: number, email: string, role: string) => {
    return fetch(`${BASE_API_ROUTE}${USER_PATH}`, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({id, email, role}),
        })
          .then(handleResponse);
}