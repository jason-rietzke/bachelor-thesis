import { createNotitiaUI } from "@lr-notitia/notitia-ui";

export default (router) =>
	createNotitiaUI({
		accentColor: "#94a8ff", // configure the accent color of the components
		router: router,
	});
