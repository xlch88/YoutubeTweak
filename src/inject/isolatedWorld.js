import { createLogger } from "../logger.js";
import wirelessRedstone from "./wirelessRedstone.js";
import { youtubeiAPIv1 } from "./util/youtubei.js";
const logger = createLogger("IsolatedWorld");

wirelessRedstone.init("isolatedWorld");

Object.assign(wirelessRedstone.handlers, {
	getConfig(data, reply) {
		chrome.storage.sync.get(data, (result) => {
			reply(result);
		});
	},
	setConfig(data, reply) {
		chrome.storage.sync.set(data, () => {
			reply({ success: true });
		});
	},
});
chrome.storage.onChanged.addListener((changes, areaName) => {
	if (areaName === "sync") {
		wirelessRedstone.send("configUpdate", changes);
	}
});
// chrome.runtime.onMessage.addListener((msg) => {
// 	console.log("Received update from background:", msg.changes);
// });

let chromeApiStatusChecker = null;
Object.assign(wirelessRedstone.handlers, {
	enableChromeApiStatusChecker(isEnable) {
		if (!isEnable) {
			clearInterval(chromeApiStatusChecker);
			chromeApiStatusChecker = null;
			return;
		}

		chromeApiStatusChecker = setInterval(() => {
			if (chrome?.runtime?.id) return;
			wirelessRedstone.send("chromeApiOffline", true);
			clearInterval(chromeApiStatusChecker);
		}, 1000);
	},
});

window.__YT_TWEAK__ = {
	WORLD: "isolated",
};
