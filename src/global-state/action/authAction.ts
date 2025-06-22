export const LOGIN="LOGIN"
export const LOGOUT="LOGOUT"
export const SET_USER="SET_USER"

export interface LoginAction {
    type: typeof LOGIN;
    payload: {
        token: string;
        user: {
            name: string;
            email: string;
            avatar: string;
        }
    }
}

export interface LogoutAction {
    type: typeof LOGOUT
}

export interface SetUserAction {
    type: typeof SET_USER;
    payload: {
        name: string;
        email: string;
        avatar: string;
    }
}

export type AuthAction = LoginAction | LogoutAction | SetUserAction