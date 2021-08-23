<template>
  <div class="container">
    <Container :EggData="FirebaseData" />
  </div>
</template>

<script>
import fdata from "./firebaseInit.js";
import Container from "./components/Container.vue";

export default {
  name: "App",
  data() {
    return {
      FirebaseData: [],
    }
  },
  components: {
    Container,
  },
  methods: {
  },
  created() {
    //database init
    fdata.collection("EggList")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            this.FirebaseData.push(doc.data());
        });
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background-color:black;
}
</style>
