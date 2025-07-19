
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/FrontendMentorTBD/home/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/FrontendMentorTBD/home"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 511, hash: 'c826e182e145ce8b0f7c4edc880b6f6f986ce8b999612edaf9d761bcc4636bc1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: 'fe3c1c33bf9d30c9a0dc0c030168cc235f4295bd7b94f0df32651efa9a7878a0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21638, hash: 'bdcec4a738bb2ba72f328e3ae21eab3aa5627aba4a348afd01654472cb898800', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
