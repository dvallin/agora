import { StoreOptions } from "vuex"
import createPersistedState from "vuex-persistedstate"

import * as persons from "@/persons/store"

export interface RootState {
    persons: persons.State
}

export const storeOptions: StoreOptions<RootState> = {
    modules: {
        persons: persons.module,
    },
    plugins: [
        createPersistedState({ storage: window.sessionStorage })
    ],
    strict: process.env.NODE_ENV !== "production"
}
