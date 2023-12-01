var map = L.map("map").setView([41.213948, 69.296165], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var coddycamp = L.marker([41.213948, 69.296165]).addTo(map);
var impactt = L.marker([41.213948, 69.296165]).addTo(map);

impactt.bindPopup("Mening uyim");
