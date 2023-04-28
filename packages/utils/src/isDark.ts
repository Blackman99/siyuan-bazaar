const DARK_ATTR = 'dark'

/**
 * Determine whether is in dark mode or not
 */
export default () => {
  let root: Window = window
  while (root.parent !== root)
    root = root.parent
  return root.document.querySelector('html')?.dataset.themeMode === DARK_ATTR
}
