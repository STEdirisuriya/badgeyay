(function(){define('fetch',['exports'],function(a){var b=FastBoot.require('node-fetch');a['default']=b,a.Headers=b.Headers,a.Request=b.Request,a.Response=b.Response}),define('fetch/ajax',['exports'],function(){throw new Error('You included `fetch/ajax` but it was renamed to `ember-fetch/ajax`')})})();