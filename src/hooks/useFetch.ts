import { useEffect, useState } from "react";

const useFetch = <T>(fetchFunc: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetchFunc();
        if (!ignore) {
          setData(response);
        }
      } catch (error: any) {
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    getData();

    return () => {
      ignore = true;
    };
  }, [fetchFunc]);

  return { data, loading, error };
};

export default useFetch;
