import { defineAppSetup } from "@slidev/types";
import vuetify from "../plugins/vuetify";
import notitia from "../plugins/notitia";
import "@mdi/font/css/materialdesignicons.css";
import "@lr-notitia/notitia-ui/styles";
import "vuetify/styles";

export default defineAppSetup(({ app, router }) => {
	app.use(vuetify).use(notitia(router));
});
