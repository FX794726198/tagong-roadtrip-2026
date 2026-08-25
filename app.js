const dayColors = {
  1: "#d28c35",
  2: "#2f7b62",
  3: "#3b7198",
};

const dayInfo = {
  all: {
    label: "全程总览",
    route: "成都武侯 → 雅安 → 康定 → 塔公 → 新都桥 → 折多山 → 成都",
    km: "约 742 km",
    drive: "3天 / 2晚",
    rule: "8/30 19:00前抵达",
  },
  1: {
    label: "Day 1 · 8月28日 周五",
    route: "成都武侯 → 雅安",
    km: "约 140 km",
    drive: "计划 2.5小时",
    rule: "不夜翻高山",
  },
  2: {
    label: "Day 2 · 8月29日 周六",
    route: "雅安 → 康定 → S434 → 塔公 → 新都桥",
    km: "约 256 km",
    drive: "驾驶约 6.5小时",
    rule: "塔公留足 2.5小时",
  },
  3: {
    label: "Day 3 · 8月30日 周日",
    route: "新都桥 → 折多山 → 康定 → 成都武侯",
    km: "约 345 km",
    drive: "驾驶约 7.5小时",
    rule: "11:30离开康定",
  },
};

const places = {
  wuhou: { name: "成都武侯", lat: 30.6442131, lon: 104.0406683, search: "成都武侯区" },
  yaan: { name: "雅安住宿区", lat: 29.981, lon: 103.003, search: "雅安时代天街亚朵酒店" },
  kangding: { name: "康定城区", lat: 30.05, lon: 101.961, search: "康定市区" },
  honghaizi: { name: "红海子", lat: 30.1843367, lon: 101.7753818, search: "康定红海子" },
  tagong: { name: "塔公寺 / 塔公草原", lat: 30.3214308, lon: 101.5206557, search: "塔公草原" },
  xinduqiao: { name: "新都桥住宿区", lat: 30.0467, lon: 101.4918, search: "全季酒店康定新都桥G318店" },
  zheduo: { name: "折多山口", lat: 30.0743411, lon: 101.8040657, search: "折多山口" },
};

const markerStops = [
  { key: "wuhou", label: "A", days: [1, 3], note: "8/28 18:00出发 · 8/30计划16:20返回" },
  { key: "yaan", label: "B", days: [1, 2, 3], note: "第一晚住宿 · 返程通过" },
  { key: "kangding", label: "C", days: [2, 3], note: "午餐、加油与返程硬截止点" },
  { key: "honghaizi", label: "D", days: [2], note: "天气许可时最多停25分钟" },
  { key: "tagong", label: "E", days: [2], note: "核心目的地 · 14:10—17:00" },
  { key: "xinduqiao", label: "F", days: [2, 3], note: "第二晚住宿 · 次日08:00出发" },
  { key: "zheduo", label: "G", days: [3], note: "最多停25分钟；雨雾直接通过" },
];

const schedule = [
  {
    day: 1,
    title: "Day 1",
    date: "8月28日 · 周五",
    note: "海拔缓升 · 只负责抵达雅安",
    events: [
      { time: "18:00", title: "武侯区准时出发", detail: "下班时段先把城区拥堵计算进去。出发前完成加油，不在市区临时补给。", place: "wuhou", badge: "出发" },
      { time: "18:40", title: "进入成雅高速主路", detail: "保持右侧安全车距；若导航显示雅安到达晚于21:00，提前电话告知酒店。", badge: "行车" },
      { time: "19:30", title: "蒲江 / 名山方向短休", detail: "仅在驾驶员需要时休息10—15分钟。雨夜不赶时间、不连续变道。", badge: "可选休息" },
      { time: "20:30", title: "抵达雅安住宿区", detail: "先停车再步行吃饭；不再安排上里古镇等夜间景点。", place: "yaan", badge: "计划抵达" },
      { time: "20:40", title: "晚餐", detail: "选择清淡、容易消化的正餐，补水但不饮酒。", badge: "45分钟" },
      { time: "21:30", title: "入住并整理第二天装备", detail: "雨衣、防寒层和相机放到随手可取处；确认次日07:20早餐。", place: "yaan", badge: "住宿" },
    ],
  },
  {
    day: 2,
    title: "Day 2",
    date: "8月29日 · 周六",
    note: "核心日 · S434与塔公",
    events: [
      { time: "07:20", title: "早餐、退房", detail: "吃正常早餐，不空腹上高原；在酒店完成洗手间和饮水补给。", place: "yaan", badge: "40分钟" },
      { time: "08:00", title: "雅安出发", detail: "沿雅叶高速前往康定。导航基准较短，但按周末、雨天和服务区停留放宽。", place: "yaan", badge: "准时点" },
      { time: "09:30", title: "天全 / 泸定方向短休", detail: "驾驶员活动10—20分钟。若路况延误超过30分钟，康定午餐改为快速简餐。", badge: "20分钟" },
      { time: "10:50", title: "抵达康定：午餐 + 加油", detail: "车辆加满或保证充分续航；人在低一些的海拔先吃饭，不把午餐拖到塔公。", place: "kangding", badge: "40分钟" },
      { time: "11:30", title: "驶入 S434 机场路", detail: "当天最重要的新路线。山区导航时间不等于实际用时，给施工、会车和正规停车留余量。", place: "kangding", badge: "新路 79%" },
      { time: "12:50", title: "红海子天气窗口", detail: "有车位、无浓雾且身体正常才停，最多25分钟；不在道路两侧随意停车。", place: "honghaizi", badge: "可删景点" },
      { time: "14:10", title: "抵达塔公", detail: "先找正规停车位并休息10分钟，不下车就快走。", place: "tagong", badge: "核心抵达" },
      { time: "14:30", title: "塔公草原缓步与拍摄", detail: "草原边缘—寺庙外观—雅拉雪山方向；每15—20分钟停一次，观察高反。", place: "tagong", badge: "90分钟" },
      { time: "16:00", title: "塔公寺与镇上补给", detail: "先问殿内拍摄规则；骑马须确认路线、时长和总价。16:40开始往停车点回收。", place: "tagong", badge: "60分钟" },
      { time: "17:00", title: "离开塔公前往新都桥", detail: "G248约36公里是本次唯一完全重复的川西景观段；不再绕八美。", place: "tagong", badge: "硬离开" },
      { time: "17:55", title: "入住新都桥全季", detail: "天气好且仍有精力，只在酒店附近正规位置看十几分钟黄昏；否则直接入住。", place: "xinduqiao", badge: "住宿" },
      { time: "18:30", title: "晚餐与休息", detail: "不饮酒，只做轻度活动，20:00后不再开车。若症状持续加重，立即执行康定下撤方案。", place: "xinduqiao", badge: "高反观察" },
    ],
  },
  {
    day: 3,
    title: "Day 3",
    date: "8月30日 · 周日",
    note: "返程日 · 折多山新路",
    events: [
      { time: "07:20", title: "早餐、退房", detail: "再次查看折多山天气和交通状态。若头痛加重，取消山口停留并直接下降。", place: "xinduqiao", badge: "40分钟" },
      { time: "08:00", title: "沿 G318 准时出发", detail: "新都桥至康定约92%是历史未走过路线；不插入额外观景台。", place: "xinduqiao", badge: "新路 92%" },
      { time: "09:15", title: "折多山口短停窗口", detail: "停车区开放、有空位、能见度正常才停，最多25分钟；排队或雨雾直接通过。", place: "zheduo", badge: "最多25分钟" },
      { time: "09:40", title: "开始下山", detail: "长下坡控制车速与跟车距离，不长时间踩住刹车。", place: "zheduo", badge: "下山" },
      { time: "10:50", title: "康定提前午餐、加油", detail: "餐食控制在40分钟内。此后不再增加景点。", place: "kangding", badge: "40分钟" },
      { time: "11:30", title: "必须离开康定", detail: "这是守住19:00硬截止的关键节点；即使上午顺利也不延后。", place: "kangding", badge: "硬截止", hard: true },
      { time: "13:30", title: "雅安方向服务区休息", detail: "休息约20分钟，驾驶员状态不佳时及时换人，不拿返程缓冲换疲劳驾驶。", badge: "20分钟" },
      { time: "16:20", title: "计划抵达成都武侯", detail: "较19:00保留约2小时40分。抵达后结束行程，不把缓冲再用于临时景点。", place: "wuhou", badge: "计划抵达" },
      { time: "19:00", title: "硬性最晚到达时间", detail: "若途中累计延误接近2小时，取消所有非必要停车，仅保留驾驶员安全休息。", place: "wuhou", badge: "不可突破", hard: true },
    ],
  },
];

let selectedDay = "all";
let mapMode = "day";
let map;
let routeData;
let routeLayer;
let markerLayer;

function repeatColor(value) {
  if (value <= 30) return "#2f8c68";
  if (value <= 70) return "#d39a3d";
  return "#b7513d";
}

function amapSearch(place) {
  return `https://uri.amap.com/search?keyword=${encodeURIComponent(place.search)}&city=四川&view=map&src=tagong-roadtrip`;
}

function routePopup(properties) {
  return `
    <strong class="popup-title">${properties.name}</strong>
    <div class="popup-meta">
      ${properties.road}<br />
      约 ${properties.distanceKm} km · 行程预算 ${properties.plannedHours} 小时<br />
      历史轨迹重复约 ${properties.repeatPct}%
    </div>
  `;
}

function markerPopup(stop) {
  const place = places[stop.key];
  return `
    <strong class="popup-title">${place.name}</strong>
    <div class="popup-meta">${stop.note}</div>
    <a class="popup-nav" href="${amapSearch(place)}" target="_blank" rel="noreferrer">在高德地图搜索 →</a>
  `;
}

function makeMarkerIcon(stop) {
  const day = stop.days.length === 1 ? stop.days[0] : Math.min(...stop.days);
  return L.divIcon({
    className: "route-pin-wrap",
    html: `<div class="route-pin day-${day}"><span>${stop.label}</span></div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 29],
    popupAnchor: [0, -30],
  });
}

function featureStyle(feature) {
  const p = feature.properties;
  const color = mapMode === "day" ? dayColors[p.day] : repeatColor(p.repeatPct);
  return {
    color,
    weight: selectedDay === "all" ? 6 : 7,
    opacity: 0.92,
    lineCap: "round",
    lineJoin: "round",
  };
}

function renderLegend() {
  const legend = document.getElementById("map-legend");
  if (mapMode === "day") {
    legend.innerHTML = [1, 2, 3]
      .map((day) => `<span class="legend-item"><i class="legend-line" style="background:${dayColors[day]}"></i>Day ${day}</span>`)
      .join("");
  } else {
    legend.innerHTML = `
      <span class="legend-item"><i class="legend-line" style="background:#2f8c68"></i>重复 ≤30% · 较新</span>
      <span class="legend-item"><i class="legend-line" style="background:#d39a3d"></i>重复 30—70%</span>
      <span class="legend-item"><i class="legend-line" style="background:#b7513d"></i>重复 ≥70% · 已走过</span>
    `;
  }
}

function renderMapLayers({ fit = true } = {}) {
  if (!map || !routeData) return;

  if (routeLayer) routeLayer.remove();
  if (markerLayer) markerLayer.remove();

  routeLayer = L.geoJSON(routeData, {
    filter: (feature) => selectedDay === "all" || String(feature.properties.day) === selectedDay,
    style: featureStyle,
    onEachFeature: (feature, layer) => {
      layer.bindPopup(routePopup(feature.properties));
      layer.on({
        mouseover: () => layer.setStyle({ weight: 10, opacity: 1 }),
        mouseout: () => routeLayer.resetStyle(layer),
      });
    },
  }).addTo(map);

  markerLayer = L.layerGroup();
  markerStops
    .filter((stop) => selectedDay === "all" || stop.days.includes(Number(selectedDay)))
    .forEach((stop) => {
      const place = places[stop.key];
      L.marker([place.lat, place.lon], { icon: makeMarkerIcon(stop), title: place.name })
        .bindPopup(markerPopup(stop))
        .addTo(markerLayer);
    });
  markerLayer.addTo(map);

  if (fit && routeLayer.getBounds().isValid()) {
    map.fitBounds(routeLayer.getBounds(), { padding: [28, 28], maxZoom: selectedDay === "all" ? 8 : 10 });
  }
  renderLegend();
}

function renderSummary() {
  const info = dayInfo[selectedDay];
  document.getElementById("day-summary").innerHTML = `
    <div><span>当前路线</span><strong>${info.label}<br />${info.route}</strong></div>
    <div><span>里程</span><strong>${info.km}</strong></div>
    <div><span>驾驶节奏</span><strong>${info.drive}</strong></div>
    <div><span>执行重点</span><strong>${info.rule}</strong></div>
  `;
}

function renderTimeline() {
  const visibleDays = schedule.filter((day) => selectedDay === "all" || String(day.day) === selectedDay);
  document.getElementById("timeline").innerHTML = visibleDays
    .map(
      (day) => `
        <section class="timeline-day" aria-labelledby="timeline-day-${day.day}">
          <div class="day-label">
            <strong id="timeline-day-${day.day}">${day.title}</strong>
            <span>${day.date}</span>
            <small>${day.note}</small>
          </div>
          <div class="timeline-events">
            ${day.events
              .map((event) => {
                const place = event.place ? places[event.place] : null;
                return `
                  <article class="timeline-event">
                    <time class="event-time">${event.time}</time>
                    <div class="event-content">
                      <strong>${event.title}</strong>
                      <p>${event.detail}</p>
                      ${
                        place
                          ? `<button class="event-map" type="button" data-day="${day.day}" data-lat="${place.lat}" data-lon="${place.lon}" data-zoom="${event.place === "wuhou" ? 12 : 13}">地图定位 ↗</button>`
                          : ""
                      }
                    </div>
                    <span class="event-badge${event.hard ? " hard" : ""}">${event.badge}</span>
                  </article>
                `;
              })
              .join("")}
          </div>
        </section>
      `,
    )
    .join("");

  document.querySelectorAll(".event-map").forEach((button) => {
    button.addEventListener("click", () => {
      const day = button.dataset.day;
      if (selectedDay !== day) setSelectedDay(day, false);
      focusMap(Number(button.dataset.lat), Number(button.dataset.lon), Number(button.dataset.zoom));
    });
  });
}

function updateDayButtons() {
  document.querySelectorAll("#day-filter button").forEach((button) => {
    const active = button.dataset.day === selectedDay;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function setSelectedDay(day, fit = true) {
  selectedDay = String(day);
  updateDayButtons();
  renderSummary();
  renderTimeline();
  renderMapLayers({ fit });
}

function focusMap(lat, lon, zoom = 13) {
  if (!map) return;
  document.getElementById("route").scrollIntoView({ behavior: "smooth", block: "start" });
  window.setTimeout(() => {
    map.flyTo([lat, lon], zoom, { duration: 0.9 });
  }, 280);
}

async function initMap() {
  if (!window.L) {
    document.getElementById("map-loading").textContent = "地图组件未能加载，请检查网络；下方时间线仍可正常使用。";
    return;
  }

  map = L.map("map", { zoomControl: true, scrollWheelZoom: false, preferCanvas: true }).setView([30.25, 102.5], 8);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  try {
    const response = await fetch("./routes.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    routeData = await response.json();
    renderMapLayers();
    document.getElementById("map-loading").classList.add("hidden");
  } catch (error) {
    console.error(error);
    document.getElementById("map-loading").textContent = "路线数据未能载入，请刷新页面；小时级行程仍可使用。";
  }
}

function initControls() {
  document.querySelectorAll("#day-filter button").forEach((button) => {
    button.addEventListener("click", () => setSelectedDay(button.dataset.day));
  });

  document.querySelectorAll("#map-mode button").forEach((button) => {
    button.addEventListener("click", () => {
      mapMode = button.dataset.mode;
      document.querySelectorAll("#map-mode button").forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      renderMapLayers({ fit: false });
    });
  });

  document.querySelectorAll(".map-jump").forEach((button) => {
    button.addEventListener("click", () => focusMap(Number(button.dataset.lat), Number(button.dataset.lon), Number(button.dataset.zoom)));
  });

  document.getElementById("print-plan").addEventListener("click", () => window.print());
}

function initChecklist() {
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem("tagong-trip-checklist") || "{}");
  } catch {
    saved = {};
  }

  document.querySelectorAll("#checklist input").forEach((input) => {
    input.checked = Boolean(saved[input.dataset.check]);
    input.addEventListener("change", () => {
      saved[input.dataset.check] = input.checked;
      try {
        localStorage.setItem("tagong-trip-checklist", JSON.stringify(saved));
      } catch {
        // The checklist remains usable even when storage is unavailable.
      }
    });
  });
}

renderSummary();
renderTimeline();
initControls();
initChecklist();
initMap();
