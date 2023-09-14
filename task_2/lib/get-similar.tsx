const api_key = process.env.NEXT_PUBLIC_API_KEY


export default async function getSimilar(movieId: number) {
    const api_url = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${api_key}&language=en-US`;
  const res = await fetch(api_url);

  if(!res.ok) throw new Error("Cannot get movie details");

  return res.json();
}
