export type ThemeState = { darkMode: boolean }

export type ThemeAction = { type: 'TOGGlE_THEME' }

export const initialState: ThemeState = { darkMode: false }

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
    switch (action.type) {
        case "TOGGlE_THEME":
            return { darkMode: !state.darkMode }

        default:
            return state;
    }
}
