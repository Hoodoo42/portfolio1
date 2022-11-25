<template>
  <div>
    <section>
      <p>&copy; CmvDev 2022</p>
      <a href="mailto: colleen@cmvdev.io">Email me!</a>
    </section>
  </div>
</template>

<script>
export default {
  name: "page-footer",
};
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: white;
  padding: 20px;
  margin-top: 250px;

  > p {
    justify-self: right;
    margin-right: 10px;
  }
  > a {
    justify-self: left;
  }
  margin-left: 10px;
}
</style>