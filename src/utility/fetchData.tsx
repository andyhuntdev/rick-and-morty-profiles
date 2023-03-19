import { IRes } from '../types/data';

export function fetchData(
    url: string,
    successFunction: (data: IRes) => void,
    errorFunction: () => void
) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`This is an HTTP error: The status is ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            successFunction(data);
        })
        .catch((err) => {
            errorFunction();
            console.log(err.message);
        });
}
