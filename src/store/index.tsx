import React, { createContext, useReducer, ReducerAction, Dispatch } from 'react';

interface StateProviderProps {
  children: React.ReactNode
};

interface StateProps {
  counter: number
}

interface ActionProps {
  type: string
  payload: any
}

interface ContextProps {
  state: StateProps; 
  dispatch: Dispatch<ReducerAction<typeof reducer>>
}

const initialState = {
  counter: 0,
};

const store = createContext<ContextProps>({
  state: initialState,
  dispatch: () => {},
});

const { Provider } = store;

const reducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case 'test': {
      return state;
    }

    default:
      return state;
  }
}

const StateProvider = ({ children }: StateProviderProps) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { store, StateProvider };
