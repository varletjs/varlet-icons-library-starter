import { Themes } from '@varlet/ui'

export const darkTheme = {
  // varlet
  ...Themes.md3Dark,
  '--app-bar-height': '66px',
  '--color-secondary': 'var(--color-inverse-surface)',
  '--color-tertiary': 'var(--color-on-surface-variant)',
  '--color-muted': '#938f99'
}
