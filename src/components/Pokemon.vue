<template>
  <div class="has-bg-img">
    <div class="container">
      <h1>Monsters</h1>
      <PokemonSearch :apiUrl="apiUrl" @setPokemonUrl="setPokemonUrl" />
      <PokemonList
        :imageUrl="imageUrl"
        :apiUrl="apiUrl"
        @setPokemonUrl="setPokemonUrl"
      />
      <PokemonDetail
        v-if="showDetail"
        :pokemonUrl="pokemonUrl"
        :imageUrl="imageUrl"
        @closeDetail="closeDetail"
      />
    </div>
  </div>
</template>

<script>
import PokemonSearch from "./PokemonSearch.vue";
import PokemonList from "./PokemonList.vue";
import PokemonDetail from "./PokemonDetail.vue";

export default {
  data: () => {
    return {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
      apiUrl: "https://pokeapi.co/api/v2/pokemon/",
      pokemonUrl: "",
      showDetail: false,
    };
  },
  components: {
    PokemonSearch,
    PokemonList,
    PokemonDetail,
  },
  methods: {
    setPokemonUrl(url) {
      this.pokemonUrl = url;
      this.showDetail = true;
    },
    closeDetail() {
      this.pokemonUrl = "";
      this.showDetail = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Acme");

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  width: calc(100% - 20px);
  min-height: calc(100vh - 20px);

  font-family: "Acme", arial;
  font-size: 1rem;
  font-weight: normal;
}

h1 {
  color: black;
}

.has-bg-img {
  position: relative;
}
.has-bg-img:after {
  content: "";
  background-image: url("./bgimage.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 3;
  background-attachment: fixed;
}
</style>
