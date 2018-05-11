import { StoreOptions } from "vuex"

import * as persons from "@/persons/store"

export interface RootState {
    persons: persons.State
}

export const storeOptions: StoreOptions<RootState> = {
    modules: {
        persons: persons.module,
    },
    strict: process.env.NODE_ENV !== "production"
}
