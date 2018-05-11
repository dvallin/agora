import Vue from "vue"

import { mount, Wrapper } from "@vue/test-utils"

import VueRouter from "vue-router"
import { routes } from "@/composition/routes"
const router = new VueRouter({ routes })

import { Person } from "@/persons/model/Person"
import PersonCard from "@/persons/PersonCard.vue"

describe("Person Card", () => {
    const person = new Person(1, "name")

    let card: Wrapper<Vue>
    beforeEach(() => {
        card = mount(PersonCard, { propsData: { person }, router })
    })

    it("displays the name", () => {
        expect(card.find(".card-body .card-title").text()).toEqual("name")
    })

    it("renders correct link", () => {
        expect(card.find(".card-body a").attributes().href).toEqual("#/persons/1/edit")
    })
})
