#!/bin/sh

npm run storybook:html &
npm run storybook:react &
tail -f /dev/null