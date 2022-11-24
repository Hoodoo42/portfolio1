<template>
  <div>
    <!-- MOBILE SOCIALS -->
    <div id="mobile_socials">
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
    </div>
    <!-- TABLET SOCIALS -->
    <!-- <div id="tablet_socials">
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
    </div> -->
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
  },
};
</script>

<style lang="scss" scoped>
#mobile_socials {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  > #desktop_socials {
    display: none;
  }
  > img {
    width: 30%;
    height: 70%;
    padding: 5px;
  }
  > #in {
    justify-self: right;
  }
  > #fb {
    justify-self: left;
  }
  > #t{
    justify-self: center;
  }
}

@media only screen and (min-width: 600px) {
  #mobile_socials {
    display: none;
  }
  #tablet_socials{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: end;
  
  > img {
    width: 40%;
    height: 70%;
    padding: 5px;
  }
  }

}
</style>