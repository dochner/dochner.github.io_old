<script setup>
useHead({
  title: 'Douglas Ochner',
  link: [
    {
      rel: 'icon', type: 'image/webp', href: '/avatar.webp',
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}
html.dark {
  background: #222;
  color: white;
}
</style>
