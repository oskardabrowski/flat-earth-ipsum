import React from "react";
import TextGenerator from "./TextGenerator";
import { render, fireEvent } from "@testing-library/react";

test("Text generator renders correctly", () => {
  const component = render(<TextGenerator />);
  const numParagraphs = component.getByTestId("paragraphCounter");

  expect(numParagraphs.value).toBe("1");
});

test("Buttons and counter works correctly", () => {
  const component = render(<TextGenerator />);
  const numParagraphs = component.getByTestId("paragraphCounter");
  const incBtn = component.getByTestId("incBtn");
  const decBtn = component.getByTestId("decBtn");

  expect(numParagraphs.value).toBe("1");

  fireEvent.click(incBtn);

  expect(numParagraphs.value).toBe("2");

  fireEvent.click(incBtn);
  fireEvent.click(incBtn);
  fireEvent.click(incBtn);

  expect(numParagraphs.value).toBe("5");

  fireEvent.click(decBtn);

  expect(numParagraphs.value).toBe("4");

  fireEvent.click(decBtn);
  fireEvent.click(decBtn);

  expect(numParagraphs.value).toBe("2");
});

test("Selection works correctly", () => {
  const component = render(<TextGenerator />);
  const selectOption = component.getByTestId("selectOption");

  fireEvent.change(selectOption, {
    target: {
      value: "religion",
    },
  });

  expect(selectOption.value).toBe("religion");

  fireEvent.change(selectOption, {
    target: {
      value: "science",
    },
  });

  expect(selectOption.value).toBe("science");

  fireEvent.change(selectOption, {
    target: {
      value: "mixed",
    },
  });

  expect(selectOption.value).toBe("mixed");
});

test("Checkbox works", () => {
  const component = render(<TextGenerator />);
  const checkOption = component.getByTestId("checkOption");

  expect(checkOption.checked).toEqual(false);

  fireEvent.click(checkOption);

  expect(checkOption.checked).toEqual(true);

  fireEvent.click(checkOption);

  expect(checkOption.checked).toEqual(false);
});

test("Generator works", () => {
  const component = render(<TextGenerator />);
  const numParagraphs = component.getByTestId("paragraphCounter");
  const incBtn = component.getByTestId("incBtn");
  const decBtn = component.getByTestId("decBtn");
  const selectOption = component.getByTestId("selectOption");
  const checkOption = component.getByTestId("checkOption");
  const submitBtn = component.getByTestId("submitBtn");

  expect(numParagraphs.value).toBe("1");

  fireEvent.click(incBtn);
  fireEvent.click(incBtn);
  fireEvent.click(incBtn);

  expect(numParagraphs.value).toBe("4");

  fireEvent.click(decBtn);

  expect(numParagraphs.value).toBe("3");

  fireEvent.click(incBtn);
  fireEvent.click(incBtn);
  fireEvent.click(incBtn);

  expect(numParagraphs.value).toBe("6");
  expect(selectOption.value).toBe("mixed");

  fireEvent.change(selectOption, {
    target: {
      value: "science",
    },
  });

  expect(selectOption.value).toBe("science");
  expect(checkOption.checked).toBe(false);

  fireEvent.click(checkOption);

  expect(checkOption.checked).toBe(true);

  fireEvent.click(submitBtn);

  const textContainer = component.getByTestId("textContainer");
  expect(textContainer);

  const textContainerParagraphs = component.getByTestId(
    "textContainer-paragraphs"
  );
  expect(textContainerParagraphs.childNodes.length).toBe(6);
});
