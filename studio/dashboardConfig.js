export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5dc7063f9345bdba126e44b2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-krga3j4s',
                  apiId: '7d292573-9e80-42a7-9ea8-0a52837f36f3'
                },
                {
                  buildHookId: '5dc7063f9c414f0d5c5eb87b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-tvs996nv',
                  apiId: 'af0bda38-d068-42ae-a867-4f37b5bc6f0d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/klokie/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-tvs996nv.netlify.com', category: 'apps'}
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
