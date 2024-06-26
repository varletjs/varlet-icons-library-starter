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
    class="flex flex-col justify-center b-[var(--color-outline)]"
    safe-area-top
    fixed
    border
    placeholder
    title-position="center"
    :z-index="1000"
    :elevation="false"
  >
    <div class="flex flex-col justify-center h-66px">
      <div class="flex items-center gap-20px">
        <var-input class="w-300px" size="small" variant="outlined" placeholder="Search..." clearable v-model="search" />

        <div class="flex gap-14px">
          <var-button icon-container round @click="toggleDark">
            <var-icon name="palette" />
          </var-button>
          <var-link target="_blank" underline="none" href="https://github.com/varletjs/varlet-icons-library-starter">
            <var-button icon-container round>
              <var-icon name="github" />
            </var-button>
          </var-link>
        </div>
      </div>
    </div>
  </var-app-bar>

  <div class="px-20px flex flex-col items-center m-auto pt-26px pb-36px">
    <div class="flex justify-center flex-wrap gap-20px" v-if="searchedIcons.length">
      <var-menu-select
        placement="cover-top-end"
        v-for="icon in searchedIcons"
        :key="icon"
        @update:model-value="(value: string) => handleClick(value, icon)"
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

    <var-result class="bg-transparent" type="info" title="Ops~" description="Nothing found" v-else />
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
