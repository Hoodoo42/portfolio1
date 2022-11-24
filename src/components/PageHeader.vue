<template>
  <div>
    <header id="logo">
      <img src="@/assets/cmvlogo.png" alt="cmvdev stamp logo" />
      <social-icons></social-icons>
    </header>
    <img
      id="ham"
      @click="open_menu"
      src="@/assets/hamburger.png"
      alt="3 goldish lines stacked"
    />
    <nav id="mobile_nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About Me</router-link>
      <router-link to="/portfolio">My Work</router-link>
      <router-link to="/service">My Craft</router-link>
    </nav>
  </div>
</template>

<script>
import SocialIcons from "@/components/SocialIcons.vue"
export default {
    name: "page-header",
  components:{
    SocialIcons,
  },

  methods: {
    open_menu() {
      let ham = document.getElementById("ham");
      ham.style.display = "none";
      let nav = document.getElementById("mobile_nav");
      nav.style.display = "grid";
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  display: grid;
  place-items: center;
  text-align: center;

  > #mobile_nav {
    display: grid;
    grid-template-rows: auto;
    width: 100%;
    row-gap: 20px;
    font-size: 2rem;
    background-color: rgb(29, 51, 55);
    display: none;
    > a,
    a:link,
    a:visited {
      text-decoration: none;
      color: white;
      padding: 10px;
    }
  }

  #logo {
    background-color: white;
    padding-bottom: 10px;
    > img {
      width: 50%;
      height: 100%;
      justify-self: center;
    }
  }
  #ham {
    height: 40px;
    width: 60px;
    justify-self: center;
    padding-top: 25px;
    top: 20px;
  }
}
</style>