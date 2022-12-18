import { handleSubmit } from "../src/client/js/formHandler";

describe("Testing the submit functionality", () => {
  it("Testing the handleSubmit() exists", () => {
    expect(handleSubmit).toBeDefined();
    expect(typeof handleSubmit).toBe("function");
  });

  it("Testing the handleSubmit() is a function", () => {
    expect(handleSubmit).toBeDefined();
    expect(typeof handleSubmit).toBe("function");
  });
});
