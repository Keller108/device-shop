export const handleResponse = (res: Response) => {
    if (res.ok) {
        return res.json();
    } else Promise.reject(`Ошибка ${res.status}`)
};