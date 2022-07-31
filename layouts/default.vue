<template>
  <div class="min-h-screen grid grid-rows-[max-content_1fr] grid-cols-1">
    <header class="flex flex-row w-full justify-center h-18 shadow">
      <div class="container h-full items-center w-full mx-auto flex flex-row justify-between px-4">
        <div>DochneR</div>
        <nav>
          <ul class="flex items-center justify-center space-x-4">
            <li>
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">Home</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
</template>
