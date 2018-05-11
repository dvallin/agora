import _ from "lodash"
import Vue from "vue"
import { Store, StoreOptions } from "vuex"

import { mount, Wrapper } from "@vue/test-utils"
import { MockStoreBuilder } from "../../test-utils/mock-store-builder"

import VueRouter from "vue-router"
import { routes } from "@/composition/routes"
const router = new VueRouter({ routes })

import { RootState, storeOptions } from "@/composition/store"
import Dashboard from "@/composition/pages/Dashboard.vue"

describe("Dashboard", () => {

    describe("no data loaded", () => {

        let page: Wrapper<Vue>
        let options: StoreOptions<RootState>
        let store: Store<RootState>
        beforeEach(() => {
            options = _.cloneDeep(storeOptions)
            store = new MockStoreBuilder<RootState>(options)
                .build()
            page = mount(Dashboard, { store, router })
        })

        it("renders an empty page", () => {
            expect(page.element.outerHTML).toMatchSnapshot()
        })

        it("renders the title", () => {
            expect(page.find("section").text()).toEqual("Dashboard")
        })
    })
})
