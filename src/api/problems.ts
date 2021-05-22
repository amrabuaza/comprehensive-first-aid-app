/**
 * name: problems.ts
 * desc: this file contains a problems of axios based on
 * * status code.
 */

/**
 * A function that gets an error based on status.
 */
function getError(status: number): string {
    let error: string = 'unknown error';

    switch (status) {
        case 400:
            error = 'bad request';
            break;

        case 401:
            error = 'unauthorized';
            break;

        case 403:
            error = 'forbidden'
            break;

        case 404:
            error = 'not found';
            break;

        case 500:
        case 501:
        case 502:
        case 503:
            error = 'server error';
            break;
    };

    return error;
};

/**
 * export funstion as default.
 */
export default getError;