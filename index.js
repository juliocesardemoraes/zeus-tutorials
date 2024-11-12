const pokeAPIBaseUrl = "https://pokeapi.co/api/v2/pokemon/";

// Criar uma promise
const fetchPokemon = async (id) => {
  const response = await fetch(`${pokeAPIBaseUrl}${id}`);
  const data = await response.json();
  return data;
};

// Função para buscar Pokémon usando Promise.all() (paralelamente)
async function fetchPokemonsSimultaneously(ids) {
  const promises = ids.map((id) => fetchPokemon(id)); // Cria um array de promessas
  console.log(promises);
  const pokemons = await Promise.all(promises); // Executa todas as promises em paralelo
  return pokemons;
}

// Função para buscar Pokémon de forma sequencial
async function fetchPokemonsSequentially(ids) {
  const pokemons = [];
  for (const id of ids) {
    const pokemon = await fetchPokemon(id); // Await executa um fetch por vez
    pokemons.push(pokemon);
  }
  return pokemons;
}

// IDs de Pokémon para buscar
const pokemonIds = Array.from({ length: 100 }, (_, i) => i + 1);
console.log(pokemonIds);

// PROMISE ALL
console.time("Promise.all");
fetchPokemonsSimultaneously(pokemonIds)
  .then(() => console.timeEnd("Promise.all"))
  .catch((error) =>
    console.error("Erro no fetchPokemonsSimultaneously:", error)
  );

// SEQUENCIAL
console.time("Sequential");
fetchPokemonsSequentially(pokemonIds)
  .then(() => console.timeEnd("Sequential"))
  .catch((error) => console.error("Erro no fetchPokemonsSequentially:", error));
