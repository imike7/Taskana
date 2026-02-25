export function generateId() {
  return crypto.randomUUID
    ? crypto.randomUUID()
    : Date.now();
}