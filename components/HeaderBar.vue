<template>
  <div>
    <ColorScheme>
      <UContainer>
        <UHorizontalNavigation
          :links="links"
          class="border-b border-gray-200 dark:border-gray-800"
        />
      </UContainer>
    </ColorScheme>
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();
enum ColorIcon {
  system = "i-mdi-cogs",
  dark = "i-mdi-moon-waning-crescent",
  light = "i-mdi-white-balance-sunny",
}
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
      icon: ColorIcon[colorMode.preference] as string,
      label: "Theme",
      click: () => {
        const keys = Object.keys(ColorIcon);
        const next = (keys.indexOf(colorMode.preference) + 1) % 3;
        colorMode.preference = keys[next];
        console.log(`Updated color pref: ${colorMode.preference}`);
      },
    },
  ],
];
</script>
