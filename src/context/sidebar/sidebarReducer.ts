export const initialState = {
  open: true,
};

export type AppState = typeof initialState;
export type Action = { type: "TOGGLE_SIDEBAR" };

export const sidebarReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};
