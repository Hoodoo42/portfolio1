<template>
  <div>
    <header id="logo">
      <img src="@/assets/cmvlogo.png" alt="cmvdev stamp logo" />
      <!-- desktop nav -->
      <div id="desktop_nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About Me</router-link>

        <router-link to="/portfolio">My Work</router-link>
        <router-link to="/service">My Craft</router-link>
      </div>
      <!-- social icons -->
      <social-icons id="tablet_socials"></social-icons>
      <social-icons id="mobile_socials"></social-icons>
    </header>
    <!-- hamburger menu icon -->
    <img
      id="ham"
      @click="open_menu"
      src="@/assets/hamburger.png"
      alt="3 goldish lines stacked"
    />
    <!-- mobile nav -->
    <nav id="mobile_nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About Me</router-link>
      <router-link to="/portfolio">My Work</router-link>
      <router-link to="/service">My Craft</router-link>
    </nav>
  </div>
</template>

<script>
import SocialIcons from "@/components/SocialIcons.vue";
export default {
  name: "page-header",
  components: {
    SocialIcons,
  },

  methods: {
    open_menu() {
      let ham = document.getElementById("ham");
      ham.style.display = "none";
      let nav = document.getElementById("mobile_nav");
      nav.style.display = "grid";

      this.$root.$on
    },
  },
};
</script>

<style lang="scss" scoped>
#desktop_nav {
  display: none;
}
div {
  place-items: center;
  text-align: center;

  > #mobile_nav {
    // display: grid;
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

@media only screen and (min-width: 600px) {
  div {
    #logo {
      height: 160px;
      padding-bottom: 40px;
      > img {
        width: 200px;
      }
      > #desktop_nav {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        > a,
        a:link {
          color: brown;
          font-size: 1.5rem;
          text-decoration: none;
        }
      }

      > #mobile_nav {
        display: none;
      }
    }

    #ham {
      display: none;
    }
  }
}
@media only screen and (min-width: 900px) {
  #desktop_nav {
    width: 70%;
    position: relative;
    left: 15%;
  }
}
</style>