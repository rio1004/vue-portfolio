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
        <div class="home-links">
            <div class="what title">
                <ion-icon name="chevron-back-outline"></ion-icon>
                <p>What</p>
            </div>
            <div class="who">
                <p>Who?</p>
                <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
            <div class="why title">
                <p>Why</p>
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.container {
    background: #041c32;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
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
    .home-links {
        display: flex;
        padding: 0 80px;
        justify-content: space-between;
        position: relative;
        height: 100vh;
        .title {
            display: flex;
            align-items: center;
            font-size: 40px;
            font-weight: 600;
            gap:20px;
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
            display: flex;
            flex-direction: column;
            align-items: center;
            p {
                color: #ecb365;
                font-size: 250px;
                font-weight: 700;
            }
            ion-icon {
                font-size: 60px;
                color: #ecb365;
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
}
</style>
