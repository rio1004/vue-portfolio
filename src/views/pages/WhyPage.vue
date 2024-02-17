<template>
    <div class="half-back" :class="{ isWhy: page == 'why', isWhat: page == 'what' }">
        <div class="why_container" v-if="page == 'why'">
            <div class="why_landpage">
                <div class="why_left">
                    <img src="@/assets/images/profile.png" alt="" />
                </div>
                <div class="why_right">
                    <h1>Why Me?</h1>
                    <p>
                        Because Im Good at Finding solutions I read stack
                        overflow solutions even if they are not checked And
                        lastly I am subscribed and up to date to many Indian
                        youtubers and also to other web developers
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
                        <h2>BACK-END<br />DEVELOPER</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Faucibus nulla at ultrices volutpat at.
                            Phasellus risus nunc risus, iaculis massa, dolor
                            rutrum. Gravida leo tristique egestas quis urna, ut
                            aliquam nascetur. Nullam posuere urna nisl turpis
                            enim, pellentesque non arcu.
                        </p>
                        <p @click="showModal(1)">TECHNOLOGY USED</p>
                    </div>
                    <div class="card">
                        <img src="@/assets/images/windows2.png" alt="" />
                        <h2>
                            UI/UX<br />
                            DESIGNER
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Faucibus nulla at ultrices volutpat at.
                            Phasellus risus nunc risus, iaculis massa, dolor
                            rutrum. Gravida leo tristique egestas quis urna, ut
                            aliquam nascetur. Nullam posuere urna nisl turpis
                            enim, pellentesque non arcu.
                        </p>
                        <p @click="showModal(2)">TECHNOLOGY USED</p>
                    </div>
                    <div class="card">
                        <img src="@/assets/images/code.png" alt="" />
                        <h2>FRONT-END <br />DEVELOPER</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Faucibus nulla at ultrices volutpat at.
                            Phasellus risus nunc risus, iaculis massa, dolor
                            rutrum. Gravida leo tristique egestas quis urna, ut
                            aliquam nascetur. Nullam posuere urna nisl turpis
                            enim, pellentesque non arcu.
                        </p>
                        <p @click="showModal(3)">TECHNOLOGY USED</p>
                    </div>
                </div>
                <div class="vec">
                    <img src="@/assets/images/Vector.png" alt="" />
                </div>
            </section>
        </div>
        <Teleport to="body">
            <SkillModal
                @close="showSkill = false"
                v-if="showSkill"
                :skillActive="activeSkill"
            />
        </Teleport>
    </div>
</template>

<script>
import SkillModal from "@/components/SkillModal.vue";
import { ref } from "vue";

export default {
    props: ["page"],
    components: {
        SkillModal,
    },
    setup() {
        const showSkill = ref(false);
        const activeSkill = ref([]);
        const front_end = ref([
            {
                title: "HTML",
                body: "HTML, or HyperText Markup Language, is a standard markup language used for creating web pages and applications. It provides the structure and content of web content, while other technologies like CSS and JavaScript are often used to add styling and dynamic functionality.",
                img: require("@/assets/images/skill_slider/html_logo.png"),
                top: "-140px",
            },
            {
                title: "CSS",
                body: "CSS is a style sheet language used for formatting content in HTML webpages. CSS style sheets can define the appearance and formatting of text, tables, and other elements separately from the content itself. Styles may be found within a webpage's HTML file or in a separate document referenced by multiple webpages.",
                img: require("@/assets/images/skill_slider/css_logo.png"),
                top: "-140px",
            },
            {
                title: "VUE",
                body: "Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.",
                img: require("@/assets/images/skill_slider/vue_logo.png"),
                top: "-60px",
            },
            {
                title: "JS",
                body: "JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS.",
                img: require("@/assets/images/skill_slider/js_logo.png"),
                top: "-94px",
            },
        ]);
        const back_end = ref([
            {
                title: "Laravel ",
                body: "Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.",
                img: require("@/assets/images/skill_slider/larvel_logo.png"),
                top: "-94px",
            },
            {
                title: "MySql ",
                body: "A database is a structured collection of data. It may be anything from a simple shopping list to a picture gallery or the vast amounts of information in a corporate network. To add, access, and process data stored in a computer database, you need a database management system such as MySQL Server. ",
                img: require("@/assets/images/skill_slider/sql_logo.png"),
                top: "-94px",
            },
        ]);
        const ui_ux = ref([
            {
                title: "Figma ",
                body: "Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows.",
                img: require("@/assets/images/skill_slider/figma_logo.png"),
                top: "-94px",
            },
            {
                title: "Photoshop",
                body: "Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS. It was originally created in 1987 by Thomas and John Knoll. Since then, the software has become the most used tool for professional digital art, especially in raster graphics editing",
                img: require("@/assets/images/skill_slider/ps_logo.png"),
                top: "-94px",
            },
        ]);

        const showModal = (payload) => {
            showSkill.value = true;
            if (payload == 3) {
                activeSkill.value = front_end.value;
            }
            if (payload == 2) {
                activeSkill.value = ui_ux.value;
            }
            if (payload == 1) {
                activeSkill.value = back_end.value;
            }
        };
        return {
            showSkill,
            front_end,
            back_end,
            showModal,
            activeSkill,
            ui_ux,
        };
    },
};
</script>

<style lang="scss" scoped>
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
        background: #064663;
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
    .vec {
        position: absolute;
        right: 50px;
    }
    .why_skills {
        background: #064663;
        height: 100vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 0 150px;
        gap: 50px;
        h1 {
            font-size: 50px;
            color: #ecb365;
        }
        .cards {
            display: flex;
            justify-content: space-between;
            z-index: 999;
            .card {
                padding: 40px;
                width: 387px;
                height: 452px;
                box-shadow: 0 0 30px #000;
                border-radius: 20px;
                border-bottom: 10px solid #ecb365;
                background: #041c32;
                &:first-child,
                &:last-child {
                    background: #064663;
                }
                h2 {
                    font-size: 20px;
                    color: #ecb365;
                    margin: 30px 0 30px;
                }
                p {
                    color: #fff;
                    font-weight: lighter;
                    &:last-child {
                        color: #ecb365;
                        font-weight: bolder;
                        margin-top: 80px;
                        font-size: 15px;
                        cursor: pointer;
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
.isWhat{
    width: 0%;
}
</style>
