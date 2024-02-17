<template>
    <transition>
        <div class="container">
            <WhyPage :page="page"/>
            <NavBar @goTo="goToPage($event)" />
            <WhoPage @goTo="goToPage($event)" :page="page"/> 
        </div>
    </transition>
</template>
<script>
import NavBar from "@/components/header/NavBar.vue";
import WhyPage from "./pages/WhyPage.vue";
import WhoPage from "./pages/WhoPage.vue";
import { ref } from "vue";
export default {
    components: {
        NavBar,
        WhyPage,
        WhoPage
    },
    setup() {
        const page = ref("why");
        const goToPage = (p) => {
            console.log(page);
            page.value = p;
        };
        return {
            goToPage,
            page,
        };
    },
};
</script>
<style lang="scss" scoped>
@keyframes upDown {
    0% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(10px);
    }
}

.container {
    background: #041c32;
    box-sizing: border-box;
    height: 100%;
    
}
</style>
