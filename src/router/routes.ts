import type { RouteRecordRaw } from "vue-router"
import Home from "@/views/home/index.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    // component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: Home,
        meta: {
          title: "脑图"
        }
      }
    ]
  }
]

export default routes
