/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 21/05/2017
 * @Description
 */
class CacheOptions {
    static DEFAULT = 'default';
    static NO_STORE = 'no-store';
    static RELOAD = 'reload';
    static NO_CACHE = 'no-cache';
    static FORCE_CACHE = 'force-cache';
    static ONLY_IF_CACHED = 'only-if-cached';
}

class MethodOptions {
    static POST = 'POST';
    static GET = 'GET';
    static PUT = 'PUT';
    static DELETE = 'DELETE';
    static PATCH = 'PATCH';
}

class CorsOptions {
    static CORS = 'cors';
    static SAME_ORIGIN = 'same-origin';
}

class ApiRequest {

    static API_URL = 'https://scrypto-api-dev.herokuapp.com';
    static API_VERSION = 1;

    constructor(uri, method = MethodOptions.GET, cache = CacheOptions.DEFAULT, isCors = true) {
        this._initHeaders();
        this._request = new Request(ApiRequest._buildUrl(uri), {
            method,
            cache,
            headers: this._initHeaders(),
            mode: isCors ? CorsOptions.CORS : CorsOptions.SAME_ORIGIN
        });
    }

    static _buildUrl(uri) {
        return `${ApiRequest.API_URL}/api/v${ApiRequest.API_VERSION}${uri}`;
    }

    _initHeaders() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    setToken(token) {
        this._request.headers.append('Authorization', `Bearer ${token}`);
        return this;
    }

    setBody(body) {
        this._request.body = body;
        return this;
    }

    async call() {
        try {
            const response = await fetch(this._request);
            const data = await response.json();
            return data.success ? data.payload : Promise.reject(new Error(data.error_message));
        } catch (err) {
            return Promise.reject(err);
        }
    }
}

export default ApiRequest;
export {CacheOptions, MethodOptions};