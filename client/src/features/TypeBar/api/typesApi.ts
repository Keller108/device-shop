import { handleResponse } from "../../../shared/utils/handleResponse";
import { BASE_API_ROUTE } from "../../../shared/utils/routes";

const TYPE_URL = `${BASE_API_ROUTE}/type`;

export const getTypes = () => {
    return fetch(`${TYPE_URL}`, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(handleResponse);
};