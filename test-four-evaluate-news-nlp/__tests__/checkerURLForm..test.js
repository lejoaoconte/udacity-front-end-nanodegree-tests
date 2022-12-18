import { formURLChecker } from "../src/client/js/checkerURLForm";

describe("Testing URL checker functionality", () => {
  test("Testing the formURLChecker() exists", () => {
    expect(formURLChecker).toBeDefined();
  });

  test("Testing the formURLChecker() return true", () => {
    const rettrue = formURLChecker("https://google.com");
    const retfalse = formURLChecker("google.com");

    expect(rettrue).toBeTruthy();
    expect(retfalse).toBeFalsy();
  });
});
