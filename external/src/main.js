import "./scss/main.scss";
import "./alpinejs-compatibility";
import Alpine from "alpinejs";
window.Alpine = Alpine;

import persist from "@alpinejs/persist";

Alpine.plugin(persist);
Alpine.start();