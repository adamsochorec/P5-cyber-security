// set the view of a map
map.setView([55.55781, 8.15], 12);

// lighthouse
const lighthouse = L.circle([55.55781, 8.08323], {
  color: "rgb(0, 126, 227)",
  fillColor: "rgb(0, 126, 227)",
  fillOpacity: 0.5,
  radius: 200,
}).addTo(map);
lighthouse.bindPopup("Blåvand Lighthouse");

// tirpitz
const tirpitz = L.circle([55.5504, 8.17224], {
  color: "rgb(0, 126, 227)",
  fillColor: "rgb(0, 126, 227)",
  fillOpacity: 0.5,
  radius: 200,
}).addTo(map);
tirpitz.bindPopup(
  '<a href="https://tirpitz.dk/" target="_blank" rel="no opener no-referrer">Tirpitz museum</a>'
);

// Bunkers
const atlanticWall = L.polyline(
  [57.719688, 8.159802],
  [57.707933, 8.186387],
  [57.699175, 8.212385],
  [57.692812, 8.243399],
  [57.678193, 8.277594],
  [57.664392, 8.309723],
  [57.650274, 8.345612],
  [57.636563, 8.37756],
  [57.622631, 8.413688],
  [57.611511, 8.446318],
  [57.59675, 8.480986],
  [57.582962, 8.515848],
  [57.570782, 8.546995],
  [57.558391, 8.581129],
  [57.544865, 8.616155],
  [57.529324, 8.654439],
  [57.514518, 8.689623],
  [57.500583, 8.725064],
  [57.486194, 8.761007],
  [57.471911, 8.796833],
  [57.459126, 8.829995],
  [57.444752, 8.86651],
  [57.431565, 8.89948],
  [57.416632, 8.936142],
  [57.403352, 8.970169],
  [57.389615, 9.005938],
  [57.375164, 9.042652],
  [57.362241, 9.076421],
  [57.348632, 9.111744],
  [57.335202, 9.147321],
  [57.321348, 9.183237],
  [57.30762, 9.219104],
  [57.29388, 9.254971],
  [57.280911, 9.288532],
  [57.26692, 9.324734],
  [57.252618, 9.36129],
  [57.238644, 9.39745],
  [57.225376, 9.431646],
  [57.211554, 9.467621],
  [57.197791, 9.503542],
  [57.184217, 9.539014],
  [57.170642, 9.574486],
  [57.156848, 9.61034],
  [57.143041, 9.646203],
  [57.129083, 9.682309],
  [57.115628, 9.717451],
  [57.101851, 9.753343],
  [57.087847, 9.789478],
  [57.074174, 9.82513],
  [57.060501, 9.860782],
  {
    color: "rgb(0, 126, 227)",
    dashArray: "10, 10",
  }
).addTo(map);
atlanticWall.bindPopup(
  `<b><a href="https://en.wikipedia.org/wiki/Atlantic_Wall">Atlantic Wall</a></b>`
);