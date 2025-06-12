export type TagsType = {
  tags: string[];
  activeTag: string;
  setActiveTag: (tag: string) => void;
};

export type VideoCardProps = {
  id: string;
  thumbnail: string; // fix spelling
  title: string;
  channel: string;
  views: string;
  published: string; // match data
  videoUrl: string;
  tags: string[];
  time: string;
  comments: {
    name: string;
    date: string;
    comment: string;
  }[];
};

export interface VideoDetailsProps {
  title: string;
  channel: string;
  views: string;
  published: string;
}

export interface PlayerProps {
  title: string;
  videoUrl: string;
}

export interface SingleComment {
  name: string;
  date: string;
  comment: string;
}

