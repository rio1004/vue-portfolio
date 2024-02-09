<template>
    <transition>
        <div class="container">
            <div class="half-back" :class="{ isWhy: page == 'why' }">
                <div class="why_container" v-if="page == 'why'">
                    <div class="why_landpage">
                        <div class="why_left">
                            <img src="@/assets/images/profile.png" alt="" />
                        </div>
                        <div class="why_right">
                            <h1>Why Me?</h1>
                            <p>
                                Because Im Good at Finding solutions I read
                                stack overflow solutions even if they are not
                                checked And lastly I am subscribed and up to
                                date to many Indian youtubers and also to other
                                web developers
                            </p>
                            <div class="btn gold-light">Skills</div>
                            <div class="btm-arrow">
                                <img src="@/assets/images/down.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <section class="why_skills">
                        <h1>HERE ARE MY SKILLS</h1>
                        <div class="cards">
                            <div class="card">
                                <img src="@/assets/images/db.png" alt="" />
                                <h2>BACK-END<br/>DEVELOPER</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Faucibus nulla at ultrices
                                    volutpat at. Phasellus risus nunc risus,
                                    iaculis massa, dolor rutrum. Gravida leo
                                    tristique egestas quis urna, ut aliquam
                                    nascetur. Nullam posuere urna nisl turpis
                                    enim, pellentesque non arcu.
                                </p>
                                <p>INTERMEDIATE</p>
                            </div>
                            <div class="card">
                                <img src="@/assets/images/windows2.png" alt="" />
                                <h2>UI/UX<br/> DESIGNER</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Faucibus nulla at ultrices
                                    volutpat at. Phasellus risus nunc risus,
                                    iaculis massa, dolor rutrum. Gravida leo
                                    tristique egestas quis urna, ut aliquam
                                    nascetur. Nullam posuere urna nisl turpis
                                    enim, pellentesque non arcu.
                                </p>
                                <p>INTERMEDIATE</p>
                            </div>
                            <div class="card">
                                <img src="@/assets/images/code.png" alt="" />
                                <h2>FRONT-END <br/>DEVELOPER</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Faucibus nulla at ultrices
                                    volutpat at. Phasellus risus nunc risus,
                                    iaculis massa, dolor rutrum. Gravida leo
                                    tristique egestas quis urna, ut aliquam
                                    nascetur. Nullam posuere urna nisl turpis
                                    enim, pellentesque non arcu.
                                </p>
                                <p>INTERMEDIATE</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <NavBar @goTo="goToPage($event)" />
            <div class="who_container" v-if="page == 'who'">
                <section class="land-page">
                    <div class="home-links">
                        <div class="what title" @click="page = 'what'">
                            <ion-icon name="chevron-back-outline"></ion-icon>
                            <p>What</p>
                        </div>
                        <div class="who">
                            <p>Who?</p>
                        </div>
                        <div class="why title" @click="page = 'why'">
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
                            <div
                                class="btn gold-dark"
                                @click="showModal = true"
                            >
                                Hire Me!
                            </div>
                            <div class="btn gold-light">Contact Me!</div>
                        </div>
                    </div>
                    <div class="blob">
                        <img src="@/assets/images/blob.png" alt="" />
                    </div>
                    <HireModal
                        v-if="showModal"
                        @closeModal="showModal = false"
                    />
                </section>
            </div>
        </div>
    </transition>
</template>
<script>
import NavBar from "@/components/header/NavBar.vue";
import HireModal from "@/components/HireModal.vue";
import { ref } from "vue";
export default {
    components: {
        NavBar,
        HireModal,
    },
    setup() {
        const showModal = ref(false);
        const page = ref("why");
        const goToPage = (p) => {
            console.log(page);
            page.value = p;
        };
        return {
            showModal,
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
    .half-back {
        width: 50%;
        height: 100%;
        position: absolute;
        right: 0;
        background: #064663;
        border-radius: 0px 0px 0px 355px;
        transition: 0.3s;
        .why_landpage {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 0 150px;
            height: 100vh;
            .why_right {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 40px;

                h1 {
                    font-size: 50px;
                    color: #ecb365;
                    text-align: center;
                }
                p {
                    width: 590px;
                    text-align: center;
                    font-size: 30px;
                    color: #fff;
                    font-weight: lighter;
                }

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
                .gold-light {
                    border: 2px solid #ecb365;
                    color: #ecb365;
                    &:hover {
                        background: #ecb365;
                        color: #04293a;
                    }
                }
                .btm-arrow {
                    display: flex;
                    justify-content: center;
                    animation-name: upDown;
                    animation-iteration-count: infinite;
                    animation-direction: alternate;
                    animation-duration: 0.7s;
                }
            }
        }
        .why_skills {
            background: #064663;
            height: 100vh;
            display: flex;
            justify-content: center;
            flex-direction: column;
            padding: 0 150px;
            gap:50px;
            h1{
                font-size: 50px;
                color: #ECB365;
            }
            .cards {
                display: flex;
                justify-content: space-between;
                .card {
                    padding: 40px;
                    width: 387px;
                    height: 452px;
                    box-shadow: 0 0 30px #000;
                    border-radius: 20px;
                    border-bottom: 10px solid #ECB365;
                    h2{
                        font-size: 20px;
                        color: #ECB365;
                        margin: 30px 0 30px;
                    }
                    p{
                        color: #fff;
                        font-weight: lighter;
                        &:last-child{
                            color: #ecb365;
                            font-weight: bolder;
                            margin-top: 80px;
                            font-size: 15px;
                        }
                    }

                   
                }
            }
        }
    }
    .isWhy {
        width: 100%;
        border-radius: 0px 0px 0px 0px;
    }
    .land-page {
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
        position: relative;
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
                font-weight: lighter;
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

    .why_landpage {
        background: #064663;
    }
}
</style>
