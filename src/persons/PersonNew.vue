<template>
    <div>
        <b-form @submit="onSubmit">
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
        </b-form>
        {{ reversedName }}
    </div>
</template>

<script lang='ts'>
import Vue from "vue"
import { Component } from "vue-property-decorator"
import { Action } from "vuex-class"

@Component
export default class PersonNew extends Vue {
    @Action("persons/createPerson")
    protected createPerson: (name: string) => boolean

    protected formData: { name: string } = { name: "" }

    protected onSubmit(): void {
        this.createPerson(this.formData.name)
    }

    get reversedName(): string {
        return this.formData.name.replace("a", "b")
    }
}
</script>
