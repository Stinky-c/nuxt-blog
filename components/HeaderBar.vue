<template>
  <div>
    <ColorScheme>
      <UContainer>
        <UHorizontalNavigation
          :links="links"
          class="border-b border-gray-200 dark:border-gray-800"
        >
        <template #default="{ link }">
            <ThemeButton v-if="link.label === 'Theme-button'" />
        </template>
      </UHorizontalNavigation>
      </UContainer>
    </ColorScheme>
  </div>
</template>
<script lang="ts" setup>
const colorMode = useColorMode();

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
    {
      label: "Theme-button",
      click: () => {
        colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
      },
    },
  ],
];
</script>
