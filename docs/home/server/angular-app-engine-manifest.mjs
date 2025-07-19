
export default {
  basePath: '/FrontendMentorTBD/home',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
