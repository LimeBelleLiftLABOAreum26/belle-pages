/* どの店舗でも同じHTMLを使い、config/stores.jsの情報を反映します。 */
(() => {
  'use strict';
  const status = document.getElementById('status');
  try {
    const id = new URLSearchParams(location.search).get('store') || 'shiki';
    const stores = window.BELLE_STORES || {};
    if (!Object.hasOwn(stores, id) || stores[id].enabled !== true) {
      throw new Error('この店舗のページは公開されていません。URLをご確認ください。');
    }
    const store = stores[id];
    for (const key of ['name', 'bookingLabel', 'access', 'hours', 'closedDays', 'phone']) {
      if (typeof store[key] !== 'string' || !store[key].trim()) {
        throw new Error('店舗情報の設定が未完了です。店舗へお問い合わせください。');
      }
    }
    if (!Array.isArray(store.address) || !store.address.length ||
        store.address.some(line => typeof line !== 'string' || !line.trim())) {
      throw new Error('店舗住所の設定が未完了です。');
    }
    const booking = new URL(store.bookingUrl);
    const map = new URL(store.mapEmbedUrl);
    if (!['https:', 'http:'].includes(booking.protocol) || map.protocol !== 'https:' ||
        !['www.google.com', 'maps.google.com', 'www.google.co.jp'].includes(map.hostname) ||
        !map.pathname.startsWith('/maps/embed')) {
      throw new Error('予約URLまたは地図URLの設定をご確認ください。');
    }
    const digits = store.phone.replace(/[\s()（）\-ー－]/g, '');
    if (!/^\+?\d{9,15}$/.test(digits)) throw new Error('電話番号の設定をご確認ください。');
    document.title = `${store.name}｜ハーブピーリング`;
    const fields = { ...store, preview: `${store.name}｜店舗情報反映プレビュー` };
    document.querySelectorAll('[data-field]').forEach(el => {
      el.textContent = fields[el.dataset.field];
    });
    const address = document.querySelector('[data-address]');
    store.address.forEach((line, i) => {
      if (i) address.append(document.createElement('br'));
      address.append(document.createTextNode(line));
    });
    document.querySelectorAll('[data-booking]').forEach(el => {
      el.href = store.bookingUrl;
      el.textContent = store.bookingLabel;
    });
    document.querySelectorAll('[data-phone]').forEach(el => {
      el.href = `tel:${digits}`;
      el.textContent = el.hasAttribute('data-phone-number') ? store.phone : `電話で予約　${store.phone}`;
    });
    const iframe = document.querySelector('[data-map]');
    iframe.src = store.mapEmbedUrl;
    iframe.title = `${store.name}のGoogleマップ`;
    status.hidden = true;
    document.querySelector('.preview').hidden = false;
    document.querySelector('main').hidden = false;
  } catch (error) {
    status.textContent = error.message;
    status.setAttribute('role', 'alert');
  }
})();
