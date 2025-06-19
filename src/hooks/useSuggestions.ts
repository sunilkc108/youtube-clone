import useFetch from "./useFetch";
import { fetchSuggestions } from "../services/suggestionServices";
import { useCallback } from "react";

const useSuggestions = (query: string) => {
  const fetch = useCallback(() => fetchSuggestions(query), [query]);
  return useFetch<string[]>(fetch);
};

export default useSuggestions;
