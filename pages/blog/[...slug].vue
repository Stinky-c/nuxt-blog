<template>
  <UContainer>
    <ContentDoc v-slot="{ doc }">
      <article>
        <h1>{{ doc.title }}</h1>
        <UDivider />
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </UContainer>
</template>

<script lang="ts" setup></script>

<style></style>
