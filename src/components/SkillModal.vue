<template>
    <div class="modal">
        <div class="inner-modal">
            <div class="prev nav" @click="prev">
                <img src="@/assets/images/prev.png" alt="" />
            </div>
            <div class="inner-content">
                <img :src="slide.img" alt="" :style="{ top: slide.top }" />
                <div class="modal-content">
                    <p class="modal-title">{{ slide.title }}</p>
                    <p class="modal-body">{{ slide.body }}</p>
                    <div class="btn" @click="$emit('close')">close</div>
                </div>
            </div>
            <div class="next nav" @click="next">
                <img src="@/assets/images/next.png" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    setup() {
        const active_slide = ref(0);
        const slide = ref(null);
        const slider_data = ref([
            {
                title: "HTML",
                body: "HTML, or HyperText Markup Language, is a standard markup language used for creating web pages and applications. It provides the structure and content of web content, while other technologies like CSS and JavaScript are often used to add styling and dynamic functionality.",
                img: require("@/assets/images/skill_slider/html_logo.png"),
                top: '-140px'
            },
            {
                title: "CSS",
                body: "CSS is a style sheet language used for formatting content in HTML webpages. CSS style sheets can define the appearance and formatting of text, tables, and other elements separately from the content itself. Styles may be found within a webpage's HTML file or in a separate document referenced by multiple webpages.",
                img: require("@/assets/images/skill_slider/css_logo.png"),
                top: '-140px'
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
        slide.value = slider_data.value[active_slide.value];

        const next = () => {
            active_slide.value++;
            if (active_slide.value > slider_data.value.length - 1) {
                active_slide.value = 0;
            }
            slide.value = slider_data.value[active_slide.value];
        };
        const prev = () => {
            active_slide.value--;
            if (active_slide.value < 0) {
                active_slide.value = slider_data.value.length - 1;
            }
            slide.value = slider_data.value[active_slide.value];
        };
        return {
            slide,
            active_slide,
            slider_data,
            next,
            prev,
        };
    },
};
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
.modal {
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    z-index: 9999;
    left: 0;
    top: 0;
    .inner-modal {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 450px;
        height: 510px;
        background: #eacaa0;
        border-bottom-left-radius: 40px;
        border-bottom-right-radius: 40px;
        border-top-right-radius: 217px;
        border-top-left-radius: 217px;
        border-bottom: 4px solid #f16529;
        img {
            position: absolute;
            top: -140px;
        }
        .nav {
            position: absolute;
            top: 400px;
            cursor: pointer;
            transition: 0.2s;
            &:hover{
                scale: 1.05;
            }
        }
        .prev {
            left: -90px;
        }
        .next {
            right: -15px;
        }
        .inner-content {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
        }
        .modal-content {
            margin-top: 120px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            width: 357px;
            gap: 20px;
            .modal-title {
                color: #041c32;
                font-size: 50px;
                font-weight: 900;
            }
            .modal-body {
                text-align: center;
            }
            .btn {
                font-size: 20px;
                color: #041c32;
                border: 3px solid #041c32;
                border-radius: 20px;
                width: 140px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 20px;
                cursor: pointer;
                transition: 0.2s;
                &:hover{
                    background: #041c32;
                    color: #eacaa0;
                }
            }
        }
    }
}
</style>
