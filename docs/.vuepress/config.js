const path = require('path')
const nodeExternals = require('webpack-node-externals')

const resolve = pathName => path.join(__dirname, pathName)

module.exports = {
  base: '/',
  title: '乌云压顶是吧',
  description: '🍥',
  ga: 'UA-113936890-1',
  head: [
    ['link', {rel: 'shortcut icon', href: '/favicon.ico'}],
    ['link', {rel: 'manifest', href: '/manifest.json'}],
    ['meta', {name: 'theme-color', content: '#07527a'}],
    ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
    ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
    ['link', {rel: 'apple-touch-icon', href: '/icons/192.png'}],
    ['meta', {name: 'msapplication-TileImage', content: '/icons/192.png'}],
    ['meta', {name: 'msapplication-TileColor', content: '#07527a'}]
  ],
  serviceWorker: true,
  theme: '',
  locales: {'/': {lang: 'zh-CN', title: '乌云压顶是吧', description: '🍥'}},
  configureWebpack: (config, isServer) => {
    const myConfig = {
      resolve: {alias: {'@pub': resolve('./public')}},
      module: {
        rules: [{
          test: /vuetify.+\.js$/,
          loader: resolve('./ignoreStylus'),
        }]
      }
    };
    if (isServer) {
      myConfig.externals =
          nodeExternals({whitelist: [/vuetify/, /fortawesome/, /prismjs/]})
    }
    return myConfig
  },
  markdown: {
    config: md => {
      md.set({breaks: true})
      md.use(require('markdown-it-katex'), require('markdown-it-emoji'));
    }
  },
  themeConfig: {
    lang: 'zh-CN',
    subTitle: ' ',
    author: 'Gunjianpan',
    email: 'iofu728@163.com',
    since: 2017,
    avatar: '/face.jpg',
    avatarLink: '/',
    algolia: {apiKey: 'c42b71d494ca78750c7094eb2c55eda6', indexName: 'wyydsb'},
    serviceWorker: {
      updatePopup: {message: 'New content is available.', buttonText: 'Refresh'}
    },
    menus: [
      // icons by https://fontawesome.com/icons
      {text: 'Home', icon: 'fa fa-home', url: '/'},
      {text: 'Skr', icon: 'fab fa-earlybirds', url: '/other/chip.html'},
      {text: 'Pat', icon: 'fas fa-chess-bishop', url: '/pat/catalog.html'},
      {
        text: 'JavaScript',
        icon: 'fas fa-plane',
        url: '/javaScript/comment.html'
      },
      {text: 'Tags', icon: 'fa fa-tag', url: '/tags/'},
      {
        text: 'Github',
        icon: 'fab fa-github',
        url: 'https://github.com/iofu728/blog',
        external: true
      },
    ],
    socials: ['Weibo', 'QQ', 'Facebook', 'Twitter', 'GooglePlus'],
    colors: {
      primary: '#07527a',
      secondary: '#6d6d6d',
      accent: '#fff',
      error: '#DC143C',
      warning: '#e6af5f',
      info: '#00B8D4',
      success: '#1DA57A'
    },
    format:
        {date: 'YYYY年MM月DD日 HH:mm:ss', dateTime: 'YYYY年MM月DD日 HH:mm:ss'},
    pagination: {path: '/page/:pageNum', pageSize: 5},
    tags: {path: '/tags/:tagName'},
    categories: {path: '/categories/:category'},
    sidebar: {
      '/other/': [
        {
          title: 'NLP',
          collapsable: false,
          children: ['chatbot', 'rnn', 'vsm', 'pagerank'],
        },
        {
          title: 'Data Mining',
          collapsable: false,
          children: ['ppr', 'pageranks', 'frequent'],

        },
        {
          title: 'Spider',
          collapsable: false,
          children: ['neteasedb', 'netease'],
        },
        {
          title: 'Hadoop',
          collapsable: false,
          children: ['pseudo', 'mapreduce'],
        },
        {
          title: 'MySQL',
          collapsable: false,
          children: ['truncate'],
        },
        {
          title: 'Bash',
          collapsable: false,
          children: ['brew', 'spider', 'pv', 'redirect', 'nohup'],
        },
        {
          title: 'Sundry',
          collapsable: false,
          children: ['gitSkill', 'nginx'],
        },
        {
          title: 'Summary',
          collapsable: false,
          children: ['accident', 'cs'],
        },
      ],
      '/pat/': [
        '',
        {
          title: 'Summary',
          collapsable: false,
          children: ['sort', 'entrance'],
        },
        {
          title: 'ANOJ',
          collapsable: false,
          children: ['anoj2018II'],
        },
        {
          title: 'PAT',
          collapsable: false,
          children: [
            '1014', '1015', '1017', '1018', '1021', '1022', '1026', '1033',
            '1034', '1038', '1040', '1044', '1049', '1056', '1057', '1063',
            '1066', '1068', '1072', '1073', '1074', '1075', '1076', '1077',
            '1078', '1079', '1080', '1081', '1082', '1083', '1084', '1085',
            '1086', '1087', '1106', '1107',
          ],
        },
      ],
    }
  }
}
