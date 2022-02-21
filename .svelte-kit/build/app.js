
import root from '__GENERATED__/root.svelte';
import { respond } from '/Users/Ea/Documents/GitHub/svelte-luna/.svelte-kit/runtime/server/index.js';
import { set_paths, assets, base } from '/Users/Ea/Documents/GitHub/svelte-luna/.svelte-kit/runtime/paths.js';
import { set_prerendering } from '/Users/Ea/Documents/GitHub/svelte-luna/.svelte-kit/runtime/env.js';
import * as user_hooks from "../../src/hooks.js";

const template = ({ head, body, assets, nonce }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<meta name=\"description\" content=\"Luna ui library for Svelte\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t<meta name=\"apple-mobile-web-app-title\" content=\"Luna\" />\n\t\t<meta name=\"application-name\" content=\"Luna\" />\n\t\t<meta name=\"msapplication-TileColor\" content=\"#ffffff\" />\n\t\t<meta name=\"theme-color\" content=\"#ffffff\" />\n    \n\t\t<link\n      rel=\"apple-touch-icon\"\n      sizes=\"180x180\"\n      href=\"" + assets + "/icons/apple-touch-icon.png\"\n    />\n    <link\n      rel=\"icon\"\n      type=\"image/png\"\n      sizes=\"32x32\"\n      href=\"" + assets + "/icons/favicon-32x32.png\"\n    />\n    <link\n      rel=\"icon\"\n      type=\"image/png\"\n      sizes=\"16x16\"\n      href=\"" + assets + "/icons/favicon-16x16.png\"\n    />\n    <link rel=\"manifest\" href=\"" + assets + "/manifest.json\" />\n    <link\n      rel=\"mask-icon\"\n      href=\"" + assets + "/icons/safari-pinned-tab.svg\"\n      color=\"#5bbad5\"\n    />\n\n    <link rel=\"stylesheet\" href=\"" + assets + "/global.css\" />\n\n    <title>Luna</title>\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div>" + body + "</div>\n\t</body>\n</html>\n";

let read = null;

set_paths({"base":"/svelte-luna","assets":""});

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ event, resolve }) => resolve(event)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

let default_protocol = 'https';

// allow paths to be globally overridden
// in svelte-kit preview and in prerendering
export function override(settings) {
	default_protocol = settings.protocol || default_protocol;
	set_paths(settings.paths);
	set_prerendering(settings.prerendering);
	read = settings.read;
}

export class App {
	constructor(manifest) {
		const hooks = get_hooks(user_hooks);

		this.options = {
			amp: false,
			csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
			dev: false,
			floc: false,
			get_stack: error => String(error), // for security
			handle_error: (error, event) => {
				hooks.handleError({
					error,
					event,

					// TODO remove for 1.0
					// @ts-expect-error
					get request() {
						throw new Error('request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details');
					}
				});
				error.stack = this.options.get_stack(error);
			},
			hooks,
			hydrate: true,
			manifest,
			method_override: {"parameter":"_method","allowed":[]},
			paths: { base, assets },
			prefix: assets + '/internal/',
			prerender: true,
			read,
			root,
			service_worker: null,
			router: true,
			template,
			template_contains_nonce: false,
			trailing_slash: "never"
		};
	}

	render(request, options = {}) {
		if (!(request instanceof Request)) {
			throw new Error('The first argument to app.render must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details');
		}

		return respond(request, this.options, options);
	}
}
