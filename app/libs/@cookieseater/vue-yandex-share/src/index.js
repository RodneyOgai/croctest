import {YandexShare} from './YandexShare.js';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('yandex-share', YandexShare);
}

export default YandexShare;
