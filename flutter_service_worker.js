'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "dc2c79c2f6d956aa9ad85fabb090ec75",
"index.html": "c66ef94b731c23b1d22b34742087d6ed",
"/": "c66ef94b731c23b1d22b34742087d6ed",
"main.dart.js": "9789cbe3623ec67f0ac2c4dd720ec19a",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "9014a0ccd15917ebb91cf7aea3d035bf",
"sql-wasm.js": "2c200f5293606b776b6700b825b004aa",
"icons/Icon-192.png": "d4e6a8c7ddbe6c5bbdb7ddcfb7b97dff",
"icons/Icon-maskable-192.png": "d4e6a8c7ddbe6c5bbdb7ddcfb7b97dff",
"icons/Icon-maskable-512.png": "3f6d8d23fbc2c5c309213e53d0f156d0",
"icons/Icon-512.png": "3f6d8d23fbc2c5c309213e53d0f156d0",
"manifest.json": "294521cc5a973d30c60215e0368fbe71",
"assets/AssetManifest.json": "121ade716cba0dc41912f8bfbec4962f",
"assets/NOTICES": "bc6a5ddc921093a13092390f148c2aba",
"assets/FontManifest.json": "6f25b11d7ffb22bf597f0009e4607d0f",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "4647829c7e37bb7846dc2f8a6faf3a1b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/persian_fonts/lib/fonts/Sahel.ttf": "25836e3d164d3f4a8d05f2c3cdbaf4af",
"assets/packages/persian_fonts/lib/fonts/Shabnam.ttf": "7b18a4a8f65b3f5eac92df3c91fe4400",
"assets/packages/persian_fonts/lib/fonts/Samim.ttf": "dff4f93c6702d280ea2acf25fb4270ae",
"assets/packages/persian_fonts/lib/fonts/Vazir.ttf": "c456d8064fe9bac3444d70a744446f90",
"assets/packages/persian_fonts/lib/fonts/Yekan.ttf": "52ce4de2efeeb8b18dcbd379711224f3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "bfca72dbeb747b3f19287b847313fab2",
"assets/fonts/MaterialIcons-Regular.otf": "39641ca18b34774edf63d00045f16b21",
"assets/assets/images/inter_iia.png": "91f76dd0d2a3ae12640e4887e93acaed",
"assets/assets/images/complicationicon.png": "c29c9a87415f92c3de018a6e0671bd77",
"assets/assets/images/ao_fem_neck_non.png": "c595206dd4f2f196375879f589defed6",
"assets/assets/images/constant.png": "f7632b683d0bdd1da64e5568548d5276",
"assets/assets/images/inter_i.png": "d1130855d5ce99f3a7bd7a8bd1f1555e",
"assets/assets/images/fem_sub.png": "1504c2969f9de436b27278ef9346c3b9",
"assets/assets/images/phasetwoo.png": "0da4d9fe1da11ab941333f5e9a7898b2",
"assets/assets/images/userprofile.png": "ba0491d2136d88203638ba0483ca79fa",
"assets/assets/images/alborz.png": "4297b2f06a51ccec9eecd581e6711f0d",
"assets/assets/images/xrayhand.png": "ecfa2787cf3ce3dfeafd1ee6432b5171",
"assets/assets/images/questio.jpg": "42fa2a649d02cef5160c866a32144b8f",
"assets/assets/images/inter_iib.png": "f71d84cf0bbb8515c9dd58ab1b73185b",
"assets/assets/images/hum_two_tub_non.png": "932c6684c52a490481b3366d25ce8ad8",
"assets/assets/images/ao_rad_extr_ulna_simp.png": "77c2b15e90fbcb2fb4a92acc973b933e",
"assets/assets/images/phase_one.png": "98130f4fd0850d6393f28f4e690bd358",
"assets/assets/images/femor_neck_nonsub.png": "ea3b51c095aaa3d2fd3ec22f48cc11f6",
"assets/assets/images/ao_rad_dorsrim_dors.png": "69459e9e83bc5702cabb7dafd3813e1f",
"assets/assets/images/femor_neck_sub.png": "74bf68bdacc175830dc891913582b475",
"assets/assets/images/download.png": "8b0cc57fc8af1e1d621a185cb60d1668",
"assets/assets/images/pip_ii.png": "a0e765f5de56fedaa917a01bb5844c63",
"assets/assets/images/number.png": "f259288659349c4e0ce2bf3741bf90a9",
"assets/assets/images/demog.png": "0ba8d9b3b8daedf79fe57bbe7f01b565",
"assets/assets/images/addmisicon.png": "bf93838fe62a7ec565158a9924f33524",
"assets/assets/images/ao_rad_dorsrim_sim.png": "d3b0b26b76d92c53f919f904f00952d2",
"assets/assets/images/ao_rad_extr_ulna_mult.png": "e4571a925951c83c6e0ce62b57747953",
"assets/assets/images/discharge-icon-3.jpg": "1504c2969f9de436b27278ef9346c3b9",
"assets/assets/images/lock.png": "7f6733a1dcd2bb7b5147d2d06714325e",
"assets/assets/images/begintimeicon.png": "012b0c84364c85c57e31b8b22a14e10e",
"assets/assets/images/follow.png": "ea2f27abc7e45713a2ca33be346007b2",
"assets/assets/images/phasetwo.png": "d741fbbbd535e5d50b8e232d8ff898e2",
"assets/assets/images/femor_neck_dis.png": "bcf88ed22fccd49a2049279ea247a600",
"assets/assets/images/prescriptionicon.jpg": "3e2a3499d3d736aba793b49a07411afc",
"assets/assets/images/addmissiondata.png": "e2e34ea41b42535dcbcdd3fd41a8d688",
"assets/assets/images/skel1.png": "5e0ebbb54a185d3267effe4f1b4c5749",
"assets/assets/images/pmhicon.png": "1c9a0953fd3e5719f00fb8f176d0d4c9",
"assets/assets/images/connection_lost.png": "bbddad65b2d8b21385d0086dcb806c23",
"assets/assets/images/phaseto.png": "9125b264ad8bc19dbf6010a55a8cdfa9",
"assets/assets/images/femor.png": "3880c3e2b06b784dfd130809cc5678e2",
"assets/assets/images/ao_hum_thre_surneck_noimp_g.png": "787c9f69b34635592e524797ea0f8573",
"assets/assets/images/ao_rad_dorsrim_fragm.png": "05f824a9fad89df8f0ee1ff09dfac39f",
"assets/assets/images/skel3.png": "b512097bf01c4dbc9356ce344f7638ab",
"assets/assets/images/labtest.png": "0c09e45fa8dc2297766cc4278a310244",
"assets/assets/images/ao_fem_neck_dis.png": "19bd6abf76637f93da0d5674b5c86a7c",
"assets/assets/images/skel2.png": "a94bf8dcd8e0b8a6c6f9a8d2a75d5e42",
"assets/assets/images/ao_rad_comp_mmulti.png": "137d210c831444bcd77d505c68034621",
"assets/assets/images/illnessicon.png": "e21585b30e9ebb5e2a4f0ac08ba40a06",
"assets/assets/images/ao_rad_no_dis.png": "c783fe537c4b2b63d63a9033ecba4ead",
"assets/assets/images/sf.png": "23ae8ada58434617b28893083ee1ffec",
"assets/assets/images/inj.png": "07b27a141ad0784722d7ca17e7f0446e",
"assets/assets/images/contacticon.png": "67201c4e9707dca8cef5deeec70ccb7a",
"assets/assets/images/drugicon.png": "0129e415ed9b54190d679039e49fd206",
"assets/assets/images/skel4.png": "23d3c965dd0357b85c70ed2aec2de67c",
"assets/assets/images/list.png": "23dd5742607b8f86e7a80f078a232d48",
"assets/assets/images/fe.png": "4d6b6ebe75affd50bc56e9a7e00e349e",
"assets/assets/images/vsicon.png": "7820d18f3b7113d43cd6869725052c94",
"assets/assets/images/hhs.png": "bf989a84b32d9ff2f670b905bef11ade",
"assets/assets/images/demoicon.jpg": "7bced28fc46ff6a41c9be38c72f427ae",
"assets/assets/images/ao_hum_thre_surneck_noimp_l.png": "9ed4f8d571d18df4a8037c283ee6e478",
"assets/assets/images/phasethree.png": "c6e94e292e8ceaaa0426383d3cbe16f1",
"assets/assets/images/qu.png": "ecd2adaa367d87f3950977b84508df0d",
"assets/assets/images/ao_rad_comp_simp.png": "1b0c1bc08e6a4276469b910b6f05838d",
"assets/assets/images/ao_rad_inv_lunate.png": "f03e2879983fd04d0f3ef11601f08288",
"assets/assets/images/ao_rad_inv_sca.png": "5ebd30c57aa742dcd5dc311438dfd1df",
"assets/assets/images/logo.jpg": "518e6ebd92b43e4f4df617908dd16cbd",
"assets/assets/images/llogo.png": "63cb86bb56264abecb34e4e934cf467d",
"assets/assets/images/pip_iii.png": "7434bd82c0e37880fbde6435b386c591",
"assets/assets/images/hum_thr_no.png": "b71cd1171ecd39444d0d3859e69178a2",
"assets/assets/images/ao_hum_two_surg_noimp.png": "9cd9f33baea3c616e018882893d22901",
"assets/assets/images/fem_neck_trans.png": "3b048512c0146726bc9b74241d54ba88",
"assets/assets/images/ssicon.png": "1a0c39be6f2583ad5481cbf6dbc20160",
"assets/assets/images/drugh.png": "459a18070b6580a64527f2d03c0e941b",
"assets/assets/images/hum_two_surg_imp.png": "b7abff16e25688aec4c87d07f2b54a2a",
"assets/assets/images/pip_o.png": "e06c59edb7186e0524e87830b4f4947d",
"assets/assets/images/ao_rad_dorsdis.png": "9affaf94ee58bd5ecda1422e343d6374",
"assets/assets/images/pip_iv%2520-%2520Copy.png": "dc9b8795f70107a95829b7b2b52ef460",
"assets/assets/images/skel.png": "d8444ee1c63405e90753083c3de0952c",
"assets/assets/images/placeholder_camera.png": "39178748c3673c615fc0a1f49345bf93",
"assets/assets/images/distalrad_icon.png": "b7d6002b6c09b82ef257c0e47f5a914f",
"assets/assets/images/fem_subf.png": "6695cfe62ab1ea639165a4f42d7aebaa",
"assets/assets/images/broken.png": "8b11172375b937087d59bbc4519bbe5f",
"assets/assets/images/ao.png": "b63da825fafecb1b5e53fd757ccd6417",
"assets/assets/images/surg.png": "7acef22a5c7a9fa76693430a4fb88c9f",
"assets/assets/images/handttt.png": "4fa53cfac709e6069d1175b76e63edcf",
"assets/assets/images/ao_hum_four.png": "fe14465cf43dd612584042084d9d7d3f",
"assets/assets/images/patient.png": "99df0fd25e9da05d553a2850401e78fc",
"assets/assets/images/pain.png": "74b7dad327f0eaab96be222509aef4d0",
"assets/assets/images/ao_rad_extr_ulna_styl.png": "fc1e85293d86a4abb9d7b26631bd296e",
"assets/assets/images/ao_rad_vol_dis.png": "5ad94caf4d519f8c91b0073d277c4284",
"assets/assets/images/inter_ib.png": "b72aa779377df97733a610fde474d777",
"assets/assets/images/prohumer_icon.png": "9d8689dd3fd7bc8a632a5b012fc8a3d5",
"assets/assets/images/ao_rad_volrim.png": "7d3b708134ffd430d0f5d4a4d16ae825",
"assets/assets/images/pip_iv.png": "b634314e8dbc856d0f85e6da84e25507",
"assets/assets/images/icuicon.png": "734156cdd39814e763cbca233b826af2",
"assets/assets/images/aalborz.png": "65ccd67fb0f03edcd76b9691488f475a",
"assets/assets/images/image.png": "424678803dd8c4c7192bcba04b10e1f7",
"assets/assets/images/hum_thr_dis.png": "60606c4929a824ef4e4bc3f9fa40bbf2",
"assets/assets/images/ao_hum_two_tub_disl.png": "2c7284a6d82726d4df830b7ae26505c6",
"assets/assets/images/humer.png": "e759921d1d7ed748c62babe2b9a15457",
"assets/assets/images/not_allowed.jpg": "8503ab4d280b6192d44277b79f517792",
"sql-wasm.wasm": "1b0fa4ee8004632ba85abefe56855493",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
