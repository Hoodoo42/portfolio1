<template>
  <div>
    <div id="container">
      <h2>Mystic Mountain Market</h2>
      <img
        id="mmm"
        @click="openLink"
        src="@/assets/mmm.png"
        alt="a screenshot of the desktop homepage of mystic mountain market website"
      />
      <p>
        I created this website to showcase my work on front end development
        through HTML and CSS. The highlight of this site is each screen mode
        (desktop, tablet, mobile)has a different home page.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-projects",

  methods: {
    openLink() {
      window.open("http://mysticmountainmarket.ml/");
    },
  },
};
</script>
<style lang="scss" scoped>
div {
  display: grid;
  place-items: center;

  > #container {
    display: grid;
    place-items: center;
    text-align: center;

    > img {
      width: 40%;
      border: 1px solid black;
}
    h2{
        color: rgb(147, 93, 18);
        font-size: 1.5em
    }
    p{
        line-height: 1.5;
        font-size: 1.2em;
        color: white
    }
  }
}
</style>