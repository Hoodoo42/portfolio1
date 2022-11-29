<template>
  <div>
    <page-header></page-header>
    <div id="container">
      <h1>My Work</h1>
      <p>
        Here are some projects I have had the opportunity to work on. There will
        be a mix of exploring skill development as well as real world projects.
      </p>
      <p>The list will grow and change as I continue to add and grow.</p>
      <my-projects></my-projects>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import MyProjects from "@/components/MyProjects.vue";
import PageFooter from "@/components/PageFooter.vue";
export default {
  components: {
    PageHeader,
    MyProjects,
    PageFooter,
  },
  methods: {
    hide_content(event) {
      event = document.getElementById("container");
      event.style.display = "none";
    },
  },
  mounted() {
    this.$root.$on("hide_content", this.hide_content);
  },
};
</script>

<style lang="scss" scoped>
div {
  justify-items: center;
  text-align: center;

  > h1,
  p {
    padding: 15px;
    color: white;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }
}
</style>