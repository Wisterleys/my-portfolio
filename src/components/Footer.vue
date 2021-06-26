<template>
    <v-footer dark padless app>
        <v-card class="flex" flat tile>
            <v-card-text
                class="py-2 white--text text-center text-caption text-md-body-1"
            >
                {{ new Date().getFullYear() }} -
                <span assinatura class="font-weight-bold"
                    >Michel Vieira Pinto
                </span>
                <span>&copy;</span>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
