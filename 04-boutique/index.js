/* Edit this list to change the collection.
   image: file in images/. shownIn: the colour worn in the photo, and it must match one colour name.
   hex: the real fabric colour for the swatch. focus: which part of the photo stays in view when cropped. */
const PRODUCTS = [
  {
    id: 'sage-crepe-kurung',
    name: 'Sage crepe kurung',
    fabric: 'Matte crepe, tunic and skirt',
    fall: 'The tunic falls straight past the hip and the skirt opens gently towards the hem.',
    price: 189,
    image: 'images/look-1.webp',
    alt: 'Woman in a sage green crepe baju kurung with a matching shawl, the skirt falling to her ankles.',
    focus: '50% 28%',
    shownIn: 'Sage',
    colours: [
      { name: 'Sage', hex: '#8F9E86' },
      { name: 'Dusty rose', hex: '#C99A98' },
      { name: 'Navy', hex: '#2B3550' },
      { name: 'Mulberry', hex: '#6A2148' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'mulberry-satin-kurung-moden',
    name: 'Mulberry satin kurung moden',
    fabric: 'Satin, with a matching shawl',
    fall: 'Closer through the shoulder, with a straight skirt and a soft shine that moves as you walk.',
    price: 229,
    image: 'images/look-2.webp',
    alt: 'Woman in a deep mulberry satin kurung moden, a long matching shawl draped over one shoulder.',
    focus: '50% 58%',
    shownIn: 'Mulberry',
    colours: [
      { name: 'Mulberry', hex: '#5E1A44' },
      { name: 'Emerald', hex: '#1F5A4C' },
      { name: 'Champagne', hex: '#D8C6A6' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'ivory-linen-set',
    name: 'Ivory linen set',
    fabric: 'Washed linen tunic and wide trousers',
    fall: 'The tunic has side slits, so it sits easily over trousers that fall wide and straight.',
    price: 249,
    image: 'images/look-3.webp',
    alt: 'Woman in an ivory linen tunic with side slits and wide trousers, against a muted sage wall.',
    focus: '50% 50%',
    shownIn: 'Ivory',
    colours: [
      { name: 'Ivory', hex: '#E6DECB' },
      { name: 'Oat', hex: '#C9B99E' },
      { name: 'Olive', hex: '#6B6E4E' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'dusty-blue-abaya',
    name: 'Dusty blue abaya',
    fabric: 'Soft crepe with wide sleeves',
    fall: 'Cut full from the shoulder, so it drops in long, soft folds all the way to the floor.',
    price: 219,
    image: 'images/look-4.webp',
    alt: 'Woman in a dusty blue abaya with wide sleeves and a matching shawl, the cloth falling in long folds.',
    focus: '50% 58%',
    shownIn: 'Dusty blue',
    colours: [
      { name: 'Dusty blue', hex: '#6F84A0' },
      { name: 'Taupe', hex: '#9A8C80' },
      { name: 'Black', hex: '#1E1C20' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'blush-pleated-dress',
    name: 'Blush pleated dress',
    fabric: 'Pleated chiffon with a long cardigan',
    fall: 'Fine pleats run to the floor, and the long cardigan hangs open over them.',
    price: 239,
    image: 'images/look-5.webp',
    alt: 'Woman in a blush pink pleated dress and long open cardigan, against a pale lilac wall.',
    focus: '50% 36%',
    shownIn: 'Blush',
    colours: [
      { name: 'Blush', hex: '#D8A7A5' },
      { name: 'Lilac', hex: '#B9A6C4' },
      { name: 'Mocha', hex: '#8A6F62' }
    ],
    sizes: ['XS', 'S', 'M', 'L']
  }
];

const STORAGE_KEY = 'supplier-boutique-supplier';
const BUSINESS_NAME = 'Supplier Hub';
const WHATSAPP_URL = 'https://wa.me/601158121239';
const MAX_QUANTITY = 10;

const currency = new Intl.NumberFormat('en-MY', { style: 'currency', currency: 'MYR' });
const formatPrice = (amount) => currency.format(amount).replace(/ /g, ' ');

/* Bag maths. Pure functions: a bag is a list of { id, colour, size, quantity }. */

const findProduct = (id) => PRODUCTS.find((product) => product.id === id);
const sameLine = (a, b) => a.id === b.id && a.colour === b.colour && a.size === b.size;
const clampQuantity = (quantity) => Math.min(MAX_QUANTITY, Math.max(1, quantity));

function addLine(bag, item) {
  const existing = bag.find((line) => sameLine(line, item));
  if (!existing) return [...bag, { ...item, quantity: 1 }];
  return bag.map((line) => (line === existing ? { ...line, quantity: clampQuantity(line.quantity + 1) } : line));
}

function changeQuantity(bag, index, change) {
  return bag.map((line, i) => (i === index ? { ...line, quantity: clampQuantity(line.quantity + change) } : line));
}

const removeLine = (bag, index) => bag.filter((line, i) => i !== index);
const countItems = (bag) => bag.reduce((sum, line) => sum + line.quantity, 0);
const lineTotal = (line) => findProduct(line.id).price * line.quantity;
const bagTotal = (bag) => bag.reduce((sum, line) => sum + lineTotal(line), 0);
const itemsLabel = (count) => `${count} ${count === 1 ? 'item' : 'items'}`;

/* Drops anything saved that no longer matches the collection, such as a removed piece. */
function cleanBag(saved) {
  if (!Array.isArray(saved)) return [];
  return saved.flatMap((line) => {
    const product = line && findProduct(line.id);
    const valid = product && product.sizes.includes(line.size) && product.colours.some((colour) => colour.name === line.colour);
    if (!valid || !Number.isInteger(line.quantity)) return [];
    return [{ id: line.id, colour: line.colour, size: line.size, quantity: clampQuantity(line.quantity) }];
  });
}

function joinWords(words) {
  if (words.length < 2) return words.join('');
  return `${words.slice(0, -1).join(', ')} and ${words[words.length - 1]}`;
}

/* The photo is never recoloured, so this line always says what the photo really shows. */
function colourNote(product, chosen) {
  const shown = product.shownIn.toLowerCase();
  if (chosen !== product.shownIn) return `Photo shows ${shown}. Your piece will be ${chosen.toLowerCase()}.`;
  const others = product.colours.filter((colour) => colour.name !== product.shownIn).map((colour) => colour.name.toLowerCase());
  return `Shown in ${shown}, also available in ${joinWords(others)}.`;
}

function composeMessage(bag, customer) {
  const lines = bag.map((line, index) => {
    const product = findProduct(line.id);
    return `${index + 1}. ${product.name}\n   Colour: ${line.colour}\n   Size: ${line.size}\n   Quantity: ${line.quantity}\n   ${formatPrice(lineTotal(line))}`;
  });
  return [
    `Hi ${BUSINESS_NAME}, I would like to reserve:`,
    '',
    ...lines,
    '',
    `Total before delivery: ${formatPrice(bagTotal(bag))}`,
    `Name: ${customer.name}`,
    `Delivery area: ${customer.area}`,
    '',
    'Please confirm stock and payment. Thank you.'
  ].join('\n');
}

const whatsappLink = (message) => `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;

/* Dark tick on light cloth and light tick on dark cloth, so the chosen swatch always reads. */
function tickColour(hex) {
  const [r, g, b] = [1, 3, 5].map((start) => parseInt(hex.slice(start, start + 2), 16));
  return (r * 299 + g * 587 + b * 114) / 1000 > 140 ? '#221A22' : '#FFFFFF';
}

/* Interface */

function startBoutique() {
  const looksRoot = document.getElementById('looks');
  const pieceGrid = document.getElementById('piece-grid');
  const bagSheet = document.getElementById('bag-sheet');
  const sizeSheet = document.getElementById('size-sheet');
  const photoSheet = document.getElementById('photo-sheet');
  const bagButton = document.getElementById('bag-open');
  const bagCount = document.getElementById('bag-count');
  const bagLines = document.getElementById('bag-lines');
  const bagEmpty = document.getElementById('bag-empty');
  const bagCheckout = document.getElementById('bag-checkout');
  const bagFoot = document.getElementById('bag-foot');
  const bagTotalText = document.getElementById('bag-total');
  const reserveForm = document.getElementById('reserve-form');
  const reserveStatus = document.getElementById('reserve-status');
  const reserveNote = document.getElementById('reserve-note');
  const reserveLink = document.getElementById('reserve-link');
  const nameField = document.getElementById('customer-name');
  const areaField = document.getElementById('customer-area');

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const ICON_MINUS = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 12h12"/></svg>';
  const ICON_PLUS = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 12h12M12 6v12"/></svg>';
  const ICON_EXPAND = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9 4.5H4.5V9M15 4.5h4.5V9M9 19.5H4.5V15M15 19.5h4.5V15"/></svg>';
  const ICON_TICK = '<svg class="swatch-tick" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5.5 12.5l4.5 4.5 8.5-10"/></svg>';
  const ICON_ALERT = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 7.5v6M12 16.5v.5M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17z"/></svg>';

  function readBag() {
    try {
      return cleanBag(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    } catch (error) {
      return [];
    }
  }

  function saveBag() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bag));
    } catch (error) {
      /* Private browsing can refuse storage. The bag still works until the page closes. */
    }
  }

  let bag = readBag();

  function announce(message) {
    const region = document.getElementById(bagSheet.open ? 'sheet-live' : 'page-live');
    region.textContent = message;
  }

  function swatchHtml(product, colour) {
    const checked = colour.name === product.shownIn ? ' checked' : '';
    return `<label class="swatch" title="${escapeHtml(colour.name)}" style="--cloth:${colour.hex};--tick:${tickColour(colour.hex)}">
      <input type="radio" name="colour-${product.id}" value="${escapeHtml(colour.name)}" aria-label="${escapeHtml(colour.name)}"${checked}>
      <span class="swatch-face"><span class="swatch-cloth"></span>${ICON_TICK}</span>
    </label>`;
  }

  function sizeHtml(product, size) {
    return `<label class="size-chip">
      <input type="radio" name="size-${product.id}" value="${escapeHtml(size)}">
      <span>${escapeHtml(size)}</span>
    </label>`;
  }

  function lookHtml(product, index) {
    const { id } = product;
    return `<section class="look" id="look-${id}" aria-labelledby="name-${id}">
      <div class="look-photo">
        <img src="${product.image}" width="933" height="1400" loading="lazy" alt="${escapeHtml(product.alt)}" style="--focus:${product.focus}">
        <p class="look-index">Look ${index + 1} of ${PRODUCTS.length}</p>
        <button class="photo-button" type="button" data-photo="${id}">${ICON_EXPAND}<span>Full length<span class="visually-hidden"> photo of ${escapeHtml(product.name)}</span></span></button>
      </div>
      <form class="look-panel" data-product="${id}" novalidate>
        <div class="look-head">
          <h2 id="name-${id}">${escapeHtml(product.name)}</h2>
          <p class="look-fabric">${escapeHtml(product.fabric)}</p>
          <p class="look-price">${formatPrice(product.price)}</p>
          <p class="look-fall">${escapeHtml(product.fall)}</p>
        </div>
        <div class="choice" role="radiogroup" aria-labelledby="colour-label-${id}">
          <span class="choice-label" id="colour-label-${id}">Colour: <span data-chosen-colour>${escapeHtml(product.shownIn)}</span></span>
          <div class="swatches">${product.colours.map((colour) => swatchHtml(product, colour)).join('')}</div>
        </div>
        <p class="colour-note" data-colour-note>${escapeHtml(colourNote(product, product.shownIn))}</p>
        <div class="choice choice-size" role="radiogroup" aria-labelledby="size-label-${id}" aria-describedby="size-error-${id}" data-size-group>
          <span class="choice-label" id="size-label-${id}">Size</span>
          <div class="sizes">${product.sizes.map((size) => sizeHtml(product, size)).join('')}</div>
        </div>
        <p class="field-error" id="size-error-${id}" role="alert" data-size-error></p>
        <div class="look-actions">
          <button class="button button-primary" type="submit" data-add>Add to bag</button>
          <button class="text-button" type="button" data-size-guide>Size guide</button>
        </div>
      </form>
    </section>`;
  }

  function pieceHtml(product) {
    const count = product.colours.length;
    const dots = product.colours.map((colour) => `<span class="dot" style="--cloth:${colour.hex}"></span>`).join('');
    return `<li class="piece">
      <a class="piece-link" href="#look-${product.id}">
        <img src="${product.image}" width="933" height="1400" loading="lazy" alt="${escapeHtml(product.alt)}">
        <h3>${escapeHtml(product.name)}</h3>
        <p class="piece-price">${formatPrice(product.price)}</p>
        <p class="piece-colours"><span class="dots" aria-hidden="true">${dots}</span>${count} colours</p>
      </a>
    </li>`;
  }

  const helpTile = `<li class="piece-help">
    <p>Not sure which piece suits you?</p>
    <a class="text-button" href="${WHATSAPP_URL}?text=${encodeURIComponent(`Hi ${BUSINESS_NAME}, could you help me choose a piece?`)}" target="_blank" rel="noopener">Ask on WhatsApp</a>
  </li>`;

  looksRoot.innerHTML = PRODUCTS.map(lookHtml).join('');
  pieceGrid.innerHTML = PRODUCTS.map(pieceHtml).join('') + helpTile;

  const firstLookHref = `#look-${PRODUCTS[0].id}`;
  document.getElementById('opening-cta').href = firstLookHref;
  document.getElementById('bag-empty-cta').href = firstLookHref;

  function bagLineHtml(line, index) {
    const product = findProduct(line.id);
    return `<li class="bag-line">
      <img src="${product.image}" width="933" height="1400" alt="">
      <div class="bag-line-info">
        <h3>${escapeHtml(product.name)}</h3>
        <p>Colour: ${escapeHtml(line.colour)}${line.colour === product.shownIn ? '' : ` (photo shows ${escapeHtml(product.shownIn.toLowerCase())})`}</p>
        <p>Size: ${escapeHtml(line.size)}</p>
        <p class="bag-line-price">${formatPrice(lineTotal(line))}</p>
        <div class="bag-line-actions">
          <div class="quantity" role="group" aria-label="Quantity of ${escapeHtml(product.name)}">
            <button class="icon-button" type="button" data-change="-1" data-line="${index}" aria-label="One less"${line.quantity <= 1 ? ' disabled' : ''}>${ICON_MINUS}</button>
            <span class="quantity-value">${line.quantity}</span>
            <button class="icon-button" type="button" data-change="1" data-line="${index}" aria-label="One more"${line.quantity >= MAX_QUANTITY ? ' disabled' : ''}>${ICON_PLUS}</button>
          </div>
          <button class="text-button" type="button" data-remove="${index}" aria-label="Remove ${escapeHtml(product.name)}, ${escapeHtml(line.colour)}, size ${escapeHtml(line.size)}">Remove</button>
        </div>
      </div>
    </li>`;
  }

  function showBag() {
    const count = countItems(bag);
    const isEmpty = bag.length === 0;
    bagCount.textContent = count;
    bagCount.toggleAttribute('data-empty', isEmpty);
    bagButton.setAttribute('aria-label', `Open bag, ${itemsLabel(count)}`);
    bagLines.innerHTML = bag.map(bagLineHtml).join('');
    bagTotalText.textContent = formatPrice(bagTotal(bag));
    bagEmpty.hidden = !isEmpty;
    bagLines.hidden = isEmpty;
    bagCheckout.hidden = isEmpty;
    bagFoot.hidden = isEmpty;
  }

  function showReserved(isSent) {
    reserveStatus.hidden = !isSent;
    reserveNote.hidden = isSent;
  }

  function setBag(nextBag) {
    bag = nextBag;
    saveBag();
    showReserved(false);
    showBag();
  }

  /* Choosing on a look */

  function showSizeError(form, message) {
    const group = form.querySelector('[data-size-group]');
    const error = form.querySelector('[data-size-error]');
    error.innerHTML = message ? `${ICON_ALERT}<span>${escapeHtml(message)}</span>` : '';
    group.toggleAttribute('data-invalid', Boolean(message));
    if (message) group.setAttribute('aria-invalid', 'true');
    else group.removeAttribute('aria-invalid');
  }

  looksRoot.addEventListener('change', (event) => {
    const form = event.target.closest('form');
    const product = findProduct(form.dataset.product);
    if (event.target.name.startsWith('colour-')) {
      form.querySelector('[data-chosen-colour]').textContent = event.target.value;
      form.querySelector('[data-colour-note]').textContent = colourNote(product, event.target.value);
    } else {
      showSizeError(form, '');
    }
  });

  looksRoot.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    const product = findProduct(form.dataset.product);
    const colour = form.querySelector(`input[name="colour-${product.id}"]:checked`).value;
    const size = form.querySelector(`input[name="size-${product.id}"]:checked`);
    if (!size) {
      showSizeError(form, 'Choose a size to add this piece to your bag.');
      form.querySelector(`input[name="size-${product.id}"]`).focus();
      return;
    }
    setBag(addLine(bag, { id: product.id, colour, size: size.value }));
    announce(`${product.name} in ${colour}, size ${size.value}, added. Your bag has ${itemsLabel(countItems(bag))}.`);
    const button = form.querySelector('[data-add]');
    button.textContent = 'Added to bag';
    window.clearTimeout(button.resetTimer);
    button.resetTimer = window.setTimeout(() => { button.textContent = 'Add to bag'; }, 1800);
  });

  looksRoot.addEventListener('click', (event) => {
    const photoButton = event.target.closest('[data-photo]');
    if (photoButton) {
      const product = findProduct(photoButton.dataset.photo);
      const image = document.getElementById('photo-image');
      image.src = product.image;
      image.alt = product.alt;
      document.getElementById('photo-title').textContent = product.name;
      photoSheet.showModal();
    }
    if (event.target.closest('[data-size-guide]')) sizeSheet.showModal();
  });

  /* Sheets: native modal dialogs trap focus, close on Esc and hand focus back to the opener. */

  document.querySelectorAll('dialog').forEach((sheet) => {
    sheet.addEventListener('click', (event) => {
      if (event.target === sheet || event.target.closest('[data-close]')) sheet.close();
    });
  });

  bagButton.addEventListener('click', () => {
    showBag();
    bagSheet.showModal();
  });

  document.getElementById('bag-empty-cta').addEventListener('click', () => bagSheet.close());

  /* Bag sheet */

  /* Rebuilding the lines drops focus, so put it back on the matching control. */
  function refocus(selector, fallback) {
    const target = bagLines.querySelector(`${selector}:not(:disabled)`) || fallback();
    if (target) target.focus();
  }

  bagLines.addEventListener('click', (event) => {
    const change = event.target.closest('[data-change]');
    const remove = event.target.closest('[data-remove]');
    if (change) {
      const index = Number(change.dataset.line);
      const direction = change.dataset.change;
      setBag(changeQuantity(bag, index, Number(direction)));
      announce(`Quantity ${bag[index].quantity}. Your bag has ${itemsLabel(countItems(bag))}.`);
      refocus(`[data-line="${index}"][data-change="${direction}"]`, () => bagLines.querySelector(`[data-line="${index}"]:not(:disabled)`));
    }
    if (remove) {
      const index = Number(remove.dataset.remove);
      setBag(removeLine(bag, index));
      announce(bag.length ? `Removed. Your bag has ${itemsLabel(countItems(bag))}.` : 'Removed. Your bag is empty.');
      refocus(`[data-remove="${Math.min(index, bag.length - 1)}"]`, () => bagEmpty);
    }
  });

  function checkField(field, message) {
    const error = document.getElementById(`${field.id}-error`);
    const isEmpty = field.value.trim() === '';
    error.innerHTML = isEmpty ? `${ICON_ALERT}<span>${escapeHtml(message)}</span>` : '';
    if (isEmpty) field.setAttribute('aria-invalid', 'true');
    else field.removeAttribute('aria-invalid');
    return !isEmpty;
  }

  [nameField, areaField].forEach((field) => {
    field.addEventListener('input', () => {
      if (field.hasAttribute('aria-invalid')) {
        document.getElementById(`${field.id}-error`).innerHTML = '';
        field.removeAttribute('aria-invalid');
      }
    });
  });

  reserveForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!bag.length) return;
    const areaOk = checkField(areaField, 'Enter your delivery area so the boutique can confirm delivery.');
    const nameOk = checkField(nameField, 'Enter your name so the boutique knows who is reserving.');
    if (!nameOk || !areaOk) {
      (nameOk ? areaField : nameField).focus();
      return;
    }
    const url = whatsappLink(composeMessage(bag, { name: nameField.value.trim(), area: areaField.value.trim() }));
    reserveLink.href = url;
    showReserved(true);
    announce('Your message is ready in WhatsApp.');
    /* A real link click is what in-app browsers such as Instagram's allow through. */
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener';
    link.click();
  });

  showBag();
}

if (typeof document !== 'undefined') startBoutique();
