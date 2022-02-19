export const manifest = {
	appDir: "internal",
	assets: new Set(["assets/grogu.jpg","assets/mando.jpg","assets/modal.png","assets/panda.svg","assets/side-bar-bkg-dark.svg","assets/side-bar-bkg-light.svg","browserconfig.xml","favicon.png","global.css","icons/android-chrome-192x192.png","icons/android-chrome-512x512.png","icons/apple-touch-icon.png","icons/favicon-16x16.png","icons/favicon-32x32.png","icons/favicon.ico","icons/favicon.png","icons/mstile-150x150.png","icons/safari-pinned-tab.svg","luna.css","manifest.json","robots.txt","theme.css"]),
	_: {
		mime: {".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml",".xml":"application/xml",".css":"text/css",".ico":"image/vnd.microsoft.icon",".json":"application/json",".txt":"text/plain"},
		entry: {"file":"start-7673594a.js","js":["start-7673594a.js","chunks/vendor-7df82684.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		]
	}
};
