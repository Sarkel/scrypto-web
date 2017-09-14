/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 21/05/2017
 * @Description
 */
import axios from "axios";
import {set as setProperty} from "lodash";


class MethodOptions {
    static POST = 'POST';
    static GET = 'GET';
    static PUT = 'PUT';
    static DELETE = 'DELETE';
    static PATCH = 'PATCH';
}

class ApiRequest {

    static API_URL = 'https://scrypto-api-dev.herokuapp.com';
    static API_VERSION = 1;

    constructor(uri, method = MethodOptions.GET,) {
        this._uri = uri;
        this._method = method;
        this._headers = ApiRequest._initHeaders();
    }

    _buildUrl() {
        return `${ApiRequest.API_URL}/api/v${ApiRequest.API_VERSION}${this._uri}`;
    }

    static _initHeaders() {
      return {
        'Content-Type': 'application/json'
      }
    }

    setToken(token) {
        setProperty(this._headers, 'Authorization', `Bearer ${token}`);
        return this;
    }

    setBody(body) {
        this._body = body;
        return this;
    }

    call() {
      return axios({
        method: this._method,
        url: this._buildUrl(),
        responseType: 'json',
        headers: this._headers,
        data: this._body,
        validateStatus: null
      });
    }
}

export default ApiRequest;
export {MethodOptions};