<template>
    <v-layout fill-height>
        <v-row no-gutters>
            <v-col
                cols="11"
                offset="1"
                offset-md="1"
                order="2"
                order-md="1"
                md="6"
                lg="6"
                fonte1
                :align-self="$vuetify.breakpoint.mdAndUp ? 'center' : 'start'"
            >
                <v-container class="d-flex flex-column">
                    <span class="text-h4 text-lg-h2" fonte1>
                        Olá,
                    </span>
                    <span class="text-h4 text-lg-h1 mb-4" fonte1>
                        Eu sou o
                        <strong class="text-h2 text-lg-h1" logo>M</strong
                        ><span>ichel,</span></span
                    >
                    <span class="text-h4 text-lg-h3 mb-4" fonte4>
                        web developer
                    </span>
                    <span class="text-md-h6 mb-8" fonte2
                        >Frontend Developer / Free Lancer</span
                    >
                    <v-btn
                        class="text-h6"
                        color="secondary"
                        :width="$vuetify.breakpoint.smAndDown ? '40%' : '60%'"
                    >
                        Contato
                        <v-icon>mdi-send-circle</v-icon>
                    </v-btn>
                </v-container>
            </v-col>

            <v-col
                order="1"
                order-lg="2"
                offset="1"
                offset-md="0"
                offset-lg="0"
                cols="10"
                offset-sm="3"
                sm="6"
                lg="4"
                md="4"
                align-self="center"
            >
                <div class="d-flex justify-center ">
                    <svg
                        width="85%"
                        fill="#FD2155"
                        class="home__img"
                        viewBox="0 0 200 187"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                        <mask id="mask__home" mask-type="alpha">
                            <path
                                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                            130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                            97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                            0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                            />
                        </mask>
                        <g mask="url(#mask__home)">
                            <path
                                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                            />
                            <image
                                class="home__img-blob"
                                xlink:href="../assets/michel.png"
                            />
                        </g>
                    </svg>
                </div>
            </v-col>
        </v-row>
    </v-layout>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.home__img-blob {
    width: 190px;
}
</style>
