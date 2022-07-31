<script lang="ts" setup>
const props = defineProps({
  to: {
    type: [String, Number, Object],
    required: true,
  },

  label: String,
});
</script>

<template>
  <NuxtLink
    v-bind="props"
    active-class="d-link--active"
    un-tracking="widest"
    tabindex="0"
    un-text-base
    un-fw-medium
    un-box-border
  >
    <slot>
      {{ label || to }}
    </slot>
  </NuxtLink>
</template>

<style>
.d-link--active {
  text-decoration: underline;
  text-decoration-thickness: 2px;
}
</style>
