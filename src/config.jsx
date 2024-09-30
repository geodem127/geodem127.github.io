// const config = {
//   baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
//   googleApiUrl: import.meta.env.VITE_REACT_APP_GOOGLE_API_URL,
//   googleApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY,
//   githubVideosPath: import.meta.env.VITE_REACT_APP_GITHUB_VIDEOS_PATH,
//   githubMediaPath: import.meta.env.VITE_REACT_APP_GITHUB_MEDIA_PATH,
// };

const mode = process.env.NODE_ENV;

const config = {
  NODE_ENV: mode,
  BASE_URL:
    mode === "prod"
      ? import.meta.env.VITE_REACT_APP_BASE_URL
      : import.meta.env.VITE_REACT_APP_BASE_URL_LOCAL,
  GOOGLE_API_URL: import.meta.env.VITE_REACT_APP_GOOGLE_API_URL,
  GOOGLE_API_KEY: import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY,
  GITHUB_VIDEOS_PATH: import.meta.env.VITE_REACT_APP_GITHUB_VIDEOS_PATH,
  GITHUB_MEDIA_PATH:
    mode === "prod"
      ? import.meta.env.VITE_REACT_APP_GITHUB_MEDIA_PATH
      : import.meta.env.VITE_REACT_APP_GITHUB_MEDIA_PATH_LOCAL,
  API_ENDPOINT:
    mode === "prod"
      ? import.meta.env.VITE_REACT_APP_API_ENDPOINT
      : import.meta.env.VITE_REACT_APP_API_ENDPOINT_LOCAL,
  APP_DATA_PATH:
    mode === "prod"
      ? `${import.meta.env.VITE_REACT_APP_API_ENDPOINT}/portfolioData.json`
      : "./portfolioData.json",
};

export default config;
