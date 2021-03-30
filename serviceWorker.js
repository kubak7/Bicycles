const staticBicyclePwa = "BicyclesPWA"
const assets = [
    "/bicycles.html"
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticBicyclePwa).then(cache => {
            cache.addAll(assets)
        })
    )
})