'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7cd6a41407e3ce7ca7e1a9f156efa75f",
"favicon.ico": "cdd2607464a00282922473bf2c19855b",
"index.html": "5b3a78ca0554697c04da4dbc8324abc7",
"/": "5b3a78ca0554697c04da4dbc8324abc7",
"main.dart.js": "ad620ee3ae62aaff70847cdc3dff39af",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d694bac735e52b479f65c3796a94a979",
"camera.js": "c9ecb4900b274027dcbb85a12e757fe3",
"assets/AssetManifest.json": "19a2f1b65f9553081e2b70394f008573",
"assets/NOTICES": "3bc27b3b507eaab48a4f53af0dae7ae8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/home/card.png": "82202e0a91db76eb26a4a767f1d73305",
"assets/assets/home/contact-desk.png": "eaa4b5782fcac4f600fc23b0e3db2bb1",
"assets/assets/home/mcb_pro.png": "8f060d2d2110f2b6c30be2ad10c4fa0a",
"assets/assets/home/circle.png": "fcb4edce2d90c3a4016f22f56add4cf9",
"assets/assets/home/background.png": "b85eb63a9135d447c566547eed18c6d5",
"assets/assets/home/phone.png": "d953dbd7d9fac2d0e906d011b5db24da",
"assets/assets/home/checklist.png": "49769b267bd1cf83efd33e7a0d48ceb2",
"assets/assets/home/save.png": "720d547a8bd6edce46b3bdc0e675798c",
"assets/assets/home/juice.png": "53ce2090bba16170fad0edccc69f6a95",
"assets/assets/micro_illustrations/email.png": "1defec52b7408c4dd3c529fdb91babf3",
"assets/assets/micro_illustrations/moreInfo.png": "183fc4fa276abd0fb33b2065b97a79a3",
"assets/assets/micro_illustrations/joy.png": "51724ab32a839166089cf3c2658a0943",
"assets/assets/micro_illustrations/map.png": "86ac4b99939fa1e2ed28dea101ec6d89",
"assets/assets/micro_illustrations/employment.png": "974ccbff4bcc239a2b0d4b1335c244fa",
"assets/assets/micro_illustrations/house.png": "c85e208613756cfdb4e42cc008f7da5a",
"assets/assets/micro_illustrations/done.png": "48aa0190ef52c28962402e52548c268c",
"assets/assets/micro_illustrations/docum.png": "edc4f8cec4668b15a43fa1ac43784881",
"assets/assets/micro_illustrations/income.png": "a7cc3aeaeb7857c7824918c1e7979923",
"assets/assets/micro_illustrations/security.png": "86a5e5207c7c575acef65c8659e07583",
"assets/assets/micro_illustrations/biometrics.png": "f6990286ec24548392cea7b9c8861eb4",
"assets/assets/flags/Russia.png": "c5bf24dc78a1cddbed60fac3218594a9",
"assets/assets/flags/Nigeria.png": "debccfe2cde90c4745323ae426b93cf0",
"assets/assets/flags/United%2520States.png": "7ac3e49d02816ea3df36e57adb0e5536",
"assets/assets/flags/Mauritius.png": "6c39310c21794bc12fbd1f4ab0569514",
"assets/assets/flags/Ireland.png": "8ef940167bffc29d9ca604c83c84f0fa",
"assets/assets/verification/email.png": "1defec52b7408c4dd3c529fdb91babf3",
"assets/assets/verification/safe.png": "86a5e5207c7c575acef65c8659e07583",
"assets/assets/verification/mobile.png": "c823103528ceaf83569c8d5146832040",
"assets/assets/verification/biometrics.png": "f6990286ec24548392cea7b9c8861eb4",
"assets/assets/icons/check_out.png": "74a915c3cf73b0c70efbbf2d266a13b8",
"assets/assets/icons/doc.png": "034614014759b59dad7d1e3f14101151",
"assets/assets/icons/logo.png": "74af0d31ae84209f8b7f9d9071c4e6e8",
"assets/assets/icons/upload.png": "edc4f8cec4668b15a43fa1ac43784881",
"assets/assets/icons/filled.png": "84aabb2ff1822830e380df6fb94d8136",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
