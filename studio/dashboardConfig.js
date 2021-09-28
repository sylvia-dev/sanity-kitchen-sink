export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '615392dbca710d0096fabb39',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-n88rsm2z',
                  apiId: 'f8bd5cd9-ab7a-4380-8419-3e2aee789ba0'
                },
                {
                  buildHookId: '615392db962ced00a3e66a60',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-s8pu1gqi',
                  apiId: 'ae4c4e68-8bd3-48ab-bed8-1cb5358396d8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sylvia-dev/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-s8pu1gqi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
