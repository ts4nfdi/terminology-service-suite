#!/bin/sh

npm install &
npm run build:react &
npm run build:plainJS &
npm run storybook:html &
npm run storybook:react &
npm run storybook &
tail -f /dev/null