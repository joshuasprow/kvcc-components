<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import KvAccentMark from "./Logos/KvAccentMark.vue";
import { Color } from "../types/colors";

defineProps<{ name: string; button: boolean }>();

const emit = defineEmits<{
  (event: "close"): void;
  (event: "toggle"): void;
  (event: "visiblechange", visible: boolean): void;
}>();

const xDown = ref();
const yDown = ref();

const visible = ref(false);

const style = { left: "-16rem" };

const handleTouchStart = (e: TouchEvent) => {
  const firstTouch = e.touches[0];
  xDown.value = firstTouch.clientX;
  yDown.value = firstTouch.clientY;
};

const handleTouchMove = (e: TouchEvent) => {
  if (!xDown.value || !yDown.value) {
    return;
  }

  const xUp = e.touches[0].clientX;
  const yUp = e.touches[0].clientY;
  const xDiff = xDown.value - xUp;
  const yDiff = yDown.value - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    visible.value = xDiff <= 0;
    emit("visiblechange", visible.value);
  }

  xDown.value = null;
  yDown.value = null;
};

// const toggle = () => {
//   visible.value = !visible.value;
// };

// const hide = () => {
//   visible.value = false;
// };

onMounted(() => {
  // https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
  document.addEventListener("touchstart", handleTouchStart, false);
  document.addEventListener("touchmove", handleTouchMove, false);

  //   // Listen for the event to toggle the header when the user clicks a toggle button.
  //   $root.$on("toggleKvSideHeader", () => {
  //     toggle();
  //   });
  //   // Listen for the event to close the header when the user touches content.
  //   $root.$on("closeKvSideHeader", () => {
  //     hide();
  //   });
});

onBeforeUnmount(() => {
  document.removeEventListener("touchstart", handleTouchStart);
  document.removeEventListener("touchmove", handleTouchMove);
});

// export default {
//   components: { KvLogo },
//   props: {
//     name: String,
//     button: Boolean,
//   },
//   data() {
//     return {
//       // Logo Fill Color
//       fillColor: "#2b6cb0",
//       // Form Display & Swipe Handling
//       header_visible: true,
//       x_down: null,
//       y_down: null,
//       header_hidden_styling: {
//         left: "-16rem",
//       },
//     };
//   },
//   methods: {
//     handleTouchStart(e) {
//       const firstTouch = e.touches[0];
//       this.x_down = firstTouch.clientX;
//       this.y_down = firstTouch.clientY;
//     },
//     handleTouchMove(e) {
//       if (!this.x_down || !this.y_down) {
//         return;
//       }
//       const xUp = e.touches[0].clientX;
//       const yUp = e.touches[0].clientY;
//       const xDiff = this.x_down - xUp;
//       const yDiff = this.y_down - yUp;
//       if (Math.abs(xDiff) > Math.abs(yDiff)) {
//         this.header_visible = xDiff <= 0;
//       }
//       this.x_down = null;
//       this.y_down = null;
//     },
//     toggle() {
//       this.header_visible = !this.header_visible;
//     },
//     hide() {
//       this.header_visible = false;
//     },
//   },
//   mounted() {
//     // https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
//     document.addEventListener("touchstart", this.handleTouchStart, false);
//     document.addEventListener("touchmove", this.handleTouchMove, false);
//     // Listen for the event to toggle the header when the user clicks a toggle button.
//     this.$root.$on("toggleKvSideHeader", () => {
//       this.toggle();
//     });
//     // Listen for the event to close the header when the user touches content.
//     this.$root.$on("closeKvSideHeader", () => {
//       this.hide();
//     });
//   },
//   beforeDestroy() {
//     // Remove the touch event listeners before this component is destroyed.
//     document.removeEventListener("touchstart", this.handleTouchStart);
//     document.removeEventListener("touchmove", this.handleTouchMove);
//   },
// };
</script>

<template>
  <header :style="visible ? undefined : style">
    <section class="">
      <kv-accent-mark :fill="Color.COUGAR_BLUE" />
      <span></span>
      <p>{{ name }}</p>
    </section>

    <slot />
  </header>
</template>

<style scoped>
header {
  display: inline-flex;
  overflow: auto;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 40;
  padding: 1rem;
  background-color: #f3f4f6;
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 16rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

section {
  display: flex;
  margin-bottom: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

span {
  background: #2b6cb0;
  margin-left: 0.5rem;
  width: 12rem;
}

p {
  color: #1d4ed8;
  font-weight: 500;
}
</style>
