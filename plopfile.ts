import { NodePlopAPI } from 'plop';

export default (plop: NodePlopAPI): void => {
  plop.setGenerator('component', {
    description: 'React component generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'components/{{name}}/index.ts',
        templateFile: 'templates/component/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'components/{{name}}/{{name}}.tsx',
        templateFile: 'templates/component/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'components/{{name}}/{{name}}.spec.tsx',
        templateFile: 'templates/component/component.spec.tsx.hbs',
      },
      {
        type: 'modify',
        path: 'components/index.ts',
        pattern: /\/\/ PLOP WILL AUTO APPEND NEW COMPONENT HERE\n/gi,
        templateFile: 'templates/component/modify.hbs',
      },
    ],
  });
};
