import { Action, Module, Mutation, StoreOptions } from "vuex"

function getAction<S>(options: StoreOptions<S>, modulePath: string, action: string): Action<S, S> {
    const module: Module<S, S> = getModule(options, ...modulePath.split("/"))
    if (module.actions === undefined) {
        throw Error("actions must be defined")
    }
    return module.actions[action]
}


function getMutation<S>(options: StoreOptions<S>, modulePath: string, mutation: string): Mutation<S> {
    const module: Module<S, S> = getModule(options, ...modulePath.split("/"))
    if (module.mutations === undefined) {
        throw Error("mutations must be defined")
    }
    return module.mutations[mutation]
}

export function expectAction<S>(options: StoreOptions<S>, modulePath: string, action: string): jest.Matchers<void> {
    const foundAction: Action<S, S> = getAction(options, modulePath, action)
    return expect(foundAction)
}

export function expectActionArgument<S>(
    options: StoreOptions<S>, module: string, action: string, call: number = 0
): jest.Matchers<void> {

    const foundAction = getAction(options, module, action) as jest.Mock
    expect(foundAction.mock.calls.length).toBeGreaterThan(0)
    return expect(foundAction.mock.calls[call][1])
}

export function expectMutation<S>(options: StoreOptions<S>, modulePath: string, mutation: string): jest.Matchers<void> {
    const foundMutation = getMutation(options, modulePath, mutation) as jest.Mock
    return expect(foundMutation)
}

export function expectMutationArgument<S>(
    options: StoreOptions<S>, module: string, mutation: string, call: number = 0
): jest.Matchers<void> {

    const foundMutation = getMutation(options, module, mutation) as jest.Mock
    expect(foundMutation.mock.calls.length).toBeGreaterThan(0)
    return expect(foundMutation.mock.calls[call][1])
}

export function getModule<S>(options: StoreOptions<S>, ...moduleNames: string[]): Module<S, S> {
    if (options.modules === undefined) {
        throw Error("modules must be defined")
    }
    let module: Module<S, S> = options.modules[moduleNames[0]]
    for (let i: number = 1; i < moduleNames.length; i++) {
        if (module.modules === undefined) {
            throw Error("modules must be defined")
        }
        module = module.modules[moduleNames[i]]
    }
    return module
}
