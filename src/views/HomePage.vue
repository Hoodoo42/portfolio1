<template>
  <div>
    <page-header></page-header>
    <div id="wrapper">
      <div id="hi">
        <img src="@/assets/me.png" alt="" />
        <social-icons id="home_icons"></social-icons>
        <h3>
          Hi! My name is Colleen, Welcome to my Junior Developer adventures.
        </h3>
        <p>
          This is just the beginning! I will be adding and adapting this site as
          I grow. Explore what I have so far and be sure to come back often and
          see whats new!
        </p>
      </div>

      <page-footer></page-footer>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
import SocialIcons from "@/components/SocialIcons.vue";
export default {
  components: {
    PageHeader,
    PageFooter,
    SocialIcons,
  },
};
</script>

<style lang="scss" scoped>
#wrapper {
  justify-items: center;
  text-align: center;

  > #hi {
    position: relative;
    top: 75px;
    color: white;
    > h3 {
      padding: 15px;
      line-height: 1.7;
    }
    > img {
      width: 125px;
      height: 125px;
    }
    > #home_icons {
      display: none;
    }
  }
}
@media only screen and (min-width: 600px) {
  #wrapper > #hi {
    > #home_icons {
      display: grid;
      width: 530px;
      position: relative;
      left: 30px;
      margin: auto;
    }
  }
}
</style>