import { RouteConfig, Route } from "vue-router"

import Dashboard from "./pages/Dashboard.vue"

import PersonEdit from "@/persons/PersonEdit.vue"

export const routes: RouteConfig[] = [
    { path: "/", component: Dashboard },
    {
        path: "/persons/:id/edit",
        component: PersonEdit,
        props: (route: Route) => ({
            id: Number.parseInt(route.params.id)
        })
    },
]
