/* Grocery Wholesale template. Edit TERMS, CATEGORIES and PRODUCTS below; the page builds itself from them. */

/* Sample terms shown in the hero and used by the minimum order check and delivery day choice. */
const TERMS = {
  minOrder: 300,                        // RM
  cutoffHour: 16,                       // orders before this hour can go out the next working day
  deliveryWeekdays: [1, 2, 3, 4, 5, 6], // 0 is Sunday
  deliveryWeekdaysText: 'Monday to Saturday',
  daysOffered: 5,
};

const CATEGORIES = [
  { id: 'rice', label: 'Rice and flour', image: 'images/cat-rice.webp' },
  { id: 'oil', label: 'Oil and sauces', image: 'images/cat-oil.webp' },
  { id: 'drinks', label: 'Drinks', image: 'images/cat-drinks.webp' },
  { id: 'canned', label: 'Canned food', image: 'images/cat-canned.webp' },
  { id: 'noodles', label: 'Noodles', image: 'images/cat-noodles.webp' },
  { id: 'household', label: 'Household', image: 'images/cat-household.webp' },
];

/*
  One entry per line on the sheet. All sample data.
  code      short item code, shown in the margin and on the WhatsApp order
  size      size of one unit inside the pack
  units     how many units in the carton or bag (1 means the bag itself is the unit)
  soldBy    'carton' or 'bag'
  price     RM per carton or bag
  stock     'in', 'low' or 'out' (out cannot be added)
  left      cartons or bags left when stock is 'low'; also the most that can be ordered
  wasPrice  optional: marks the line as an offer
  keywords  other words people search for, such as the Malay name
*/
const PRODUCTS = [
  { code: 'R01', category: 'rice', name: 'Local white rice', size: '10 kg', units: 1, soldBy: 'bag', price: 31.5, stock: 'in', keywords: 'beras putih' },
  { code: 'R02', category: 'rice', name: 'Fragrant rice', size: '5 kg', units: 4, soldBy: 'bag', price: 98, stock: 'in', keywords: 'beras wangi' },
  { code: 'R03', category: 'rice', name: 'Glutinous rice', size: '1 kg', units: 10, soldBy: 'bag', price: 62, stock: 'low', left: 6, keywords: 'beras pulut' },
  { code: 'R04', category: 'rice', name: 'Wheat flour', size: '1 kg', units: 12, soldBy: 'carton', price: 34.8, stock: 'in', keywords: 'tepung gandum' },

  { code: 'O01', category: 'oil', name: 'Palm cooking oil', size: '2 L', units: 6, soldBy: 'carton', price: 58, wasPrice: 62, stock: 'in', keywords: 'minyak masak sawit' },
  { code: 'O02', category: 'oil', name: 'Light soy sauce', size: '640 ml', units: 12, soldBy: 'carton', price: 42, stock: 'in', keywords: 'kicap masin' },
  { code: 'O03', category: 'oil', name: 'Chilli sauce', size: '340 g', units: 12, soldBy: 'carton', price: 38.4, stock: 'low', left: 9, keywords: 'sos cili' },
  { code: 'O04', category: 'oil', name: 'Oyster sauce', size: '510 g', units: 12, soldBy: 'carton', price: 66, stock: 'out', keywords: 'sos tiram' },

  { code: 'D01', category: 'drinks', name: 'Drinking water', size: '1.5 L', units: 12, soldBy: 'carton', price: 13.8, stock: 'in', keywords: 'air mineral' },
  { code: 'D02', category: 'drinks', name: 'Chrysanthemum tea', size: '300 ml can', units: 24, soldBy: 'carton', price: 33.6, stock: 'in', keywords: 'teh bunga kekwa tin' },
  { code: 'D03', category: 'drinks', name: 'Soya bean drink', size: '250 ml pack', units: 24, soldBy: 'carton', price: 28.8, wasPrice: 31.2, stock: 'in', keywords: 'air soya' },
  { code: 'D04', category: 'drinks', name: 'Rose syrup cordial', size: '2 L', units: 6, soldBy: 'carton', price: 54, stock: 'low', left: 4, keywords: 'sirap ros' },

  { code: 'C01', category: 'canned', name: 'Sardines in tomato sauce', size: '425 g', units: 24, soldBy: 'carton', price: 148.8, stock: 'in', keywords: 'sardin ikan tin' },
  { code: 'C02', category: 'canned', name: 'Tuna chunks in brine', size: '185 g', units: 24, soldBy: 'carton', price: 112.8, stock: 'in', keywords: 'tuna ikan tin' },
  { code: 'C03', category: 'canned', name: 'Sweetened creamer', size: '500 g', units: 48, soldBy: 'carton', price: 165.6, stock: 'low', left: 5, keywords: 'susu pekat manis krimer' },
  { code: 'C04', category: 'canned', name: 'Sweet corn kernels', size: '425 g', units: 24, soldBy: 'carton', price: 79.2, stock: 'out', keywords: 'jagung manis' },

  { code: 'N01', category: 'noodles', name: 'Instant curry noodles', size: '5-pack', units: 6, soldBy: 'carton', price: 31.2, wasPrice: 33, stock: 'in', keywords: 'mi segera mee kari' },
  { code: 'N02', category: 'noodles', name: 'Rice vermicelli', size: '400 g', units: 30, soldBy: 'carton', price: 84, stock: 'in', keywords: 'bihun meehoon' },
  { code: 'N03', category: 'noodles', name: 'Dried egg noodles', size: '375 g', units: 24, soldBy: 'carton', price: 76.8, stock: 'in', keywords: 'mi telur mee kering' },
  { code: 'N04', category: 'noodles', name: 'Dried flat rice noodles', size: '400 g', units: 30, soldBy: 'carton', price: 87, stock: 'low', left: 8, keywords: 'kuey teow kway teow' },

  { code: 'H01', category: 'household', name: 'Dish soap', size: '900 ml', units: 12, soldBy: 'carton', price: 46.8, stock: 'in', keywords: 'sabun pencuci pinggan' },
  { code: 'H02', category: 'household', name: 'Laundry powder', size: '2 kg', units: 6, soldBy: 'carton', price: 69, stock: 'in', keywords: 'serbuk sabun basuh' },
  { code: 'H03', category: 'household', name: 'Bathroom tissue', size: '10-roll pack', units: 8, soldBy: 'bag', price: 72, stock: 'in', keywords: 'tisu tandas' },
  { code: 'H04', category: 'household', name: 'Bin liners, large', size: '20-piece roll', units: 24, soldBy: 'carton', price: 57.6, stock: 'out', keywords: 'beg sampah plastik' },
];

/* Business details come from the platform. */
const BUSINESS_NAME = 'Supplier Hub';
const WHATSAPP_URL = 'https://wa.me/601158121239';
const STORAGE_KEY = 'supplier-wholesale-supplier';

/* Pure functions: no DOM, tested on their own. Money is handled in sen so totals never drift. */

const moneyFormat = new Intl.NumberFormat('en-MY', { style: 'currency', currency: 'MYR' });
const formatMoney = (sen) => moneyFormat.format(sen / 100);
const toSen = (rm) => Math.round(rm * 100);
const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;
const findProduct = (code, products = PRODUCTS) => products.find((p) => p.code === code);

function packLabel(p) {
  if (p.units > 1) return `${p.soldBy === 'bag' ? 'Bag' : 'Carton'} of ${p.units} x ${p.size}`;
  return `${p.size} ${p.soldBy}`;
}

/* Keep a quantity between 0 and what can actually be supplied. */
function clampQty(p, qty) {
  if (!p || p.stock === 'out') return 0;
  const n = Math.floor(Number(qty));
  if (!Number.isFinite(n) || n < 0) return 0;
  const cap = p.stock === 'low' ? p.left : 999;
  return Math.min(n, cap);
}

const lineTotalSen = (p, qty) => toSen(p.price) * qty;

/* The cart is { code: qty }. Lines come back in sheet order. */
function cartLines(cart, products = PRODUCTS) {
  return products.filter((p) => cart[p.code] > 0).map((p) => ({ product: p, qty: cart[p.code], totalSen: lineTotalSen(p, cart[p.code]) }));
}

const orderTotalSen = (lines) => lines.reduce((sum, line) => sum + line.totalSen, 0);
const shortfallSen = (totalSen, minOrder = TERMS.minOrder) => Math.max(0, toSen(minOrder) - totalSen);

function countSummary(lines) {
  const count = (soldBy) => lines.filter((l) => l.product.soldBy === soldBy).reduce((n, l) => n + l.qty, 0);
  const cartons = count('carton');
  const bags = count('bag');
  return [cartons && plural(cartons, 'carton'), bags && plural(bags, 'bag')].filter(Boolean).join(', ');
}

/* Drop anything unknown or unavailable from a stored cart, and respect current stock. */
function restoreOrder(items, products = PRODUCTS) {
  const cart = {};
  const skipped = [];
  const reduced = [];
  Object.keys(items || {}).forEach((code) => {
    const p = findProduct(code, products);
    const wanted = Math.floor(Number(items[code]));
    if (!(wanted > 0)) return;
    if (!p) { skipped.push(code); return; }
    const qty = clampQty(p, wanted);
    if (qty === 0) { skipped.push(p.name); return; }
    if (qty < wanted) reduced.push(p.name);
    cart[code] = qty;
  });
  return { cart, skipped, reduced };
}

function filterProducts(query, products = PRODUCTS, categories = CATEGORIES) {
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (!words.length) return products;
  return products.filter((p) => {
    const label = (categories.find((c) => c.id === p.category) || {}).label || '';
    const haystack = `${p.code} ${p.name} ${p.keywords || ''} ${label}`.toLowerCase();
    return words.every((w) => haystack.includes(w));
  });
}

/* The delivery days a customer can pick, given the time they order. */
function deliveryDates(now, terms = TERMS) {
  const day = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  day.setDate(day.getDate() + (now.getHours() < terms.cutoffHour ? 1 : 2));
  const dates = [];
  while (dates.length < terms.daysOffered) {
    if (terms.deliveryWeekdays.includes(day.getDay())) dates.push(new Date(day));
    day.setDate(day.getDate() + 1);
  }
  return dates;
}

const dateKey = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const dayLabel = (d) => new Intl.DateTimeFormat('en-MY', { weekday: 'short', day: 'numeric', month: 'short' }).format(d).replace(',', '');

function termsText(terms = TERMS) {
  const hour = terms.cutoffHour > 12 ? `${terms.cutoffHour - 12}pm` : `${terms.cutoffHour}am`;
  return `order by ${hour}, delivered the next working day, ${terms.deliveryWeekdaysText}. Minimum order ${formatMoney(toSen(terms.minOrder))}.`;
}

/* The one WhatsApp message. Intl may use a no-break space after RM, so plain spaces go out. */
function composeMessage({ businessName, shop, dayText, notes, lines }) {
  const items = lines.map((line, i) => {
    const p = line.product;
    return `${i + 1}. ${p.code} ${p.name} (${packLabel(p)})\n   ${plural(line.qty, p.soldBy)} x ${formatMoney(toSen(p.price))} = ${formatMoney(line.totalSen)}`;
  });
  const parts = [
    `Hello ${businessName}, here is my stock order.`,
    `Shop: ${shop}\nDelivery day: ${dayText}`,
    items.join('\n'),
    `Total: ${formatMoney(orderTotalSen(lines))} (${countSummary(lines)})`,
  ];
  if (notes) parts.push(`Notes: ${notes}`);
  return parts.join('\n\n').replace(/ /g, ' ');
}

const whatsappLink = (text, base = WHATSAPP_URL) => `${base}?text=${encodeURIComponent(text)}`;

const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

if (typeof module !== 'undefined') {
  module.exports = { TERMS, CATEGORIES, PRODUCTS, formatMoney, toSen, packLabel, clampQty, lineTotalSen, cartLines, orderTotalSen, shortfallSen, countSummary, restoreOrder, filterProducts, deliveryDates, dateKey, dayLabel, termsText, composeMessage, whatsappLink };
}

/* Everything below runs in the browser only. */
if (typeof document !== 'undefined') {
  const $ = (id) => document.getElementById(id);
  const panel = $('panel');
  const wideScreen = window.matchMedia('(min-width: 1080px)');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const ICON_MINUS = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/></svg>';
  const ICON_PLUS = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5v14"/></svg>';
  const ICON_REMOVE = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h14M10 7V4.5h4V7M7 7l1 13h8l1-13M10.5 11v5M13.5 11v5"/></svg>';
  const ICON_TICK = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
  const ICON_WARN = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4l9 16H3zM12 10v4.5M12 17.2v.3"/></svg>';

  /* State, saved under one key. Storage can be blocked, so every access is guarded. */
  const state = { cart: {}, shop: '', notes: '', day: '', lastOrder: null };
  let sentHref = '';

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      state.cart = restoreOrder(saved.cart).cart;
      state.shop = typeof saved.shop === 'string' ? saved.shop : '';
      state.notes = typeof saved.notes === 'string' ? saved.notes : '';
      state.day = typeof saved.day === 'string' ? saved.day : '';
      state.lastOrder = saved.lastOrder && saved.lastOrder.items ? saved.lastOrder : null;
    } catch (err) { /* start with an empty order */ }
  }

  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (err) { /* the order still works for this visit */ }
  }

  /* Building the sheet */

  function stepperHtml(p, qty) {
    const name = escapeHtml(p.name);
    return `<div class="stepper" role="group" aria-label="Quantity of ${name}">
      <button class="step" type="button" data-step="-1" aria-label="One less ${name}">${ICON_MINUS}</button>
      <input class="qty" type="text" inputmode="numeric" pattern="[0-9]*" autocomplete="off" maxlength="3" value="${qty}" data-qty aria-label="Quantity of ${name}">
      <button class="step step-add" type="button" data-step="1" aria-label="One more ${name}">${ICON_PLUS}</button>
    </div>`;
  }

  function lineHtml(p) {
    const perShort = p.soldBy === 'bag' ? '/bag' : '/ctn';
    const flags = [];
    if (p.stock === 'low') flags.push(`<span class="stamp">Low stock, ${p.left} left</span>`);
    if (p.wasPrice && p.stock !== 'out') flags.push(`<span class="offer">Offer, was <s>${formatMoney(toSen(p.wasPrice))}</s></span>`);
    const control = p.stock === 'out' ? '<p class="stamp stamp-out">Out of stock</p>' : stepperHtml(p, 0);
    return `<li class="line${p.stock === 'out' ? ' is-out' : ''}" data-id="${p.code}">
      <span class="line-code">${p.code}</span>
      <div class="line-body">
        <h3 class="line-name">${escapeHtml(p.name)}</h3>
        <p class="line-price"><span class="money">${formatMoney(toSen(p.price))}</span> <span class="line-per"><span class="per-short" aria-hidden="true">${perShort}</span><span class="per-long">per ${p.soldBy}</span></span></p>
        <div class="line-info">
          <p class="line-pack">${escapeHtml(packLabel(p))}</p>
          ${flags.length ? `<p class="line-flags">${flags.join(' ')}</p>` : ''}
          <p class="line-sum" data-sum hidden></p>
        </div>
        ${control}
      </div>
    </li>`;
  }

  function buildSheet() {
    $('tabsScroll').innerHTML = CATEGORIES.map((c) => `<a class="tab" href="#cat-${c.id}" data-tab="${c.id}">
      <img class="tab-thumb" src="${c.image}" width="36" height="36" alt="" loading="lazy" decoding="async">
      <span>${escapeHtml(c.label)}</span>
    </a>`).join('');

    $('sheetBody').innerHTML = CATEGORIES.map((c) => {
      const items = PRODUCTS.filter((p) => p.category === c.id);
      return `<section class="group" id="cat-${c.id}" data-group="${c.id}" aria-labelledby="head-${c.id}">
        <div class="group-head">
          <h2 id="head-${c.id}">${escapeHtml(c.label)}</h2>
          <p class="group-cols" aria-hidden="true"><span>Price</span><span>Quantity</span></p>
        </div>
        <ul class="lines">${items.map(lineHtml).join('')}</ul>
      </section>`;
    }).join('');
  }

  /* Keeping every copy of a line in step: the sheet and the order panel */

  function syncLine(code) {
    const p = findProduct(code);
    const qty = state.cart[code] || 0;
    document.querySelectorAll(`[data-id="${code}"]`).forEach((row) => {
      row.classList.toggle('is-on', qty > 0);
      const input = row.querySelector('[data-qty]');
      if (input && !(input === document.activeElement && Number(input.value) === qty)) input.value = qty;
      const less = row.querySelector('[data-step="-1"]');
      const more = row.querySelector('[data-step="1"]');
      if (less) less.setAttribute('aria-disabled', String(qty === 0));
      if (more) more.setAttribute('aria-disabled', String(clampQty(p, qty + 1) === qty));
      const sum = row.querySelector('[data-sum]');
      if (sum) {
        sum.hidden = qty === 0;
        sum.textContent = qty ? `${plural(qty, p.soldBy)}, ${formatMoney(lineTotalSen(p, qty))}` : '';
      }
    });
  }

  function orderLineHtml(line) {
    const p = line.product;
    return `<li class="order-line" data-id="${p.code}">
      <div class="order-line-text">
        <p class="order-line-name">${escapeHtml(p.name)}</p>
        <p class="order-line-pack">${p.code}, ${escapeHtml(packLabel(p))}</p>
      </div>
      <p class="order-line-total money" data-line-total></p>
      ${stepperHtml(p, line.qty)}
      <p class="order-line-each">x ${formatMoney(toSen(p.price))}</p>
      <button class="order-line-remove" type="button" data-remove aria-label="Remove ${escapeHtml(p.name)} from order">${ICON_REMOVE}</button>
    </li>`;
  }

  /* Rebuild the order list only when lines come or go, and keep focus where the person was. */
  function renderOrderLines(lines) {
    const list = $('orderLines');
    const wanted = lines.map((l) => l.product.code).join();
    const current = [...list.children].map((li) => li.dataset.id).join();
    if (wanted !== current) {
      const active = document.activeElement;
      const row = active && list.contains(active) ? active.closest('[data-id]') : null;
      const selector = row ? (active.matches('[data-qty]') ? '[data-qty]' : active.matches('[data-remove]') ? '[data-remove]' : `[data-step="${active.dataset.step}"]`) : '';
      const rowCode = row ? row.dataset.id : '';
      const rowIndex = row ? [...list.children].indexOf(row) : -1;
      list.innerHTML = lines.map(orderLineHtml).join('');
      if (row) {
        const same = list.querySelector(`[data-id="${rowCode}"] ${selector}`);
        const next = list.children[Math.min(rowIndex, list.children.length - 1)];
        (same || (next && next.querySelector('[data-remove]')) || $('panelTitle')).focus();
      }
      lines.forEach((l) => syncLine(l.product.code));
    }
    lines.forEach((l) => {
      const cell = list.querySelector(`[data-id="${l.product.code}"] [data-line-total]`);
      if (cell) cell.textContent = formatMoney(l.totalSen);
    });
  }

  let liveTimer = 0;
  function announce(text) {
    clearTimeout(liveTimer);
    liveTimer = setTimeout(() => { $('live').textContent = text; }, 350);
  }

  function renderDays() {
    const dates = deliveryDates(new Date());
    if (!dates.some((d) => dateKey(d) === state.day)) state.day = dateKey(dates[0]);
    $('dayOptions').innerHTML = dates.map((d) => {
      const key = dateKey(d);
      return `<label class="day"><input type="radio" name="day" value="${key}"${key === state.day ? ' checked' : ''}><span>${dayLabel(d)}</span></label>`;
    }).join('');
  }

  function renderReorder() {
    const last = state.lastOrder;
    $('reorderBtn').hidden = !last;
    $('panelReorder').hidden = !last;
    if (last) {
      /* A returning shop came to reorder, so that goes first. */
      $('main').prepend($('reorder'));
      const when = new Intl.DateTimeFormat('en-MY', { day: 'numeric', month: 'short' }).format(new Date(last.at));
      $('reorderText').innerHTML = `Last order, ${escapeHtml(when)}: <strong>${escapeHtml(last.summary)}, ${formatMoney(last.totalSen)}</strong>`;
      $('panelEmptyText').textContent = 'Key in quantities on the sheet, or repeat what you sent last time.';
    }
  }

  function renderOrder() {
    const lines = cartLines(state.cart);
    const total = orderTotalSen(lines);
    const short = shortfallSen(total);
    const hasLines = lines.length > 0;
    const count = hasLines ? `${plural(lines.length, 'item')}, ${countSummary(lines)}` : 'No items yet';

    $('slipCount').textContent = count;
    $('slipTotal').textContent = formatMoney(total);
    $('slipMin').hidden = !(hasLines && short > 0);
    $('slipMin').textContent = `${formatMoney(short)} more for the ${formatMoney(toSen(TERMS.minOrder))} minimum`;

    $('panelCount').textContent = short > 0 ? `${formatMoney(short)} below the minimum` : count;
    $('panelCount').classList.toggle('is-short', short > 0);
    $('panelTotal').textContent = formatMoney(total);
    $('panelEmpty').hidden = hasLines || Boolean(sentHref);
    $('panelSent').hidden = !sentHref;
    $('orderForm').hidden = !hasLines;
    $('panelFoot').hidden = !hasLines;

    renderOrderLines(lines);

    const check = $('minCheck');
    check.classList.toggle('is-short', short > 0);
    check.innerHTML = short > 0
      ? `${ICON_WARN}<span>Add ${formatMoney(short)} more to reach the ${formatMoney(toSen(TERMS.minOrder))} minimum order.</span>`
      : `${ICON_TICK}<span>Minimum order of ${formatMoney(toSen(TERMS.minOrder))} reached.</span>`;
    $('sendBtn').setAttribute('aria-disabled', String(short > 0));
    announce(`${count}. Total ${formatMoney(total)}.`);
  }

  /* Notices sit where the person is looking: in the order panel if it is open, otherwise above the slip. */

  function clearNotices() {
    [$('pageNotice'), $('panelNotice')].forEach((el) => { el.hidden = true; el.textContent = ''; });
  }

  function showNotice(text, undo) {
    clearNotices();
    const el = panel.open ? $('panelNotice') : $('pageNotice');
    const span = document.createElement('span');
    span.textContent = text;
    el.append(span);
    if (undo) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'text-btn';
      button.textContent = 'Undo';
      button.addEventListener('click', () => { undo(); clearNotices(); });
      el.append(button);
    }
    const dismiss = document.createElement('button');
    dismiss.type = 'button';
    dismiss.className = 'notice-close';
    dismiss.setAttribute('aria-label', 'Dismiss message');
    dismiss.innerHTML = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';
    dismiss.addEventListener('click', clearNotices);
    el.append(dismiss);
    el.hidden = false;
  }

  /* Changing the order */

  function setQty(code, qty) {
    const p = findProduct(code);
    const next = clampQty(p, qty);
    clearNotices();
    if (next < Number(qty) && p.stock === 'low') showNotice(`Only ${plural(p.left, p.soldBy)} of ${p.name} left, so that is the most you can order.`);
    if (next > 0) state.cart[code] = next; else delete state.cart[code];
    sentHref = '';
    saveState();
    syncLine(code);
    renderOrder();
  }

  function replaceCart(cart) {
    const touched = new Set([...Object.keys(state.cart), ...Object.keys(cart)]);
    state.cart = cart;
    sentHref = '';
    saveState();
    renderOrder();
    touched.forEach(syncLine);
  }

  function reorderLast() {
    if (!state.lastOrder) return;
    const before = { ...state.cart };
    const { cart, skipped, reduced } = restoreOrder(state.lastOrder.items);
    replaceCart(cart);
    const notes = [`Last order restored, ${plural(Object.keys(cart).length, 'item')}.`];
    if (skipped.length) notes.push(`Left out, no stock: ${skipped.join(', ')}.`);
    if (reduced.length) notes.push(`Reduced to what is left: ${reduced.join(', ')}.`);
    showNotice(notes.join(' '), Object.keys(before).length ? () => replaceCart(before) : null);
  }

  function clearOrder() {
    const before = { ...state.cart };
    replaceCart({});
    showNotice('Order cleared.', () => replaceCart(before));
  }

  /* Opening and closing the order panel. On wide screens it simply stays open beside the sheet. */

  function setPanelMode() {
    if (panel.open && panel.matches(':modal')) closePanel();
    if (wideScreen.matches) panel.setAttribute('open', '');
    else panel.removeAttribute('open');
  }

  function openPanel() {
    clearNotices();
    renderDays();
    renderOrder();
    panel.showModal();
    document.documentElement.classList.add('panel-open');
  }

  function closePanel() {
    panel.close();
  }

  /* Sending */

  function sendOrder() {
    const lines = cartLines(state.cart);
    const total = orderTotalSen(lines);
    if (!lines.length) return;
    if (shortfallSen(total) > 0) {
      $('minCheck').scrollIntoView({ block: 'center', behavior: reduceMotion.matches ? 'auto' : 'smooth' });
      $('minCheck').focus({ preventScroll: true });
      return;
    }
    const shop = $('shopName').value.trim();
    $('shopError').hidden = Boolean(shop);
    $('shopName').setAttribute('aria-invalid', String(!shop));
    if (!shop) { $('shopName').focus(); return; }

    const picked = document.querySelector('input[name="day"]:checked');
    const dayText = picked ? picked.nextElementSibling.textContent : '';
    const notes = $('orderNotes').value.trim();
    const href = whatsappLink(composeMessage({ businessName: BUSINESS_NAME, shop, dayText, notes, lines }));

    state.lastOrder = { at: new Date().toISOString(), items: { ...state.cart }, totalSen: total, summary: countSummary(lines) };
    state.notes = '';
    $('orderNotes').value = '';
    const codes = Object.keys(state.cart);
    state.cart = {};
    sentHref = href;
    $('sentLink').href = href;
    saveState();
    codes.forEach(syncLine);
    renderReorder();
    renderOrder();
    $('panelTitle').focus();

    const opened = window.open(href, '_blank');
    if (opened) opened.opener = null; else window.location.href = href;
  }

  /* Search and section tabs */

  function setTabCurrent(id) {
    document.querySelectorAll('[data-tab]').forEach((tab) => {
      const on = tab.dataset.tab === id;
      if (on && tab.getAttribute('aria-current') !== 'true') {
        const strip = $('tabsScroll');
        strip.scrollTo({ left: tab.offsetLeft - strip.offsetLeft - 8, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
      }
      if (on) tab.setAttribute('aria-current', 'true'); else tab.removeAttribute('aria-current');
    });
  }

  function applySearch() {
    const query = $('findInput').value;
    const searching = query.trim().length > 0;
    const matches = new Set(filterProducts(query).map((p) => p.code));
    document.querySelectorAll('#sheetBody .line').forEach((row) => { row.hidden = !matches.has(row.dataset.id); });
    document.querySelectorAll('[data-group]').forEach((group) => {
      const any = PRODUCTS.some((p) => p.category === group.dataset.group && matches.has(p.code));
      group.hidden = !any;
      const tab = document.querySelector(`[data-tab="${group.dataset.group}"]`);
      tab.classList.toggle('is-empty', !any);
      if (any) tab.removeAttribute('aria-disabled'); else tab.setAttribute('aria-disabled', 'true');
    });
    document.body.classList.toggle('is-searching', searching);
    $('findClear').hidden = !query;
    $('noMatch').hidden = matches.size > 0;
    if (!matches.size) {
      $('noMatchTerm').textContent = `“${query.trim()}”`;
      $('noMatchAsk').href = whatsappLink(`Hello ${BUSINESS_NAME}, do you stock ${query.trim()}?`);
    }
    if (searching) announce(matches.size ? `${plural(matches.size, 'item')} found.` : `No item matches ${query.trim()}.`);
  }

  function clearSearch() {
    $('findInput').value = '';
    applySearch();
    $('findInput').focus();
  }

  let sectionObserver = null;

  function watchSections() {
    if (!('IntersectionObserver' in window)) return;
    if (sectionObserver) sectionObserver.disconnect();
    const visible = new Set();
    const stuckHeight = Math.round($('tabs').offsetHeight + parseFloat(getComputedStyle($('tabs')).top)) + 8;
    sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) visible.add(e.target.dataset.group); else visible.delete(e.target.dataset.group); });
      const first = CATEGORIES.find((c) => visible.has(c.id));
      if (first) setTabCurrent(first.id);
    }, { rootMargin: `-${stuckHeight}px 0px -55% 0px` });
    document.querySelectorAll('[data-group]').forEach((group) => sectionObserver.observe(group));
  }

  /* Wiring */

  function bindEvents() {
    document.addEventListener('click', (e) => {
      const step = e.target.closest('[data-step]');
      if (step) {
        const code = step.closest('[data-id]').dataset.id;
        if (step.getAttribute('aria-disabled') === 'true' && Number(step.dataset.step) < 0) return;
        setQty(code, (state.cart[code] || 0) + Number(step.dataset.step));
        return;
      }
      const remove = e.target.closest('[data-remove]');
      if (remove) setQty(remove.closest('[data-id]').dataset.id, 0);
      const disabledTab = e.target.closest('.tab[aria-disabled="true"]');
      if (disabledTab) e.preventDefault();
    });

    document.addEventListener('focusin', (e) => { if (e.target.matches('[data-qty]')) e.target.select(); });

    document.addEventListener('input', (e) => {
      if (!e.target.matches('[data-qty]')) return;
      e.target.value = e.target.value.replace(/\D/g, '');
      /* In the order panel a blank or 0 waits for blur, so retyping does not remove the line mid-edit. */
      if (e.target.closest('#panel') && !Number(e.target.value)) return;
      setQty(e.target.closest('[data-id]').dataset.id, Number(e.target.value));
    });

    document.addEventListener('focusout', (e) => {
      if (!e.target.matches('[data-qty]')) return;
      const code = e.target.closest('[data-id]').dataset.id;
      if (e.target.closest('#panel') && e.target.value === '0' && state.cart[code]) setQty(code, 0);
      else e.target.value = state.cart[code] || 0;
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && e.target.matches('[data-qty]')) { e.preventDefault(); e.target.blur(); }
    });

    $('findForm').addEventListener('submit', (e) => { e.preventDefault(); $('findInput').blur(); });
    $('findInput').addEventListener('input', () => { applySearch(); window.scrollTo({ top: 0, behavior: 'instant' }); });
    $('findClear').addEventListener('click', clearSearch);
    $('noMatchClear').addEventListener('click', clearSearch);
    $('tabsFind').addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'instant' }); $('findInput').focus(); });

    $('reviewBtn').addEventListener('click', openPanel);
    $('panelClose').addEventListener('click', closePanel);
    panel.addEventListener('close', () => document.documentElement.classList.remove('panel-open'));
    panel.addEventListener('click', (e) => { if (e.target === panel && panel.matches(':modal')) closePanel(); });

    $('reorderBtn').addEventListener('click', reorderLast);
    $('panelReorder').addEventListener('click', reorderLast);
    $('clearOrder').addEventListener('click', clearOrder);
    $('sendBtn').addEventListener('click', sendOrder);
    $('sentDone').addEventListener('click', () => {
      sentHref = '';
      renderOrder();
      if (panel.matches(':modal')) closePanel();
    });

    $('shopName').addEventListener('input', (e) => {
      state.shop = e.target.value;
      if (e.target.value.trim()) { $('shopError').hidden = true; e.target.setAttribute('aria-invalid', 'false'); }
      saveState();
    });
    $('orderNotes').addEventListener('input', (e) => { state.notes = e.target.value; saveState(); });
    $('dayOptions').addEventListener('change', (e) => { state.day = e.target.value; saveState(); });

    wideScreen.addEventListener('change', () => { setPanelMode(); watchSections(); });

    /* A thumbnail that fails to load should leave the label, not a broken picture. */
    document.addEventListener('error', (e) => { if (e.target.tagName === 'IMG') e.target.hidden = true; }, true);
  }

  function start() {
    loadState();
    buildSheet();
    $('termsText').textContent = termsText();
    $('shopName').value = state.shop;
    $('orderNotes').value = state.notes;
    renderDays();
    renderReorder();
    Object.keys(state.cart).forEach(syncLine);
    PRODUCTS.forEach((p) => syncLine(p.code));
    renderOrder();
    setTabCurrent(CATEGORIES[0].id);
    bindEvents();
    setPanelMode();
    watchSections();
    /* Stop the highlighter sweep replaying on restored lines. */
    requestAnimationFrame(() => document.body.classList.add('is-ready'));
  }

  start();
}
