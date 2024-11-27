<template>
  <div>
    <ColorScheme>
      <UContainer>
        <UHorizontalNavigation
          :links="links"
          class="border-b border-gray-200 dark:border-gray-800"
        />
        <UContainer class="">
          <USelectMenu
            v-model="colorMode.preference"
            size="sm"
            :icon="ColorIcon[colorMode.preference]"
            :options="Object.keys(ColorIcon)"
            class="flex-none end-0.5"
          />
        </UContainer>
      </UContainer>
    </ColorScheme>
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();

const ColorIcon: Record<string, string> = {
  system: "i-mdi-cogs",
  dark: "i-mdi-moon-waning-crescent",
  light: "i-mdi-white-balance-sunny",
};

const links = [
  [
    {
      label: "Home",
      icon: "i-mdi-home",
      to: "/",
    },
    {
      label: "Blog",
      icon: "i-mdi-newspaper-variant-outline",
      to: "/blog",
    },
  ],
  [
    {
      label: "Me!",
      to: "https://github.com/stinky-c",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/60587749?v=4",
        placeholder: "i-mdi-help",
        alt: "My github profile picture",
      },
    },
  ],
];
</script>
