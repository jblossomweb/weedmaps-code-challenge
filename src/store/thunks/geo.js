import {
  requestCoordinatesAction,
  requestCoordinatesErrorAction,
  receiveCoordinatesAction,
} from '../actions/geo';

export const fetchCoordinates = service => dispatch => {
  dispatch(requestCoordinatesAction());
  service.getCoordinates().then(
    response => dispatch(receiveCoordinatesAction(response)),
    error => dispatch(requestCoordinatesErrorAction(error)),
  )
}
