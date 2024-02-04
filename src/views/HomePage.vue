<template>
    <div class="container">
        <div class="half-back"></div>
        <NavBar />
        <section class="land-page">
            <div class="home-links">
                <div class="what title">
                    <ion-icon name="chevron-back-outline"></ion-icon>
                    <p>What</p>
                </div>
                <div class="who">
                    <p>Who?</p>
                </div>
                <div class="why title">
                    <p>Why</p>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </div>
            </div>
            <div class="bottom-arrow">
                <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
        </section>
        <section class="info">
            <div class="p-info">
                <div>
                    <p class="p1">This is my Personal Portfolio</p>
                    <p class="p2">I’m Rio Martin Golimlim</p>
                    <div class="skills">
                        <p>&lt;Back-End&gt;</p>
                        <span class="circle"></span>
                        <p class="mid">UX/UI Designer</p>
                        <span class="circle"></span>
                        <p>&lt;Front-End&gt;</p>
                    </div>
                </div>
                <div class="btn-group">
                    <div class="btn gold-dark">Hire Me!</div>
                    <div class="btn gold-light">Contact Me!</div>
                </div>
            </div>
            <div class="blob">
                <img src="@/assets/images/blob.png" alt="" />
            </div>
        </section>
    </div>
</template>
<script>
import NavBar from "@/components/header/NavBar.vue";
export default {
    components: {
        NavBar,
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
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    min-height: 100vh;
    .half-back {
        width: 50%;
        height: 100%;
        position: absolute;
        right: 0;
        background: #064663;
        border-radius: 0px 0px 0px 355px;
    }
    .land-page {
        height: 100vh;
        .home-links {
            display: flex;
            padding: 0 80px;
            justify-content: space-between;
            position: relative;
            height: 80vh;
            .title {
                display: flex;
                align-items: center;
                font-size: 40px;
                font-weight: 600;
                gap: 20px;
                cursor: pointer;
            }
            .what {
                p {
                    color: #064663;
                }
                ion-icon {
                    font-size: 60px;
                    color: #ecb365;
                }
            }
            .who {
                align-self: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                p {
                    color: #ecb365;
                    font-size: 250px;
                    font-weight: 700;
                    position: relative;
                }
            }
            .why {
                p {
                    color: #041c32;
                }
                ion-icon {
                    font-size: 60px;
                    color: #ecb365;
                }
            }
        }
        .bottom-arrow {
            display: flex;
            justify-content: center;
            animation-name: upDown;
            animation-iteration-count: infinite;
            animation-direction: alternate;
            animation-duration: 0.7s;
            ion-icon {
                position: absolute;
                font-size: 60px;
                color: #ecb365;
            }
        }
    }
    .info {
        height: 100vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .p-info {
            display: flex;
            flex-direction: column;
            gap: 110px;
            .p1 {
                font-size: 30px;
                color: #fff;
            }
            .p2 {
                font-size: 50px;
                color: #eacaa0;
                font-weight: bold;
            }
            .skills {
                display: flex;
                font-size: 20px;
                align-items: center;
                color: #fff;
                gap: 12px;
                font-weight:lighter;
                .circle {
                    width: 11px;
                    height: 11px;
                    background: #ecb365;
                    border-radius: 20px;
                }
            }
            .btn-group {
                display: flex;
                gap: 20px;
                .btn {
                    display: flex;
                    width: 180px;
                    height: 57px;
                    border-radius: 10px;
                    justify-content: center;
                    align-items: center;
                    font-size: 20px;
                    cursor: pointer;
                    transition: 0.2s;
                }
                .gold-dark {
                    background: #ecb365;
                    color: #04293a;
                    border: 2px solid #ecb365;
                    &:hover {
                        border: 2px solid #ecb365;
                        background: transparent;
                        color: #ecb365;
                    }
                }
                .gold-light {
                    border: 2px solid #ecb365;
                    color: #ecb365;
                    &:hover {
                        background: #ecb365;
                        color: #04293a;
                    }
                }
            }
        }
    }
}
</style>
