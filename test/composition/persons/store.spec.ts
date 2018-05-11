import _ from "lodash"
import { Store, StoreOptions } from "vuex"

import { MockStoreBuilder } from "../../test-utils/mock-store-builder"

import { RootState, storeOptions } from "@/composition/store"

import { Person } from "@/persons/model/Person"
import { expectMutationArgument } from "../../test-utils/vuex"

describe("person store", () => {

    describe("actions", () => {

        let options: StoreOptions<RootState>
        let store: Store<RootState>
        beforeEach(() => {
            options = _.cloneDeep(storeOptions)
            store = new MockStoreBuilder<RootState>(options)
                .mutation("persons", "personUpdated")
                .build()
        })

        describe("updatePerson", () => {
            const person = new Person(1, "name")

            it("updates the state", () => {
                // when
                store.dispatch("persons/updatePerson", new Person(1, "name"))

                // then
                expectMutationArgument(options, "persons", "personUpdated").toEqual({ index: 0, person })
            })
        })
    })

    describe("getters", () => {

        const state: RootState = {
            persons: {
                data: [
                    new Person(0, "Hello"),
                    new Person(-1, "World")
                ]
            }
        }

        describe("personById", () => {

            const personById = storeOptions.modules!.persons.getters!.personById(state.persons, undefined, state, undefined)

            it("returns the correct persons", () => {
                expect(personById(0)).toBeDefined()
                expect(personById(0).name).toEqual("Hello")
                expect(personById(-1)).toBeDefined()
                expect(personById(-1).name).toEqual("World")
            })

            it("defaults to undefined on not found", () => {
                expect(personById(2)).toBeUndefined()
            })
        })

        describe("personById", () => {

            const personIndexById = storeOptions.modules!.persons.getters!.personIndexById(state.persons, undefined, state, undefined)

            it("returns the indices of the persons", () => {
                expect(personIndexById(0)).toBeDefined()
                expect(personIndexById(0)).toEqual(0)
                expect(personIndexById(-1)).toBeDefined()
                expect(personIndexById(-1)).toEqual(1)
            })

            it("defaults to minus one on not found", () => {
                expect(personIndexById(2)).toEqual(-1)
            })
        })
    })

    describe("mutations", () => {

        let options: StoreOptions<RootState>
        let store: Store<RootState>
        beforeEach(() => {
            options = _.cloneDeep(storeOptions)
            store = new MockStoreBuilder<RootState>(options)
                .build()
        })

        describe("personUpdated", () => {

            it("updates the state", () => {
                // given
                const person: Person = new Person(1, "Hello")

                // when
                store.commit("persons/personUpdated", { index: 2, person })

                // then
                expect(store.state.persons.data[2]).toEqual(person)
            })
        })
    })
})
