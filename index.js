import {App} from "./components/App.js";
import { preloader as Preloader } from "./components/Preloader.js";
import { router } from "./route/router.js";

let app = new App();
Preloader;
router();