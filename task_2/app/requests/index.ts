const key = process.env.NEXT_PUBLIC_API_KEY;

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default requests;

export const getPopularMovies = async () => {
  const response = await fetch(requests.requestPopular, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error("Can't get popular movies");
  }

  const data = await response.json();
  return data;
};

export const getTopRatedMovies = async () => {
  const response = await fetch(requests.requestTopRated, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error("Can't get top rated movies");
  }

  const data = await response.json();
  return data;
};

export const getTrendingMovies = async () => {
  const response = await fetch(requests.requestTrending, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error("Can't get trending movies");
  }

  const data = await response.json();
  return data;
};

export const getUpcomingMovies = async () => {
  const response = await fetch(requests.requestUpcoming, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error("Can't get upcoming movies");
  }

  const data = await response.json();
  return data;
};
