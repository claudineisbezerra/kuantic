<template>
  <span class="kuantic-tag" :class="tagClass">
    {{ name }}
    <span class="kuantic-tag-button"
          v-if="removable"
          @click="remove"
    >
      <i class="ion-md-close ion"></i>
    </span>
  </span>
</template>

<script>
export default {
  name: 'kuantic-tag',
  data () {
    return {
      deleted: false,
    }
  },
  props: {
    name: {
      type: String,
    },
    removable: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'primary',
    },
  },
  computed: {
    tagClass () {
      return `kuantic-tag-${this.type} ${this.deleted ? 'kuantic-tag-deleted' : ''}`
    },
  },
  methods: {
    remove () {
      this.deleted = true
      setTimeout(() => {
        this.$emit('remove')
        this.deleted = false
      }, 500)
    },
  },
}
</script>

<style lang="scss">
.kuantic-tag {
  height: 32px;
  border-radius: 16px;
  padding: 5px 14px;
  color: $text-gray;
  border: solid 2px transparent;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  opacity: 1;
  &:not(:last-child) {
    margin-right: 15px;
  }
  &-deleted {
    opacity: 0;
    transition: all 0.5s ease;
  }
}

.kuantic-tag-primary {
  border-color: theme-color("primary");
  .kuantic-tag-button {
    color: theme-color("primary");
    &:hover {
      color: lighten(theme-color("primary"), 15%);
    }
    &:focus, &:active {
      color: darken(theme-color("primary"), 15%);
    }
  }
}

.kuantic-tag-danger {
  border-color: theme-color("danger");
  .kuantic-tag-button {
    color: theme-color("danger");
    &:hover {
      color: lighten(theme-color("danger"), 15%);
    }
    &:focus, &:active {
      color: darken(theme-color("danger"), 15%);
    }
  }
}

.kuantic-tag-info {
  border-color: theme-color("info");
  .kuantic-tag-button {
    color: theme-color("info");
    &:hover {
      color: lighten(theme-color("info"), 15%);
    }
    &:focus, &:active {
      color: darken(theme-color("info"), 15%);
    }
  }
}

.kuantic-tag-dark {
  border-color: theme-color("dark");
  .kuantic-tag-button {
    color: theme-color("dark");
    &:hover {
      color: lighten(theme-color("dark"), 35%);
    }
    &:focus, &:active {
      color: darken(theme-color("dark"), 15%);
    }
  }
}

.kuantic-tag-warning {
  border-color: theme-color("warning");
  .kuantic-tag-button {
    color: theme-color("warning");
    &:hover {
      color: lighten(theme-color("warning"), 15%);
    }
    &:focus, &:active {
      color: darken(theme-color("warning"), 15%);
    }
  }
}

.kuantic-tag-pale {
  border-color: theme-color("pale");
  .kuantic-tag-button {
    color: theme-color("pale");
    &:hover {
      color: lighten(theme-color("pale"), 5%);
    }
    &:focus, &:active {
      color: darken(theme-color("pale"), 15%);
    }
  }
}

.kuantic-tag-button {
  font-size: 1.2rem;
  margin-left: 7px;
  cursor: pointer;
}
</style>
