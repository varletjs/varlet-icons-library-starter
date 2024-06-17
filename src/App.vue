<script setup lang="ts">
import { useDark } from './use'
import { bigCamelize } from '@varlet/shared'
import { useClipboard, useDebounceFn } from '@vueuse/core'

const modules = import.meta.glob<{ default: string }>('../svg/*.svg', {
  query: '?raw',
  eager: true
})

const icons = Object.entries(modules).map(([key, value]) => ({
  name: bigCamelize(key.slice(key.lastIndexOf('/') + 1).replace('.svg', '')),
  icon: value.default
}))

const search = ref('')
const searchedIcons = ref(icons)
const debouncedSearch = useDebounceFn(() => {
  searchedIcons.value = icons.filter((icon) =>
    icon.name.toLocaleLowerCase().includes(search.value.trim().toLocaleLowerCase())
  )
}, 200)

const { copy } = useClipboard({ legacy: true })

const { toggleDark } = useDark()

watch(() => search.value, debouncedSearch)

function handleClick(value: string, { name, icon }: { name: string; icon: string }) {
  if (value === 'Copy Svg') {
    copy(icon)
    Snackbar.success('Copy svg success')
  } else {
    copy(name)
    Snackbar.success('Copy name success')
  }
}
</script>

<template>
  <var-app-bar
    class="flex flex-col justify-center b-t-none b-l-none b-r-none b-b b-solid b-[var(--color-outline)]"
    safe-area-top
    fixed
    placeholder
    :elevation="false"
    title-position="center"
  >
    <div class="flex flex-col justify-center h-66px">
      <div class="flex items-center gap-20px">
        <var-input class="w-300px" size="small" variant="outlined" placeholder="Search..." v-model="search" />
        <var-button icon-container round @click="toggleDark">
          <var-icon name="palette" />
        </var-button>
      </div>
    </div>
  </var-app-bar>

  <div class="container flex flex-col items-center m-auto py-30px">
    <div class="flex justify-center flex-wrap gap-16px">
      <var-menu-select
        placement="cover-top-end"
        v-for="icon in searchedIcons"
        :key="icon"
        @update:model-value="(value) => handleClick(value, icon)"
      >
        <var-paper
          :elevation="1"
          class="flex text-primary items-center w-270px h-50px px-16px hover:opacity-[0.86] transition cursor-pointer select-none"
          ripple
        >
          <div class="mr-10px" v-html="icon.icon"></div>
          <div class="text-md text-tertiary text-center">{{ icon.name }}</div>
        </var-paper>

        <template #options>
          <var-menu-option label="Copy Name" />
          <var-menu-option label="Copy Svg" />
        </template>
      </var-menu-select>
    </div>
  </div>
</template>

<style>
svg {
  display: block;
  fill: currentColor;
  width: 24px;
  height: 24px;
}
</style>
