import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { reducers } from './mainReducer'
import { loadApp, saveApp } from "../helpers/ls";

export const store = createStore(
    reducers,
    {
      ...loadApp(),
    },
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
        )
    )
)

store.subscribe(() => {
  saveApp(store.getState());
});
