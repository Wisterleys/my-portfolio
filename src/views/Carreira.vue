<template>
    <v-layout fill-height class="d-md-flex align-md-center">
        <v-container>
            <v-row class="linhaP d-flex justify-center align-center">
                <v-col 
                    class="colunaP hidden-sm-and-down" 
                    cols="10" 
                    md="6">
                    <v-img
                        style="border-radius: 10px"
                        eager
                        lazy-src
                        :max-width="$vuetify.breakpoint.mdAndUp ? '60%' : null"
                        src="../assets/carreira-desktop.jpg"
                    >
                    </v-img>
                </v-col>

                <v-col class="colunaP" cols="11" md="6">
                    <v-row dense class="linha mb-3">
                        <v-col class="coluna d-flex justify-center" cols="6">
                            <v-btn
                                text
                                class="text-bold-2 font-weight-bold primary--text"
                                @click="qualificaMenu"
                            >
                                <v-icon class="mr-1" color="primary"
                                    >mdi-briefcase</v-icon
                                >
                                Carreira
                            </v-btn>
                        </v-col>
                        <v-col class="coluna d-flex justify-center" cols="6">
                            <v-btn
                                text
                                class="bold-2 font-weight-bold primary--text"
                                @click="qualificaMenu"
                            >
                                <v-icon class="mr-1" color="primary"
                                    >mdi-school</v-icon
                                >
                                Estudos
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-timeline v-if="showCarreira" dense class="timeline">
                        <v-timeline-item
                            v-for="(year, i) in years"
                            :key="i"
                            :color="year.color"
                            small
                        >
                            <div class="py-2 d-flex flex-column tl-item">
                                <v-row class="linha" justify="center">
                                    <v-expansion-panels>
                                        <v-expansion-panel>
                                            <v-expansion-panel-header
                                                :class="
                                                    `body-1 font-weight-bold ${year.color}--text`
                                                "
                                            >
                                                {{ year.empresa }}
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                {{ year.cargo }}
                                            </v-expansion-panel-content>
                                            <v-expansion-panel-content
                                                :class="
                                                    `body-1 font-weight-bold ${year.color}--text`
                                                "
                                            >
                                                {{ year.year }}
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                    </v-expansion-panels>
                                </v-row>
                            </div>
                        </v-timeline-item>
                    </v-timeline>

                    <v-timeline v-else dense class="timeline">
                        <v-timeline-item
                            v-for="(estudo, i) in estudos"
                            :key="i"
                            :color="estudo.color"
                            small
                        >
                            <div class="py-2 d-flex flex-column tl-item">
                                <v-row justify="center">
                                    <v-expansion-panels>
                                        <v-expansion-panel>
                                            <v-expansion-panel-header
                                                :class="
                                                    `body-1 font-weight-bold ${estudo.color}--text`
                                                "
                                            >
                                                {{ estudo.instituicao }}
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                {{ estudo.curso }}
                                            </v-expansion-panel-content>
                                            <v-expansion-panel-content
                                                :class="
                                                    `body-1 font-weight-bold ${estudo.color}--text`
                                                "
                                            >
                                                {{ estudo.conclusao }}
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                    </v-expansion-panels>
                                </v-row>
                            </div>
                        </v-timeline-item>
                    </v-timeline>
                </v-col>
            </v-row>
        </v-container>
    </v-layout>
</template>

<script>
export default {
    data: () => ({
        showCarreira: true,
        showEstudos: false,
        years: [
            {
                empresa: 'Aeroporto de Florianópolis',
                cargo: 'Analista de Infraestura Microsoft',
                color: 'green',
                year: '2014-2020',
            },
            {
                empresa: 'Procempa',
                cargo: 'Técnico de Suporte',
                color: 'red',
                year: '2010-2014',
            },
            {
                empresa: 'Dell',
                cargo: 'Analista de Suporte',
                color: 'orange',
                year: '2007-2009',
            },
            {
                empresa: 'Terra',
                cargo: 'Assistente de Suporte',
                color: 'purple',
                year: '2005-2006',
            },
        ],
        estudos: [
            {
                instituicao: 'Frontend Developer',
                curso:
                    'HTML5, CSS3, SASS, Bootstrap, JavaScript, Vue.JS, Vuetify, Git/Github',
                conclusao: 'Conclusão: Eterno aprendizado',
                color: 'green',
            },
            {
                instituicao: 'Certificações Microsoft',
                curso: 'Certificações MTA-399 e MTA-348',
                conclusao: 'Conclusão: 2016',
                color: 'purple',
            },
            {
                instituicao: 'Unisinos',
                curso: 'Graduação em ciências da computação',
                conclusao: 'Conclusão: trancado',
                color: 'grey',
            },
            {
                instituicao: 'Curso Técnico de Informática',
                curso: 'Senai',
                conclusao: 'Conclusão: 2004',
                color: 'blue',
            },
            {
                instituicao: 'Yázigi',
                curso: 'Inlgês',
                conclusao: 'Conclusão: 2002',
                color: 'red',
            },
            {
                instituicao: 'La Salle Santo Antônio',
                curso: 'Ensino Médio',
                conclusao: 'Conclusão: 1999',
                color: 'orange',
            },
        ],
    }),
    methods: {
        qualificaMenu() {
            this.showCarreira = !this.showCarreira;
            this.showEstudos = !this.showEstudos;
        },
    },
};
</script>

<style scoped>
.linhaP {
    border: 3px solid blue;
}

.colunaP {
  border: 3px solid pink;
}

.linha {
    border: 3px solid red;
}
.coluna {
    border: 2px dotted green;
} 
</style>
