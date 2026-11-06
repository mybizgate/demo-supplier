'use strict';

/* ------------------------------------------------------------------
   Edit here: sample catalogue. Everything below this block is logic.

   fits lines read: "<vehicle id> <engine> <from year>-<to year>".
   The vehicle id and engine must match an entry in VEHICLES.
------------------------------------------------------------------- */
const PARTS = [
  { number: 'BR-4412-F', name: 'Front brake pad set', category: 'brakes', position: 'Front axle', price: 78, inStock: true,
    fits: ['myvi 1.3 2018-2025', 'myvi 1.5 2018-2025', 'axia 1.0 2023-2025'] },
  { number: 'BR-4418-F', name: 'Front brake pad set, semi-metallic', category: 'brakes', position: 'Front axle', price: 72, inStock: true,
    fits: ['myvi 1.3 2012-2017', 'myvi 1.5 2012-2017', 'axia 1.0 2014-2022', 'saga 1.3 2016-2025'] },
  { number: 'BR-5120-F', name: 'Front brake disc, pair', category: 'brakes', position: 'Front axle', price: 168, inStock: true,
    fits: ['vios 1.5 2013-2025', 'city 1.5 2014-2025'] },
  { number: 'BR-4630-R', name: 'Rear brake pad set', category: 'brakes', position: 'Rear axle', price: 92, inStock: true,
    fits: ['x50 1.5T 2020-2025', 'city 1.5 2020-2025'] },

  { number: 'FL-2031', name: 'Engine oil filter', category: 'filters', position: 'Engine bay', price: 16, inStock: true,
    fits: ['myvi 1.3 2012-2025', 'myvi 1.5 2012-2025', 'axia 1.0 2014-2025', 'vios 1.5 2013-2025'] },
  { number: 'FL-2047', name: 'Engine oil filter, large', category: 'filters', position: 'Engine bay', price: 19, inStock: true,
    fits: ['saga 1.3 2016-2025', 'x50 1.5T 2020-2025', 'city 1.5 2014-2025'] },
  { number: 'FL-3105', name: 'Panel air filter', category: 'filters', position: 'Engine bay', price: 38, inStock: true,
    fits: ['myvi 1.3 2018-2025', 'myvi 1.5 2018-2025', 'axia 1.0 2014-2025'] },
  { number: 'FL-4210', name: 'Cabin air filter', category: 'filters', position: 'Behind the glovebox', price: 45, inStock: true,
    fits: ['myvi 1.3 2018-2025', 'myvi 1.5 2018-2025', 'saga 1.3 2016-2025', 'x50 1.5T 2020-2025', 'city 1.5 2020-2025', 'vios 1.5 2019-2025'] },

  { number: 'BT-6040', name: '12V car battery, NS40 size', category: 'battery', position: 'Engine bay', price: 185, inStock: true,
    fits: ['myvi 1.3 2012-2025', 'myvi 1.5 2012-2025', 'axia 1.0 2014-2025', 'saga 1.3 2016-2025'] },
  { number: 'BT-6060', name: '12V car battery, NS60 size', category: 'battery', position: 'Engine bay', price: 245, inStock: false,
    fits: ['vios 1.5 2013-2025', 'city 1.5 2014-2025', 'x50 1.5T 2020-2025'] },

  { number: 'SU-7301-F', name: 'Front shock absorber', category: 'suspension', position: 'Front, left or right', price: 135, inStock: true,
    fits: ['myvi 1.3 2018-2025', 'myvi 1.5 2018-2025'] },
  { number: 'SU-7344-F', name: 'Front shock absorber, compact', category: 'suspension', position: 'Front, left or right', price: 128, inStock: false,
    fits: ['saga 1.3 2016-2025', 'axia 1.0 2014-2025'] },
  { number: 'SU-7402-R', name: 'Rear shock absorber', category: 'suspension', position: 'Rear, left or right', price: 110, inStock: true,
    fits: ['vios 1.5 2013-2025', 'city 1.5 2014-2025'] },

  { number: 'BL-8104', name: 'Drive belt, 4-rib', category: 'belts', position: 'Engine front', price: 34, inStock: true,
    fits: ['myvi 1.3 2012-2025', 'axia 1.0 2014-2025', 'saga 1.3 2016-2025'] },
  { number: 'BL-8160', name: 'Drive belt and tensioner kit', category: 'belts', position: 'Engine front', price: 148, inStock: true,
    fits: ['vios 1.5 2013-2025', 'city 1.5 2014-2025', 'x50 1.5T 2020-2025'] },

  { number: 'IG-9012', name: 'Spark plug set of 4', category: 'ignition', position: 'Cylinder head', price: 62, inStock: true,
    fits: ['myvi 1.3 2012-2025', 'myvi 1.5 2012-2025', 'saga 1.3 2016-2025', 'vios 1.5 2013-2025', 'city 1.5 2014-2025'] },
  { number: 'IG-9018', name: 'Spark plug set of 3', category: 'ignition', position: 'Cylinder head', price: 44, inStock: true,
    fits: ['axia 1.0 2014-2025'] },
  { number: 'IG-9031', name: 'Spark plug set of 3, turbo engine', category: 'ignition', position: 'Cylinder head', price: 78, inStock: true,
    fits: ['x50 1.5T 2020-2025'] },
];

const VEHICLES = [
  { id: 'myvi', make: 'Perodua', model: 'Myvi', plate: 'MYVI', engines: [{ size: '1.3', from: 2012, to: 2025 }, { size: '1.5', from: 2012, to: 2025 }] },
  { id: 'axia', make: 'Perodua', model: 'Axia', plate: 'AXIA', engines: [{ size: '1.0', from: 2014, to: 2025 }] },
  { id: 'saga', make: 'Proton', model: 'Saga', plate: 'SAGA', engines: [{ size: '1.3', from: 2016, to: 2025 }] },
  { id: 'x50', make: 'Proton', model: 'X50', plate: 'X50', engines: [{ size: '1.5T', from: 2020, to: 2025 }] },
  { id: 'city', make: 'Honda', model: 'City', plate: 'CITY', engines: [{ size: '1.5', from: 2014, to: 2025 }] },
  { id: 'vios', make: 'Toyota', model: 'Vios', plate: 'VIOS', engines: [{ size: '1.5', from: 2013, to: 2025 }] },
];

const CATEGORIES = [
  { id: 'brakes', label: 'Brakes', image: 'part-brake.webp', alt: 'New brake pads and a drilled brake disc' },
  { id: 'filters', label: 'Filters', image: 'part-filter.webp', alt: 'An engine oil filter and a panel air filter' },
  { id: 'battery', label: 'Battery', image: 'part-battery.webp', alt: 'A plain black 12V car battery' },
  { id: 'suspension', label: 'Suspension', image: 'part-shock.webp', alt: 'A shock absorber and a coil spring' },
  { id: 'belts', label: 'Belts', image: 'part-belt.webp', alt: 'A ribbed drive belt with a tensioner pulley' },
  { id: 'ignition', label: 'Ignition', image: 'part-spark.webp', alt: 'Four spark plugs in a row' },
];

const BUSINESS_NAME = 'Supplier Hub';
const WHATSAPP_URL = 'https://wa.me/601158121239';
const STORAGE_KEY = 'supplier-spareparts-supplier';
const MAX_QTY = 20;

const FIT_TEXT = {
  'no-car': 'Choose your car to check fit',
  fits: 'Fits your car',
  check: 'Check fitment',
};

const money = new Intl.NumberFormat('en-MY', { style: 'currency', currency: 'MYR' });

/* ------------------------------------------------------------------
   Pure functions: fitment, search and enquiry maths
------------------------------------------------------------------- */
function parseFit(line) {
  const [vehicle, engine, years] = line.trim().split(/\s+/);
  const [from, to] = years.split('-').map(Number);
  return { vehicle, engine, from, to: to || from };
}

function findVehicle(id) {
  return VEHICLES.find((vehicle) => vehicle.id === id) || null;
}

function isValidCar(car) {
  const vehicle = car && findVehicle(car.vehicle);
  if (!vehicle) return false;
  return vehicle.engines.some((e) => e.size === car.engine && car.year >= e.from && car.year <= e.to);
}

function engineLabel(size) {
  return size.endsWith('T') ? `${size.slice(0, -1)} litre turbo` : `${size} litre`;
}

function plateText(car) {
  return `${findVehicle(car.vehicle).plate} ${car.year} ${car.engine}`;
}

function carLabel(car) {
  const vehicle = findVehicle(car.vehicle);
  return `${vehicle.make} ${vehicle.model} ${car.year}, ${engineLabel(car.engine)}`;
}

function fitLineMatchesCar(fit, car) {
  return fit.vehicle === car.vehicle && fit.engine === car.engine && car.year >= fit.from && car.year <= fit.to;
}

function fitStatus(part, car) {
  if (!car) return 'no-car';
  return part.fits.some((line) => fitLineMatchesCar(parseFit(line), car)) ? 'fits' : 'check';
}

function fitLineLabel(fit) {
  const vehicle = findVehicle(fit.vehicle);
  return `${vehicle.make} ${vehicle.model}, ${engineLabel(fit.engine)}, ${fit.from} to ${fit.to}`;
}

function compact(text) {
  return String(text).toLowerCase().replace(/[^a-z0-9]/g, '');
}

function categoryLabel(id) {
  const category = CATEGORIES.find((c) => c.id === id);
  return category ? category.label : '';
}

function matchesQuery(part, query) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  if (compact(q) && compact(part.number).includes(compact(q))) return true;
  const haystack = `${part.name} ${categoryLabel(part.category)} ${part.position} ${part.number}`.toLowerCase();
  return q.split(/\s+/).every((word) => haystack.includes(word) || haystack.includes(word.replace(/s$/, '')));
}

function selectParts(parts, category, query) {
  return parts.filter((part) => (category === 'all' || part.category === category) && matchesQuery(part, query));
}

function setQty(items, number, qty) {
  const next = { ...items };
  const clean = Math.min(MAX_QTY, Math.max(0, Math.round(qty) || 0));
  if (clean === 0) delete next[number];
  else next[number] = clean;
  return next;
}

function countItems(items) {
  return Object.values(items).reduce((sum, qty) => sum + qty, 0);
}

function enquiryLines(items, parts) {
  return parts.filter((part) => items[part.number]).map((part) => ({ part, qty: items[part.number], lineTotal: part.price * items[part.number] }));
}

function enquiryTotal(lines) {
  return lines.reduce((sum, line) => sum + line.lineTotal, 0);
}

function plainMoney(value) {
  return money.format(value).replace(/\s/g, ' ');
}

function carLine(car) {
  return car ? `Car: ${carLabel(car)}` : 'Car: not chosen yet, I will send my car details here';
}

function fitLine(part, car) {
  const status = fitStatus(part, car);
  if (status === 'fits') return 'Fit: listed for this car';
  if (status === 'check') return 'Fit: not listed, please check';
  return 'Fit: please check once you have my car';
}

function buildEnquiryMessage(businessName, car, lines, note) {
  const parts = lines.map((line, index) => [
    `${index + 1}. ${line.part.name}`,
    `   Part no: ${line.part.number}`,
    `   Position: ${line.part.position}`,
    `   Qty: ${line.qty} x ${plainMoney(line.part.price)} = ${plainMoney(line.lineTotal)}`,
    `   ${fitLine(line.part, car)}`,
    `   Stock shown: ${line.part.inStock ? 'in stock' : 'out of stock'}`,
  ].join('\n'));
  const trimmedNote = note.trim();
  return [
    `Hi ${businessName}, I would like these parts. Please confirm fitment and stock before I pay.`,
    '',
    carLine(car),
    ...(trimmedNote ? [`Plate or chassis note: ${trimmedNote}`] : []),
    '',
    'Parts:',
    ...parts,
    '',
    `Estimated total: ${plainMoney(enquiryTotal(lines))}`,
  ].join('\n');
}

function buildPartQuestion(businessName, car, part) {
  const opening = part.inStock
    ? 'I am not sure this part fits my car. Can you check?'
    : 'This part shows out of stock. Can you tell me when it is back and check it fits my car?';
  return [
    `Hi ${businessName}, ${opening}`,
    '',
    `Part: ${part.name}`,
    `Part no: ${part.number}`,
    carLine(car),
  ].join('\n');
}

function whatsappLink(message) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

function sanitizeStored(raw) {
  const data = raw && typeof raw === 'object' ? raw : {};
  const car = data.car && isValidCar(data.car) ? { vehicle: data.car.vehicle, engine: data.car.engine, year: data.car.year } : null;
  let items = {};
  Object.entries(data.items && typeof data.items === 'object' ? data.items : {}).forEach(([number, qty]) => {
    if (PARTS.some((part) => part.number === number)) items = setQty(items, number, Number(qty));
  });
  return { car, items };
}

/* ------------------------------------------------------------------
   Storage
------------------------------------------------------------------- */
function loadStored() {
  try {
    return sanitizeStored(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  } catch (error) {
    return sanitizeStored(null);
  }
}

function saveStored() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ car: state.car, items: state.items }));
  } catch (error) {
    /* Private mode or full storage: the page still works for this visit. */
  }
}

/* ------------------------------------------------------------------
   State and small helpers
------------------------------------------------------------------- */
const state = {
  car: null,
  items: {},
  category: 'all',
  query: '',
  openPart: null,
  picker: { step: 1, make: null, vehicle: null },
};

const byId = (id) => document.getElementById(id);

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function icon(name) {
  return `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
}

function partByNumber(number) {
  return PARTS.find((part) => part.number === number);
}

function partsWord(count) {
  return count === 1 ? '1 part' : `${count} parts`;
}

function announce(message) {
  const live = byId('live');
  live.textContent = '';
  window.setTimeout(() => { live.textContent = message; }, 40);
}

function fitTag(part) {
  const status = fitStatus(part, state.car);
  const iconName = { 'no-car': 'plate', fits: 'check', check: 'question' }[status];
  return `<span class="fit fit-${status}">${icon(iconName)}${FIT_TEXT[status]}</span>`;
}

function stockTag(part) {
  return part.inStock
    ? `<span class="stock stock-in">${icon('box')}In stock</span>`
    : `<span class="stock stock-out">${icon('cross')}Out of stock</span>`;
}

function qtyControl(part, scope, addLabel = 'Add') {
  const qty = state.items[part.number] || 0;
  const key = `${scope}-${part.number}`;
  if (!qty) {
    return `<button class="btn btn-outline btn-add" type="button" data-action="add" data-part="${part.number}" data-fk="add-${key}" aria-label="Add ${escapeHtml(part.name)} to enquiry">${icon('plus')}${addLabel}</button>`;
  }
  return `<div class="stepper" role="group" aria-label="Quantity of ${escapeHtml(part.name)}">
    <button class="stepper-button" type="button" data-action="dec" data-part="${part.number}" data-fk="dec-${key}" aria-label="${qty === 1 ? 'Remove' : 'One less'}: ${escapeHtml(part.name)}">${icon('minus')}</button>
    <span class="stepper-qty">${qty}</span>
    <button class="stepper-button" type="button" data-action="inc" data-part="${part.number}" data-fk="inc-${key}" aria-label="One more: ${escapeHtml(part.name)}"${qty >= MAX_QTY ? ' disabled' : ''}>${icon('plus')}</button>
  </div>`;
}

function askLink(part, label) {
  return `<a class="btn btn-outline" href="${escapeHtml(whatsappLink(buildPartQuestion(BUSINESS_NAME, state.car, part)))}" target="_blank" rel="noopener">${icon('chat')}${label}</a>`;
}

/* ------------------------------------------------------------------
   Rendering
------------------------------------------------------------------- */
function renderCar() {
  const { car } = state;
  const plate = car ? plateText(car) : 'MY CAR';
  byId('plate-text').textContent = plate;
  byId('plate-action').textContent = car ? 'Change car' : 'Choose your car';
  byId('plate-button').classList.toggle('has-car', Boolean(car));
  byId('mini-plate').textContent = plate;
  byId('mini-plate').setAttribute('aria-label', car ? `My car: ${carLabel(car)}. Change car` : 'Choose your car');
  const status = byId('plate-status');
  if (car) {
    const fitting = PARTS.filter((part) => fitStatus(part, car) === 'fits').length;
    status.innerHTML = `${escapeHtml(carLabel(car))}. <strong>${fitting} of ${PARTS.length} parts fit.</strong>`;
  } else {
    status.textContent = 'Pick make, model and year. Every part below then says if it fits.';
  }
}

function buildChips() {
  const allChip = `<button class="chip" type="button" data-action="category" data-category="all" aria-pressed="${state.category === 'all'}">
    <span class="chip-icon">${icon('all')}</span><span>All parts</span></button>`;
  const chips = CATEGORIES.map((category) => `<button class="chip" type="button" data-action="category" data-category="${category.id}" aria-pressed="${state.category === category.id}">
    <img src="images/${category.image}" alt="" width="1024" height="1024"><span>${category.label}</span></button>`);
  byId('chips').innerHTML = allChip + chips.join('');
}

function renderChips() {
  byId('chips').querySelectorAll('.chip').forEach((chip) => {
    chip.setAttribute('aria-pressed', String(chip.dataset.category === state.category));
  });
}

function rowBuyControl(part) {
  return part.inStock ? qtyControl(part, 'row') : askLink(part, 'Ask on WhatsApp');
}

function partRow(part) {
  const category = CATEGORIES.find((c) => c.id === part.category);
  return `<li class="part">
    <img class="part-image" src="images/${category.image}" alt="${escapeHtml(category.alt)}" width="1024" height="1024" loading="lazy" decoding="async">
    <div class="part-info">
      <button class="part-name" type="button" data-action="open-part" data-part="${part.number}" data-fk="open-${part.number}">${escapeHtml(part.name)}</button>
      <p class="part-meta"><span class="part-number">${part.number}</span><span>${escapeHtml(part.position)}</span></p>
    </div>
    <div class="part-status">${fitTag(part)}${stockTag(part)}</div>
    <p class="part-price">${money.format(part.price)}</p>
    <div class="part-buy" data-part="${part.number}">${rowBuyControl(part)}</div>
  </li>`;
}

function partGroup(status, parts, note) {
  if (!parts.length) return '';
  const iconName = status === 'fits' ? 'check' : 'question';
  return `<div class="part-group">
    <div class="group-head group-${status}">
      <h3>${icon(iconName)}${FIT_TEXT[status]}</h3>
      <p>${note}</p>
    </div>
    <ul class="part-rows">${parts.map(partRow).join('')}</ul>
  </div>`;
}

function renderEmptyResults() {
  const label = state.query.trim() ? `No part matches “${escapeHtml(state.query.trim())}”` : 'No parts in this category yet';
  const question = [`Hi ${BUSINESS_NAME}, I am looking for a part that is not on your website.`, '', `Looking for: ${state.query.trim() || categoryLabel(state.category)}`, carLine(state.car)].join('\n');
  return `<div class="empty">
    <p class="empty-title">${label}</p>
    <p>Check the part number, try the part name, or clear the search. We may still have it at the shop.</p>
    <div class="empty-actions">
      <button class="btn btn-outline" type="button" data-action="clear-filters">Show all parts</button>
      <a class="btn btn-outline" href="${escapeHtml(whatsappLink(question))}" target="_blank" rel="noopener">${icon('chat')}Ask us on WhatsApp</a>
    </div>
  </div>`;
}

function renderList() {
  const parts = selectParts(PARTS, state.category, state.query);
  const list = byId('part-list');
  const { car } = state;
  byId('results-title').textContent = car ? `Parts for your ${findVehicle(car.vehicle).model}` : 'All parts';
  if (!parts.length) {
    byId('results-count').textContent = 'No parts found';
    list.innerHTML = renderEmptyResults();
    return parts;
  }
  if (!car) {
    byId('results-count').textContent = partsWord(parts.length);
    list.innerHTML = `<ul class="part-rows">${parts.map(partRow).join('')}</ul>`;
    return parts;
  }
  const fitting = parts.filter((part) => fitStatus(part, car) === 'fits');
  const others = parts.filter((part) => fitStatus(part, car) === 'check');
  byId('results-count').textContent = `${fitting.length} fit, ${others.length} to check`;
  list.innerHTML = partGroup('fits', fitting, `Listed for your car: ${partsWord(fitting.length)}`)
    + partGroup('check', others, `Not listed for your car: ${partsWord(others.length)}. Ask us before you buy.`);
  return parts;
}

function renderBar() {
  const count = countItems(state.items);
  const lines = enquiryLines(state.items, PARTS);
  byId('bar-count').textContent = count ? partsWord(count) : 'No parts yet';
  byId('bar-total').textContent = count ? `About ${money.format(enquiryTotal(lines))}` : 'Add parts to ask us';
  byId('bar-button').classList.toggle('is-ready', count > 0);
}

function renderPickerSteps() {
  const { step, make, vehicle } = state.picker;
  const steps = [
    { n: 1, label: 'Make', open: true },
    { n: 2, label: 'Model', open: Boolean(make) },
    { n: 3, label: 'Year', open: Boolean(vehicle) },
  ];
  return `<ol class="steps">${steps.map((s) => `<li>
    <button class="step" type="button" data-action="picker-step" data-step="${s.n}"${s.n === step ? ' aria-current="step"' : ''}${s.open ? '' : ' disabled'}>${s.n}. ${s.label}</button>
  </li>`).join('')}</ol>`;
}

function pickerList(action, rows) {
  return `<ul class="tap-list">${rows.map((row) => `<li>
    <button class="tap-row" type="button" data-action="${action}" data-value="${escapeHtml(row.value)}">
      <span><strong>${escapeHtml(row.title)}</strong><small>${escapeHtml(row.detail)}</small></span>${icon('chevron')}
    </button>
  </li>`).join('')}</ul>`;
}

function renderPickerStep() {
  const { step, make, vehicle } = state.picker;
  if (step === 1) {
    const makes = [...new Set(VEHICLES.map((v) => v.make))];
    return `<h3 id="picker-heading" tabindex="-1">Which make is your car?</h3>${pickerList('pick-make', makes.map((name) => ({
      value: name,
      title: name,
      detail: VEHICLES.filter((v) => v.make === name).map((v) => v.model).join(' and '),
    })))}`;
  }
  if (step === 2) {
    return `<h3 id="picker-heading" tabindex="-1">Which ${escapeHtml(make)} model?</h3>${pickerList('pick-model', VEHICLES.filter((v) => v.make === make).map((v) => ({
      value: v.id,
      title: v.model,
      detail: `${v.engines.map((e) => engineLabel(e.size)).join(' or ')}, ${v.engines[0].from} to ${v.engines[0].to}`,
    })))}`;
  }
  const chosen = findVehicle(vehicle);
  const groups = chosen.engines.map((engine) => {
    const years = [];
    for (let year = engine.to; year >= engine.from; year -= 1) years.push(year);
    return `<h4>${engineLabel(engine.size)}</h4>
      <div class="year-grid">${years.map((year) => `<button class="year" type="button" data-action="pick-year" data-engine="${engine.size}" data-year="${year}" aria-label="${year}, ${engineLabel(engine.size)}">${year}</button>`).join('')}</div>`;
  });
  return `<h3 id="picker-heading" tabindex="-1">Which year is your ${escapeHtml(chosen.model)}?</h3>
    <p class="picker-hint">The year and engine size are on your car grant.</p>${groups.join('')}`;
}

function renderPicker() {
  const { step, make, vehicle } = state.picker;
  const preview = step === 3 ? findVehicle(vehicle).plate : step === 2 ? make.toUpperCase() : 'MY CAR';
  const back = step > 1 ? `<button class="btn btn-text" type="button" data-action="picker-back">${icon('back')}Back</button>` : '';
  byId('picker-body').innerHTML = `<div class="plate plate-preview" aria-hidden="true">${escapeHtml(preview)}</div>${renderPickerSteps()}${renderPickerStep()}`;
  const question = `Hi ${BUSINESS_NAME}, my car is not on your list. Can you check parts for it?\n\nCar make, model and year: `;
  const forget = state.car && step === 1 ? `<button class="btn btn-text" type="button" data-action="forget-car">Forget ${escapeHtml(plateText(state.car))}</button>` : '';
  byId('picker-foot').innerHTML = `<div class="picker-foot-row">${back}${forget}<a class="btn btn-text" href="${escapeHtml(whatsappLink(question))}" target="_blank" rel="noopener">My car is not listed</a></div>`;
}

function detailFitBox(part) {
  const status = fitStatus(part, state.car);
  if (status === 'fits') {
    return `<div class="fit-box fit-box-fits"><p class="fit-box-title">${icon('check')}Fits your car</p><p>Listed for your ${escapeHtml(carLabel(state.car))}.</p></div>`;
  }
  if (status === 'check') {
    return `<div class="fit-box fit-box-check"><p class="fit-box-title">${icon('question')}Check fitment</p><p>This part is not listed for your ${escapeHtml(carLabel(state.car))}. Send us your car details and we will check.</p></div>`;
  }
  return `<div class="fit-box fit-box-check"><p class="fit-box-title">${icon('plate')}Choose your car to check fit</p>
    <button class="btn btn-outline" type="button" data-action="open-picker" data-fk="detail-choose-car">Choose your car</button></div>`;
}

function renderDetail() {
  const part = partByNumber(state.openPart);
  if (!part) return;
  const category = CATEGORIES.find((c) => c.id === part.category);
  const fitRows = part.fits.map(parseFit).map((fit) => {
    const mine = state.car && fitLineMatchesCar(fit, state.car);
    return `<li${mine ? ' class="is-mine"' : ''}>${mine ? icon('check') : ''}<span>${escapeHtml(fitLineLabel(fit))}${mine ? ' <strong>(your car)</strong>' : ''}</span></li>`;
  });
  byId('part-title').textContent = part.name;
  byId('part-body').innerHTML = `<div class="detail-top">
      <img src="images/${category.image}" alt="${escapeHtml(category.alt)}" width="1024" height="1024">
      <dl class="detail-facts">
        <div><dt>Part number</dt><dd class="part-number">${part.number}</dd></div>
        <div><dt>Position</dt><dd>${escapeHtml(part.position)}</dd></div>
        <div><dt>Price</dt><dd>${money.format(part.price)}</dd></div>
      </dl>
    </div>
    ${detailFitBox(part)}
    <p class="detail-stock">${stockTag(part)}</p>
    <h3>Listed fitment</h3>
    <ul class="fit-list">${fitRows.join('')}</ul>`;
  const buy = part.inStock
    ? `<div class="detail-buy"><span>Quantity</span>${qtyControl(part, 'sheet', 'Add to enquiry')}</div>`
    : '';
  byId('part-foot').innerHTML = `${buy}${askLink(part, part.inStock ? 'Not sure? Send us your car details' : 'Ask when it is back in stock')}`;
}

function renderEnquiry() {
  const lines = enquiryLines(state.items, PARTS);
  const { car } = state;
  byId('enquiry-car').innerHTML = car
    ? `<div class="enquiry-car">
        <span class="mini-plate mini-plate-static">${escapeHtml(plateText(car))}</span>
        <p>${escapeHtml(carLabel(car))}</p>
        <button class="btn btn-text" type="button" data-action="open-picker" data-fk="enquiry-change-car">Change car</button>
      </div>`
    : `<div class="enquiry-car enquiry-car-missing">
        <p>Add your car so we can confirm fitment.</p>
        <button class="btn btn-outline" type="button" data-action="open-picker" data-fk="enquiry-change-car">Choose your car</button>
      </div>`;
  byId('enquiry-lines').innerHTML = lines.length
    ? `<ul class="enquiry-rows">${lines.map((line) => `<li class="enquiry-row">
        <div class="enquiry-row-text">
          <p class="enquiry-row-name">${escapeHtml(line.part.name)}</p>
          <p class="part-meta"><span class="part-number">${line.part.number}</span><span>${escapeHtml(line.part.position)}</span></p>
          ${fitTag(line.part)}
        </div>
        <div class="enquiry-row-buy">
          ${qtyControl(line.part, 'enq')}
          <p class="enquiry-row-total">${money.format(line.lineTotal)}</p>
        </div>
      </li>`).join('')}</ul>
      <button class="btn btn-text" type="button" data-action="clear-enquiry">Remove all parts</button>`
    : `<div class="empty">
        <p class="empty-title">No parts added yet</p>
        <p>Tap Add on a part and it shows up here, ready to send to us on WhatsApp.</p>
        <button class="btn btn-outline" type="button" data-action="close-sheet">Back to parts</button>
      </div>`;
  byId('enquiry-note-field').hidden = !lines.length;
  byId('enquiry-foot').hidden = !lines.length;
  byId('enquiry-total').textContent = money.format(enquiryTotal(lines));
  updateSendLink();
}

function updateSendLink() {
  const lines = enquiryLines(state.items, PARTS);
  byId('enquiry-send').href = whatsappLink(buildEnquiryMessage(BUSINESS_NAME, state.car, lines, byId('enquiry-note').value));
}

function focusReplacement(key) {
  const [kind, ...rest] = key.split('-');
  const tail = rest.join('-');
  if (kind === 'add') return `inc-${tail}`;
  if (kind === 'dec') return `add-${tail}`;
  return '';
}

function focusByKey(key) {
  const candidates = [key, focusReplacement(key)].filter(Boolean);
  for (const candidate of candidates) {
    const element = document.querySelector(`[data-fk="${candidate}"]`);
    if (element) { element.focus({ preventScroll: true }); return true; }
  }
  return false;
}

function renderRowBuyControls() {
  document.querySelectorAll('.part-buy').forEach((slot) => {
    slot.innerHTML = rowBuyControl(partByNumber(slot.dataset.part));
  });
}

/* A quantity change only touches the buy controls, so row images never reload. */
function render({ quantitiesOnly = false } = {}) {
  const active = document.activeElement;
  const key = active && active.dataset ? active.dataset.fk : '';
  if (quantitiesOnly) {
    renderRowBuyControls();
  } else {
    renderCar();
    renderChips();
    renderList();
  }
  renderBar();
  if (byId('part-sheet').open) renderDetail();
  if (byId('enquiry').open) renderEnquiry();
  if (key && document.activeElement !== active && !focusByKey(key) && byId('enquiry').open) byId('enquiry-title').focus();
}

/* ------------------------------------------------------------------
   Sheets: native dialogs trap focus and close on Esc
------------------------------------------------------------------- */
function openSheet(dialog, returnKey) {
  if (dialog.open) return;
  dialog.dataset.returnKey = returnKey || '';
  dialog.showModal();
  dialog.querySelector('.sheet-body').scrollTop = 0;
}

function openPicker(returnKey) {
  state.picker = { step: 1, make: null, vehicle: null };
  renderPicker();
  openSheet(byId('picker'), returnKey);
}

function showPickerStep(step) {
  state.picker.step = step;
  renderPicker();
  byId('picker-body').scrollTop = 0;
  byId('picker-heading').focus();
}

function changeQty(number, delta) {
  const part = partByNumber(number);
  const next = (state.items[number] || 0) + delta;
  state.items = setQty(state.items, number, next);
  saveStored();
  render({ quantitiesOnly: true });
  const count = countItems(state.items);
  announce(`${part.name}: ${next > 0 ? `quantity ${state.items[number]}` : 'removed'}. ${count ? `${partsWord(count)} in your enquiry.` : 'Your enquiry is empty.'}`);
}

function setCar(car) {
  state.car = car;
  saveStored();
  byId('picker').close();
  if (car) {
    const fitting = PARTS.filter((part) => fitStatus(part, car) === 'fits').length;
    announce(`Your car is ${carLabel(car)}. ${fitting} of ${PARTS.length} parts fit.`);
  } else {
    announce('Car removed.');
  }
}

const actions = {
  'open-picker': (el) => openPicker(el.dataset.fk),
  'close-sheet': (el) => el.closest('dialog').close(),
  'pick-make': (el) => { state.picker.make = el.dataset.value; state.picker.vehicle = null; showPickerStep(2); },
  'pick-model': (el) => { state.picker.vehicle = el.dataset.value; showPickerStep(3); },
  'pick-year': (el) => setCar({ vehicle: state.picker.vehicle, engine: el.dataset.engine, year: Number(el.dataset.year) }),
  'picker-back': () => showPickerStep(state.picker.step - 1),
  'picker-step': (el) => showPickerStep(Number(el.dataset.step)),
  'forget-car': () => setCar(null),
  'open-part': (el) => {
    state.openPart = el.dataset.part;
    renderDetail();
    openSheet(byId('part-sheet'), el.dataset.fk);
  },
  add: (el) => changeQty(el.dataset.part, 1),
  inc: (el) => changeQty(el.dataset.part, 1),
  dec: (el) => changeQty(el.dataset.part, -1),
  'open-enquiry': (el) => { renderEnquiry(); openSheet(byId('enquiry'), el.dataset.fk); },
  'clear-enquiry': () => {
    state.items = {};
    saveStored();
    render();
    byId('enquiry-title').focus();
    announce('All parts removed. Your enquiry is empty.');
  },
  category: (el) => {
    state.category = el.dataset.category;
    render();
    document.querySelector(`[data-category="${state.category}"]`).focus({ preventScroll: true });
    announceResults();
  },
  'clear-search': () => {
    state.query = '';
    byId('search-input').value = '';
    byId('search-clear').hidden = true;
    render();
    byId('search-input').focus();
  },
  'clear-filters': () => {
    state.query = '';
    state.category = 'all';
    byId('search-input').value = '';
    byId('search-clear').hidden = true;
    render();
    byId('search-input').focus();
  },
};

function announceResults() {
  announce(byId('results-count').textContent);
}

function init() {
  Object.assign(state, loadStored());
  buildChips();
  render();

  document.addEventListener('click', (event) => {
    const element = event.target.closest('[data-action]');
    if (!element || element.disabled) return;
    actions[element.dataset.action](element);
  });

  document.querySelectorAll('dialog.sheet').forEach((dialog) => {
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener('close', () => {
      render();
      const key = dialog.dataset.returnKey;
      if (key && !focusByKey(key)) byId('plate-button').focus();
    });
  });

  let searchTimer = 0;
  byId('search-input').addEventListener('input', (event) => {
    state.query = event.target.value;
    byId('search-clear').hidden = !state.query;
    renderList();
    window.clearTimeout(searchTimer);
    searchTimer = window.setTimeout(announceResults, 500);
  });
  byId('search-form').addEventListener('submit', (event) => {
    event.preventDefault();
    byId('search-input').blur();
  });
  byId('enquiry-note').addEventListener('input', updateSendLink);

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([entry]) => {
      byId('mini-plate').hidden = entry.isIntersecting;
    }, { rootMargin: '-64px 0px 0px 0px' });
    observer.observe(byId('plate-button'));
  }
}

init();
