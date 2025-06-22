import type { Dispatch } from "react";
import type { AuthAction } from "../global-state/action/authAction";

export const logout = (dispatch: Dispatch<AuthAction>) => {
  localStorage.removeItem("auth");
  dispatch({ type: "LOGOUT" });
};
