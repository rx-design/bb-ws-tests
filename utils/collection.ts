/**
 * Returns a random element from collection.
 */
function sample(collection: string[]) {
  return collection[Math.floor(Math.random() * collection.length)]
}

export {
  sample,
}
