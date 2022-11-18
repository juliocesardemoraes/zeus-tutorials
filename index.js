const fetchLatestMovies = async (queryParameter, pageNumber) => {
  let getNewMovies = null;
  try {
    getNewMovies = await fetch(
      `https://api.themoviedb.org/3/movie/${queryParameter}?api_key=<YOURAPIKEYHERE>&language=en-US&page=${pageNumber}`,
      { mode: "cors" }
    );
  } catch (error) {
    console.log("Error while fetching movies: ", error);
  } finally {
    console.log("MOVIES LOADED");
  }

  const post = await getNewMovies.json();
  return post;
};

const renderSkeleton = (container) => {
  for (let i = 0; i < 20; i++) {
    const maindiv = document.createElement("div");
    maindiv.classList.add("card");

    const img = document.createElement("img");

    const cardinfo = document.createElement("div");
    cardinfo.classList.add("card__info");
    const emptyDiv = document.createElement("div");

    /*EMPTY DIV */
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card__header");

    const movieName = document.createElement("h3");
    const movieScore = document.createElement("h3");

    movieName.classList.add("movie__score");

    movieScore.classList.add("movie__score");

    const movieDescription = document.createElement("p");

    /*-------*/

    const cardDate = document.createElement("p");

    /*ADD SKELETON ANIMATION AND LOOK*/
    img.classList.add("skeleton", "animateSkelli");
    movieName.classList.add("skeleton", "animateSkelli");
    movieScore.classList.add("skeleton", "animateSkelli");
    movieDescription.classList.add("skeleton", "animateSkelli");
    cardDate.classList.add("skeleton", "animateSkelli");

    cardHeader.append(movieName, movieScore);

    emptyDiv.append(cardHeader, movieDescription);
    cardinfo.append(emptyDiv, cardDate);
    maindiv.append(img, cardinfo);

    /*---------------*/

    container.append(maindiv);
  }
};

const renderMovies = async (container, moviespayload) => {
  for (let i = 0; i < 20; i++) {
    //Remove Image skeleton classes
    const img = container.childNodes[i].childNodes[0];
    const date = container.childNodes[i].childNodes[1].childNodes[1];
    const movieName =
      container.childNodes[i].childNodes[1].childNodes[0].childNodes[0]
        .childNodes[0];
    const movieRating =
      container.childNodes[i].childNodes[1].childNodes[0].childNodes[0]
        .childNodes[1];

    const movieDescription =
      container.childNodes[i].childNodes[1].childNodes[0].childNodes[1];

    //REMOVE ALL SKELETON CLASSES
    img.classList.remove("skeleton", "animateSkelli");
    date.classList.remove("skeleton", "animateSkelli");
    movieName.classList.remove("skeleton", "animateSkelli");
    movieRating.classList.remove("skeleton", "animateSkelli");
    movieDescription.classList.remove("skeleton", "animateSkelli");
    date.classList.remove("skeleton", "animateSkelli");

    //Add image from tmdb database
    img.src = `https://image.tmdb.org/t/p/w500/${moviespayload.results[i]?.poster_path}`;

    //Add date from movie
    date.innerHTML = moviespayload.results[i]?.release_date;

    //Add movie name
    movieName.innerHTML = moviespayload.results[i]?.title;

    //Add movie Score
    movieRating.innerHTML = moviespayload.results[i]?.vote_average;

    //Add movie description
    movieDescription.innerHTML = moviespayload.results[i]?.overview;
  }
};

const loadMovies = async () => {
  const container = document.createElement("div");
  container.setAttribute("id", "card__container");
  /*INSERT SKELETON FIRST, we know that the return is 20 movies at the first call*/
  renderSkeleton(container);
  /*--------*/
  const body = document.getElementsByTagName("BODY")[0];

  body.append(container);

  const moviespayload = await fetchLatestMovies("popular", 1);

  /*FIRST LOAD - INSERT INFO INSIDE THE SKELETON CARD ELEMENT */
  renderMovies(container, moviespayload);
  /*--------*/
};
