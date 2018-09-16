/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_config.yml",
    "revision": "474f14a024e368440e2f95769cff7bb4"
  },
  {
    "url": "404.html",
    "revision": "a9ad7186d668528581b6f5f9e578ce8b"
  },
  {
    "url": "config.txt",
    "revision": "b0eee78989b2e84093f5080802103273"
  },
  {
    "url": "css/style.css",
    "revision": "ad4a3f19c69c179f373f7a93b7b8ba32"
  },
  {
    "url": "favicon.ico",
    "revision": "3214324a79fc5ec0aee03c0495673df8"
  },
  {
    "url": "index.html",
    "revision": "06735a51c69fa69b38542e5f7e8af457"
  },
  {
    "url": "js/index.js",
    "revision": "2e48f828c2fe139f16c368f519eea333"
  },
  {
    "url": "manifests/browserconfig.xml",
    "revision": "fc880f2a7d3aa81fdf69af8000505a8a"
  },
  {
    "url": "manifests/site.webmanifest",
    "revision": "e217925ed363c7a1b50ca24ae5aad155"
  },
  {
    "url": "no-javascript.html",
    "revision": "819ac091369ecf7a4055ed487fe5202a"
  },
  {
    "url": "README.md",
    "revision": "dfe91c3a6098b164b378accfcf6e42e9"
  },
  {
    "url": "resources/android-chrome-144x144.png",
    "revision": "777117eb9eb7b42a7736fe4cc65bb7f4"
  },
  {
    "url": "resources/android-chrome-36x36.png",
    "revision": "2a0824b72ce1665cc94f0066667ff54c"
  },
  {
    "url": "resources/android-chrome-48x48.png",
    "revision": "85b1774486f8355642cca058ac6ff6cc"
  },
  {
    "url": "resources/android-chrome-72x72.png",
    "revision": "28b4ed835fa12b3a911991e590e8b9a0"
  },
  {
    "url": "resources/android-chrome-96x96.png",
    "revision": "e93973f7622b28f6cbadb2ac1fe195a6"
  },
  {
    "url": "resources/mstile-150x150.png",
    "revision": "373eab10b7c2918c1cb2e5a2ff7295ba"
  },
  {
    "url": "workbox-config.js",
    "revision": "5fee5a9cf219335a8f572478b432f31f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
