<template>
  <div>
    <page-header></page-header>
    <h3>Hi! My name is Colleen, Welcome to my Junior Developer adventures.</h3>
    <img src="@/assets/me.png" alt="" />
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
  display: grid;
  justify-items: center;
  text-align: center;
  color: white;
  h3 {
    padding: 15px;
    line-height: 1.7;
  }
  img {
    width: 125px;
    height: 125px;
  }
}
</style>