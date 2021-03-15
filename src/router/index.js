import Vue from "vue";
import Router from "vue-router";
import TeamPage from "@/components/teams-page/TeamPage.vue";
import Manage from "@/components/manage";
import Personal from "@/components/personal";
import Overview from "@/components/overview";

Vue.use(Router);

export default new Router({
    base: "/",
    mode: "history",
    routes: [{
            path: "/teampage",
            name: "TeamPage",
            exact: true,
            component: TeamPage,
        },

        {
            path: "/manage",
            name: "Manage",
            component: Manage,
        },
        {
            path: "/personal",
            name: "Personal",
            component: Personal,
        },
        {
            path: "/overview",
            name: "Overview",
            component: Overview,
        },
    ],
});