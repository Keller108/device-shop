const BASE_URL = 'http://localhost:5000/api/type';

const handleResponse = (res: Response) => {
    if (res.ok) {
        return res.json();
    } else Promise.reject(`Ошибка ${res.status}`)
};

export const getTypes = () => {
    return fetch(`${BASE_URL}`, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(handleResponse);
}