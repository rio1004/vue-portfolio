<template>
    <div class="nav-bar">
        <div class="logo">Rio.</div>
        <div class="menu-links">
            <ul>
                <div class="left menu-link">
                    <li
                        @click="$emit('goTo', 'who')"
                        :class="{ active: page == 'who' }"
                    >
                        Who
                    </li>
                    <li @click="$emit('goTo', 'what')" :class="{ active: page == 'what' }">What</li>
                    <li @click="$emit('goTo', 'works')" :class="{ active: page == 'works' }">Works</li>
                    <li @click="$emit('goTo', 'why')" :class="{ active: page == 'why' }">Why</li>
                    <li @click="$emit('goTo', 'contact')" :class="{ active: page == 'contact' }">Contact Me</li>
                </div>
                <div class="right menu-link"></div>
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
</template>
<script>
export default {
    name: "NavBar",
    props: ["page"],
};
</script>
<style lang="scss">
.nav-bar {
    display: flex;
    justify-content: space-around;
    padding: 20px;
    .logo {
        font-size: 50px;
        font-weight: 700;
        color: #ecb365;
        z-index: 99;
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
            .active {
                color: #ecb365;
                &::before {
                    content: "";
                    position: absolute;
                    background: #ecb365;
                    width: 0;
                    bottom: -10px;
                    height: 2px;
                    border-radius: 2px;
                    transition: 0.3s ease-in-out;
                    width: 100%;
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
</style>
