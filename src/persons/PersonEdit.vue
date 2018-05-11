<template>
    <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group id="nameInputGroup"
            label="Name:"
            label-for="nameInput"
            description="The Name of this person.">
            <b-form-input id="nameInput"
                type="text"
                v-model="formData.name"
                required
                placeholder="Person Name">
            </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
</template>

<script lang='ts'>
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"
import { Action, Getter } from "vuex-class"

import { Person } from "./model/Person"

@Component
export default class PersonEdit extends Vue {
    @Prop()
    protected id: number

    @Getter("persons/personById")
    protected personById: (id: number) => Person | undefined

    @Action("persons/updatePerson")
    protected updatePerson: (person: Person) => boolean

    protected formData: { name: string } = { name: "" }

    protected onReset(): void {
        const person: Person | undefined = this.personById(this.id)
        if (person !== undefined) {
            const name = person.name
            this.formData = { name }
        }
    }

    protected onSubmit(): void {
        this.updatePerson(new Person(this.id, this.formData.name))
    }

    protected mounted(): void {
        this.onReset()
    }
}
</script>
