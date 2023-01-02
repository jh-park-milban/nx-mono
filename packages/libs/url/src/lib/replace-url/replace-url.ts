export function replaceUrl(
  text: string,
  replacementMachine: (url: string) => string,
): string {
  return text.replace(
    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
    replacementMachine,
  );
}
