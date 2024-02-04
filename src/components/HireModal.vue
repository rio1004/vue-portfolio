<template>
    <transition>
        <div class="modal">
            <div class="inner-modal">
                <ion-icon
                    name="close-circle-outline"
                    class="close"
                    @click="$emit('closeModal')"
                ></ion-icon>
                <h1>HIRE ME!</h1>
                <input
                    class="_input"
                    type="text"
                    placeholder="Enter your Email"
                />
                <input
                    class="_input"
                    type="text"
                    placeholder="Enter your Name/Company"
                />
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="send a message"
                ></textarea>
                <div class="btn">Email Me!</div>
                <div class="or">
                    <div class="line"></div>
                    <span>or</span>
                    <div class="line"></div>
                </div>
                <div class="contacts">09532244832</div>
                <div class="contacts">golimrio14@gmail.com</div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {};
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
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;

    .inner-modal {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 375px;
        height: 500px;
        background: #fff;
        border-radius: 10px;
        border: 4px solid #ecb365;

        .close {
            color: #ecb365;
            font-size: 40px;
            position: absolute;
            top: -40px;
            right: -40px;
        }
        h1 {
            font-size: 40px;
            color: #ecb365;
            margin-bottom: 25px;
        }
        ._input {
            border: none;
            border-bottom: 2px solid #ecb365;
            padding: 5px;
            width: 210px;
            margin-bottom: 20px;
            &:focus {
                outline: none;
            }
            &::placeholder {
                font-family: "Poppins", sans-serif;
            }
        }
        textarea {
            border: 2px solid #ecb365;
            border-radius: 5px;
            resize: none;
            padding: 10px;
            &:focus {
                outline: none;
            }
            &::placeholder {
                font-family: "Poppins", sans-serif;
            }
        }
        .btn {
            width: 110px;
            height: 30px;
            background: #ecb365;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 20px;
            margin-bottom: 12px;
            font-size: 12px;
            border-radius: 5px;
            font-weight: lighter;
        }
        .or {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 11px;
            .line {
                width: 90px;
                background: #e5e5e5;
                height: 1px;
            }
            span {
                font-size: 12px;
                color: #7f868c;
            }
        }
        .contacts {
            color: #ecb365;
            font-size: 12px;
        }
    }
}
</style>
