import jsonp from "jsonp";

export const fetchSuggestions = (query: string): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    if (!query.trim()) return resolve([]);

    const url = `https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=${encodeURIComponent(
      query
    )}`;

    jsonp(url, { param: "callback" }, (err: any, data: any) => {
      if (err) {
        console.error("Suggestion fetch error", err);
        return reject(err);
      }

      resolve(data[1]); // suggestions array
    });
  });
};
