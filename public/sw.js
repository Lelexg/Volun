"use strict";

self.addEventListener("install", function (e) {

	self.skipWaiting();

	e.waitUntil(caches.open("voluncache").then((cache) => {
		return cache.addAll([
			"/offline.html",
			"/offline.css",
			"/images/hearth_broken.svg"
		]);
	}));

});

self.addEventListener("activate", function (e) {
	self.clients.claim();
});

self.addEventListener("fetch", function (e) {
	// Aqui estamos com a política Network-first, e não
	// Cache-first (ver os arquivos pwa09/swX.js)
	e.respondWith(fetch(e.request).catch((reason) => {
		return caches.open("voluncache").then((cache) => {
			if (e.request.mode === "navigate")
				return cache.match("/offline.html");
			else
				return cache.match(e.request);
		});
	}));

});
