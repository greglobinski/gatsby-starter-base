const base = {
  name: 'BaseStarter',
  url: 'https://gatsby-starter-base.greglobinski.com',
  author: 'greg lobinski',
};

const config = {
  siteTitle: `${base.name} - a no-style GatsbyJS starter`,
  shortSiteTitle: `- ${base.name}`,
  siteDescription: `${base.name} is a GatsbyJS starter`,
  siteUrl: base.url,
  pathPrefix: '',
  siteImage: 'preview.jpg',
  siteLanguage: 'en', // author // <title> // <title> postfix for posts and pages
  authorName: base.author,
  authorTwitterAccount: 'greglobinski', // info
  headerTitle: 'BaseStarter',
  headerSubTitle: 'no-style GatsbyJS starter', // manifest.json
  manifestName: 'BaseStarter - a GatsbyJS starter',
  manifestShortName: 'BaseStarter',
  manifestStartUrl: '/index.html',
  manifestBackgroundColor: 'white',
  manifestThemeColor: '#666',
  manifestDisplay: 'standalone', // social // max 12 characters
  authorSocialLinks: [
    { name: 'github', url: 'https://github.com/greglobinski' },
    { name: 'twitter', url: 'https://twitter.com/greglobinski' },
    { name: 'facebook', url: 'http://facebook.com/greglobinski' },
  ], // copyright
  copyrightNote: `Created by ${base.author}, licensed under MIT`,
};

module.exports = config;
