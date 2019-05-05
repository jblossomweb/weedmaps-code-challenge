import * as config from '../constants/config';
import { defaultRest, promiseGet, delay } from './utils';

export class WeedmapsService {
  apiUrl;
  rest;
  constructor(apiHost, rest)  {
    this.apiUrl = `https://${apiHost}/wm/v2/`;
    this.rest = rest
  }
  getLocations(coords) {
    if (!coords) {
      return Promise.reject(new Error('no coordinates were passed to getLocations'))
    }
    if (!coords.latitude || !coords.longitude) {
      return Promise.reject(new Error('missing coordinates were passed to getLocations'))
    }
    const params = [
      `include${encodeURIComponent('[]')}=regions.listings`,
      `latlng=${encodeURIComponent(`${coords.latitude},${coords.longitude}`)}`,
    ];
    const headers = { 'Content-Type': 'application/json' }
    const endpoint = `location?${params.join('&')}`
    const url = `${this.apiUrl}${endpoint}`
    return promiseGet({ url, headers }, this.rest)
      .then(delay(100)) // useful throttle
  }
}

export default new WeedmapsService(config.API_HOST, defaultRest)
