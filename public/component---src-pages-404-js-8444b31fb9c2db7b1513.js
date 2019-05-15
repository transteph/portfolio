(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    143: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        o = n(147),
        i = n(177),
        c = n(153),
        l = n(154),
        s = function() {
          return r.a.createElement(
            'div',
            null,
            r.a.createElement(l.a, {
              color: 'backgroundDark',
              height: ['35vh', '80vh'],
              width: ['95vw', '60vw'],
            }),
            r.a.createElement(l.a, {
              color: 'primary',
              height: ['25vh', '35vh'],
              width: ['75vw', '60vw'],
              invertX: !0,
            }),
            r.a.createElement(l.a, {
              color: 'secondaryLight',
              height: ['10vh', '20vh'],
              width: ['50vw', '50vw'],
              invertX: !0,
              invertY: !0,
            }),
          );
        };
      t.default = function() {
        return r.a.createElement(
          i.a,
          null,
          r.a.createElement(
            c.a.Container,
            { id: '404', Background: s },
            r.a.createElement(
              o.Box,
              { width: [320, 400, 600], m: 'auto' },
              r.a.createElement(
                o.Heading,
                { color: 'primaryDark', fontSize: ['9rem', '13rem', '16rem'] },
                '404',
              ),
              r.a.createElement(
                o.Heading,
                { color: 'secondary', fontSize: ['4rem', '5rem', '6rem'] },
                "There isn't anything here",
              ),
            ),
          ),
        );
      };
    },
    151: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return l;
      });
      var a = n(0),
        r = n.n(a),
        o = n(4),
        i = n.n(o),
        c = (n(33), n(157), r.a.createContext({})),
        l = function(e) {
          return r.a.createElement(c.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : r.a.createElement('div', null, 'Loading (StaticQuery)');
          });
        };
      l.propTypes = {
        data: i.a.object,
        query: i.a.string.isRequired,
        render: i.a.func,
        children: i.a.func,
      };
    },
    153: function(e, t, n) {
      'use strict';
      n(150);
      var a = n(0),
        r = n.n(a),
        o = n(146),
        i = n(152),
        c = n(147),
        l = n(4),
        s = n.n(l),
        m = n(184),
        d = n.n(m),
        u = n(160),
        f = o.default.div.withConfig({
          displayName: 'Section__SectionContainer',
          componentId: 'sc-18uueee-0',
        })([
          'min-height:80vh;min-width:320px;max-width:1366px;display:flex;margin:auto;flex:0 1 auto;flex-direction:column;justify-content:center;padding:5em 1em;scroll-behavior:smooth;',
        ]),
        p = function() {
          return r.a.createElement('div', null);
        },
        h = function(e) {
          var t = e.id,
            n = e.children,
            a = e.Background,
            o = void 0 === a ? p : a;
          return r.a.createElement(
            i.b,
            { id: t, style: { position: 'relative' } },
            r.a.createElement(o, null),
            r.a.createElement(f, null, n),
          );
        };
      h.propTypes = {
        id: s.a.string.isRequired,
        children: s.a.node.isRequired,
        Background: s.a.func,
      };
      var g = function(e) {
        var t = e.name,
          n = e.icon,
          a = void 0 === n ? '' : n,
          o = e.label,
          i = void 0 === o ? '' : o;
        return r.a.createElement(
          d.a,
          { left: !0 },
          r.a.createElement(
            c.Heading,
            { color: 'secondaryDark', mb: 4 },
            r.a.createElement(
              u.a,
              { selected: !0 },
              t,
              a &&
                r.a.createElement(
                  'span',
                  {
                    role: 'img',
                    'aria-label': i,
                    style: { marginLeft: '10px' },
                  },
                  a,
                ),
            ),
          ),
        );
      };
      (g.propTypes = {
        name: s.a.string.isRequired,
        icon: s.a.string,
        label: s.a.string,
      }),
        (t.a = { Container: h, Header: g });
    },
    154: function(e, t, n) {
      'use strict';
      var a = n(146).default.div.withConfig({
        displayName: 'Triangle',
        componentId: 'le4p17-0',
      })(
        [
          'position:absolute;width:0;height:0;z-index:-2;background:repeating-linear-gradient( -45deg,#fff,#fff 2px,#000 2px,#000 3px);',
          ' ',
          ' @media only screen and (min-width:768px){',
          ' ',
          ';}',
        ],
        function(e) {
          var t = e.theme.colors[e.color] || e.color,
            n = e.height[0] + ' solid ' + t + ';';
          return e.invertY
            ? 'border-bottom: ' + n + '; bottom: 0;'
            : 'border-top: ' + n + '; ';
        },
        function(e) {
          var t = e.width[0] + ' solid transparent;';
          return e.invertX
            ? 'border-left: ' + t + '; right: 0;'
            : 'border-right: ' + t + ';';
        },
        function(e) {
          var t = e.height[1];
          return e.invertY
            ? 'border-bottom-width: ' + t + ';'
            : 'border-top-width: ' + t + ';';
        },
        function(e) {
          var t = e.width[1];
          return e.invertX
            ? 'border-left-width: ' + t + ';'
            : 'border-right-width: ' + t + ';';
        },
      );
      t.a = a;
    },
    157: function(e, t, n) {
      var a;
      e.exports = ((a = n(167)) && a.default) || a;
    },
    160: function(e, t, n) {
      'use strict';
      var a = n(146).default.span.withConfig({
        displayName: 'LinkAnimated',
        componentId: 'qj14bt-0',
      })(
        [
          'text-decoration:none;position:relative;margin-bottom:0;padding-bottom:5px;color:#33dd04;',
          ';transition:0.4s;cursor:',
          ";&:after{content:'';position:absolute;right:0;width:0;bottom:-5px;background:",
          ';height:5px;transition-property:width;transition-duration:0.3s;transition-timing-function:ease-out;}&:hover:after{left:0;right:auto;width:100%;}',
        ],
        function(e) {
          return (
            e.selected &&
            'border-bottom:  5px solid ' + e.theme.colors.primaryLight
          );
        },
        function(e) {
          return e.onClick ? 'pointer' : 'default';
        },
        function(e) {
          return e.theme.colors.secondaryLight;
        },
      );
      t.a = a;
    },
    165: function(e, t) {
      e.exports = {
        background: '#222222',
        backgroundDark: '#222222',
        primary: '#ffffff',
        primaryLight: '#04ede5',
        primaryDark: '#e50685',
        secondary: '#e2ea04',
        secondaryLight: '#e2ea04',
        secondaryDark: '#e50685',
        topNav: '#222222',
      };
    },
    166: function(e) {
      e.exports = {
        data: {
          contentfulAbout: {
            name: 'Stephanie Tran',
            description: 'A peek into some of my work. ',
            profile: {
              favicon16: {
                src:
                  '//images.ctfassets.net/d5gvew6c32kc/6nf3rNaaVaUqYcoAcciSeC/92f8ab46efe7a929d6a19b7d4b45b3bc/Mate_Logo.png?w=16&fl=progressive&q=50',
              },
              favicon32: {
                src:
                  '//images.ctfassets.net/d5gvew6c32kc/6nf3rNaaVaUqYcoAcciSeC/92f8ab46efe7a929d6a19b7d4b45b3bc/Mate_Logo.png?w=32&fl=progressive&q=50',
              },
              bigIcon: {
                src:
                  '//images.ctfassets.net/d5gvew6c32kc/6nf3rNaaVaUqYcoAcciSeC/92f8ab46efe7a929d6a19b7d4b45b3bc/Mate_Logo.png?w=192&fl=progressive&q=50',
              },
              appleIcon: {
                src:
                  '//images.ctfassets.net/d5gvew6c32kc/6nf3rNaaVaUqYcoAcciSeC/92f8ab46efe7a929d6a19b7d4b45b3bc/Mate_Logo.png?w=180&fl=progressive&q=50',
              },
            },
          },
        },
      };
    },
    167: function(e, t, n) {
      'use strict';
      n.r(t);
      n(34);
      var a = n(0),
        r = n.n(a),
        o = n(4),
        i = n.n(o),
        c = n(57),
        l = n(2),
        s = function(e) {
          var t = e.location,
            n = l.default.getResourcesForPathnameSync(t.pathname);
          return n
            ? r.a.createElement(
                c.a,
                Object.assign({ location: t, pageResources: n }, n.json),
              )
            : null;
        };
      (s.propTypes = {
        location: i.a.shape({ pathname: i.a.string.isRequired }).isRequired,
      }),
        (t.default = s);
    },
    177: function(e, t, n) {
      'use strict';
      var a = n(178),
        r = n.n(a),
        o = n(0),
        i = n.n(o),
        c = n(146),
        l = n(4),
        s = n.n(l),
        m = n(152),
        d = (n(179), n(156)),
        u = n.n(d),
        f = n(165),
        p = n.n(f),
        h = (n(150), n(75), n(166)),
        g = n(180),
        b = n.n(g),
        v = n(151),
        w = n(194);
      w.a.initialize('UA-76008029-1'),
        w.a.pageview(window.location.pathname + window.location.search);
      var E = function(e) {
        var t = e.theme,
          n = void 0 === t ? {} : t;
        return i.a.createElement(v.a, {
          query: '4063282471',
          render: function(e) {
            var t = e.contentfulAbout,
              a = t.name,
              r = t.description,
              o = t.profile,
              c = '' + a;
            return i.a.createElement(
              b.a,
              null,
              i.a.createElement('meta', { charSet: 'utf-8' }),
              i.a.createElement('title', null, c),
              i.a.createElement('meta', { name: 'description', content: r }),
              i.a.createElement('link', {
                rel: 'shortcut icon',
                href: 'https:' + o.favicon32.src,
              }),
              i.a.createElement('meta', {
                name: 'theme-color',
                content: n.background,
              }),
              i.a.createElement('meta', {
                name: 'image',
                content: 'https:' + o.favicon32.src,
              }),
              i.a.createElement('meta', { itemProp: 'name', content: c }),
              i.a.createElement('meta', {
                itemProp: 'description',
                content: r,
              }),
              i.a.createElement('meta', {
                itemProp: 'image',
                content: 'https:' + o.favicon32.src,
              }),
              i.a.createElement('meta', { name: 'og:title', content: c }),
              i.a.createElement('meta', { name: 'og:description', content: r }),
              i.a.createElement('meta', {
                name: 'og:image',
                content: 'https:' + o.bigIcon.src,
              }),
              i.a.createElement('meta', { name: 'og:site_name', content: c }),
              i.a.createElement('meta', {
                name: 'og:locale',
                content: 'en_US',
              }),
              i.a.createElement('meta', {
                name: 'og:type',
                content: 'website',
              }),
              i.a.createElement('meta', {
                name: 'twitter:card',
                content: 'summary',
              }),
              i.a.createElement('meta', { name: 'twitter:title', content: c }),
              i.a.createElement('meta', {
                name: 'twitter:description',
                content: r,
              }),
              i.a.createElement('meta', {
                name: 'twitter:image',
                content: 'https:' + o.bigIcon.src,
              }),
              i.a.createElement('meta', {
                name: 'twitter:image:src',
                content: 'https:' + o.bigIcon.src,
              }),
              i.a.createElement('link', {
                rel: 'apple-touch-icon',
                sizes: '180x180',
                href: 'https:' + o.appleIcon.src,
              }),
              i.a.createElement('link', {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: 'https:' + o.favicon32.src,
              }),
              i.a.createElement('link', {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: 'https:' + o.favicon16.src,
              }),
              i.a.createElement('link', {
                href:
                  'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
                rel: 'stylesheet',
                integrity:
                  'sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN',
                crossOrigin: 'anonymous',
              }),
            );
          },
          data: h,
        });
      };
      E.propTypes = { theme: s.a.object };
      var y = Object(c.withTheme)(E);
      function k() {
        var e = r()([
          '\n*,\n*::after,\n*::before { \n  -webkit-box-sizing: inherit;\n  box-sizing: inherit;\n  }\n\nbody {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; \n  margin: 0;\n  font-family: Inconsolata;\n  overflow-x: hidden;\n  background-color:#20232a;\n  color:#ffffff;\n  font-size:15pt;\n}\nh1,h2,h3,h4{\n  font-family:Inconsolata ;\n}\na{\n  color:#33dd04;\n}\n',
        ]);
        return (
          (k = function() {
            return e;
          }),
          e
        );
      }
      var x = Object(c.createGlobalStyle)(k());
      u()({ ssrFadeout: !0 });
      var q = function(e) {
        var t = e.children;
        return i.a.createElement(
          o.Fragment,
          null,
          i.a.createElement(x, null),
          i.a.createElement(
            c.ThemeProvider,
            { theme: { colors: p.a } },
            i.a.createElement(m.a, null, i.a.createElement(y, null), t),
          ),
        );
      };
      q.propTypes = { children: s.a.node.isRequired };
      t.a = q;
    },
  },
]);
//# sourceMappingURL=component---src-pages-404-js-8444b31fb9c2db7b1513.js.map
