import { useEffect, useState } from "react";
import { fetchVideoById, fetchVideoTags } from "../services/videoService";
import type { Video } from "../types";
import { useParams } from "react-router-dom";

const useRelatedVideos = () => {
  const { id } = useParams();
  const [relatedVides, setRelatedVides] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRelated = async () => {
      try {
        setLoading(true);
        const video = await fetchVideoById(id!);
        const tags = video.snippet?.tags ?? [];

        if (tags.length === 0) {
          setRelatedVides([]);
          return;
        }
        const taggedVideos = await fetchVideoTags(tags);

        setRelatedVides(taggedVideos);
      } catch (error: any) {
        setError(error.message || "Something went wrong");
      }
    };
    fetchRelated();
  }, [id]);

  return { data: relatedVides, loading, error };
};

export default useRelatedVideos;

// const useRelatedVideos = () => {
//     const { id } = useParams()
//     const fetchTags = useFetch<Video[]>(() => fetchVideoTagsById(id!))
//     console.log(fetchTags, 'fetch tags');

// }
