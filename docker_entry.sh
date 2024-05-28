#!/bin/sh

npm run storybook:html &
npm run storybook:react &
npm run storybook &
tail -f /dev/null