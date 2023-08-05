<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    {{ label }} {{ item }}
  </button>
</template>

<script lang="ts" setup>
import "./button.css";
import { computed } from "vue";
import useSomething from "@stories/useSomething";
import type { Props } from "@stories/Button.props";

const props = withDefaults(defineProps<Props>(), { primary: false });

const emit = defineEmits<{
  (e: "click", id: number): void;
}>();

const classes = computed(() => ({
  "storybook-button": true,
  "storybook-button--primary": props.primary,
  "storybook-button--secondary": !props.primary,
  [`storybook-button--${props.size || "medium"}`]: true,
}));

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}));

const onClick = () => {
  emit("click", 1);
};

const item = useSomething();
</script>
