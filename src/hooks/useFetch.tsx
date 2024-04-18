import { useEffect, useState } from "react";

export default function useFetch<T>(url: RequestInfo, options?: RequestInit | undefined) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getData() {
      try {
        setData(null);
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const json = await response.json();
        setData(json);

      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }

      } finally {
        setLoading(false);

      }
    }
    getData();

  }, [url])

  return { data, loading, error }
}