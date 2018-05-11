<template>
    <div id="person-list">
        <person-card v-for="person in persons" :key="person.id" :person="person" />
    </div>
</template>

<script lang='ts'>
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"

import { Person } from "./model/Person"
import PersonCard from "./PersonCard.vue"

@Component({
    components: {
        PersonCard
    }
})
export default class PersonList extends Vue {
    @Prop()
    protected persons: Person[]
}
</script>
