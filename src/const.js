const FilterType = {
  EVERYTHING: 'everthing',
  FUTURE: 'future',
  PAST: 'past'
};

const SortType = {
  DAY: 'day',
  PRICE: 'price',
  TIME: 'time'
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT'
};

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

const DOTTED_LINE = String.fromCharCode(0x2026);
const LONG_DASH = String.fromCharCode(0x2014);

export { FilterType, SortType, UpdateType, UserAction, DOTTED_LINE, LONG_DASH };
