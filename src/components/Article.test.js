import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MutationObserver from "mutationobserver-shim";

import Article from "./Article";
import moment from "moment";

const testArticle = {
  headline:
    "A tropical depression could form in the next few days, forecasters say",
  id: 1,
  createdOn: moment()
    .subtract(Math.random() * 10, "days")
    .format(),
  author: "Alex Harris",
  image: 171,
  summary:
    "Forecasters said the system will likely turn into a tropical depression late this weekend or early next week as it moves west-northwest.",
  body: "Forecasters continue to monitor a disturbance in the far eastern Atlantic that has a high chance of turning into a tropical depression in the next few days. They’re also watching another system that’s quickly moving across the Atlantic, though its formation chances remain fairly low.",
};

test("renders component without errors", () => {
  render(<Article article={testArticle} />);
});

test("renders headline, author from the article when passed in through props", () => {
  render(<Article article={testArticle} />);

  screen.getByText(
    "A tropical depression could form in the next few days, forecasters say"
  );
  screen.getByText("By Alex Harris");
  screen.getByText(
    "Forecasters said the system will likely turn into a tropical depression late this weekend or early next week as it moves west-northwest."
  );
  screen.getByText(
    "Forecasters continue to monitor a disturbance in the far eastern Atlantic that has a high chance of turning into a tropical depression in the next few days. They’re also watching another system that’s quickly moving across the Atlantic, though its formation chances remain fairly low."
  );
});

test('renders "Associated Press" when no author is given', () => {
  const noAuthor = {
    ...testArticle,
    author: "",
  };

  render(<Article article={noAuthor} />);

  screen.getByText("By Associated Press");
});

test("executes handleDelete when the delete button is pressed", () => {
  const handleDeleteMock = jest.fn();

  render(<Article article={testArticle} handleDelete={handleDeleteMock} />);

  const deleteButton = screen.getByTestId("deleteButton");
  userEvent.click(deleteButton);

  expect(handleDeleteMock).toBeCalled();
});

//Task List:
//1. Complete all above tests. Create test article data when needed.
