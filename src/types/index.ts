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
    publishedAt: string;
    tags?: string[];
  };
  statistics: {
    viewCount: string;
    likeCount: string;
  };
};

export interface SingleComment {
  snippet: {
    topLevelComment: {
      snippet: {
        id: string;
        authorDisplayName: string;
        textDisplay: string;
        publishedAt: string;
        likeCount: number;
        authorProfileImageUrl: string;
      };
    };
  };
}

export type TagsType = {
  tags: string[];
  activeTag: string;
  setActiveTag: (tag: string) => void;
};
