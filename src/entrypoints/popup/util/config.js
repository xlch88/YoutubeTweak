import { defineStore } from "pinia";
import { toRaw } from "vue";
import { createLogger } from "@/logger.js";
import defaultConfig from "@/defaultConfig.js";
const logger = createLogger("config");

export const STORAGE_KEY = "settings";

export default defineStore("config", {
	state: () => {
		return defaultConfig;
	},

	actions: {
		loadStorage(init = false) {
			chrome.storage.sync.get(STORAGE_KEY).then((res) => {
				this.$patch(res[STORAGE_KEY] || {});
				logger.info("loadStorage ->", res[STORAGE_KEY]);

				if (init) {
					this.saveStorage();
				}
			});
		},
		saveStorage() {
			const rawData = toRaw(this.$state);
			logger.info("saveStorage ->", rawData);
			chrome.storage.sync.set({ [STORAGE_KEY]: rawData }).catch((e) => {
				logger.warn("save config error:", e);
			});
			chrome.tabs.query({ url: "*://*.youtube.com/*" }).then((tabs) => {
				tabs.forEach((tab) => {
					chrome.tabs.sendMessage(tab.id, { action: "reloadConfig" }).catch((e) => {
						logger.warn("sendMessage error:", e);
					});
				});
			});
		},
	},
});

export const configPlugin = ({ store }) => {
	let isInitial = true;
	store.$subscribe(() => {
		if (isInitial) {
			isInitial = false;
			return;
		}
		logger.debug("update:", store);
		store.saveStorage();
	});

	store.loadStorage(true);
};
