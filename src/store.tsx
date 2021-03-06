/*
 * Firestarter.io
 *
 * Copyright (C) 2020 Blue Ohana, Inc.
 * All rights reserved.
 * The information in this software is subject to change without notice and
 * should not be construed as a commitment by Blue Ohana, Inc.
 *
 */

import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { all, fork } from "redux-saga/effects";

import mapReducer, { State as MapState } from "./map/store/reducer";
import serverSagas from "./common/store/server/sagas";

/**
 * Combined state of all reducer states
 */
export interface ApplicationState {
  /**
   * State of the central Map component
   */
  map: MapState;
}

/**
 * Combines all sagas into one root saga to be linked to redux
 */
function* rootSaga(): Generator {
  yield all([fork(serverSagas)]);
}

const sagaMiddleware = createSagaMiddleware();

/**
 * Combines all reducers into one root reducer to create the total store state
 */
const rootReducer = combineReducers({ map: mapReducer });

/**
 * The redux store for the application
 */
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
