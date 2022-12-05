/**
 * simplebar-vue - v1.7.2
 * Vue component for SimpleBar
 * https://grsmto.github.io/simplebar/
 *
 * Made by Piers Olenski
 * Under MIT License
 */

import 'core-js/modules/es.number.constructor.js';
import 'core-js/modules/es.object.entries.js';
import SimpleBarCore from 'simplebar';
import { isVue3, h } from 'vue-demi';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var lifecycleEventNames = {
  beforeUnmount: isVue3 ? 'beforeUnmount' : 'beforeDestroy',
  unmount: isVue3 ? 'unmount' : 'destroy'
};

var _name$props$emits$dat;
/**
 * This is not as easy to read than a regular <template> block, but a
 * render function is a necessary "evil" to avoid compiler output
 * differences between vue2 and vue3, which would required a
 * different cross-compatible implementation.
 *
 * IMPORTANT NOTES:
 *  - options API is required to keep backwards compatibility to vue<@2.6.
 *    only superior versions get compat with @vue/composition-api plugin.
 *  - String template refs are required for compat @vue<2.7
 *  - If refactoring to composition-api and thus dropping support to vue<@2.6
 *    do note that returning a render function from setup() hook does not
 *    in >=2.6.0 < 2.7.0 because the way @vue/composition-api handles
 *    template refs.
 *    {@link https://github.com/vuejs/composition-api#limitations}
 *
 * ALTERNATIVES:
 *  - https://github.com/vueuse/vue-demi/issues/152
 *  - https://github.com/vueuse/vue-demi/issues/153
 *  - https://github.com/vueuse/vue-demi/issues/154
 *  - {@link https://github.com/cloydlau/json-editor-vue/blob/3a6127d6587ef297f7ab60800cf78a8be5327cb7/src/Component.ts}
 *
 *
 * @todo maybe using jsx in a next version would make this a bit more readable.
 * but we need to ensure it compiles to a cross-compatible render function
 * to avoid going back to the same place where we've been with the <template>
 */

function renderFn(_ref) {
  var _slots$default;

  var h = _ref.h,
      emit = _ref.emit,
      slots = _ref.slots;

  var onScroll = function onScroll(event) {
    return emit('scroll', event);
  };

  return h('div', {
    ref: 'element'
  }, [h('div', {
    class: "simplebar-wrapper"
  }, [h('div', {
    class: 'simplebar-height-auto-observer-wrapper'
  }, [h('div', {
    class: 'simplebar-height-auto-observer'
  })]), h('div', {
    class: 'simplebar-mask'
  }, [h('div', {
    class: 'simplebar-offset'
  }, [h('div', _objectSpread2({
    ref: 'scrollElement',
    class: 'simplebar-content-wrapper'
  }, isVue3 ? {
    onScroll: onScroll
  } : {
    on: {
      scroll: onScroll
    }
  }), [h('div', {
    class: 'simplebar-content',
    ref: 'contentElement'
  }, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots))])])]), h('div', {
    class: 'simplebar-placeholder'
  })]), h('div', {
    class: 'simplebar-track simplebar-horizontal'
  }, [h('div', {
    class: 'simplebar-scrollbar'
  })]), h('div', {
    class: 'simplebar-track simplebar-vertical'
  }, [h('div', {
    class: 'simplebar-scrollbar'
  })])]);
}

var simplebar = (_name$props$emits$dat = {
  name: 'simplebar-vue',
  props: {
    /**
     * By default SimpleBar automatically hides the scrollbar if the user is not scrolling
     * (it emulates Mac OSX Lion's scrollbar). You can make the scrollbar always visible
     * by passing `false`.
     *
     * Default value is `true`.
     *
     * You can also control the animation via CSS as it's a simple CSS opacity transition.
     */
    autoHide: {
      type: Boolean,
      default: undefined
    },

    /**
     * It is possible to change the default class names that SimpleBar uses.
     * To get your own styles to work refer to simplebar.css to get an idea how to setup your css.
     * - `content` represents the wrapper for the content being scrolled.
     * - `scrollContent` represents the container containing the elements being scrolled.
     * - `scrollbar` defines the style of the scrollbar with which the user can interact to scroll the content.
     * - `track` styles the area surrounding the `scrollbar`.
     *
     * ```js
     * classNames: {
     *   // defaults
     *   content: 'simplebar-content',
     *   scrollContent: 'simplebar-scroll-content',
     *   scrollbar: 'simplebar-scrollbar',
     *   track: 'simplebar-track'
     * }
     * ```
     */
    classNames: Object,

    /**
     * Force the track to be visible (same behaviour as `overflow: scroll`).
     * Can be `boolean | 'x' | 'y'`, defaults to `false`, which behaves like `overflow: auto`.
     */
    forceVisible: {
      type: [Boolean, String],
      validator: function validator(v) {
        return typeof v === 'boolean' || v === 'x' || v === 'y';
      },
      default: undefined
    },

    /**
     * Set custom aria-label attribute for users with screen reader.
     */
    ariaLabel: String,

    /**
     * Activate RTL support by passing `'rtl'`.
     * You will also need a css rule with `direction: rtl`.
     */
    direction: {
      type: String,
      validator: function validator(v) {
        return v === 'ltr' || v === 'rtl';
      }
    },

    /**
     * Define the delay until the scrollbar hides. Has no effect if `autoHide` is `false`.
     * Default value is `1000`.
     */
    timeout: Number,

    /**
     * Controls the click on track behaviour.
     * Default to `true`.
     */
    clickOnTrack: {
      type: Boolean,
      default: undefined
    },

    /**
     * Controls the min size of the scrollbar in `px`.
     * Default is `25`.
     */
    scrollbarMinSize: Number,

    /**
     * Controls the max size of the scrollbar in `px`.
     * Default is `0` (no max size).
     */
    scrollbarMaxSize: Number
  },
  // @ts-ignore
  emits: ['scroll'],

  /**
   * @returns {{ SimpleBar?: SimpleBar; scrollElement?: HTMLDivElement; contentElement?: HTMLDivElement }}
   */
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    // @ts-ignore (`getOptions` needs to be added to the type definition file)
    var options = SimpleBarCore.getOptions(this.$refs.element.attributes);

    for (var _i = 0, _Object$entries = Object.entries(this.$props); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      if (value != undefined && typeof value !== "function") options[key] = value;
    } // @ts-ignore (unable to type cast `$refs`)


    this.SimpleBar = new SimpleBarCore(this.$refs.element, options); // @ts-ignore (unable to type cast `$refs`)

    this.scrollElement = this.$refs.scrollElement; // @ts-ignore (unable to type cast `$refs`)

    this.contentElement = this.$refs.contentElement;
  }
}, _defineProperty(_name$props$emits$dat, lifecycleEventNames.beforeUnmount, function () {
  var _this$SimpleBar;

  // unMount is not present in types package https://github.com/Grsmto/simplebar/blob/6125d4ac0897c02a82432441aa3bae5e6c6ccb87/packages/simplebar/src/simplebar.js#L925
  // @ts-ignore
  (_this$SimpleBar = this.SimpleBar) === null || _this$SimpleBar === void 0 ? void 0 : _this$SimpleBar.unMount(); // @ts-ignore

  this.SimpleBar = undefined;
}), _defineProperty(_name$props$emits$dat, "methods", {
  recalculate: function recalculate() {
    var _this$SimpleBar2;

    (_this$SimpleBar2 = this.SimpleBar) === null || _this$SimpleBar2 === void 0 ? void 0 : _this$SimpleBar2.recalculate();
  }
}), _defineProperty(_name$props$emits$dat, "render", function render(createElement) {
  var _this = this;

  console.log('this is a simplebar-vue test', {
    isVue3: isVue3
  });
  return renderFn({
    h: typeof createElement === 'function' ? createElement : h,
    // @ts-ignore
    emit: function emit() {
      return _this.$emit.apply(_this, arguments);
    },
    slots: isVue3 ? this.$slots : this.$scopedSlots
  });
}), _name$props$emits$dat);

export default simplebar;
