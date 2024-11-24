<template>
    <div>
        <UIcon v-if="isDark" name="i-mdi-moon-waning-crescent" class="w-8 h-8"/>
        <UIcon v-else-if="!isDark" name='i-mdi-white-balance-sunny' class="w-8 h-8"/>
    </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
    get() {
        return colorMode.value === 'dark';
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
    }
})
</script>