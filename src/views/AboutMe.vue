<template>
  <div>
    <page-header></page-header>
    <div id="about">
    <h1>About Me</h1>
    <p>One thing about me, and how I got to creating this site would be my need to explore and create. </p>
    <p>I have spent most of my life searching for blank canvases and experimenting with all the ways to fill it with ideas that would not have been.</p>
    <p>From sketching to painting, wood burning to wood carving, jewelry making to clay work - expresing myself through creativity is a huge part of my daily drive.</p>
    <p>So how does that lead me to programming, making this site? Well. This whole site started off as a blank screen. Programming is my blank canvas that has nearly endless possibilities in one industry. </p>
    <p>Whatever has brought you to this site, I appreciate you being apart of my Developer journey.</p>
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
};
</script>

<style lang="scss" scoped>
div{

    justify-items: center;
    text-align: center;

    >h1, p{
        padding: 15px;
        color: white;
    }
    p{
        font-size: 1.2rem;
        line-height: 1.5;
  }
  >#about{
    width: 70%;
    position: relative;
    left:15%

  }
}
</style>



