// Copyright 2016 Google Inc.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var cacheName = 'HimnarioOffline';
var himnosCache = 'HimnosOffline'
var filesToCache = [
	//UI
  '.',
  'index.html',
  'buscar.html',
  'favoritos.html',
  'cuadricula.html',
  'info.html',
  'scripts/app.js',
  'scripts/framework.js',
  'styles/inline.css',
  'font/flaticon.css',
  'font/Flaticon.ttf',
  'font/Flaticon.eot',
  'font/Flaticon.woff',
  'images/logo.png',
  'images/back_12.svg',
  'images/next_12.svg',
  'images/prev_12.svg',
  'images/fav_12.svg',
  'images/search_12.svg',
  'himno/play_pause.js',
  //Framework diapositivas
  'himno/css/reveal.css',
  'himno/css/theme/black.css',
  'himno/js/reveal.js',
  'himno/lib/js/classList.js',
  'himno/lib/js/head.min.js',
  'himno/lib/js/html5shiv.js',
  //Ayudas liturgicas
  'ayudas_liturgicas/apostoles.html',
  'ayudas_liturgicas/bienaventuranzas.html',
  'ayudas_liturgicas/mandamiento.html',
  'ayudas_liturgicas/mandamientos.html',
  'ayudas_liturgicas/niceno.html',
  'ayudas_liturgicas/padrenuestro.html',
  'ayudas_liturgicas/toSlides.js'
]
var files_Himnos = [
  //Himnos
  'himno/001.html',
  'himno/002.html',
  'himno/003.html',
  'himno/004.html',
  'himno/005.html',
  'himno/006.html',
  'himno/007.html',
  'himno/008.html',
  'himno/009.html',
  'himno/010.html',
  'himno/011.html',
  'himno/012.html',
  'himno/013.html',
  'himno/014.html',
  'himno/015.html',
  'himno/016.html',
  'himno/017.html',
  'himno/018.html',
  'himno/019.html',
  'himno/020.html',
  'himno/021.html',
  'himno/022.html',
  'himno/023.html',
  'himno/024.html',
  'himno/025.html',
  'himno/026.html',
  'himno/027.html',
  'himno/028.html',
  'himno/029.html',
  'himno/030.html',
  'himno/031.html',
  'himno/032.html',
  'himno/033.html',
  'himno/034.html',
  'himno/035.html',
  'himno/036.html',
  'himno/037.html',
  'himno/038.html',
  'himno/039.html',
  'himno/040.html',
  'himno/041.html',
  'himno/042.html',
  'himno/043.html',
  'himno/044.html',
  'himno/045.html',
  'himno/046.html',
  'himno/047.html',
  'himno/048.html',
  'himno/049.html',
  'himno/050.html',
  'himno/051.html',
  'himno/052.html',
  'himno/053.html',
  'himno/054.html',
  'himno/055.html',
  'himno/056.html',
  'himno/057.html',
  'himno/058.html',
  'himno/059.html',
  'himno/060.html',
  'himno/061.html',
  'himno/062.html',
  'himno/063.html',
  'himno/064.html',
  'himno/065.html',
  'himno/066.html',
  'himno/067.html',
  'himno/068.html',
  'himno/069.html',
  'himno/070.html',
  'himno/071.html',
  'himno/072.html',
  'himno/073.html',
  'himno/074.html',
  'himno/075.html',
  'himno/076.html',
  'himno/077.html',
  'himno/078.html',
  'himno/079.html',
  'himno/080.html',
  'himno/081.html',
  'himno/082.html',
  'himno/083.html',
  'himno/084.html',
  'himno/085.html',
  'himno/086.html',
  'himno/087.html',
  'himno/088.html',
  'himno/089.html',
  'himno/090.html',
  'himno/091.html',
  'himno/092.html',
  'himno/093.html',
  'himno/094.html',
  'himno/095.html',
  'himno/096.html',
  'himno/097.html',
  'himno/098.html',
  'himno/099.html',
  'himno/100.html',
  'himno/101.html',
  'himno/102.html',
  'himno/103.html',
  'himno/104.html',
  'himno/105.html',
  'himno/106.html',
  'himno/107.html',
  'himno/108.html',
  'himno/109.html',
  'himno/110.html',
  'himno/111.html',
  'himno/112.html',
  'himno/113.html',
  'himno/114.html',
  'himno/115.html',
  'himno/116.html',
  'himno/117.html',
  'himno/118.html',
  'himno/119.html',
  'himno/120.html',
  'himno/121.html',
  'himno/122.html',
  'himno/123.html',
  'himno/124.html',
  'himno/125.html',
  'himno/126.html',
  'himno/127.html',
  'himno/128.html',
  'himno/129.html',
  'himno/130.html',
  'himno/131.html',
  'himno/132.html',
  'himno/133.html',
  'himno/134.html',
  'himno/135.html',
  'himno/136.html',
  'himno/137.html',
  'himno/138.html',
  'himno/139.html',
  'himno/140.html',
  'himno/141.html',
  'himno/142.html',
  'himno/143.html',
  'himno/144.html',
  'himno/145.html',
  'himno/146.html',
  'himno/147.html',
  'himno/148.html',
  'himno/149.html',
  'himno/150.html',
  'himno/151.html',
  'himno/152.html',
  'himno/153.html',
  'himno/154.html',
  'himno/155.html',
  'himno/156.html',
  'himno/157.html',
  'himno/158.html',
  'himno/159.html',
  'himno/160.html',
  'himno/161.html',
  'himno/162.html',
  'himno/163.html',
  'himno/164.html',
  'himno/165.html',
  'himno/166.html',
  'himno/167.html',
  'himno/168.html',
  'himno/169.html',
  'himno/170.html',
  'himno/171.html',
  'himno/172.html',
  'himno/173.html',
  'himno/174.html',
  'himno/175.html',
  'himno/176.html',
  'himno/177.html',
  'himno/178.html',
  'himno/179.html',
  'himno/180.html',
  'himno/181.html',
  'himno/182.html',
  'himno/183.html',
  'himno/184.html',
  'himno/185.html',
  'himno/186.html',
  'himno/187.html',
  'himno/188.html',
  'himno/189.html',
  'himno/190.html',
  'himno/191.html',
  'himno/192.html',
  'himno/193.html',
  'himno/194.html',
  'himno/195.html',
  'himno/196.html',
  'himno/197.html',
  'himno/198.html',
  'himno/199.html',
  'himno/200.html',
  'himno/201.html',
  'himno/202.html',
  'himno/203.html',
  'himno/204.html',
  'himno/205.html',
  'himno/206.html',
  'himno/207.html',
  'himno/208.html',
  'himno/209.html',
  'himno/210.html',
  'himno/211.html',
  'himno/212.html',
  'himno/213.html',
  'himno/214.html',
  'himno/215.html',
  'himno/216.html',
  'himno/217.html',
  'himno/218.html',
  'himno/219.html',
  'himno/220.html',
  'himno/221.html',
  'himno/222.html',
  'himno/223.html',
  'himno/224.html',
  'himno/225.html',
  'himno/226.html',
  'himno/227.html',
  'himno/228.html',
  'himno/229.html',
  'himno/230.html',
  'himno/231.html',
  'himno/232.html',
  'himno/233.html',
  'himno/234.html',
  'himno/235.html',
  'himno/236.html',
  'himno/237.html',
  'himno/238.html',
  'himno/239.html',
  'himno/240.html',
  'himno/241.html',
  'himno/242.html',
  'himno/243.html',
  'himno/244.html',
  'himno/245.html',
  'himno/246.html',
  'himno/247.html',
  'himno/248.html',
  'himno/249.html',
  'himno/250.html',
  'himno/251.html',
  'himno/252.html',
  'himno/253.html',
  'himno/254.html',
  'himno/255.html',
  'himno/256.html',
  'himno/257.html',
  'himno/258.html',
  'himno/259.html',
  'himno/260.html',
  'himno/261.html',
  'himno/262.html',
  'himno/263.html',
  'himno/264.html',
  'himno/265.html',
  'himno/266.html',
  'himno/267.html',
  'himno/268.html',
  'himno/269.html',
  'himno/270.html',
  'himno/271.html',
  'himno/272.html',
  'himno/273.html',
  'himno/274.html',
  'himno/275.html',
  'himno/276.html',
  'himno/277.html',
  'himno/278.html',
  'himno/279.html',
  'himno/280.html',
  'himno/281.html',
  'himno/282.html',
  'himno/283.html',
  'himno/284.html',
  'himno/285.html',
  'himno/286.html',
  'himno/287.html',
  'himno/288.html',
  'himno/289.html',
  'himno/290.html',
  'himno/291.html',
  'himno/292.html',
  'himno/293.html',
  'himno/294.html',
  'himno/295.html',
  'himno/296.html',
  'himno/297.html',
  'himno/298.html',
  'himno/299.html',
  'himno/300.html',
  'himno/301.html',
  'himno/302.html',
  'himno/303.html',
  'himno/304.html',
  'himno/305.html',
  'himno/306.html',
  'himno/307.html',
  'himno/308.html',
  'himno/309.html',
  'himno/310.html',
  'himno/311.html',
  'himno/312.html',
  'himno/313.html',
  'himno/314.html',
  'himno/315.html',
  'himno/316.html',
  'himno/317.html',
  'himno/318.html',
  'himno/319.html',
  'himno/320.html',
  'himno/321.html',
  'himno/322.html',
  'himno/323.html',
  'himno/324.html',
  'himno/325.html',
  'himno/326.html',
  'himno/327.html',
  'himno/328.html',
  'himno/329.html',
  'himno/330.html',
  'himno/331.html',
  'himno/332.html',
  'himno/333.html',
  'himno/334.html',
  'himno/335.html',
  'himno/336.html',
  'himno/337.html',
  'himno/338.html',
  'himno/339.html',
  'himno/340.html',
  'himno/341.html',
  'himno/342.html',
  'himno/343.html',
  'himno/344.html',
  'himno/345.html',
  'himno/346.html',
  'himno/347.html',
  'himno/348.html',
  'himno/349.html',
  'himno/350.html',
  'himno/351.html',
  'himno/352.html',
  'himno/353.html',
  'himno/354.html',
  'himno/355.html',
  'himno/356.html',
  'himno/357.html',
  'himno/358.html',
  'himno/359.html',
  'himno/360.html',
  'himno/361.html',
  'himno/362.html',
  'himno/363.html',
  'himno/364.html',
  'himno/365.html',
  'himno/366.html',
  'himno/367.html',
  'himno/368.html',
  'himno/369.html',
  'himno/370.html',
  'himno/371.html',
  'himno/372.html',
  'himno/373.html',
  'himno/374.html',
  'himno/375.html',
  'himno/376.html',
  'himno/377.html',
  'himno/378.html',
  'himno/379.html',
  'himno/380.html',
  'himno/381.html',
  'himno/382.html',
  'himno/383.html',
  'himno/384.html',
  'himno/385.html',
  'himno/386.html',
  'himno/387.html',
  'himno/388.html',
  'himno/389.html',
  'himno/390.html',
  'himno/391.html',
  'himno/392.html',
  'himno/393.html',
  'himno/394.html',
  'himno/395.html',
  'himno/396.html',
  'himno/397.html',
  'himno/398.html',
  'himno/399.html',
  'himno/400.html',
  'himno/401.html',
  'himno/402.html',
  'himno/403.html',
  'himno/404.html',
  'himno/405.html',
  'himno/406.html',
  'himno/407.html',
  'himno/408.html',
  'himno/409.html',
  'himno/410.html',
  'himno/411.html',
  'himno/412.html',
  'himno/413.html',
  'himno/414.html',
  'himno/415.html',
  'himno/416.html',
  'himno/417.html',
  'himno/418.html',
  'himno/419.html',
  'himno/420.html',
  'himno/421.html',
  'himno/422.html',
  'himno/423.html',
  'himno/424.html',
  'himno/425.html',
  'himno/426.html',
  'himno/427.html',
  'himno/428.html',
  'himno/429.html',
  'himno/430.html',
  'himno/431.html',
  'himno/432.html',
  'himno/433.html',
  'himno/434.html',
  'himno/435.html',
  'himno/436.html',
  'himno/437.html',
  'himno/438.html',
  'himno/439.html',
  'himno/440.html',
  'himno/441.html',
  'himno/442.html',
  'himno/443.html',
  'himno/444.html',
  'himno/445.html',
  'himno/446.html',
  'himno/447.html',
  'himno/448.html',
  'himno/449.html',
  'himno/450.html',
  'himno/451.html',
  'himno/452.html',
  'himno/453.html',
  'himno/454.html',
  'himno/455.html',
  'himno/456.html',
  'himno/457.html',
  'himno/458.html',
  'himno/459.html',
  'himno/460.html',
  'himno/461.html',
  'himno/462.html',
  'himno/463.html',
  'himno/464.html',
  'himno/465.html',
  'himno/466.html',
  'himno/467.html',
  'himno/468.html',
  'himno/469.html',
  'himno/470.html',
  'himno/471.html',
  'himno/472.html',
  'himno/473.html',
  'himno/474.html',
  'himno/475.html',
  'himno/476.html',
  'himno/477.html',
  'himno/478.html',
  'himno/479.html',
  'himno/480.html',
  'himno/481.html',
  'himno/482.html',
  'himno/483.html',
  'himno/484.html',
  'himno/485.html',
  'himno/486.html',
  'himno/487.html',
  'himno/488.html',
  'himno/489.html',
  'himno/490.html',
  'himno/491.html',
  'himno/492.html',
  'himno/493.html',
  'himno/494.html',
  'himno/495.html',
  'himno/496.html',
  'himno/497.html',
  'himno/498.html',
  'himno/499.html',
  'himno/500.html',
  'himno/501.html',
  'himno/502.html',
  'himno/503.html',
  'himno/504.html',
  'himno/505.html',
  'himno/506.html',
  'himno/507.html',
  'himno/508.html',
  'himno/509.html',
  'himno/510.html',
  'himno/511.html',
  'himno/512.html',
  'himno/513.html',
  'himno/514.html',
  'himno/515.html',
  'himno/516.html',
  'himno/517.html',
  'himno/518.html',
  'himno/519.html',
  'himno/520.html',
  'himno/521.html',
  'himno/522.html',
  'himno/523.html',
  'himno/524.html',
  'himno/525.html',
  'himno/526.html',
  'himno/527.html',
  'himno/528.html',
  'himno/529.html',
  'himno/530.html',
  'himno/531.html',
  'himno/532.html',
  'himno/533.html',
  'himno/534.html',
  'himno/535.html',
  'himno/536.html',
  'himno/537.html',
  'himno/538.html',
  'himno/539.html',
  'himno/540.html',
  'himno/541.html',
  'himno/542.html',
  'himno/543.html',
  'himno/544.html',
  'himno/545.html',
  'himno/546.html',
  'himno/547.html',
  'himno/548.html',
  'himno/549.html',
  'himno/550.html',
  'himno/551.html',
  'himno/552.html',
  'himno/553.html',
  'himno/554.html',
  'himno/555.html',
  'himno/556.html',
  'himno/557.html',
  'himno/558.html',
  'himno/559.html',
  'himno/560.html',
  'himno/561.html',
  'himno/562.html',
  'himno/563.html',
  'himno/564.html',
  'himno/565.html',
  'himno/566.html',
  'himno/567.html',
  'himno/568.html',
  'himno/569.html',
  'himno/570.html',
  'himno/571.html',
  'himno/572.html',
  'himno/573.html',
  'himno/574.html',
  'himno/575.html',
  'himno/576.html',
  'himno/577.html',
  'himno/578.html',
  'himno/579.html',
  'himno/580.html',
  'himno/581.html',
  'himno/582.html',
  'himno/583.html',
  'himno/584.html',
  'himno/585.html',
  'himno/586.html',
  'himno/587.html',
  'himno/588.html',
  'himno/589.html',
  'himno/590.html',
  'himno/591.html',
  'himno/592.html',
  'himno/593.html',
  'himno/594.html',
  'himno/595.html',
  'himno/596.html',
  'himno/597.html',
  'himno/598.html',
  'himno/599.html',
  'himno/600.html',
  'himno/601.html',
  'himno/602.html',
  'himno/603.html',
  'himno/604.html',
  'himno/605.html',
  'himno/606.html',
  'himno/607.html',
  'himno/608.html',
  'himno/609.html',
  'himno/610.html',
  'himno/611.html',
  'himno/612.html',
  'himno/613.html',
  'himno/614.html',
  'himno/615.html',
  'himno/616.html',
  'himno/617.html',
  'himno/618.html',
  'himno/619.html',
  'himno/620.html',
  'himno/621.html',
  'himno/622.html',
  'himno/623.html',
  'himno/624.html',
  'himno/625.html',
  'himno/626.html',
  'himno/627.html',
  'himno/628.html',
  'himno/629.html',
  'himno/630.html',
  'himno/631.html',
  'himno/632.html',
  'himno/633.html',
  'himno/634.html',
  'himno/635.html',
  'himno/636.html',
  'himno/637.html',
  'himno/638.html',
  'himno/639.html',
  'himno/640.html',
  'himno/641.html',
  'himno/642.html',
  'himno/643.html',
  'himno/644.html',
  'himno/645.html',
  'himno/646.html',
  'himno/647.html',
  'himno/648.html',
  'himno/649.html',
  'himno/650.html',
  'himno/651.html',
  'himno/652.html',
  'himno/653.html',
  'himno/654.html',
  'himno/655.html',
  'himno/656.html',
  'himno/657.html',
  'himno/658.html',
  'himno/659.html',
  'himno/660.html',
  'himno/661.html',
  'himno/662.html',
  'himno/663.html',
  'himno/664.html',
  'himno/665.html',
  'himno/666.html',
  'himno/667.html',
  'himno/668.html',
  'himno/669.html',
  'himno/670.html',
  'himno/671.html',
  'himno/672.html',
  'himno/673.html',
  'himno/674.html',
  'himno/675.html',
  'himno/676.html',
  'himno/677.html',
  'himno/678.html',
  'himno/679.html',
  'himno/680.html',
  'himno/681.html',
  'himno/682.html',
  'himno/683.html',
  'himno/684.html',
  'himno/685.html',
  'himno/686.html',
  'himno/687.html',
  'himno/688.html',
  'himno/689.html',
  'himno/690.html',
  'himno/691.html',
  'himno/692.html',
  'himno/693.html',
  'himno/694.html',
  'himno/695.html',
  'himno/696.html',
  'himno/697.html',
  'himno/698.html',
  'himno/699.html',
  'himno/700.html',
  'himno/701.html',
  'himno/702.html',
  'himno/703.html',
  'himno/704.html',
  'himno/705.html',
  'himno/706.html'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
  e.waitUntil(
    caches.open(himnosCache).then(function(cache) {
      console.log('[ServiceWorker] Caching HimnosOffline');
      return cache.addAll(files_Himnos);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== himnosCache && key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  /*
   * Fixes a corner case in which the app wasn't returning the latest data.
   * You can reproduce the corner case by commenting out the line below and
   * then doing the following steps: 1) load app for first time so that the
   * initial New York City data is shown 2) press the refresh button on the
   * app 3) go offline 4) reload the app. You expect to see the newer NYC
   * data, but you actually see the initial data. This happens because the
   * service worker is not yet activated. The code below essentially lets
   * you activate the service worker faster.
   */
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch', e.request.url);

    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
});
