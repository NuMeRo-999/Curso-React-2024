export default function idGenerator() {
  return Date.now().toString(36) + Math.floor(Math.random(36) * 1000);
}