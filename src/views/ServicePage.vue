<template>
  <div>
    <page-header></page-header>
    <h1>My Craft</h1>

    <p>
        
      I have had a chance at exploring many aspects of web development. Recently
      graduating from an accelerated diploma program on full-stack development.
      Here are some of the skills I have focused on.
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
  text-align: center;
  justify-items: center;
  color: white;
  > h1,
  p {
    padding: 15px;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }
  ul {
    list-style-type: none;
  }
  > #skills {
    display: grid;
    grid-template-columns: auto;
    row-gap: 15px;
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
</style>