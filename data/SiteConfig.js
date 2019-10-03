const config = {
  siteTitle: 'Nicolas Dessenius',
  siteTitleShort: 'Nicolas Dessenius',
  siteTitleAlt: 'Nicolas Dessenius',
  siteLogo: '/logos/tania.jpg',
  siteUrl: 'https://www.taniarascia.com',
  repo: 'https://github.com/taniarascia/taniarascia.com',
  pathPrefix: '',
  dateFromFormat: 'DD-MM-YYYY',
  dateFormat: 'DD/MM/YYYY',
  siteDescription:
    'Tania Rascia is a amateur author and web developper.',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-42068444-1',
  postDefaultCategoryID: 'Tech',
  commentsApi: 'https://nd-comments-api.herokuapp.com/comments',
  newsletter: 'https://taniarascia.substack.com',
  newsletterEmbed: 'https://taniarascia.substack.com/embed',
  userName: 'Hesperis',
  userEmail: 'nd.managment@gmail.com',
  userTwitter: 'ndessenius',
  menuLinks: [
    {
      name: 'Bio',
      link: '/bio/',
    },
    {
      name: 'Articles',
      link: '/blog/',
    },

  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
