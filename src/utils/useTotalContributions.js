import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useTotalContributions = (username) => {
  const refreshInterval = 1000 * 60 * 60;

  const { data, error } = useSWR(
    `/api/send/githubQuery?username=${username}`,
    fetcher,
    {
      refreshInterval,
    }
  );

  return {
    totalContributions: data?.totalContributions || "NaN",
    isLoading: !error && !data,
    isError: error,
  };
};
