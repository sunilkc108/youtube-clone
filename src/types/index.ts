// src/types/index.ts
export type Video = {
    id: string;
    snippet: {
        title: string;
        description: string;
        thumbnails: {
            medium: {
                url: string;
            };
        };
        channelTitle: string;
    };
    statistics: {
        viewCount: string;
        likeCount: string;
    };
};
