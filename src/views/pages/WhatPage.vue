<template>
    <div class="what_container" v-if="page == 'what'">
    </div>
</template>

<script>
export default {
    props: ["page"],
    components: {

    },
};
</script>

<style lang="scss" scoped>
.what_container{
    background: #04293A;
     height: 100vh;
}
</style>
