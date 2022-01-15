const { generateText, validateInput, createElement } = require("../util.js");

describe("Pruebas de salida de datos", () => {
  test("Salida con datos", () => {
    const text = generateText("Daniel", 30);
    expect(text).toBe("Daniel (30 years old)");
  });

  test("Salida con datos vacios", () => {
    const text = generateText("", null);
    expect(text).toBe(" (null years old)");
  });

  test("Salida sin datos", () => {
    const text = generateText();
    expect(text).toBe("undefined (undefined years old)");
  });
});

describe("Pruebas de validación de datos", () => {
  test("Validación type vacío", () => {
    const text = validateInput("");
    expect(text).toBe(false);
  });

  test("Validación type null", () => {
    const text = validateInput(null);
    expect(text).toBe(false);
  });
  test("Validación NaN", () => {
    const text = validateInput(NaN, 3);
    expect(text).toBe(false);
  });



});

describe("Pruebas de CreateElement", () => {
    test("createElement type vacío", () => {
      const text = createElement("");
      expect(text).toBe(undefined);
    });
  
    test("createElement type null", () => {
      const text = createElement(null);
      expect(text).toBe(undefined);
    });
  });