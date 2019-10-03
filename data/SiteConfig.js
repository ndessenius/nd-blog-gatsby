const config = {
  siteTitle: 'Nicolas Dessenius',
  siteTitleShort: 'Nicolas Dessenius',
  siteTitleAlt: 'Nicolas Dessenius',
  siteLogo: '/logos/hesperis.jpg',
  siteUrl: 'https://hesperis.netlify.com',
  repo: 'https://github.com/ndessenius/nd-blog-gatsby',
  pathPrefix: '',
  dateFromFormat: 'DD-MM-YYYY',
  dateFormat: 'DD/MM/YYYY',
  siteDescription:
    'Nicolas Dessenius is an amateur author and web developper.',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-42068444-1',
  postDefaultCategoryID: 'Tech',
  commentsApi: 'https://cors-anywhere.herokuapp.com/https://nd-comments-api.herokuapp.com/comments',
  newsletter: '',
  newsletterEmbed: '',
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
