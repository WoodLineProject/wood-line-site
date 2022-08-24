<script>
export default {
    name: "AboutAs"
}
</script>
<template>
    <v-card
        class="d-flex flex-column pl-5 text-center"
        elevation="24"
        shaped>
        <div>
            <h1>О нас</h1>
        </div>
        <div>
            <h2>Фабрика WoodLine основана в 2019 году</h2>
            <h2>За этот относительно короткий периуд мы имеем:</h2>
        </div>
        <div class="d-flex flex-column justify-content-center">
            <div class="row my-3">
                <v-icon color="green">done</v-icon>
                <h3>~25 салонов которые сотрудничают с нами</h3>
            </div>
            <div class="row my-3">
                <h3>В их числе: "Мебельдор", "МебельГрое", "УЮТ"</h3>
            </div>
            <div class="row my-3">
                <v-icon color="green">done</v-icon>
                <h3>15000 довольных клиентов за все время</h3>
            </div>
            <div class="row my-3">
                <v-icon color="green">done</v-icon>
                <h3>~5000 выполненых заказов в год</h3>
            </div>
        </div>
        <h2 class="mx-5 text-center">
            Ми кожен день прагнемо будті кращими, тому компанія <br> швидко зростає та вдосконалюється
        </h2>
    </v-card>
</template>
