<template>
    <div class="dashboard container">
        <section>
            <h1>Dashboard</h1>
        </section>
        <section>
            <person-overview/>
        </section>
    </div>
</template>

<script lang='ts'>
import Vue from "vue"
import { Component } from "vue-property-decorator"

import PersonOverview from "@/persons/PersonOverview.vue"

@Component({
    components: {
        PersonOverview
    }
})
export default class AnalyticsPage extends Vue {
}
</script>
