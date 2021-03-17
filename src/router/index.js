import Vue from "vue";
import Router from "vue-router";
import TeamPage from "@/components/teams-page/TeamPage.vue";
import ActiveTask from "@/components/ActiveTask";
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
            path: "/activetask",
            name: "ActiveTask",
            component: ActiveTask,
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