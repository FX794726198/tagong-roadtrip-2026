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
  wuhou: {
    name: "成都武侯",
    lat: 30.6442131,
    lon: 104.0406683,
    search: "成都武侯区",
    kicker: "起点 / 终点",
    time: "8/28 18:00出发 · 8/30计划16:20返回",
    altitude: "低海拔",
    description: "在城区完成加油、饮水和行李整理。返程日把这里当作唯一终点，不再用缓冲时间增加景点。",
    tips: ["18:00准时出发", "8/30最晚19:00抵达", "返程缓冲约2小时40分"],
  },
  yaan: {
    name: "雅安住宿区",
    lat: 29.981,
    lon: 103.003,
    search: "雅安时代天街亚朵酒店",
    kicker: "第一晚住宿",
    time: "8/28 20:30抵达 · 8/29 08:00离开",
    altitude: "缓升适应",
    description: "首晚停在雅安，避免夜间继续翻越高山。停车后再步行晚餐，次日早餐、退房、补水一次完成。",
    tips: ["不加夜间景点", "确认停车与早餐", "晚到提前联系酒店"],
  },
  kangding: {
    name: "康定城区",
    lat: 30.05,
    lon: 101.961,
    search: "康定市区",
    kicker: "补给与硬截止点",
    time: "8/29午餐加油 · 8/30 11:30必须离开",
    altitude: "约2,560 m",
    description: "上高原前在这里吃午餐并加足油；返程时再次提前午餐。11:30离开康定是守住19:00回成都的关键节点。",
    tips: ["先吃饭再上高原", "车辆保证充分续航", "返程11:30硬离开"],
  },
  honghaizi: {
    name: "红海子",
    lat: 30.1843367,
    lon: 101.7753818,
    search: "康定红海子",
    kicker: "天气窗口 / 可删除",
    time: "8/29约12:50 · 最多25分钟",
    altitude: "高海拔路段",
    description: "只有停车位充足、无浓雾且身体状态正常才停。它是当天第一个应删的景点，不能挤占塔公时间。",
    tips: ["不在行车道边停车", "浓雾或拥堵直接通过", "任何不适立即缩短停留"],
  },
  tagong: {
    name: "塔公寺 / 塔公草原",
    lat: 30.3214308,
    lon: 101.5206557,
    search: "塔公草原",
    kicker: "核心目的地",
    time: "8/29 14:10—17:00",
    altitude: "约3,730 m",
    image: "./tagong-grassland.webp",
    description: "先停车休息，再沿草原边缘缓步。把光线好的时间留给草甸、经幡、塔公寺金顶与雅拉雪山方向。",
    tips: ["每15—20分钟停一次", "骑马先确认总价和时长", "16:40开始往停车点回收"],
  },
  xinduqiao: {
    name: "新都桥住宿区",
    lat: 30.0467,
    lon: 101.4918,
    search: "全季酒店康定新都桥G318店",
    kicker: "第二晚住宿",
    time: "8/29约17:55抵达 · 8/30 08:00离开",
    altitude: "约3,460 m",
    image: "./xinduqiao.webp",
    description: "优先办理入住和吃饭。天气好且没有高反时，只在酒店附近正规位置看短暂黄昏，不再远距离追光。",
    tips: ["优先全季或同档次", "20:00后不再开车", "症状加重立即向康定下撤"],
  },
  zheduo: {
    name: "折多山口",
    lat: 30.0743411,
    lon: 101.8040657,
    search: "折多山口",
    kicker: "返程观景窗口",
    time: "8/30约09:15 · 最多25分钟",
    altitude: "约4,298 m",
    image: "./zheduo-pass.webp",
    description: "停车区开放、有空位、能见度正常才停。雨雾、排队或身体不适时直接通过，把时间留给安全下山。",
    tips: ["出发前重查天气路况", "雨雾直接通过", "长下坡控制车速"],
  },
};

const markerStops = [
  { key: "wuhou", label: "1", days: [1, 3], note: "起终点" },
  { key: "yaan", label: "2", days: [1, 2, 3], note: "第一晚" },
  { key: "kangding", label: "3", days: [2, 3], note: "补给点" },
  { key: "honghaizi", label: "4", days: [2], note: "可删景点" },
  { key: "tagong", label: "5", days: [2], note: "核心目的地" },
  { key: "xinduqiao", label: "6", days: [2, 3], note: "第二晚" },
  { key: "zheduo", label: "7", days: [3], note: "短停窗口" },
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

const initialDay = new URLSearchParams(window.location.search).get("day");
let selectedDay = ["1", "2", "3"].includes(initialDay) ? initialDay : "all";
let mapMode = "day";
let map;
let routeData = window.ROUTE_DATA || null;
let allRouteBounds;
let currentPositionLayer;
let activeStopKey = null;
const routeRecords = [];
const markerByKey = new Map();
const dayRouteOffsets = { 1: -5.5, 2: 0, 3: 5.5 };

function escapeHTML(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

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
    <strong class="popup-title">${escapeHTML(properties.name)}</strong>
    <div class="popup-meta">
      ${escapeHTML(properties.road)}<br />
      约 ${properties.distanceKm} km · 行程预算 ${properties.plannedHours} 小时<br />
      历史轨迹500米范围重复约 ${properties.repeatPct}%
    </div>
  `;
}

function makeMarkerIcon(stop) {
  const day = stop.days.length === 1 ? stop.days[0] : Math.min(...stop.days);
  return L.divIcon({
    className: "route-pin-wrap",
    html: `<div class="route-pin day-${day}"><span>${stop.label}</span></div>`,
    iconSize: [38, 38],
    iconAnchor: [19, 34],
    tooltipAnchor: [0, -27],
  });
}

function visibleStops() {
  return markerStops.filter((stop) => selectedDay === "all" || stop.days.includes(Number(selectedDay)));
}

function renderLegend() {
  const legend = document.getElementById("map-legend");
  if (mapMode === "day") {
    legend.innerHTML = [1, 2, 3]
      .map((day) => `<span class="legend-item"><i class="legend-line${day === 3 ? " is-return" : ""}" style="--legend-color:${dayColors[day]}"></i>Day ${day}${day === 3 ? " · 返程" : ""}</span>`)
      .join("") + (selectedDay === "all"
        ? '<span class="legend-note">重合路段已左右分轨；蓝色虚线表示返程，位置偏移仅用于辨认</span>'
        : "");
  } else {
    legend.innerHTML = `
      <span class="legend-item"><i class="legend-line" style="background:#2f8c68"></i>新路 ≤30%</span>
      <span class="legend-item"><i class="legend-line" style="background:#d39a3d"></i>部分重复</span>
      <span class="legend-item"><i class="legend-line" style="background:#b7513d"></i>已走过 ≥70%</span>
    `;
  }
}

function renderMapStatus() {
  const info = dayInfo[selectedDay];
  const count = visibleStops().length;
  document.getElementById("map-status-label").textContent = info.label;
  document.getElementById("map-status-meta").textContent = `${info.km} · ${count}个关键节点${selectedDay === "all" ? " · 重合段已分轨" : ""}`;
}

function renderStopStrip() {
  const strip = document.getElementById("map-stop-strip");
  strip.innerHTML = visibleStops()
    .map((stop) => {
      const place = places[stop.key];
      return `
        <button type="button" data-map-stop="${stop.key}" class="${activeStopKey === stop.key ? "is-active" : ""}">
          <span>${stop.label}</span>
          <strong>${escapeHTML(place.name)}</strong>
          <small>${escapeHTML(stop.note)}</small>
        </button>
      `;
    })
    .join("");
  strip.querySelectorAll("[data-map-stop]").forEach((button) => {
    button.addEventListener("click", () => openPlace(button.dataset.mapStop));
  });
}

function getActiveBounds() {
  const records = routeRecords.filter(
    (record) => selectedDay === "all" || String(record.properties.day) === selectedDay,
  );
  if (!records.length) return allRouteBounds;
  const bounds = L.latLngBounds([]);
  records.forEach((record) => bounds.extend(record.route.getBounds()));
  return bounds;
}

function canonicalCoordinates(latLngs) {
  const first = latLngs[0];
  const last = latLngs[latLngs.length - 1];
  const reverse = first.lat > last.lat || (first.lat === last.lat && first.lng > last.lng);
  return { coordinates: reverse ? [...latLngs].reverse() : latLngs, reverse };
}

function offsetCoordinates(latLngs, offsetPixels) {
  if (!map || !offsetPixels || latLngs.length < 2) return latLngs;
  const oriented = canonicalCoordinates(latLngs);
  const zoom = map.getZoom();
  const points = oriented.coordinates.map((latLng) => map.project(latLng, zoom));
  const normals = [];

  for (let index = 0; index < points.length - 1; index += 1) {
    const dx = points[index + 1].x - points[index].x;
    const dy = points[index + 1].y - points[index].y;
    const length = Math.hypot(dx, dy) || 1;
    normals.push({ x: -dy / length, y: dx / length });
  }

  const shifted = points.map((point, index) => {
    const previous = normals[Math.max(0, index - 1)];
    const next = normals[Math.min(normals.length - 1, index)];
    let nx = previous.x + next.x;
    let ny = previous.y + next.y;
    let normalLength = Math.hypot(nx, ny);
    if (normalLength < 0.15) {
      nx = next.x;
      ny = next.y;
      normalLength = 1;
    }
    nx /= normalLength;
    ny /= normalLength;
    const denominator = Math.max(0.35, Math.abs(nx * next.x + ny * next.y));
    const miter = Math.sign(offsetPixels) * Math.min(
      Math.abs(offsetPixels / denominator),
      Math.abs(offsetPixels) * 2,
    );
    return map.unproject(L.point(point.x + nx * miter, point.y + ny * miter), zoom);
  });

  return oriented.reverse ? shifted.reverse() : shifted;
}

function applyRouteOffsets(force = false) {
  if (!map) return;
  routeRecords.forEach((record) => {
    const offset = selectedDay === "all" ? dayRouteOffsets[record.properties.day] : 0;
    const key = `${map.getZoom()}:${offset}`;
    if (!force && record.offsetKey === key) return;
    record.route.setLatLngs(offsetCoordinates(record.originalCoordinates, offset));
    record.outline.setLatLngs(offsetCoordinates(record.originalCoordinates, offset));
    record.offsetKey = key;
  });
}

function fitActiveRoute() {
  if (!map) return;
  const bounds = getActiveBounds();
  if (!bounds?.isValid()) return;
  map.fitBounds(bounds, {
    paddingTopLeft: [28, 96],
    paddingBottomRight: [28, 112],
    maxZoom: selectedDay === "all" ? 8 : 10,
  });
}

function updateMapLayers({ fit = false } = {}) {
  if (!map || !routeRecords.length) return;
  applyRouteOffsets();
  const allDays = selectedDay === "all";
  routeRecords.forEach((record) => {
    const isSelected = selectedDay === "all" || String(record.properties.day) === selectedDay;
    const color = mapMode === "day"
      ? dayColors[record.properties.day]
      : repeatColor(record.properties.repeatPct);
    record.route.setStyle({
      color,
      weight: isSelected ? (allDays ? 4.5 : 6) : 3,
      opacity: isSelected ? 0.96 : 0.11,
      dashArray: allDays && record.properties.day === 3 ? "11 7" : "",
    });
    record.outline.setStyle({
      weight: isSelected ? (allDays ? 7 : 10) : 6,
      opacity: isSelected ? (allDays ? 0.62 : 0.76) : 0.02,
    });
    if (isSelected) record.route.bringToFront();
  });
  markerStops.forEach((stop) => {
    const isSelected = selectedDay === "all" || stop.days.includes(Number(selectedDay));
    const marker = markerByKey.get(stop.key);
    marker?.setOpacity(isSelected ? 1 : 0.16);
    marker?.setZIndexOffset(isSelected ? 500 : 0);
  });
  renderLegend();
  renderMapStatus();
  renderStopStrip();
  if (fit) fitActiveRoute();
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
                          ? `<button class="event-map" type="button" data-day="${day.day}" data-place="${event.place}" data-lat="${place.lat}" data-lon="${place.lon}" data-zoom="${event.place === "wuhou" ? 12 : 13}">地图定位 ↗</button>`
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
      focusMap(Number(button.dataset.lat), Number(button.dataset.lon), Number(button.dataset.zoom), button.dataset.place);
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
  selectedDay = ["1", "2", "3"].includes(String(day)) ? String(day) : "all";
  updateDayButtons();
  renderSummary();
  renderTimeline();
  updateMapLayers({ fit });
  const url = new URL(window.location.href);
  if (selectedDay === "all") url.searchParams.delete("day");
  else url.searchParams.set("day", selectedDay);
  url.searchParams.delete("stop");
  history.replaceState({}, "", url);
}

function focusMap(lat, lon, zoom = 13, placeKey = null) {
  if (!map) return;
  if (!document.querySelector(".map-card.is-map-fullscreen")) {
    document.getElementById("route").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  window.setTimeout(() => {
    map.flyTo([lat, lon], zoom, { duration: 0.9 });
    if (placeKey) openPlace(placeKey, { move: false });
  }, 280);
}

function openPlace(key, options = {}) {
  const place = places[key];
  const stop = markerStops.find((item) => item.key === key);
  if (!place || !stop) return;
  activeStopKey = key;
  renderStopStrip();
  const drawer = document.getElementById("map-place-drawer");
  const backdrop = document.getElementById("map-drawer-backdrop");
  document.getElementById("map-drawer-content").innerHTML = `
    ${place.image ? `<img class="map-drawer-image" src="${place.image}" alt="${escapeHTML(place.name)}" />` : `<div class="map-drawer-placeholder"><span>${stop.label}</span></div>`}
    <div class="map-drawer-body">
      <div class="map-drawer-eyebrow"><span>节点 ${stop.label}</span><span>${escapeHTML(place.kicker)}</span></div>
      <h3>${escapeHTML(place.name)}</h3>
      <div class="map-drawer-metrics"><span>${escapeHTML(place.time)}</span><span>${escapeHTML(place.altitude)}</span></div>
      <p>${escapeHTML(place.description)}</p>
      <ul>${place.tips.map((tip) => `<li>${escapeHTML(tip)}</li>`).join("")}</ul>
      <div class="map-drawer-actions">
        <a href="${amapSearch(place)}" target="_blank" rel="noreferrer">高德导航 ↗</a>
        <button type="button" data-drawer-day="${stop.days[0]}">查看当天行程</button>
      </div>
    </div>
  `;
  backdrop.hidden = false;
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("map-drawer-open");
  requestAnimationFrame(() => drawer.classList.add("is-open"));
  drawer.querySelector("[data-drawer-day]").addEventListener("click", (event) => {
    setSelectedDay(event.currentTarget.dataset.drawerDay, true);
    closePlaceDrawer();
    document.getElementById("timeline").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  if (options.move !== false && map) map.flyTo([place.lat, place.lon], key === "wuhou" ? 12 : 13, { duration: 0.8 });
  const url = new URL(window.location.href);
  url.searchParams.set("stop", key);
  history.replaceState({}, "", url);
}

function closePlaceDrawer() {
  const drawer = document.getElementById("map-place-drawer");
  const backdrop = document.getElementById("map-drawer-backdrop");
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("map-drawer-open");
  activeStopKey = null;
  renderStopStrip();
  window.setTimeout(() => { backdrop.hidden = true; }, 260);
  const url = new URL(window.location.href);
  url.searchParams.delete("stop");
  history.replaceState({}, "", url);
}

function createTileLayers() {
  const imagery = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      maxZoom: 19,
      attribution: "Tiles © Esri — Sources: Esri, Maxar, Earthstar Geographics",
    },
  );
  const labels = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
    { maxZoom: 19, attribution: "Labels © Esri" },
  );
  const terrain = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
    { maxZoom: 19, attribution: "Topographic map © Esri" },
  );
  const roads = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap contributors",
  });
  return {
    satellite: L.layerGroup([imagery, labels]),
    terrain,
    roads,
    routeOnly: L.layerGroup(),
  };
}

async function initMap() {
  if (!window.L) {
    document.getElementById("map-loading").textContent = "地图组件未能加载，请检查网络；下方时间线仍可正常使用。";
    return;
  }

  map = L.map("map", {
    center: [30.25, 102.5],
    zoom: 8,
    zoomControl: false,
    scrollWheelZoom: false,
    preferCanvas: true,
  });
  map.createPane("routeOutlinePane");
  map.getPane("routeOutlinePane").style.zIndex = 410;
  map.createPane("routePane");
  map.getPane("routePane").style.zIndex = 420;
  map.createPane("markerPaneTop");
  map.getPane("markerPaneTop").style.zIndex = 640;

  const tiles = createTileLayers();
  tiles.satellite.addTo(map);
  L.control.zoom({ position: "bottomright" }).addTo(map);
  L.control.layers(
    {
      "卫星影像 + 地名": tiles.satellite,
      "地形图": tiles.terrain,
      "道路图": tiles.roads,
      "仅看路线（最快）": tiles.routeOnly,
    },
    {},
    { position: "topright", collapsed: window.innerWidth < 760 },
  ).addTo(map);

  try {
    if (!routeData) {
      const response = await fetch("./routes.json");
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      routeData = await response.json();
    }
    const bounds = L.latLngBounds([]);
    routeData.features.forEach((feature) => {
      const coordinates = feature.geometry.coordinates.map(([lon, lat]) => L.latLng(lat, lon));
      bounds.extend(coordinates);
      const outline = L.polyline(coordinates, {
        pane: "routeOutlinePane",
        color: "#ffffff",
        weight: 10,
        opacity: 0.76,
        interactive: false,
        lineCap: "round",
        lineJoin: "round",
      }).addTo(map);
      const route = L.polyline(coordinates, {
        pane: "routePane",
        color: dayColors[feature.properties.day],
        weight: 6,
        opacity: 0.96,
        lineCap: "round",
        lineJoin: "round",
      })
        .bindTooltip(`Day ${feature.properties.day} · ${escapeHTML(feature.properties.name)} · ${feature.properties.distanceKm} km`, {
          sticky: true,
          className: "route-tooltip",
        })
        .bindPopup(routePopup(feature.properties))
        .addTo(map);
      route.on("mouseover", () => route.setStyle({ weight: 9, opacity: 1 }));
      route.on("mouseout", () => updateMapLayers());
      routeRecords.push({ properties: feature.properties, route, outline, originalCoordinates: coordinates, offsetKey: null });
    });
    markerStops.forEach((stop) => {
      const place = places[stop.key];
      const marker = L.marker([place.lat, place.lon], {
        icon: makeMarkerIcon(stop),
        pane: "markerPaneTop",
        title: place.name,
      })
        .bindTooltip(`${stop.label}. ${escapeHTML(place.name)} · ${escapeHTML(stop.note)}`, {
          direction: "top",
          className: "route-tooltip",
          offset: [0, -24],
        })
        .on("click", () => openPlace(stop.key))
        .addTo(map);
      markerByKey.set(stop.key, marker);
    });
    allRouteBounds = bounds;
    updateMapLayers({ fit: true });
    document.getElementById("map-loading").classList.add("hidden");
  } catch (error) {
    console.error(error);
    document.getElementById("map-loading").textContent = "路线数据未能载入，请刷新页面；小时级行程仍可使用。";
  }

  map.on("locationfound", (event) => {
    currentPositionLayer?.remove();
    currentPositionLayer = L.circleMarker(event.latlng, {
      radius: 9,
      color: "#ffffff",
      weight: 4,
      fillColor: "#1587c8",
      fillOpacity: 1,
    }).bindTooltip("你的位置").addTo(map);
  });
  map.on("locationerror", () => window.alert("无法获取位置，请检查手机浏览器的定位权限。"));
  map.on("zoomend", () => applyRouteOffsets(true));
}

function toggleMapFullscreen() {
  const card = document.querySelector(".map-card");
  const button = document.getElementById("fullscreen-map");
  const active = !card.classList.contains("is-map-fullscreen");
  card.classList.toggle("is-map-fullscreen", active);
  document.body.classList.toggle("map-fullscreen-open", active);
  button.textContent = active ? "退出" : "全屏";
  button.setAttribute("aria-pressed", String(active));
  window.setTimeout(() => {
    map?.invalidateSize();
    fitActiveRoute();
  }, 120);
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
      updateMapLayers({ fit: false });
    });
  });

  document.querySelectorAll(".map-jump").forEach((button) => {
    button.addEventListener("click", () => focusMap(Number(button.dataset.lat), Number(button.dataset.lon), Number(button.dataset.zoom)));
  });

  document.getElementById("fit-route").addEventListener("click", fitActiveRoute);
  document.getElementById("locate-me").addEventListener("click", () => {
    if (!map) return;
    map.locate({ setView: true, maxZoom: 13, enableHighAccuracy: true });
  });
  document.getElementById("fullscreen-map").addEventListener("click", toggleMapFullscreen);
  document.getElementById("map-drawer-close").addEventListener("click", closePlaceDrawer);
  document.getElementById("map-drawer-backdrop").addEventListener("click", closePlaceDrawer);
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (document.getElementById("map-place-drawer").classList.contains("is-open")) closePlaceDrawer();
    else if (document.querySelector(".map-card.is-map-fullscreen")) toggleMapFullscreen();
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

async function init() {
  updateDayButtons();
  renderSummary();
  renderTimeline();
  renderMapStatus();
  renderStopStrip();
  initControls();
  initChecklist();
  await initMap();
  const stop = new URLSearchParams(window.location.search).get("stop");
  if (stop && places[stop]) openPlace(stop);
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
  }
}

init();
