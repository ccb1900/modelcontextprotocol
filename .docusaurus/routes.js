import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '73c'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'f06'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'fa0'),
            routes: [
              {
                path: '/docs/about/',
                component: ComponentCreator('/docs/about/', '8b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/clients',
                component: ComponentCreator('/docs/clients', '557'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/community/communication',
                component: ComponentCreator('/docs/community/communication', 'a2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/community/governance',
                component: ComponentCreator('/docs/community/governance', '67b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/community/sep-guidelines',
                component: ComponentCreator('/docs/community/sep-guidelines', '994'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/development/contributing',
                component: ComponentCreator('/docs/development/contributing', '400'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/development/roadmap',
                component: ComponentCreator('/docs/development/roadmap', '16f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/getting-started/intro',
                component: ComponentCreator('/docs/docs/getting-started/intro', 'a29'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/learn/architecture',
                component: ComponentCreator('/docs/docs/learn/architecture', '0f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/learn/client-concepts',
                component: ComponentCreator('/docs/docs/learn/client-concepts', '33f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/learn/server-concepts',
                component: ComponentCreator('/docs/docs/learn/server-concepts', '71c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/reference/client',
                component: ComponentCreator('/docs/docs/reference/client', '36a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/reference/server',
                component: ComponentCreator('/docs/docs/reference/server', '70a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/sdk',
                component: ComponentCreator('/docs/docs/sdk', '54a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorials/use-local-mcp-server',
                component: ComponentCreator('/docs/docs/tutorials/use-local-mcp-server', 'dc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorials/use-remote-mcp-server',
                component: ComponentCreator('/docs/docs/tutorials/use-remote-mcp-server', 'ffb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples',
                component: ComponentCreator('/docs/examples', '04c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/faqs',
                component: ComponentCreator('/docs/faqs', '5c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction',
                component: ComponentCreator('/docs/introduction', '4e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/legacy/concepts/architecture',
                component: ComponentCreator('/docs/legacy/concepts/architecture', 'ef5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/legacy/concepts/elicitation',
                component: ComponentCreator('/docs/legacy/concepts/elicitation', 'c38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/legacy/concepts/prompts',
                component: ComponentCreator('/docs/legacy/concepts/prompts', '5c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/legacy/concepts/resources',
                component: ComponentCreator('/docs/legacy/concepts/resources', '232'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/legacy/concepts/roots',
                component: ComponentCreator('/docs/legacy/concepts/roots', '5f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/legacy/concepts/sampling',
                component: ComponentCreator('/docs/legacy/concepts/sampling', 'b26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/legacy/concepts/tools',
                component: ComponentCreator('/docs/legacy/concepts/tools', '1b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/legacy/concepts/transports',
                component: ComponentCreator('/docs/legacy/concepts/transports', '913'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/legacy/tools/debugging',
                component: ComponentCreator('/docs/legacy/tools/debugging', 'aff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/legacy/tools/inspector',
                component: ComponentCreator('/docs/legacy/tools/inspector', '338'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/quickstart/client',
                component: ComponentCreator('/docs/quickstart/client', 'df4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/quickstart/server',
                component: ComponentCreator('/docs/quickstart/server', 'b58'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/quickstart/user',
                component: ComponentCreator('/docs/quickstart/user', '58d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/java/mcp-client',
                component: ComponentCreator('/docs/sdk/java/mcp-client', 'd13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/java/mcp-overview',
                component: ComponentCreator('/docs/sdk/java/mcp-overview', 'b22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/java/mcp-server',
                component: ComponentCreator('/docs/sdk/java/mcp-server', '9b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/snippets/snippet-intro',
                component: ComponentCreator('/docs/snippets/snippet-intro', 'b51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2024-11-05/',
                component: ComponentCreator('/docs/specification/2024-11-05/', '564'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2024-11-05/architecture/',
                component: ComponentCreator('/docs/specification/2024-11-05/architecture/', 'a5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2024-11-05/basic/',
                component: ComponentCreator('/docs/specification/2024-11-05/basic/', '1d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2024-11-05/basic/lifecycle',
                component: ComponentCreator('/docs/specification/2024-11-05/basic/lifecycle', '490'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2024-11-05/basic/messages',
                component: ComponentCreator('/docs/specification/2024-11-05/basic/messages', 'b20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2024-11-05/basic/transports',
                component: ComponentCreator('/docs/specification/2024-11-05/basic/transports', 'ecb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2024-11-05/basic/utilities/cancellation',
                component: ComponentCreator('/docs/specification/2024-11-05/basic/utilities/cancellation', '3f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2024-11-05/basic/utilities/ping',
                component: ComponentCreator('/docs/specification/2024-11-05/basic/utilities/ping', 'e8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2024-11-05/basic/utilities/progress',
                component: ComponentCreator('/docs/specification/2024-11-05/basic/utilities/progress', '01f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2024-11-05/client/roots',
                component: ComponentCreator('/docs/specification/2024-11-05/client/roots', '5a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2024-11-05/client/sampling',
                component: ComponentCreator('/docs/specification/2024-11-05/client/sampling', '5a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2024-11-05/server/',
                component: ComponentCreator('/docs/specification/2024-11-05/server/', '4cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2024-11-05/server/prompts',
                component: ComponentCreator('/docs/specification/2024-11-05/server/prompts', '7d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2024-11-05/server/resources',
                component: ComponentCreator('/docs/specification/2024-11-05/server/resources', '2d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2024-11-05/server/tools',
                component: ComponentCreator('/docs/specification/2024-11-05/server/tools', '4e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2024-11-05/server/utilities/completion',
                component: ComponentCreator('/docs/specification/2024-11-05/server/utilities/completion', '31f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2024-11-05/server/utilities/logging',
                component: ComponentCreator('/docs/specification/2024-11-05/server/utilities/logging', '28d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2024-11-05/server/utilities/pagination',
                component: ComponentCreator('/docs/specification/2024-11-05/server/utilities/pagination', '748'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-03-26/',
                component: ComponentCreator('/docs/specification/2025-03-26/', '15d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-03-26/architecture/',
                component: ComponentCreator('/docs/specification/2025-03-26/architecture/', 'b17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-03-26/basic/',
                component: ComponentCreator('/docs/specification/2025-03-26/basic/', '572'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-03-26/basic/authorization',
                component: ComponentCreator('/docs/specification/2025-03-26/basic/authorization', 'b68'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-03-26/basic/lifecycle',
                component: ComponentCreator('/docs/specification/2025-03-26/basic/lifecycle', '8d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-03-26/basic/transports',
                component: ComponentCreator('/docs/specification/2025-03-26/basic/transports', 'f9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-03-26/basic/utilities/cancellation',
                component: ComponentCreator('/docs/specification/2025-03-26/basic/utilities/cancellation', '467'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-03-26/basic/utilities/ping',
                component: ComponentCreator('/docs/specification/2025-03-26/basic/utilities/ping', 'c32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-03-26/basic/utilities/progress',
                component: ComponentCreator('/docs/specification/2025-03-26/basic/utilities/progress', 'd76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-03-26/changelog',
                component: ComponentCreator('/docs/specification/2025-03-26/changelog', '7d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-03-26/client/roots',
                component: ComponentCreator('/docs/specification/2025-03-26/client/roots', '858'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-03-26/client/sampling',
                component: ComponentCreator('/docs/specification/2025-03-26/client/sampling', '0f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-03-26/server/',
                component: ComponentCreator('/docs/specification/2025-03-26/server/', '972'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-03-26/server/prompts',
                component: ComponentCreator('/docs/specification/2025-03-26/server/prompts', '7bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-03-26/server/resources',
                component: ComponentCreator('/docs/specification/2025-03-26/server/resources', '42f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-03-26/server/tools',
                component: ComponentCreator('/docs/specification/2025-03-26/server/tools', 'd89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-03-26/server/utilities/completion',
                component: ComponentCreator('/docs/specification/2025-03-26/server/utilities/completion', '949'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-03-26/server/utilities/logging',
                component: ComponentCreator('/docs/specification/2025-03-26/server/utilities/logging', '029'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-03-26/server/utilities/pagination',
                component: ComponentCreator('/docs/specification/2025-03-26/server/utilities/pagination', '411'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-06-18/',
                component: ComponentCreator('/docs/specification/2025-06-18/', 'ed6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-06-18/architecture/',
                component: ComponentCreator('/docs/specification/2025-06-18/architecture/', '626'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-06-18/basic/',
                component: ComponentCreator('/docs/specification/2025-06-18/basic/', 'c96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-06-18/basic/authorization',
                component: ComponentCreator('/docs/specification/2025-06-18/basic/authorization', '829'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-06-18/basic/lifecycle',
                component: ComponentCreator('/docs/specification/2025-06-18/basic/lifecycle', 'c6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-06-18/basic/security_best_practices',
                component: ComponentCreator('/docs/specification/2025-06-18/basic/security_best_practices', '0ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-06-18/basic/transports',
                component: ComponentCreator('/docs/specification/2025-06-18/basic/transports', '4e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-06-18/basic/utilities/cancellation',
                component: ComponentCreator('/docs/specification/2025-06-18/basic/utilities/cancellation', '530'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-06-18/basic/utilities/ping',
                component: ComponentCreator('/docs/specification/2025-06-18/basic/utilities/ping', 'e73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-06-18/basic/utilities/progress',
                component: ComponentCreator('/docs/specification/2025-06-18/basic/utilities/progress', 'ce3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-06-18/changelog',
                component: ComponentCreator('/docs/specification/2025-06-18/changelog', '628'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-06-18/client/elicitation',
                component: ComponentCreator('/docs/specification/2025-06-18/client/elicitation', 'a43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-06-18/client/roots',
                component: ComponentCreator('/docs/specification/2025-06-18/client/roots', '0cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-06-18/client/sampling',
                component: ComponentCreator('/docs/specification/2025-06-18/client/sampling', 'd96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-06-18/schema',
                component: ComponentCreator('/docs/specification/2025-06-18/schema', '508'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-06-18/server/',
                component: ComponentCreator('/docs/specification/2025-06-18/server/', 'd2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-06-18/server/prompts',
                component: ComponentCreator('/docs/specification/2025-06-18/server/prompts', 'dbb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-06-18/server/resources',
                component: ComponentCreator('/docs/specification/2025-06-18/server/resources', '537'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-06-18/server/tools',
                component: ComponentCreator('/docs/specification/2025-06-18/server/tools', '500'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-06-18/server/utilities/completion',
                component: ComponentCreator('/docs/specification/2025-06-18/server/utilities/completion', '854'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-06-18/server/utilities/logging',
                component: ComponentCreator('/docs/specification/2025-06-18/server/utilities/logging', '849'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/2025-06-18/server/utilities/pagination',
                component: ComponentCreator('/docs/specification/2025-06-18/server/utilities/pagination', 'fcb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/draft/',
                component: ComponentCreator('/docs/specification/draft/', 'c25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/draft/architecture/',
                component: ComponentCreator('/docs/specification/draft/architecture/', 'bc5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/draft/basic/',
                component: ComponentCreator('/docs/specification/draft/basic/', '0f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/draft/basic/authorization',
                component: ComponentCreator('/docs/specification/draft/basic/authorization', '9c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/draft/basic/lifecycle',
                component: ComponentCreator('/docs/specification/draft/basic/lifecycle', '65b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/draft/basic/security_best_practices',
                component: ComponentCreator('/docs/specification/draft/basic/security_best_practices', 'ad5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/draft/basic/transports',
                component: ComponentCreator('/docs/specification/draft/basic/transports', 'afb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/draft/basic/utilities/cancellation',
                component: ComponentCreator('/docs/specification/draft/basic/utilities/cancellation', '8c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/draft/basic/utilities/ping',
                component: ComponentCreator('/docs/specification/draft/basic/utilities/ping', '636'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/draft/basic/utilities/progress',
                component: ComponentCreator('/docs/specification/draft/basic/utilities/progress', '852'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/draft/changelog',
                component: ComponentCreator('/docs/specification/draft/changelog', 'ff0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/draft/client/elicitation',
                component: ComponentCreator('/docs/specification/draft/client/elicitation', '632'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/draft/client/roots',
                component: ComponentCreator('/docs/specification/draft/client/roots', '7bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/draft/client/sampling',
                component: ComponentCreator('/docs/specification/draft/client/sampling', 'b7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/draft/schema',
                component: ComponentCreator('/docs/specification/draft/schema', '7b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/draft/server/',
                component: ComponentCreator('/docs/specification/draft/server/', '0d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/draft/server/prompts',
                component: ComponentCreator('/docs/specification/draft/server/prompts', '080'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/draft/server/resources',
                component: ComponentCreator('/docs/specification/draft/server/resources', '517'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/draft/server/tools',
                component: ComponentCreator('/docs/specification/draft/server/tools', 'd2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/draft/server/utilities/completion',
                component: ComponentCreator('/docs/specification/draft/server/utilities/completion', '0b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/draft/server/utilities/logging',
                component: ComponentCreator('/docs/specification/draft/server/utilities/logging', 'a37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/draft/server/utilities/pagination',
                component: ComponentCreator('/docs/specification/draft/server/utilities/pagination', 'd80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/specification/versioning',
                component: ComponentCreator('/docs/specification/versioning', 'ece'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/building-a-client-node',
                component: ComponentCreator('/docs/tutorials/building-a-client-node', '7b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/building-mcp-with-llms',
                component: ComponentCreator('/docs/tutorials/building-mcp-with-llms', 'bff'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
