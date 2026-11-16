# Prompts (#455)

## v1

```
I need help writing Storybook play functions for a React widget in our project.

Act as a senior developer and my mentor. I'm still learning this, so let's write the tests together step by step. Don't write everything at once. You write one step, explain shortly what you did and why, and wait for me before you go to the next one. If I change something myself, please check my changes carefully.

Some info about the setup:
We use Storybook 9.1 with React and Vite. The tests run with @storybook/addon-vitest in Vitest browser mode (Playwright with Chromium). Please import everything from "storybook/test", not from older packages like @storybook/testing-library. In Storybook 9 you can get canvas, userEvent and step directly from the play function context. StoryContext comes from @storybook/react-vite. The UI is built with Elastic UI (@elastic/eui, version 115).

This is the Storybook doc I'm following, please stick to it:
https://storybook.js.org/docs/writing-tests/interaction-testing

The widget is in packages/react/src/components/widgets/EntityListWidget. Please read these files first:
- EntityListWidget.tsx
- EntityListPresentation.tsx
- EntityListWidgetStories.ts
- EntityListWidget.stories.tsx

How we do it in this project:
We write and export the play functions in EntityListWidgetStories.ts and then connect them to the stories in EntityListWidget.stories.tsx with play: .... You can look at EntityProviderWidget for an example. Please don't change the widget code itself, I only want the tests.

We don't need to test every feature, but we have to test the most important parts. If I forgot an important part, suggest it to me. If I added something that is not necessary, tell me why and how I can improve it.

What I want to test:
I want one play function for the Individuals story. It loads real data from the EBI OLS API (ontology "iao", entity type "individual"). Please put each of these in its own step:
- the table has the columns Name, ID and Type
- after loading, it shows "Loaded: 10 / <total>"
- clicking the Name header changes the order of the rows
- the next page shows different rows
- changing rows per page changes how many rows we see
- searching finds results from all the data, not only the current page (please test this while on page 2)

A few things that are important to me:
- Please find elements the way a user would, so getByRole, getByLabelText or getByText. No getByTestId and no CSS classes.
- Every userEvent and expect should be awaited.
- Since the data comes from a real server, use findBy with a 10 second timeout. The Vitest timeout is 15 seconds, so it has to stay below that.
- The data on the server can change, so please don't hardcode the total number. Read it from the page instead.
- For each step, please also add a check for something that should NOT be on the page. Otherwise the test could pass even if the feature does nothing.
- Keep it simple, no mocks and no new packages.
- A short comment above each step would be nice.

After each step, run it with:
npx vitest --project=storybook --run src/components/widgets/EntityListWidget -t Individuals
(from packages/react) and show me the result.

If you're not sure about something, just ask me.
Stay on the branch feat/455-storybook-play-functions. Don't commit or push anything, I will do that myself.

Your code should be clear, maintainable and easy to understand.

```

## v2

What changed from v1:

- The AI writes the tests in order of importance, and shows me the order first.
- After each step, the AI shows a checklist of tested and not tested features.
- Only the tests and checks that are really needed, no extra ones.
- Negative checks only when they test something new. In v1, the AI added two negative checks that could never fail (step 2 and step 3), only because the prompt asked for one in every step.

```
I need help writing Storybook play functions for a React widget in our project.

Act as a senior developer and my mentor. I'm still learning this, so let's write the tests together step by step. Don't write everything at once. You write one step, explain shortly what you did and why, and wait for me before you go to the next one. If I change something myself, please check my changes carefully.

Some info about the setup:
We use Storybook 9.1 with React and Vite. The tests run with @storybook/addon-vitest in Vitest browser mode (Playwright with Chromium). Please import everything from "storybook/test", not from older packages like @storybook/testing-library. In Storybook 9 you can get canvas, userEvent and step directly from the play function context. StoryContext comes from @storybook/react-vite. The UI is built with Elastic UI (@elastic/eui, version 115).

This is the Storybook doc I'm following, please stick to it:
https://storybook.js.org/docs/writing-tests/interaction-testing

The widget is in packages/react/src/components/widgets/EntityListWidget. Please read these files first:
- EntityListWidget.tsx
- EntityListPresentation.tsx
- EntityListWidgetStories.ts
- EntityListWidget.stories.tsx

How we do it in this project:
We write and export the play functions in EntityListWidgetStories.ts and then connect them to the stories in EntityListWidget.stories.tsx with play: .... You can look at EntityProviderWidget for an example. Please don't change the widget code itself, I only want the tests.

We don't need to test every feature, but we have to test the most important parts. If I forgot an important part, suggest it to me. If I added something that is not necessary, tell me why and how I can improve it.

Only write the tests that are really needed. More tests are not better. I want good tests that cover the important features, with as few checks as possible. Every check should be able to fail when something is broken.

Write the tests in order of importance: the most important feature of the widget first. Before you start, show me your order and explain shortly why.

What I want to test:
I want one play function for the Individuals story. It loads real data from the EBI OLS API (ontology "iao", entity type "individual"). Please put each of these in its own step:
- the table has the columns Name, ID and Type
- after loading, it shows "Loaded: 10 / <total>"
- clicking the Name header changes the order of the rows
- the next page shows different rows
- changing rows per page changes how many rows we see
- searching finds results from all the data, not only the current page (please test this while on page 2)

A few things that are important to me:
- Please find elements the way a user would, so getByRole, getByLabelText or getByText. No getByTestId and no CSS classes.
- Every userEvent and expect should be awaited.
- Since the data comes from a real server, use findBy with a 10 second timeout. The Vitest timeout is 15 seconds, so it has to stay below that.
- The data on the server can change, so please don't hardcode the total number. Read it from the page instead.
- Add a check for something that should NOT be on the page only when it tests something new. Don't add one just to follow the rule.
- Keep it simple, no mocks and no new packages.
- A short comment above each step would be nice.

After each step, run it with:
npx vitest --project=storybook --run src/components/widgets/EntityListWidget -t Individuals
(from packages/react) and show me the result.

After each step, also show me a short checklist of the widget's features: which ones are tested, and which ones are not tested yet.

If you're not sure about something, just ask me.
Stay on the branch feat/455-storybook-play-functions. Don't commit or push anything, I will do that myself.

Your code should be clear, maintainable and easy to understand.
```

## v3

What changed from v2:

- The AI breaks the widget on purpose after each step, to check that the test fails. In v2, the search test passed even when the search was broken.
- The AI can change the widget code only to check something, and it must always restore it right after.

```
I need help writing Storybook play functions for a React widget in our project.

Act as a senior developer and my mentor. I'm still learning this, so let's write the tests together step by step. Don't write everything at once. You write one step, explain shortly what you did and why, and wait for me before you go to the next one. If I change something myself, please check my changes carefully.

Some info about the setup:
We use Storybook 9.1 with React and Vite. The tests run with @storybook/addon-vitest in Vitest browser mode (Playwright with Chromium). Please import everything from "storybook/test", not from older packages like @storybook/testing-library. In Storybook 9 you can get canvas, userEvent and step directly from the play function context. StoryContext comes from @storybook/react-vite. The UI is built with Elastic UI (@elastic/eui, version 115).

This is the Storybook doc I'm following, please stick to it:
https://storybook.js.org/docs/writing-tests/interaction-testing

The widget is in packages/react/src/components/widgets/EntityListWidget. Please read these files first:
- EntityListWidget.tsx
- EntityListPresentation.tsx
- EntityListWidgetStories.ts
- EntityListWidget.stories.tsx

How we do it in this project:
We write and export the play functions in EntityListWidgetStories.ts and then connect them to the stories in EntityListWidget.stories.tsx with play: .... You can look at EntityProviderWidget for an example. Please don't change the widget code itself, I only want the tests. If you really have to change it to check something, always restore it right after.

We don't need to test every feature, but we have to test the most important parts. If I forgot an important part, suggest it to me. If I added something that is not necessary, tell me why and how I can improve it.

Only write the tests that are really needed. More tests are not better. I want good tests that cover the important features, with as few checks as possible. Every check should be able to fail when something is broken.

Write the tests in order of importance: the most important feature of the widget first. Before you start, show me your order and explain shortly why.

What I want to test:
I want one play function for the Individuals story. It loads real data from the EBI OLS API (ontology "iao", entity type "individual"). Please put each of these in its own step:
- the table has the columns Name, ID and Type
- after loading, it shows "Loaded: 10 / <total>"
- clicking the Name header changes the order of the rows
- the next page shows different rows
- changing rows per page changes how many rows we see
- searching finds results from all the data, not only the current page (please test this while on page 2)

A few things that are important to me:
- Please find elements the way a user would, so getByRole, getByLabelText or getByText. No getByTestId and no CSS classes.
- Every userEvent and expect should be awaited.
- Since the data comes from a real server, use findBy with a 10 second timeout. The Vitest timeout is 15 seconds, so it has to stay below that.
- The data on the server can change, so please don't hardcode the total number. Read it from the page instead.
- Add a check for something that should NOT be on the page only when it tests something new. Don't add one just to follow the rule.
- Make sure each test can only pass when the feature really works, and not for another reason.
- Keep it simple, no mocks and no new packages.
- A short comment above each step would be nice.

After each step, run it with:
npx vitest --project=storybook --run src/components/widgets/EntityListWidget -t Individuals
(from packages/react) and show me the result.

After each step, break the widget on purpose to check that the test fails. Then restore the widget. If the test still passes, the test is weak, so fix it.

After each step, also show me a short checklist of the widget's features: which ones are tested, and which ones are not tested yet.

If you're not sure about something, just ask me.
Stay on the branch feat/455-storybook-play-functions. Don't commit or push anything, I will do that myself.

Your code should be clear, maintainable and easy to understand.
```
