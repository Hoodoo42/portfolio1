<template>
  <div>
    <div id="socials">
      <img
        id="in"
        @click="linkedin"
        src="@/assets/linkedin.png"
        alt="linkedin logo in a graphic art style badge"
      />
      <img
        id="t"
        @click="twitter"
        src="@/assets/twitter.png"
        alt="twitter logo in a graphic art style badge"
      />
      <img
        id="fb"
        @click="fb"
        src="@/assets/facebook.png"
        alt="facebook logo in a graphic art style badge"
      />
      <img
        id="email"
        @click="email"
        src="@/assets/email.png"
        alt="email icon"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "social-icons",

  methods: {
    linkedin() {
      window.open("https://www.linkedin.com/in/colleen-vereschagin/");
    },
    twitter() {
      window.open("https://twitter.com/CmvDevCanada");
    },
    fb() {
      window.open("https://www.facebook.com/cmvdev");
    },
    email() {
      window.location.href = "mailto:colleen@cmvdev.io";
    },
  },
};
</script>

<style lang="scss" scoped>
#socials {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: center;

  > img {
    width: 35px;
    height: 35px;
    padding: 5px;
  }
}
#tablet_socials {
  display: none;
}
@media only screen and (min-width: 600px) {
  #socials {
    > img {
      width: 40px;
    }
  }

  #tablet_socials {
    display: grid;
    grid-template-columns: auto;
    place-items: end;
    padding-top: 20px;
    padding-right: 15px;
  }

  #mobile_socials {
    display: none;
  }
}
</style>