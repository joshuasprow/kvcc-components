<template>
  <header class="directory-header" :class="{ open: open }" ref="header">
    <div class="branding">
      <img
        src="@/assets/Type_Treatment.svg"
        alt="Kalamazoo Valley Type Treatment Logo"
        width="192"
        height="18"
        class="branding__logo"
      />
      <div class="branding__text">Employee Directory</div>
    </div>
    <form
      class="directory-search"
      @input="search"
      @submit.prevent="false"
      @reset.prevent="reset"
    >
      <div class="field">
        <label for="search" class="field__label">
          <font-awesome-icon
            icon="question-circle"
            class="field__icon"
            @click="focusModal"
            title="More information about this field."
          />
          <span>Search</span>
        </label>
        <input
          type="text"
          id="search"
          class="field__input"
          v-model="models.search"
        />
      </div>

      <div class="field">
        <label for="subject" class="field__label">Instructor Subject</label>
        <select
          id="subject"
          class="field__input field__input--select"
          v-model="models.subject"
        >
          <option :value="null">Any Subject</option>
          <option
            v-for="subject in $store.state.subjects"
            :key="subject.uuid"
            :value="subject.code"
          >
            {{ subject.code }}
          </option>
        </select>
        <font-awesome-icon icon="angle-down" class="field__icon--select" />
      </div>

      <div class="field">
        <label for="facultyOnly" class="field__label--checkbox">
          <input
            type="checkbox"
            id="facultyOnly"
            v-model="models.facultyOnly"
            class="field__input--checkbox"
          />
          <span>Faculty Only</span>
        </label>
      </div>

      <div class="directory-search__buttons">
        <button type="submit" class="directory-search__button">Search</button>
        <button
          type="reset"
          class="directory-search__button directory-search__button--reset"
        >
          Reset
        </button>
      </div>
    </form>

    <div class="public-safety">
      <div class="public-safety__text">Public Safety Number:</div>
      <div>
        <a href="tel:2694884575" class="public-safety__phone">269.488.4575</a>
      </div>
    </div>

    <div class="departments">
      <a href="https://departments.kvcc.edu" class="departments__link"
        >Department Search</a
      >
    </div>

    <div
      class="tooltip-modal"
      :class="{ 'tooltip-modal--displayed': modalDisplayed }"
      @click="this.modalDisplayed = false"
      ref="tooltip"
    >
      <div class="tooltip-modal__content">
        <div class="tooltip-modal__title">Keyword searches include:</div>
        <ul class="tooltip-modal__list">
          <li>First Name</li>
          <li>Last Name</li>
          <li>Job Title</li>
          <li>E-mail Address</li>
          <li>Phone Number</li>
          <li>Office Number</li>
        </ul>
        <button class="tooltip-modal__close">
          <font-awesome-icon icon="times" />
        </button>
      </div>
    </div>
  </header>

  <transition name="fade" mode="out-in">
    <button
      v-if="!open"
      class="swipe-open"
      title="Swipe right to open header."
      @click="openHeader"
    >
      <span class="swipe-open__icons">
        <span class="swipe-open__text">Swipe right to open.</span>
        <font-awesome-icon
          icon="hand-point-up"
          class="swipe-open__icon swipe-open__icon--hand"
        />
        <font-awesome-icon
          icon="angle-right"
          class="swipe-open__icon swipe-open__icon--arrow"
        />
      </span>
    </button>
  </transition>
</template>

<script>
// TODO: split into smaller components
export default {
  data() {
    return {
      debounceTimer: null,
      open: true,
      modalDisplayed: false,
      x_down: null,
      y_down: null,
      models: {
        search: null,
        subject: null,
        facultyOnly: false,
      },
    };
  },
  methods: {
    focusModal() {
      this.modalDisplayed = true;
      this.$refs.tooltip.focus();
    },
    openHeader() {
      // Unfortunately there is a collision with the touchstart listener for swipe functionality, so a timeout is necessary for click events.
      setTimeout(() => {
        this.open = true;
      }, 0);
    },
    search() {
      clearTimeout(this.debounceTimer);
      // Debounce searching while the user types.
      this.debounceTimer = setTimeout(() => {
        this.$store.dispatch("setResults", []).then(() => {
          const query = {};
          const localModel = { ...this.models };
          // Transfer models that have values to a query for the router.
          Object.keys(localModel).forEach((index) => {
            if (localModel[index]) {
              query[index] = localModel[index];
            }
          });
          this.$router.push({ query });
        });
      }, 250);
    },
    reset() {
      // Clear the inputs.
      Object.keys(this.models).forEach((index) => {
        this.models[index] = null;
      });
      // Push a blank query to the router.
      if (Object.keys(this.$route.query).length) {
        this.$router.push({ query: {} });
      }
      // Clear the results.
      this.$store.dispatch("setResults", []);
    },
    bindQueryParameters() {
      Object.keys(this.$route.query).forEach((query) => {
        // Only bind models in this component.
        if (Object.prototype.hasOwnProperty.call(this.models, query)) {
          this.models[query] = this.$route.query[query];
        }
      });
    },
    handleTouchStart(e) {
      const firstTouch = e.touches[0];
      this.x_down = firstTouch.clientX;
      this.y_down = firstTouch.clientY;
    },
    handleTouchMove(e) {
      if (!this.x_down || !this.y_down) {
        return;
      }
      const xUp = e.touches[0].clientX;
      const yUp = e.touches[0].clientY;
      const xDiff = this.x_down - xUp;
      const yDiff = this.y_down - yUp;
      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        this.open = xDiff <= 0;
      }
      this.x_down = null;
      this.y_down = null;
    },
    viewportIsMobile() {
      return window.matchMedia("(max-width: 768px)").matches;
    },
  },
  mounted() {
    // A brief delay is required for after the component and router are fully mounted and ready to sync.
    setTimeout(this.bindQueryParameters, 0);

    // Close the search header if the user taps on something other than it while the viewport is considered mobile.
    document.addEventListener("click", (event) => {
      if (
        this.viewportIsMobile() &&
        this.$refs.header &&
        !this.$refs.header.contains(event.target)
      ) {
        this.open = false;
      }
    });

    // Open the header if the viewport isn't a mobile size.
    window.addEventListener("resize", () => {
      if (!this.viewportIsMobile()) {
        this.open = true;
      }
    });

    // https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
    document.addEventListener("touchstart", this.handleTouchStart, false);
    document.addEventListener("touchmove", this.handleTouchMove, false);
  },
};
</script>

<style lang="scss">
.directory-header {
  @apply fixed top-0 left-0 bottom-0 flex flex-col p-6 bg-white shadow-lg bg-gray-50 w-64 z-30;
  transition: left 0.25s ease-in-out;
  left: -100%;

  &.open {
    @apply left-0;
  }
}

.branding {
  @apply grid place-items-center mb-4;

  &__logo {
    @apply w-48;
  }

  &__text {
    @apply text-kv-blue font-medium;
  }
}

.directory-search {
  @apply grid gap-2;

  &__button {
    @apply p-3 text-sm bg-kv-blue text-white rounded leading-none text-center transition;

    &s {
      @apply grid grid-cols-2 gap-2 mt-4;
    }

    &:hover,
    &:focus {
      @apply ring-4 ring-kv-blue ring-opacity-30;
    }

    &--reset {
      @apply bg-red-800;

      &:hover,
      &:focus {
        @apply ring-4 ring-red-800 ring-opacity-30;
      }
    }
  }
}

.field {
  @apply relative flex flex-col relative w-full;

  &__label {
    @apply absolute font-light text-xs mt-2 ml-3 leading-normal;

    &--checkbox {
      @apply flex justify-center items-center font-light text-sm cursor-pointer pr-2;
    }
  }

  &__icon {
    @apply cursor-help mr-1 text-gray-600;

    &--select {
      @apply absolute top-0 right-0 mt-5 mr-4 pointer-events-none;
    }
  }

  &__input {
    @apply px-3 pb-2 pt-6 rounded border border-gray-400 leading-snug w-full outline-none transition duration-200 ease-in-out;

    &:hover,
    &:focus {
      @apply ring-4 ring-kv-blue ring-opacity-30 border-kv-blue;
    }

    &--select {
      @apply appearance-none;
    }

    &--checkbox {
      @apply mr-1;

      &:focus {
        @apply ring-4 ring-kv-blue ring-opacity-30;
      }
    }
  }
}

.public-safety {
  @apply text-center mt-6;

  &__text {
    @apply text-sm leading-normal font-medium;
  }

  &__phone {
    @apply text-xl text-kv-blue font-bold;

    &:hover,
    &:focus {
      @apply underline;
    }
  }
}

.departments {
  @apply mt-6 text-center;

  &__link {
    @apply text-kv-blue font-medium;

    &:hover,
    &:focus {
      @apply underline;
    }
  }
}

.swipe-open {
  @apply fixed flex justify-center items-center w-full right-0 left-0 bottom-0 pb-3 z-20;
  @apply md:hidden;

  &__text {
    @apply block font-light text-xs leading-normal mr-2;
  }

  &__icon {
    &--hand {
      transform: rotate(-25deg);
      @apply mr-1;
    }

    &--arrow {
      animation: bounceRight 0.5s infinite alternate;
    }

    &s {
      @apply flex justify-between px-4 items-center block h-10 bg-white rounded-full shadow text-kv-blue text-lg;
    }
  }
}

.tooltip-modal {
  @apply fixed top-0 right-0 bottom-0 left-0 grid place-items-center bg-gray-700 bg-opacity-75 text-sm transition z-40;
  @apply opacity-0 pointer-events-none;

  &--displayed {
    @apply opacity-100 pointer-events-auto;
  }

  &__content {
    @apply relative bg-white shadow-lg rounded-lg p-4;
  }

  &__title {
    @apply mb-2 font-medium;
  }

  &__list {
    @apply list-disc list-inside font-light ml-1;
  }

  &__close {
    @apply absolute grid place-items-center text-lg bg-red-700 text-white shadow rounded-full h-8 w-8 transition;
    top: -1rem;
    right: -1rem;

    &:hover,
    &:focus {
      @apply bg-red-800;
    }
  }
}

@keyframes bounceRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(0.25rem);
  }
}
</style>
