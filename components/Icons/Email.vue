<template>
	<svg
		width="26"
		height="22"
		viewBox="0 0 26 22"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M17.2188 21H8.78125C4.5625 21 1.75 19.75 1.75 13.9688V8.03125C1.75 2.25 4.5625 1 8.78125 1H17.2188C21.4375 1 24.25 2.25 24.25 8.03125V13.9688C24.25 19.75 21.4375 21 17.2188 21Z"
			:stroke="props.color"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M23 3.5L16.75 10.375C14.25 12.875 11.75 12.875 9.25 10.375L3 3.5"
			:stroke="props.color"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</template>

<script setup lang="ts">
const props = defineProps({
	color: {
		type: String,
		default: "#000",
	},
	size: {
		type: Number,
		default: 24,
	},
});
</script>
