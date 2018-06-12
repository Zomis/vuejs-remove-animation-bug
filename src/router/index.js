import Vue from "vue";
import Router from "vue-router";
import BugRepro from "@/components/BugRepro";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "BugRepro",
      component: BugRepro
    }
  ]
});
