export type Video = {
    id: string;
    snippet: any;
    statistics?: any;
}

export type VideoState = {
    videos: Video[];
}

export const initialState: VideoState = { videos: [] }

export const videoReducer = (state: VideoState, action: any) => {
    switch (action.type) {
        case 'SET_VIDEOS':
            return {
                ...state,
                videos: action.payload
            }

        default:
            return state;
    }
}