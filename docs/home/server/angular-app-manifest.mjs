
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/frontend-mentor/home/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/frontend-mentor/home"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 509, hash: 'be6a0ffd0798fc7545c00ae527195781ae6daab046968600fe4f732611952071', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1022, hash: 'e1a815f6ec4a4656555dc9d767356007e85f0468045e4ac1696b882650039cdd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21636, hash: 'ba3e776148103b323c30b68de13035bcdd776e1596aae341f840400fab2e2520', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
