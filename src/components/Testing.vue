<template>
  <h1>Hello</h1>
</template>

<script>
export default {
  created() {
    this.getstuff();
  },

  methods: {
    getstuff() {
      const axios = require("axios");
      axios
        .get("http://localhost:8080/api/pokemon/")
        .then((resp) => {
          //axios.get("https://pokeapi.co/api/v2").then((resp) => {
          console.log(resp.data);
        })
        .catch(() => {
          console.log("TRY AGAIN");
        });
    },
  },
};
</script>
