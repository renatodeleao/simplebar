import MutationObserver from 'mutation-observer';
import { install } from 'vue-demi'

install()
window.MutationObserver = MutationObserver;

