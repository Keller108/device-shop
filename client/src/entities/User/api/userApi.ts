import { handleResponse } from "../../../shared/utils/handleResponse";
import { BASE_API_ROUTE, USER_PATH } from "../../../shared/utils/routes"

export const check = () => {
    return fetch(`${BASE_API_ROUTE}${USER_PATH}/auth`, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
          }
        })
          .then(handleResponse);
}