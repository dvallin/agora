import { Module, ActionContext } from "vuex"

import { RootState } from "@/composition/store"

import { Person } from "@/persons/model/Person"

export interface State {
    data: Person[]
}

export function initialState(): State {
    return {
        data: [
            new Person(1, "Peter Jackson"),
            new Person(2, "Elijah Wood"),
            new Person(3, "Orlando Bloom"),
            new Person(4, "Christopher Lee"),
        ],
    }
}

export const module: Module<State, RootState> = {
    state: initialState(),
    getters: {
        personById(state: State): (id: number) => Person | undefined {
            return id => state.data.find(person => person.id === id)
        },
        personIndexById(state: State): (id: number) => number {
            return id => state.data.findIndex(person => person.id === id)
        }
    },
    actions: {
        updatePerson(context: ActionContext<State, RootState>, person: Person): boolean {
            let success = false
            if (person.name.length > 0) {
                const index = context.getters.personIndexById(person.id)
                if (index >= 0 && person.isValid) {
                    context.commit("personUpdated", { index, person })
                    success = true
                }
            }
            return success
        }
    },
    mutations: {
        personUpdated(state: State, payload: { index: number, person: Person }): void {
            state.data[payload.index] = payload.person
        }
    },
    namespaced: true
}
