export default {
  "title": "MADICES 2022",
  "tagline": "Machine actionable data for chemical sciences:  Bridging experiments, simulations, and machine learning for spectral data",
  "url": "https://madices.github.io",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "MADICES",
  "projectName": "madices.github.io",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "path": "docs",
          "sidebarPath": "sidebars.js",
          "editUrl": "https://github.com/madices/madices.github.io/edit/master/",
          "versions": {
            "current": {
              "label": "current"
            }
          },
          "lastVersion": "current",
          "showLastUpdateAuthor": false,
          "showLastUpdateTime": true
        },
        "theme": {
          "customCss": "/Users/kevinmaikjablonka/Dropbox (LSMO)/Documents/open_source/MADICES.github.io/src/css/custom.css"
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "hideOnScroll": true,
      "logo": {
        "alt": "MADICES",
        "src": "img/svg/c_no_bg.svg",
        "srcDark": "img/svg/w_no_bg.svg"
      },
      "items": [
        {
          "label": "Program",
          "to": "docs/program",
          "position": "left"
        },
        {
          "label": "Speakers",
          "to": "docs/speakers",
          "position": "left"
        }
      ]
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": true,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "announcementBar": {
      "content": "⭐️ Register now on the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.cecam.org/workshop-details/1165\">CECAM website</a>! ⭐️",
      "id": "announcement-bar",
      "isCloseable": true
    },
    "footer": {
      "links": [
        {
          "title": "Community",
          "items": [
            {
              "label": "Discord",
              "to": "https://discord.gg/hZVetCB5"
            }
          ]
        },
        {
          "title": "Social",
          "items": [
            {
              "label": "GitHub",
              "to": "https://github.com/madices/MADICES-2020"
            }
          ]
        }
      ],
      "logo": {
        "alt": "MADICES",
        "src": "img/svg/c_no_bg.svg"
      },
      "copyright": "MADICES 2022",
      "style": "light"
    },
    "image": "img/svg/c_no_bg.svg",
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadata": [],
    "hideableSidebar": false,
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};