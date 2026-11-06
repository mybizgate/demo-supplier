"use strict";

/* ------------------------------------------------------------------
   Edit the market here. Everything below this block reads from it.
   colour: "marigold", "pink", "teal" or "ink".
   A stall with portrait: "" shows its initials on a flat colour block.
   A product with image: "" shows as a flat price card.
   ------------------------------------------------------------------ */

const STALLS = [
  {
    id: "kak-lina",
    name: "Kak Lina's Kitchen",
    colour: "marigold",
    portrait: "images/seller-baker.webp",
    portraitAlt: "Kak Lina smiling in her bright kitchen, holding out a woven tray of kuih.",
    sells: "Kuih, tarts and sambal made at home",
    intro: "Lina bakes in small batches from her own kitchen. Order a day ahead if you need kuih for a kenduri or the office.",
    pickup: "Pickup from her home on Saturday mornings",
    delivery: "Delivers nearby on Fridays and Saturdays",
  },
  {
    id: "batik-ravi",
    name: "Batik Ravi",
    colour: "pink",
    portrait: "images/seller-batik.webp",
    portraitAlt: "Ravi at his workbench with brushes and dye pots, floral batik cloth hanging behind him.",
    sells: "Hand-painted batik to wear and use",
    intro: "Ravi paints every length by hand, so colours vary a little from piece to piece. Tell him the colours you like in your order message.",
    pickup: "Pickup from his workshop by appointment",
    delivery: "Sends by courier anywhere in Malaysia",
  },
  {
    id: "ladang-mei",
    name: "Ladang Mei",
    colour: "teal",
    portrait: "images/seller-farm.webp",
    portraitAlt: "Mei in a sun hat on her small green farm, holding a crate of fresh vegetables.",
    sells: "Vegetables from a small family farm",
    intro: "Mei grows leafy greens, chillies and tomatoes on a small plot and picks to order, so what she has changes with the weather.",
    pickup: "Pickup at the farm gate before 11 am",
    delivery: "Delivers on Tuesdays and Saturdays",
  },
  {
    id: "kebun-pak-din",
    name: "Kebun Pak Din",
    colour: "ink",
    portrait: "",
    portraitAlt: "",
    sells: "Houseplants and honey from the kebun",
    intro: "Pak Din keeps bees and raises plants behind his house. He would rather you met the plants than saw his photo.",
    pickup: "Pickup from his garden on weekends",
    delivery: "Delivers nearby on Sundays, plants travel upright",
  },
];

const CATEGORIES = [
  { id: "all", label: "Everything" },
  { id: "kuih", label: "Kuih and bakes" },
  { id: "pantry", label: "Sambal and honey" },
  { id: "fresh", label: "Fresh vegetables" },
  { id: "batik", label: "Batik" },
  { id: "plants", label: "Plants" },
];

const PRODUCTS = [
  { id: "kuih-box", stall: "kak-lina", category: "kuih", name: "Kuih box", unit: "20 pieces, mixed", price: 36, image: "images/item-kuih.webp", alt: "Pink, green and yellow kuih laid out on a banana leaf.", keywords: "kuih cake snack tea kenduri", fresh: true, wide: true },
  { id: "sambal-tumis", stall: "kak-lina", category: "pantry", name: "Sambal tumis", unit: "250 g jar", price: 14, image: "images/item-sambal.webp", alt: "A jar of red sambal beside fresh chillies.", keywords: "sambal chilli cili spicy pedas jar", fresh: true },
  { id: "tart-nenas", stall: "kak-lina", category: "kuih", name: "Tart nenas", unit: "Tub of 30", price: 38, image: "", alt: "", keywords: "pineapple tart biscuit raya cookies", fresh: true },
  { id: "kuih-lapis", stall: "kak-lina", category: "kuih", name: "Kuih lapis", unit: "Whole tray", price: 22, image: "", alt: "", keywords: "layer cake steamed kuih" },

  { id: "batik-scarf", stall: "batik-ravi", category: "batik", name: "Batik scarf", unit: "Hand painted, floral", price: 85, image: "images/item-batik.webp", alt: "A folded batik scarf painted with red and orange hibiscus.", keywords: "batik scarf selendang gift hadiah cloth", fresh: true },
  { id: "batik-sarong", stall: "batik-ravi", category: "batik", name: "Batik sarong", unit: "2 m length", price: 120, image: "", alt: "", keywords: "batik sarong kain cloth wear" },
  { id: "batik-pouch", stall: "batik-ravi", category: "batik", name: "Batik pouch", unit: "Zip top, lined", price: 35, image: "", alt: "", keywords: "batik pouch bag gift hadiah", fresh: true },
  { id: "batik-runner", stall: "batik-ravi", category: "batik", name: "Table runner", unit: "1.5 m, batik", price: 65, image: "", alt: "", keywords: "batik table home cloth" },

  { id: "veg-basket", stall: "ladang-mei", category: "fresh", name: "Mixed veg basket", unit: "Kangkung, chillies, tomatoes", price: 18, image: "images/item-veg.webp", alt: "A basket of kangkung, red chillies and tomatoes.", keywords: "sayur vegetables kangkung tomato chilli cili farm", fresh: true, wide: true },
  { id: "kangkung", stall: "ladang-mei", category: "fresh", name: "Kangkung", unit: "500 g bunch", price: 4.5, image: "", alt: "", keywords: "sayur vegetables water spinach greens", fresh: true },
  { id: "cili-padi", stall: "ladang-mei", category: "fresh", name: "Cili padi", unit: "200 g bag", price: 6, image: "", alt: "", keywords: "chilli bird eye spicy pedas sayur" },

  { id: "monstera", stall: "kebun-pak-din", category: "plants", name: "Monstera", unit: "Small, in a clay pot", price: 45, image: "images/item-plant.webp", alt: "A small monstera in a plain terracotta pot.", keywords: "pokok plant houseplant indoor pot", fresh: true },
  { id: "madu", stall: "kebun-pak-din", category: "pantry", name: "Raw honey", unit: "500 g jar", price: 32, image: "images/item-honey.webp", alt: "A clear jar of golden honey on a wooden table.", keywords: "madu honey jar sweet", fresh: true },
  { id: "pothos", stall: "kebun-pak-din", category: "plants", name: "Pothos cutting", unit: "Rooted, in a cup", price: 12, image: "", alt: "", keywords: "pokok plant houseplant money plant sirih" },
];

const MARKET = {
  name: "Supplier Hub",
  whatsappUrl: "https://wa.me/601158121239",
  storageKey: "supplier-marketplace-supplier",
};

const MAX_QTY = 99;
const TOAST_MS = 8000;
const MODE_LABEL = { pickup: "Pickup", delivery: "Delivery" };

/* ------------------------------------------------------------------
   Pure helpers: basket maths, search, routing and the order message.
   ------------------------------------------------------------------ */

const moneyFormat = new Intl.NumberFormat("en-MY", { style: "currency", currency: "MYR" });
const money = (amount) => moneyFormat.format(amount);
const toSen = (amount) => Math.round(amount * 100);

const productById = (id) => PRODUCTS.find((product) => product.id === id);
const stallById = (id) => STALLS.find((stall) => stall.id === id);
const productsOfStall = (stallId) => PRODUCTS.filter((product) => product.stall === stallId);

function cleanCart(raw) {
  if (!Array.isArray(raw)) return [];
  const seen = new Set();
  const cart = [];
  raw.forEach((line) => {
    if (!line || !productById(line.id) || seen.has(line.id)) return;
    const qty = Math.floor(Number(line.qty));
    if (!(qty >= 1)) return;
    seen.add(line.id);
    cart.push({ id: line.id, qty: Math.min(qty, MAX_QTY) });
  });
  return cart;
}

const qtyOf = (cart, id) => (cart.find((line) => line.id === id) || { qty: 0 }).qty;
const cartCount = (cart) => cart.reduce((sum, line) => sum + line.qty, 0);
const lineTotal = (line) => (toSen(productById(line.id).price) * line.qty) / 100;
const cartTotal = (cart) => cart.reduce((sum, line) => sum + toSen(productById(line.id).price) * line.qty, 0) / 100;

function setQty(cart, id, qty) {
  const next = Math.max(0, Math.min(qty, MAX_QTY));
  if (next === 0) return cart.filter((line) => line.id !== id);
  if (cart.some((line) => line.id === id)) return cart.map((line) => (line.id === id ? { id, qty: next } : line));
  return [...cart, { id, qty: next }];
}

function restoreLine(cart, line, index) {
  const next = cart.filter((item) => item.id !== line.id);
  next.splice(Math.min(index, next.length), 0, line);
  return next;
}

function groupByStall(cart) {
  return STALLS.map((stall) => {
    const lines = cart.filter((line) => productById(line.id).stall === stall.id);
    return { stall, lines, subtotal: cartTotal(lines) };
  }).filter((group) => group.lines.length);
}

const itemWord = (count) => `${count} ${count === 1 ? "item" : "items"}`;

function buildOrderMessage(cart, customer) {
  const parts = [`Hello ${MARKET.name}, I would like to order from these stalls:`];
  groupByStall(cart).forEach(({ stall, lines, subtotal }) => {
    const rows = lines.map((line) => {
      const product = productById(line.id);
      return `- ${line.qty} x ${product.name} (${product.unit}): ${money(lineTotal(line))}`;
    });
    parts.push([`*${stall.name}*`, ...rows, `Stall subtotal: ${money(subtotal)}`].join("\n"));
  });
  parts.push([
    `Total: ${money(cartTotal(cart))}`,
    `${MODE_LABEL[customer.mode] || MODE_LABEL.pickup} for ${customer.name || "(name)"}, ${customer.area || "(area)"}`,
  ].join("\n"));
  parts.push("Please confirm with each stall and let me know how to pay.");
  return parts.join("\n\n");
}

const orderUrl = (message) => `${MARKET.whatsappUrl}?text=${encodeURIComponent(message)}`;

function searchProducts(query, category) {
  const words = String(query || "").toLowerCase().split(/\s+/).filter(Boolean);
  return PRODUCTS.filter((product) => {
    if (category && category !== "all" && product.category !== category) return false;
    const stall = stallById(product.stall);
    const text = `${product.name} ${product.unit} ${product.keywords} ${stall.name}`.toLowerCase();
    return words.every((word) => text.includes(word));
  });
}

function parseRoute(hash) {
  const [path, query = ""] = String(hash || "").replace(/^#\/?/, "").split("?");
  const [view, id] = path.split("/").filter(Boolean);
  if (view === "stalls") return { view: "stalls" };
  if (view === "basket") return { view: "basket" };
  if (view === "stall") return { view: "stall", id: id || "" };
  if (view === "search") {
    const params = new URLSearchParams(query);
    const cat = params.get("cat") || "all";
    return { view: "search", q: params.get("q") || "", cat: CATEGORIES.some((item) => item.id === cat) ? cat : "all" };
  }
  return { view: "market" };
}

function searchHash(query, category) {
  const params = new URLSearchParams();
  if (query) params.set("q", query);
  if (category && category !== "all") params.set("cat", category);
  const text = params.toString();
  return text ? `#/search?${text}` : "#/search";
}

const initialsOf = (name) => name.split(/\s+/).filter((word) => !/^(kebun|ladang|batik)$/i.test(word)).map((word) => word[0]).join("").slice(0, 2).toUpperCase();

/* ------------------------------------------------------------------
   Saved state. Storage can be blocked, so the page must work without it.
   ------------------------------------------------------------------ */

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(MARKET.storageKey)) || {};
    return {
      cart: cleanCart(saved.cart),
      mode: saved.mode === "delivery" ? "delivery" : "pickup",
      name: typeof saved.name === "string" ? saved.name : "",
      area: typeof saved.area === "string" ? saved.area : "",
    };
  } catch (error) {
    return { cart: [], mode: "pickup", name: "", area: "" };
  }
}

function saveState() {
  try {
    localStorage.setItem(MARKET.storageKey, JSON.stringify(state));
  } catch (error) {
    /* Private mode or a full disk: the basket still works until the tab closes. */
  }
}

/* ------------------------------------------------------------------
   Markup
   ------------------------------------------------------------------ */

const escapeHtml = (text) => String(text).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
const icon = (name) => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;

function stepperHtml(product, qty, scope) {
  const name = escapeHtml(product.name);
  const lessLabel = qty === 1 ? `Remove ${name} from basket` : `One less ${name}`;
  return `<div class="stepper" role="group" aria-label="Quantity of ${name}">
    <button class="stepper__btn" type="button" data-act="dec" data-id="${product.id}" data-focus="${scope}-dec-${product.id}" aria-label="${lessLabel}">${icon("minus")}</button>
    <span class="stepper__qty">${qty}</span>
    <button class="stepper__btn" type="button" data-act="inc" data-id="${product.id}" data-focus="${scope}-inc-${product.id}" aria-label="One more ${name}"${qty >= MAX_QTY ? " disabled" : ""}>${icon("plus")}</button>
  </div>`;
}

function tileActionHtml(product, qty) {
  if (qty > 0) return stepperHtml(product, qty, "tile");
  return `<button class="btn btn--add" type="button" data-act="inc" data-id="${product.id}" data-focus="tile-add-${product.id}">Add to basket<span class="sr-only">: ${escapeHtml(product.name)}</span></button>`;
}

function tileHtml(product, level, { wide, spanLast, showStall }) {
  const stall = stallById(product.stall);
  const shape = !product.image ? "tile--card" : wide || spanLast ? "tile--wide" : "tile--photo";
  const tag = showStall ? `<a class="tag" href="#/stall/${stall.id}"><span class="swatch" aria-hidden="true"></span>${escapeHtml(stall.name)}</a>` : "";
  const media = product.image
    ? `<div class="tile__media"><img src="${product.image}" width="1024" height="1024" loading="lazy" decoding="async" alt="${escapeHtml(product.alt)}"></div>`
    : "";
  return `<li class="tile ${shape}${spanLast ? " tile--span" : ""}" data-tile="${product.id}" data-colour="${stall.colour}">
    ${media}
    <div class="tile__body">
      ${tag}
      <h${level} class="tile__name">${escapeHtml(product.name)}</h${level}>
      <p class="tile__unit">${escapeHtml(product.unit)}</p>
      <p class="tile__price">${money(product.price)}</p>
      <div class="tile__action" data-action="${product.id}">${tileActionHtml(product, qtyOf(state.cart, product.id))}</div>
    </div>
  </li>`;
}

/* On the two-column phone grid a lone last tile leaves a hole, so it spans the row.
   A stall's own table has few items, so it keeps every tile the same width. */
function gridHtml(products, level, { inStall = false } = {}) {
  const spansTwo = (product) => !inStall && Boolean(product.image && product.wide);
  const cells = products.reduce((sum, product) => sum + (spansTwo(product) ? 2 : 1), 0);
  return products.map((product, index) => tileHtml(product, level, {
    wide: spansTwo(product),
    spanLast: cells % 2 === 1 && index === products.length - 1,
    showStall: !inStall,
  })).join("");
}

function faceHtml(stall, className) {
  if (stall.portrait) {
    return `<img class="${className}" src="${stall.portrait}" width="1024" height="1024" loading="lazy" decoding="async" data-initials="${escapeHtml(initialsOf(stall.name))}" alt="${escapeHtml(stall.portraitAlt)}">`;
  }
  return `<span class="${className} initials" aria-hidden="true">${escapeHtml(initialsOf(stall.name))}</span>`;
}

const miniAwning = `<div class="awning awning--mini" aria-hidden="true"><div class="awning__cloth"></div></div>`;

function stallTileHtml(stall) {
  return `<li class="stall-tile" data-colour="${stall.colour}">
    <a class="stall-tile__link" href="#/stall/${stall.id}">
      ${miniAwning}
      ${faceHtml(stall, "stall-tile__face")}
      <span class="stall-tile__text">
        <span class="stall-tile__name">${escapeHtml(stall.name)}</span>
        <span class="stall-tile__sells">${escapeHtml(stall.sells)}</span>
      </span>
    </a>
  </li>`;
}

function stallNotesHtml(stall) {
  return `<ul class="notes">
    <li>${icon("pickup")}<span>${escapeHtml(stall.pickup)}</span></li>
    <li>${icon("delivery")}<span>${escapeHtml(stall.delivery)}</span></li>
  </ul>`;
}

function stallsViewHtml() {
  const fronts = STALLS.map((stall) => `<li class="front" data-colour="${stall.colour}">
    ${miniAwning}
    <div class="front__body">
      ${faceHtml(stall, "front__face")}
      <div class="front__text">
        <h3 class="front__name"><a href="#/stall/${stall.id}">${escapeHtml(stall.name)}</a></h3>
        <p class="front__sells">${escapeHtml(stall.sells)}</p>
      </div>
      ${stallNotesHtml(stall)}
      <p class="front__count">See ${itemWord(productsOfStall(stall.id).length)}</p>
    </div>
  </li>`).join("");
  return `<section class="plain" aria-labelledby="view-title">
    <div class="plain__head">
      <h2 class="plain__title" id="view-title" tabindex="-1">The stalls</h2>
      <p>Everyone here is a small local seller. Tap a stall to see what is on the table.</p>
    </div>
    <ul class="fronts">${fronts}</ul>
  </section>`;
}

function stallViewHtml(stall) {
  const index = STALLS.indexOf(stall);
  const next = STALLS[(index + 1) % STALLS.length];
  const items = productsOfStall(stall.id);
  return `<section class="stall" aria-labelledby="view-title" data-colour="${stall.colour}">
    <div class="stall__intro${stall.portrait ? "" : " stall__intro--plain"}">
      ${stall.portrait ? `<img class="stall__photo" src="${stall.portrait}" width="1024" height="1024" fetchpriority="high" decoding="async" alt="${escapeHtml(stall.portraitAlt)}">` : ""}
      <div class="stall__text">
        <a class="stall__back" href="#/stalls">${icon("chevron-back")}All stalls</a>
        <h2 class="stall__name" id="view-title" tabindex="-1">${escapeHtml(stall.name)}</h2>
        <p class="stall__sells">${escapeHtml(stall.sells)}</p>
        <p>${escapeHtml(stall.intro)}</p>
      </div>
    </div>
    ${stallNotesHtml(stall).replace('class="notes"', 'class="notes notes--stall"')}
    <section class="block" aria-labelledby="stall-items">
      <div class="block__head"><h3 class="block__title" id="stall-items">On the table</h3></div>
      <ul class="grid">${gridHtml(items, 4, { inStall: true })}</ul>
    </section>
    <a class="next-stall" href="#/stall/${next.id}" data-colour="${next.colour}">
      <span>Next stall</span>
      <strong>${escapeHtml(next.name)}</strong>
      ${icon("chevron")}
    </a>
  </section>`;
}

function missingStallHtml() {
  return `<section class="plain" aria-labelledby="view-title">
    <div class="plain__head">
      <h2 class="plain__title" id="view-title" tabindex="-1">This stall is not at the market</h2>
      <p>The link may be old, or the seller may have packed up.</p>
      <a class="btn btn--ink" href="#/stalls">See all stalls</a>
    </div>
  </section>`;
}

function searchViewHtml(route) {
  const chips = CATEGORIES.map((category) => `<li><button class="chip" type="button" data-act="chip" data-cat="${category.id}" aria-pressed="${category.id === route.cat}">${icon("check")}${escapeHtml(category.label)}</button></li>`).join("");
  return `<section class="plain" aria-labelledby="view-title">
    <div class="plain__head">
      <h2 class="plain__title" id="view-title" tabindex="-1">Find it at the market</h2>
    </div>
    <div class="search">
      <div class="field">
        <label for="search-input">Search all stalls</label>
        <input id="search-input" type="search" inputmode="search" enterkeyhint="search" autocomplete="off" placeholder="Try kuih, madu or batik" value="${escapeHtml(route.q)}">
      </div>
      <ul class="chips" aria-label="Filter by category">${chips}</ul>
    </div>
    <h3 class="search__status" id="search-status" aria-live="polite"></h3>
    <ul class="grid" id="search-grid"></ul>
    <div class="search__empty" id="search-empty" hidden></div>
  </section>`;
}

function basketGroupHtml({ stall, lines, subtotal }) {
  const rows = lines.map((line) => {
    const product = productById(line.id);
    const thumb = product.image
      ? `<img class="line__thumb" src="${product.image}" width="1024" height="1024" loading="lazy" decoding="async" alt="">`
      : `<span class="line__thumb line__thumb--flat" aria-hidden="true">${escapeHtml(product.name[0])}</span>`;
    return `<li class="line" data-line="${line.id}">
      ${thumb}
      <div class="line__text">
        <p class="line__name">${escapeHtml(product.name)}</p>
        <p class="line__unit">${escapeHtml(product.unit)}, ${money(product.price)} each</p>
      </div>
      <div class="line__controls">
        ${stepperHtml(product, line.qty, "line")}
        <p class="line__total">${money(lineTotal(line))}</p>
        <button class="line__remove" type="button" data-act="remove" data-id="${line.id}" aria-label="Remove ${escapeHtml(product.name)} from basket">${icon("trash")}</button>
      </div>
    </li>`;
  }).join("");
  return `<section class="group" data-colour="${stall.colour}" aria-label="${escapeHtml(stall.name)}">
    <h3 class="group__name"><a href="#/stall/${stall.id}">${escapeHtml(stall.name)}</a></h3>
    <ul class="group__lines">${rows}</ul>
    <p class="group__note">${icon(state.mode)}<span>${escapeHtml(state.mode === "delivery" ? stall.delivery : stall.pickup)}</span></p>
    <p class="group__subtotal"><span>Stall subtotal</span><strong>${money(subtotal)}</strong></p>
  </section>`;
}

/* ------------------------------------------------------------------
   Page behaviour
   ------------------------------------------------------------------ */

const state = typeof document === "undefined" ? { cart: [], mode: "pickup", name: "", area: "" } : loadState();
const $ = (id) => document.getElementById(id);
const scrollMemory = new Map();
const VIEW_TITLES = { market: "Market", stalls: "Stalls", search: "Search", basket: "Your basket" };
let lastMainRoute = { view: "market" };
let renderedKey = "";
let currentPlace = "market";
let firstRender = true;
let linkClicked = false;
let undoEntry = null;
let toastTimer = 0;

const prefersLessMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isDesktop = () => window.matchMedia("(min-width: 1080px)").matches;
const announce = (text) => { $("live").textContent = text; };

function setAwning(place, colour) {
  document.documentElement.dataset.awning = colour;
  if (place === currentPlace) return;
  currentPlace = place;
  const cloth = $("awning-cloth");
  cloth.classList.remove("is-rolling");
  void cloth.offsetWidth;
  cloth.classList.add("is-rolling");
}

function renderSearchResults(route) {
  const results = searchProducts(route.q, route.cat);
  const empty = $("search-empty");
  $("search-grid").innerHTML = gridHtml(results, 4);
  const nothing = route.q ? `Nothing matches "${route.q}"` : "Nothing in this category yet";
  $("search-status").textContent = results.length ? `${itemWord(results.length)} at the market` : nothing;
  empty.hidden = results.length > 0;
  if (!results.length) {
    empty.innerHTML = `<p>Check the spelling, try a shorter word, or look through everything on the tables.</p>
      <button class="btn btn--ink" type="button" data-act="clear-search">Show everything</button>`;
  }
}

function currentSearch() {
  const pressed = document.querySelector('.chip[aria-pressed="true"]');
  return { view: "search", q: $("search-input").value.trim(), cat: pressed ? pressed.dataset.cat : "all" };
}

function updateSearch(route) {
  history.replaceState(null, "", searchHash(route.q, route.cat));
  lastMainRoute = route;
  renderedKey = routeKey(route);
  renderSearchResults(route);
}

const routeKey = (route) => [route.view, route.id, route.q, route.cat].join("|");

function renderMain(route) {
  const key = routeKey(route);
  if (key === renderedKey) return;
  renderedKey = key;
  const dyn = $("view-dyn");
  const isMarket = route.view === "market";
  $("view-market").hidden = !isMarket;
  dyn.hidden = isMarket;
  if (isMarket) {
    dyn.innerHTML = "";
    refreshTiles();
    updateRowCue();
    return;
  }
  if (route.view === "stalls") dyn.innerHTML = stallsViewHtml();
  if (route.view === "stall") {
    const stall = stallById(route.id);
    dyn.innerHTML = stall ? stallViewHtml(stall) : missingStallHtml();
  }
  if (route.view === "search") {
    dyn.innerHTML = searchViewHtml(route);
    renderSearchResults(route);
  }
}

function pageTitle(route) {
  if (route.view === "stall") {
    const stall = stallById(route.id);
    return stall ? stall.name : "Stall not found";
  }
  return VIEW_TITLES[route.view];
}

function renderRoute() {
  const route = parseRoute(location.hash);
  if (route.view !== "basket") lastMainRoute = route;
  const main = route.view === "basket" ? lastMainRoute : route;
  document.body.dataset.view = route.view;
  renderMain(main);

  const stall = main.view === "stall" ? stallById(main.id) : null;
  setAwning(stall ? stall.id : "market", stall ? stall.colour : "teal");

  const tabName = route.view === "stall" ? "stalls" : route.view;
  document.querySelectorAll(".tab").forEach((tab) => {
    if (tab.dataset.tab === tabName) tab.setAttribute("aria-current", "page");
    else tab.removeAttribute("aria-current");
  });

  if (!(firstRender && route.view === "market")) document.title = `${pageTitle(route)} | ${MARKET.name}`;
  if (firstRender) {
    firstRender = false;
    return;
  }
  if (!(route.view === "basket" && isDesktop())) {
    window.scrollTo(0, linkClicked ? 0 : scrollMemory.get(location.hash) || 0);
  }
  linkClicked = false;
  const heading = route.view === "basket" ? $("basket-title") : document.querySelector("#view-title:not([hidden])") || $("market-title");
  heading.focus({ preventScroll: true });
}

function refreshTiles() {
  document.querySelectorAll("[data-action]").forEach((slot) => {
    const qty = qtyOf(state.cart, slot.dataset.action);
    if (slot.dataset.qty === String(qty)) return;
    slot.dataset.qty = qty;
    slot.innerHTML = tileActionHtml(productById(slot.dataset.action), qty);
  });
}

function customer() {
  return { mode: state.mode, name: state.name.trim(), area: state.area.trim() };
}

function renderBasket() {
  const count = cartCount(state.cart);
  const total = money(cartTotal(state.cart));
  const badge = $("tab-badge");
  badge.textContent = count;
  badge.hidden = count === 0;
  $("tab-count").textContent = count ? `, ${itemWord(count)}` : ", empty";
  $("basket-empty").hidden = count > 0;
  $("order-form").hidden = count === 0;
  $("send-bar").hidden = count === 0;
  $("basket-lines").innerHTML = groupByStall(state.cart).map(basketGroupHtml).join("");
  const stalls = groupByStall(state.cart).length;
  $("basket-sum").textContent = count ? `${itemWord(count)} from ${stalls} ${stalls === 1 ? "stall" : "stalls"}` : "";
  $("send-total").textContent = total;
  renderPreview();
}

function renderPreview() {
  if (state.cart.length) $("message-preview").textContent = buildOrderMessage(state.cart, customer());
}

/* Re-render everything that shows the basket, keeping keyboard focus on the same control. */
function commit(cart, message) {
  const focusKey = document.activeElement && document.activeElement.dataset ? document.activeElement.dataset.focus : "";
  state.cart = cart;
  saveState();
  $("sent-note").hidden = true;
  refreshTiles();
  renderBasket();
  if (message) announce(message);
  if (!focusKey) return;
  const tileAdd = focusKey.replace(/^tile-(inc|dec)-/, "tile-add-");
  const tileInc = focusKey.replace(/^tile-add-/, "tile-inc-");
  const target = [focusKey, tileInc, tileAdd].map((key) => document.querySelector(`[data-focus="${key}"]`)).find(Boolean);
  if (target) target.focus();
}

function hideToast() {
  clearTimeout(toastTimer);
  const toast = $("toast");
  const hadFocus = toast.contains(document.activeElement);
  toast.hidden = true;
  undoEntry = null;
  if (hadFocus) (isDesktop() || document.body.dataset.view === "basket" ? $("basket-title") : $("main")).focus({ preventScroll: true });
}

function removeWithUndo(ids, label) {
  const entries = ids.map((id) => ({ line: state.cart.find((item) => item.id === id), index: state.cart.findIndex((item) => item.id === id) }));
  commit(state.cart.filter((line) => !ids.includes(line.id)), `${label}. Undo is available.`);
  undoEntry = entries;
  $("toast-text").textContent = label;
  $("toast").hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(hideToast, TOAST_MS);
  if (!document.activeElement || document.activeElement === document.body) $("toast-undo").focus({ preventScroll: true });
}

function undoRemove() {
  if (!undoEntry) return;
  const cart = undoEntry.reduce((next, entry) => restoreLine(next, entry.line, entry.index), state.cart);
  const first = undoEntry[0].line.id;
  hideToast();
  commit(cart, "Put back in your basket.");
  const control = document.querySelector(`[data-focus="line-inc-${first}"]`);
  if (control && control.offsetParent) control.focus({ preventScroll: true });
}

function showFieldError(input, errorId, invalid) {
  input.setAttribute("aria-invalid", String(invalid));
  $(errorId).hidden = !invalid;
}

function sendOrder(event) {
  event.preventDefault();
  const nameInput = $("customer-name");
  const areaInput = $("customer-area");
  const { name, area } = customer();
  showFieldError(nameInput, "name-error", !name);
  showFieldError(areaInput, "area-error", !area);
  if (!name || !area) {
    (name ? areaInput : nameInput).focus();
    return;
  }
  const url = orderUrl(buildOrderMessage(state.cart, customer()));
  $("sent-link").href = url;
  $("sent-note").hidden = false;
  $("sent-note").scrollIntoView({ block: "nearest" });
  window.open(url, "_blank", "noopener");
  announce("Your order is open in WhatsApp. Press send there to finish.");
}

function handleAction(button) {
  const { act, id } = button.dataset;
  const product = productById(id);
  if (act === "inc") {
    const qty = qtyOf(state.cart, id) + 1;
    commit(setQty(state.cart, id, qty), `${product.name}: ${qty} in basket. ${itemWord(cartCount(state.cart) + 1)} in total.`);
  }
  if (act === "dec") {
    const qty = qtyOf(state.cart, id) - 1;
    if (qty < 1) removeWithUndo([id], `${product.name} removed`);
    else commit(setQty(state.cart, id, qty), `${product.name}: ${qty} in basket. ${itemWord(cartCount(state.cart) - 1)} in total.`);
  }
  if (act === "remove") removeWithUndo([id], `${product.name} removed`);
  if (act === "clear") removeWithUndo(state.cart.map((line) => line.id), "Basket emptied");
  if (act === "undo") undoRemove();
  if (act === "chip") {
    document.querySelectorAll(".chip").forEach((chip) => chip.setAttribute("aria-pressed", String(chip === button)));
    updateSearch(currentSearch());
  }
  if (act === "clear-search") {
    $("search-input").value = "";
    document.querySelectorAll(".chip").forEach((chip) => chip.setAttribute("aria-pressed", String(chip.dataset.cat === "all")));
    updateSearch(currentSearch());
    $("search-input").focus();
  }
}

function updateRowCue() {
  const row = $("stall-row");
  const more = row.scrollWidth - row.clientWidth - row.scrollLeft > 4;
  $("row-cue").hidden = !more;
}

function measureHeader() {
  document.documentElement.style.setProperty("--head-h", `${document.querySelector(".site-head").offsetHeight}px`);
}

function showPhotoFallback(image) {
  const tile = image.closest(".tile");
  if (tile) {
    tile.classList.remove("tile--photo", "tile--wide");
    tile.classList.add("tile--card");
    image.parentElement.remove();
    return;
  }
  if (image.classList.contains("hero__photo") || image.classList.contains("stall__photo")) {
    image.hidden = true;
    return;
  }
  if (image.dataset.initials) {
    image.outerHTML = `<span class="${image.className} initials" aria-hidden="true">${escapeHtml(image.dataset.initials)}</span>`;
    return;
  }
  image.style.visibility = "hidden";
}

function init() {
  $("stall-row").innerHTML = STALLS.map(stallTileHtml).join("");
  $("fresh-grid").innerHTML = gridHtml(PRODUCTS.filter((product) => product.fresh), 4);
  $("all-items-link").textContent = `See all ${PRODUCTS.length} items`;

  $("customer-name").value = state.name;
  $("customer-area").value = state.area;
  document.querySelector(`input[name="mode"][value="${state.mode}"]`).checked = true;

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href^='#/']");
    if (link && link.hash !== location.hash) {
      linkClicked = true;
      scrollMemory.set(location.hash, window.scrollY);
    }
    const button = event.target.closest("[data-act]");
    if (button) handleAction(button);
  });

  document.querySelector(".skip").addEventListener("click", (event) => {
    event.preventDefault();
    $("main").focus();
  });

  document.addEventListener("input", (event) => {
    if (event.target.id === "search-input") updateSearch(currentSearch());
  });

  $("order-form").addEventListener("input", (event) => {
    const { target } = event;
    if (target.name === "name" || target.name === "area") {
      state[target.name] = target.value;
      if (target.value.trim()) showFieldError(target, `${target.name}-error`, false);
    }
    saveState();
    renderPreview();
  });

  $("order-form").addEventListener("change", (event) => {
    if (event.target.name !== "mode") return;
    state.mode = event.target.value;
    saveState();
    renderBasket();
  });

  $("order-form").addEventListener("submit", sendOrder);

  $("row-cue").addEventListener("click", () => {
    const row = $("stall-row");
    row.scrollBy({ left: row.firstElementChild.offsetWidth + 8, behavior: prefersLessMotion() ? "auto" : "smooth" });
  });
  $("stall-row").addEventListener("scroll", updateRowCue, { passive: true });
  window.addEventListener("resize", () => {
    updateRowCue();
    measureHeader();
  });

  document.addEventListener("error", (event) => {
    if (event.target.tagName === "IMG") showPhotoFallback(event.target);
  }, true);

  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  window.addEventListener("hashchange", renderRoute);

  renderBasket();
  renderRoute();
  updateRowCue();
  measureHeader();
}

if (typeof document !== "undefined") init();
