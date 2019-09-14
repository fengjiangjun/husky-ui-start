export function importAll(source, target) {
  target.keys().forEach(key => {
    source[key] = target(key)
  })
}