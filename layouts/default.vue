<template>
  <div
    un-h="screen"
    un-grid="~ cols-1 md:cols-[max-content_1fr]"
  >
    <aside
      class="hidden"
      un-grid="md:~ rows-[max-content_1fr_1fr]"
      un-w-xs
      un-shadow
      un-p-4
      un-box-border
      un-row
      un-h-screen
    >
      <NuxtLink
        to="/"
        un-w-full
        un-h-max
        un-fw-bold
        un-font-poppins
        un-text-2xl
      >
        DochneR
      </NuxtLink>
      <nav class="hidden md:flex pt-xl">
        <ul un-column un-space-y-md>
          <li>
            <AtomLink class="py-sm" to="/">Home</AtomLink>
          </li>
          <li>
            <AtomLink class="py-sm" to="/about">About</AtomLink>
          </li>
          <li>
            <AtomLink class="py-sm" to="/projects">Projects</AtomLink>
          </li>
          <li>
            <AtomLink class="py-sm" to="/contact">Contact</AtomLink>
          </li>
        </ul>
      </nav>
    </aside>

    <main class="row w-full flex-grow p-4 md:p-20">
      <slot></slot>
    </main>
  </div>
</template>
