<template>
    <b-card id="person" :title="person.name">
        <router-link :to="editUrl">edit</router-link>
    </b-card>
</template>

<script lang='ts'>
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"

import { Person } from "./model/Person"

@Component
export default class PersonCard extends Vue {
    @Prop()
    protected person: Person

    protected get editUrl(): string {
        return `persons/${this.person.id}/edit`
    }
}
</script>
