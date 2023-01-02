import { replaceUrl } from "./replace-url";

describe("replaceUrl", () => {
  it("should replace url", () => {
    // given
    const text = `
    hi
    https://google.com
    `;
    const replacementMachine = (url: string) => "bye";

    // when
    const result = replaceUrl(text, replacementMachine);

    // then
    expect(result).toBe(`
    hi
    bye
    `);
  });
});
