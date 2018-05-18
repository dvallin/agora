<template>
    <div id="person-list">
        <router-link to="persons/new" >create new Person</router-link>
        <person-list :persons="persons" />
    </div>
</template>

<script lang='ts'>
import Vue from "vue"
import { State } from "vuex-class"
import { Component } from "vue-property-decorator"

import { RootState } from "@/composition/store"

import { Person } from "./model/Person"
import PersonList from "./PersonList.vue"

@Component({
    components: {
        PersonList
    }
})
export default class PersonOverview extends Vue {
    @State((s: RootState) => s.persons.data)
    protected persons: Person[]
}
</script>
