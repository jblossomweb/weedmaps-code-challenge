import weedmapsService from '../../services/weedmaps';

import {
  requestListingsAction,
  receiveListingsAction,
  requestListingsErrorAction,
} from '../actions/listings';

export const fetchListings = (coords, service = weedmapsService) => dispatch => {
  dispatch(requestListingsAction());
  service.getLocations(coords).then(
    response => dispatch(receiveListingsAction(response)),
    error => dispatch(requestListingsErrorAction(error)),
  )
}
