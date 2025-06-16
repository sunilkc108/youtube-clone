import { createContext, useContext, useReducer, type Dispatch, type ReactNode } from "react"

export type ThemeState = {
    darkMode: boolean
}

export type ThemeAction = {
    type: 'TOGGLE_THEME'
}

export const initialState: ThemeState = { darkMode: false }

export const themeReducer = (state: ThemeState, action: ThemeAction) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return { darkMode: !state.darkMode }

        default:
            return state;
    }
}

const ThemeContext = createContext<{ state: ThemeState, dispatch: Dispatch<ThemeAction> }>({ state: initialState, dispatch: () => null })

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(themeReducer, initialState)

    return (
        <ThemeContext.Provider value= {{ state, dispatch }
}>
    { children }
    </ThemeContext.Provider>
    )
}

export const useTheme = ()=> useContext(ThemeContext)

