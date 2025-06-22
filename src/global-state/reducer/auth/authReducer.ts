import {
  LOGIN,
  LOGOUT,
  SET_USER,
  type AuthAction,
} from "../../action/authAction";

export type AuthState = {
  isAuthentcated: boolean;
  token: string | null;
  user: {
    name: string;
    email: string;
    avatar: string;
  } | null;
};

const localData = localStorage.getItem("auth");
export const initialAuthState: AuthState = localData
  ? JSON.parse(localData)
  : {
      isAuthentcated: false,
      token: null,
      user: null,
    };

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthentcated: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...initialAuthState,
      };

    default:
      return state;
  }
};
