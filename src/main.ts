import { createApp } from "vue"
import { store } from "./store"
import { ImagePreview } from "vant"
// normalize.css
import "normalize.css/normalize.css"
import "vant/es/toast/style/index"
import "vant/es/image-preview/style/index"
// 全局样式
import "./styles/index.less"
// tailwindcss
import "./styles/tailwind.css"
// svg icon
import "virtual:svg-icons-register"

import App from "./App.vue"
import router from "./router"

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ImagePreview)
app.mount("#app")
