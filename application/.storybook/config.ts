import { addDecorator, configure } from '@storybook/react';
import { addReadme } from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo); 
addDecorator(addReadme);
const req = require.context("../src/@designSystem/", true, /\.stories\.tsx$/);
function loadStories() {
    req.keys().forEach(req);
}
configure(loadStories, module);