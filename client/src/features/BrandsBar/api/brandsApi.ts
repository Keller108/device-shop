import { handleResponse } from "../../../shared/utils/handleResponse";
import { BASE_API_ROUTE } from "../../../shared/utils/routes";

const BRANDS_URL = `${BASE_API_ROUTE}/brand`;

export const getBrands = () => {
    return fetch(BRANDS_URL, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(handleResponse);
};