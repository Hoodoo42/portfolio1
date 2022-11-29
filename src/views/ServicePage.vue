<template>
  <div>
    <page-header></page-header>
    <div id="container">
      <h1>My Craft</h1>

      <p>
        I have had a chance at exploring many aspects of web development.
        Recently graduating from an accelerated diploma program on full-stack
        development. Here are some of the skills I have focused on.
      </p>
      <div id="skills">
        <section id="fe">
          <h1>Front-End</h1>
          <ul>
            <li>HTML</li>
            <li>S/CSS</li>
            <li>Javascript</li>
          </ul>
          <h3>Frameworks</h3>
          <ul>
            <li>Vue.js</li>
            <li>Phaser</li>
          </ul>
        </section>
        <section id="be">
          <h1>Back-End</h1>
          <ul>
            <li>APis</li>
            <li>Axios</li>
          </ul>
        </section>
        <section id="ss">
          <h1>Server-Side</h1>
          <ul>
            <li>Python</li>
            <li>SQL</li>
            <li>MariaDB (DBMS)</li>
          </ul>
          <h3>Frameworks</h3>
          <ul>
            <li>Flask</li>
          </ul>
        </section>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
export default {
  components: {
    PageHeader,
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
  text-align: center;
  justify-items: center;

  > h1,
  p {
    padding: 15px;
    color: white;
    position: relative;
    width: 70%;
    left: 15%;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }
  ul {
    list-style-type: none;
    color: white;
  }
  > #skills {
    display: grid;
    // grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-template-rows: auto;
    row-gap: 15px;
    padding-bottom: 20px;
    position: relative;
    width: 70%;
    left: 15%;
    top: 35px;
    > ul,
    li {
      font-size: 1.2rem;
      line-height: 1.5;
    }
    > #fe h1,
    #be h1,
    #ss h1 {
      color: rgb(147, 93, 18);
    }
    > #fe h3,
    #be h3,
    #ss h3 {
      color: rgb(27, 167, 132);
    }
  }
}
@media only screen and (min-width: 900px) {
  div #skills {
    height: 100vh;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>