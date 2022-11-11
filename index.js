const fetchLatestMovies = async (queryParameter) => {
  const getNewMovies = await fetch(
    `https://api.themoviedb.org/3/movie/${queryParameter}?api_key=<CREATEYOURAPI>&language=pt-BR&page=1`,
    { mode: "cors" }
  );

  const post = await getNewMovies.json();
  return post;
};

const loadMovies = async () => {
  const popularMovies = await fetchLatestMovies("popular");

  const container = document.getElementById("movie__section");
  for (let i = 0; i < popularMovies.results.length; i++) {
    const div = document.createElement("div");
    div.classList.add("relative__parent");
    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w500/${popularMovies.results[i]?.poster_path}`;

    div.append(img);
    container.append(div);
  }
};
