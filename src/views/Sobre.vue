<template>
    <v-layout fill-height class="d-flex align-center">
        <v-container>
            <v-row>
                <v-col
                    md="4"
                    offset-md="0"
                    order-md="1"
                    class=" hidden-sm-and-down d-md-flex justify-md-center align-md-center"
                >
                    <v-img
                        style="border-radius: 5px"
                        eager
                        lazy-src
                        src="../assets/sobre-md-img.jpg"
                    >
                    </v-img>
                </v-col>

                <v-col
                    class="d-flex flex-column align-center"
                    :align-self="
                        $vuetify.breakpoint.mdAndUp ? 'center' : 'start'
                    "
                >
                    <h1 class="mb-4 primary--text">Sobre Mim</h1>
                    <v-col>
                        <v-row class="mb-4">
                            <p
                                class="text-md-h6 text-lg-h4 font-weight-medium"
                                style="text-align: justify"
                            >
                                Frontend developer iniciando na carreira. Desde
                                agosto de 2020 estudando diariamente e treinando
                                minhas skills em projetos pessoais. Sempre fui
                                profissional da área de TI. Tenho 19 anos de
                                experiência em suporte técnico e como analista
                                de infraestrutura microsoft.
                            </p>
                        </v-row>
                        <v-row class="d-flex justify-center align-center mb-4">
                            <v-col
                                cols="12"
                                class="d-flex justify-center align-center"
                            >
                                <span
                                    class="primary--text text-h4 text-lg-h3 font-weight-bold mr-2"
                                >
                                    +19
                                </span>
                                <span
                                    class="text-h6 text-lg-h5 font-weight-bold"
                                >
                                    Anos de experiência
                                </span>
                            </v-col>

                            <v-col
                                cols="12"
                                class="d-flex justify-center align-center"
                            >
                                <span
                                    class="primary--text text-h4 text-lg-h3 font-weight-bold mr-2"
                                >
                                    +10
                                </span>
                                <span
                                    class="text-h6 text-lg-h5 font-weight-bold"
                                >
                                    Projetos completos
                                </span>
                            </v-col>
                        </v-row>

                        <v-row class="d-flex align-center justify-center">
                            <v-btn
                                href="/files/cv.docx"
                                target="_blank"
                                download
                                color="primary"
                                :width="
                                    $vuetify.breakpoint.smAndDown
                                        ? '160'
                                        : '200'
                                "
                                :height="
                                    $vuetify.breakpoint.smAndDown ? '60' : '70'
                                "
                                class="text-lg-h6 d-flex flex-column align-center"
                            >
                                <v-icon>mdi-download</v-icon>
                                <span>Download CV</span>
                            </v-btn>
                        </v-row>
                    </v-col>
                </v-col>
            </v-row>
        </v-container>
    </v-layout>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
