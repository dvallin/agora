import Vuex, { Store, StoreOptions } from "vuex"

import { getModule } from "./vuex"

export class MockStoreBuilder<S> {

    public constructor(protected options: StoreOptions<S>) {
    }

    public action(modulePath: string, target: string): MockStoreBuilder<S> {
        const module = getModule(this.options, ...modulePath.split("/"))
        if (module.actions === undefined) {
            throw Error("actions must be defined")
        }
        if (module.actions[target] === undefined) {
            throw Error(`action ${modulePath}/${target} does not exist`)
        }
        module.actions[target] = jest.fn()
        return this
    }

    public mutation(modulePath: string, target: string): MockStoreBuilder<S> {
        const module = getModule(this.options, ...modulePath.split("/"))
        if (module.mutations === undefined) {
            throw Error("mutations must be defined")
        }
        if (module.mutations[target] === undefined) {
            throw Error(`mutation ${module}/${target} does not exist`)
        }
        module.mutations[target] = jest.fn()
        return this
    }

    public build(state?: object): Store<S> {
        const store = new Vuex.Store(this.options)
        if (state) {
            const newState: S = Object.assign({}, store.state, state) as S
            store.replaceState(newState)
        }
        return store
    }
}
