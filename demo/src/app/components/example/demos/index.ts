import { NgmdExampleStatic } from './static/example-static';

export const DEMO_DIRECTIVES =
    [NgmdExampleStatic];

export const DEMO_SNIPPETS = {
    static: {
        code: require('!!prismjs-loader?lang=typescript!./static/example-static'),
        markup: require('!!prismjs-loader?lang=markup!./static/example-static.html')
    }
};
