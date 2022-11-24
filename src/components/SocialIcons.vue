<template>
    <div>
<img id="in" src="@/assets/linkedin.png" alt="linkedin logo in a graphic art style badge">
<img id="t" src="@/assets/twitter.png" alt="twitter logo in a graphic art style badge">
<img id="fb" src="@/assets/facebook.png" alt="facebook logo in a graphic art style badge">

    </div>
</template>

<script>
    export default {
        name: "social-icons",
    }
</script>

<style lang="scss" scoped>
div{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    >img{
        width: 30%;
        height: 70%;
        padding: 5px;
    }
    >#in{
        justify-self: right;
    }
    >#fb{
        justify-self: left;
    }
}
</style>