import { delay } from './utils';

export class GeoLocationService {
  browserWindow;
  constructor(browserWindow)  {
    this.browserWindow = browserWindow
  }

  getCoordinates = () => new Promise((resolve, reject) => {
    const { navigator } = this.browserWindow;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => resolve(position.coords),
        reject,
      );
    } else {
      reject(new Error('Navigator GeoLocation does not appear to be enabled'));
    }
  })
  .then(delay(100)) // useful throttle
}

export default new GeoLocationService(window);
