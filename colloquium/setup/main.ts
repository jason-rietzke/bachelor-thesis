import { defineAppSetup } from "@slidev/types";
import vuetify from "../plugins/vuetify";

export default defineAppSetup(({ app, router }) => {
	app.use(vuetify);
});
