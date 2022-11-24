<template>
  <div>
    <page-header></page-header>
    <div id="hi">
      <img src="@/assets/me.png" alt="" />
      <h3>
        Hi! My name is Colleen, Welcome to my Junior Developer adventures.
      </h3>
      <p>This is just the beginning! I will be adding and adapting this site as I grow. Explore what I have so far and be sure to come back often and see whats new!</p>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
export default {
  components: {
    PageHeader,
  },
};
</script>

<style lang="scss" scoped>
div {
  justify-items: center;
  text-align: center;
  color: white;
  #hi {
    position: relative;
    top: 75px;
    > h3 {
      padding: 15px;
      line-height: 1.7;
    }
    > img {
      width: 125px;
      height: 125px;
    }
  }
}
</style>