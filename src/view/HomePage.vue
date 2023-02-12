<template>
    <div class="container">
        <div class="half-back"></div>
        <div class="nav-bar">
            <div class="logo">Rio.</div>
            <div class="menu-links">
                <ul>
                    <div class="left menu-link">
                        <li>Who</li>
                        <li>What</li>
                    </div>
                    <div class="right menu-link">
                        <li>Why</li>
                        <li>Contact Me</li>
                    </div>
                </ul>
            </div>
            <div class="social-links">
                <ul>
                    <li><ion-icon name="logo-facebook"></ion-icon></li>
                    <li><ion-icon name="logo-instagram"></ion-icon></li>
                    <li><ion-icon name="logo-twitter"></ion-icon></li>
                </ul>
            </div>
        </div>
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
    </div>
</template>
<script>
export default {

   
};
</script>
<style lang="scss">
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
    .nav-bar {
        display: flex;
        justify-content: space-around;
        padding: 20px;
        z-index: 999;
        position: relative;
        .logo {
            font-size: 50px;
            font-weight: 700;
            color: #ecb365;
        }
        .menu-links {
            align-self: center;
            ul {
                .menu-link {
                    display: flex;
                    gap: 60px;
                }
                gap: 100px;
                display: flex;
                align-items: center;
                li {
                    font-size: 20px;
                    color: #fff;
                    font-weight: 300;
                    list-style: none;
                    text-decoration: none;
                    position: relative;
                    cursor: pointer;
                    transition: 0.3s ease-in-out;

                    &::before {
                        content: "";
                        position: absolute;
                        background: #ecb365;
                        width: 0;
                        bottom: -10px;
                        height: 2px;
                        border-radius: 2px;
                        transition: 0.3s ease-in-out;
                    }
                    &:hover {
                        color: #ecb365;
                        &::before {
                            width: 100%;
                        }
                    }
                }
            }
        }
        .social-links {
            align-self: center;
            ul {
                display: flex;
                gap: 10px;
                align-items: center;

                li {
                    color: #ecb365;
                    font-size: 30px;
                    list-style: none;
                }
            }
        }
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
            ion-icon {
                position: absolute;
                font-size: 60px;
                color: #ecb365;
            }
        }
    }
}
</style>
