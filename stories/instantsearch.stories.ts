import { storiesOf } from '@storybook/html';
import { withHits } from '../.storybook/decorators';

storiesOf('Basics/InstantSearch', module)
  .add(
    'with searchFunction to prevent search',
    withHits(() => {}, {
      searchFunction: (helper) => {
        const query = helper.state.query;

        if (query === '') {
          return;
        }

        helper.search();
      },
    })
  )
  .add(
    'with initialUiState',
    withHits(() => {}, {
      initialUiState: {
        instant_search: {
          refinementList: {
            brand: ['Apple'],
          },
        },
      },
    })
  )
  .add(
    'with initialResults',
    withHits(
      ({ search, container, instantsearch }) => {
        const hitsContainer1 = document.createElement('div');
        const hitsContainer2 = document.createElement('div');

        search.addWidgets([
          instantsearch.widgets.panel({
            templates: { header: 'instant_search' },
          })(instantsearch.widgets.hits)({
            container: hitsContainer1,
            templates: {
              item: '{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}',
            },
          }),
          instantsearch.widgets
            .index({ indexName: 'instant_search_rating_asc' })
            .addWidgets([
              instantsearch.widgets.panel({
                templates: { header: 'instant_search_rating_asc' },
              })(instantsearch.widgets.hits)({
                container: hitsContainer2,
                templates: {
                  item: '{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}',
                },
              }),
            ]),
        ]);

        container.appendChild(hitsContainer1);
        container.appendChild(hitsContainer2);
      },
      {
        initialResults: {
          instant_search: {
            _rawResults: [
              {
                hits: [
                  {
                    name: 'Apple - iPhone SE 16GB - Space Gray (Verizon)',
                    description:
                      'iPhone SE features a 4-inch Retina display, an A9 chip with 64-bit desktop-class architecture, the Touch ID fingerprint sensor, a 12MP iSight camera, a FaceTime HD camera with Retina Flash, Live Photos, LTE and fast Wi-Fi, iOS 9, and iCloud.',
                    brand: 'Apple',
                    categories: ['Cell Phones', 'iPhone', 'iPhone SE'],
                    hierarchicalCategories: {
                      lvl0: 'Cell Phones',
                      lvl1: 'Cell Phones > iPhone',
                      lvl2: 'Cell Phones > iPhone > iPhone SE',
                    },
                    type: 'Vzw iphone handset',
                    price: 449.99,
                    price_range: '200 - 500',
                    image:
                      'https://cdn-demo.algolia.com/bestbuy-0118/5005506_sb.jpg',
                    url: 'https://api.bestbuy.com/click/-/5005506/pdp',
                    free_shipping: true,
                    rating: 4,
                    popularity: 19581,
                    objectID: '5005506',
                    _snippetResult: {
                      description: {
                        value:
                          '__ais-highlight__iPhone__/ais-highlight__ SE features a 4-inch Retina display, an A9 chip with 64-bit desktop […]',
                        matchLevel: 'full',
                      },
                    },
                    _highlightResult: {
                      name: {
                        value:
                          'Apple - __ais-highlight__iPhone__/ais-highlight__ SE 16GB - Space Gray (Verizon)',
                        matchLevel: 'full',
                        fullyHighlighted: false,
                        matchedWords: ['iphone'],
                      },
                      description: {
                        value:
                          '__ais-highlight__iPhone__/ais-highlight__ SE features a 4-inch Retina display, an A9 chip with 64-bit desktop-class architecture, the Touch ID fingerprint sensor, a 12MP iSight camera, a FaceTime HD camera with Retina Flash, Live Photos, LTE and fast Wi-Fi, iOS 9, and iCloud.',
                        matchLevel: 'full',
                        fullyHighlighted: false,
                        matchedWords: ['iphone'],
                      },
                      brand: {
                        value: 'Apple',
                        matchLevel: 'none',
                        matchedWords: [],
                      },
                      categories: [
                        {
                          value: 'Cell Phones',
                          matchLevel: 'none',
                          matchedWords: [],
                        },
                        {
                          value: '__ais-highlight__iPhone__/ais-highlight__',
                          matchLevel: 'full',
                          fullyHighlighted: true,
                          matchedWords: ['iphone'],
                        },
                        {
                          value: '__ais-highlight__iPhone__/ais-highlight__ SE',
                          matchLevel: 'full',
                          fullyHighlighted: false,
                          matchedWords: ['iphone'],
                        },
                      ],
                    },
                  },
                  {
                    name: 'Apple - iPhone SE 64GB - Space Gray (AT&T)',
                    description:
                      'iPhone SE features a 4-inch Retina display, an A9 chip with 64-bit desktop-class architecture, the Touch ID fingerprint sensor, a 12MP iSight camera, a FaceTime HD camera with Retina Flash, Live Photos, LTE and fast Wi-Fi, iOS 9, and iCloud.',
                    brand: 'Apple',
                    categories: ['Cell Phones', 'iPhone', 'iPhone SE'],
                    hierarchicalCategories: {
                      lvl0: 'Cell Phones',
                      lvl1: 'Cell Phones > iPhone',
                      lvl2: 'Cell Phones > iPhone > iPhone SE',
                    },
                    type: 'At&#38;t iphone handset',
                    price: 499.99,
                    price_range: '200 - 500',
                    image:
                      'https://cdn-demo.algolia.com/bestbuy-0118/5005675_sb.jpg',
                    url: 'https://api.bestbuy.com/click/-/5005675/pdp',
                    free_shipping: true,
                    rating: 4,
                    popularity: 19311,
                    objectID: '5005675',
                    _snippetResult: {
                      description: {
                        value:
                          '__ais-highlight__iPhone__/ais-highlight__ SE features a 4-inch Retina display, an A9 chip with 64-bit desktop […]',
                        matchLevel: 'full',
                      },
                    },
                    _highlightResult: {
                      name: {
                        value:
                          'Apple - __ais-highlight__iPhone__/ais-highlight__ SE 64GB - Space Gray (AT&T)',
                        matchLevel: 'full',
                        fullyHighlighted: false,
                        matchedWords: ['iphone'],
                      },
                      description: {
                        value:
                          '__ais-highlight__iPhone__/ais-highlight__ SE features a 4-inch Retina display, an A9 chip with 64-bit desktop-class architecture, the Touch ID fingerprint sensor, a 12MP iSight camera, a FaceTime HD camera with Retina Flash, Live Photos, LTE and fast Wi-Fi, iOS 9, and iCloud.',
                        matchLevel: 'full',
                        fullyHighlighted: false,
                        matchedWords: ['iphone'],
                      },
                      brand: {
                        value: 'Apple',
                        matchLevel: 'none',
                        matchedWords: [],
                      },
                      categories: [
                        {
                          value: 'Cell Phones',
                          matchLevel: 'none',
                          matchedWords: [],
                        },
                        {
                          value: '__ais-highlight__iPhone__/ais-highlight__',
                          matchLevel: 'full',
                          fullyHighlighted: true,
                          matchedWords: ['iphone'],
                        },
                        {
                          value: '__ais-highlight__iPhone__/ais-highlight__ SE',
                          matchLevel: 'full',
                          fullyHighlighted: false,
                          matchedWords: ['iphone'],
                        },
                      ],
                    },
                  },
                  {
                    name: 'Apple - iPhone SE 16GB - Space Gray (Sprint)',
                    description:
                      'iPhone SE features a 4-inch Retina display, an A9 chip with 64-bit desktop-class architecture, the Touch ID fingerprint sensor, a 12MP iSight camera, a FaceTime HD camera with Retina Flash, Live Photos, LTE and fast Wi-Fi, iOS 9, and iCloud.',
                    brand: 'Apple',
                    categories: ['Cell Phones', 'iPhone', 'iPhone SE'],
                    hierarchicalCategories: {
                      lvl0: 'Cell Phones',
                      lvl1: 'Cell Phones > iPhone',
                      lvl2: 'Cell Phones > iPhone > iPhone SE',
                    },
                    type: 'Spr iphone handset',
                    price: 449.99,
                    price_range: '200 - 500',
                    image:
                      'https://cdn-demo.algolia.com/bestbuy-0118/5005532_sb.jpg',
                    url: 'https://api.bestbuy.com/click/-/5005532/pdp',
                    free_shipping: true,
                    rating: 4,
                    popularity: 19206,
                    objectID: '5005532',
                    _snippetResult: {
                      description: {
                        value:
                          '__ais-highlight__iPhone__/ais-highlight__ SE features a 4-inch Retina display, an A9 chip with 64-bit desktop […]',
                        matchLevel: 'full',
                      },
                    },
                    _highlightResult: {
                      name: {
                        value:
                          'Apple - __ais-highlight__iPhone__/ais-highlight__ SE 16GB - Space Gray (Sprint)',
                        matchLevel: 'full',
                        fullyHighlighted: false,
                        matchedWords: ['iphone'],
                      },
                      description: {
                        value:
                          '__ais-highlight__iPhone__/ais-highlight__ SE features a 4-inch Retina display, an A9 chip with 64-bit desktop-class architecture, the Touch ID fingerprint sensor, a 12MP iSight camera, a FaceTime HD camera with Retina Flash, Live Photos, LTE and fast Wi-Fi, iOS 9, and iCloud.',
                        matchLevel: 'full',
                        fullyHighlighted: false,
                        matchedWords: ['iphone'],
                      },
                      brand: {
                        value: 'Apple',
                        matchLevel: 'none',
                        matchedWords: [],
                      },
                      categories: [
                        {
                          value: 'Cell Phones',
                          matchLevel: 'none',
                          matchedWords: [],
                        },
                        {
                          value: '__ais-highlight__iPhone__/ais-highlight__',
                          matchLevel: 'full',
                          fullyHighlighted: true,
                          matchedWords: ['iphone'],
                        },
                        {
                          value: '__ais-highlight__iPhone__/ais-highlight__ SE',
                          matchLevel: 'full',
                          fullyHighlighted: false,
                          matchedWords: ['iphone'],
                        },
                      ],
                    },
                  },
                  {
                    name: 'Apple - iPhone 6s 32GB - Space Gray (AT&T)',
                    description:
                      'A 4.7-inch Retina HD display with 3D Touch. 7000 series aluminum and stronger cover glass. An A9 chip with 64-bit desktop-class architecture. All new 12MP iSight camera with Live Photos. Touch ID. Faster LTE and Wi-Fi. Long battery life and iOS 10 and iCloud. All in a smooth, continuous unibody design.',
                    brand: 'Apple',
                    categories: ['Cell Phones', 'iPhone'],
                    hierarchicalCategories: {
                      lvl0: 'Cell Phones',
                      lvl1: 'Cell Phones > iPhone',
                    },
                    type: 'Att iph unv handset',
                    price: 599.99,
                    price_range: '500 - 2000',
                    image:
                      'https://cdn-demo.algolia.com/bestbuy-0118/5580377_sb.jpg',
                    url: 'https://api.bestbuy.com/click/-/5580377/pdp',
                    free_shipping: true,
                    rating: 4,
                    popularity: 19201,
                    objectID: '5580377',
                    _snippetResult: {
                      description: {
                        value:
                          'A 4.7-inch Retina HD display with 3D Touch. 7000 series aluminum and stronger […]',
                        matchLevel: 'none',
                      },
                    },
                    _highlightResult: {
                      name: {
                        value:
                          'Apple - __ais-highlight__iPhone__/ais-highlight__ 6s 32GB - Space Gray (AT&T)',
                        matchLevel: 'full',
                        fullyHighlighted: false,
                        matchedWords: ['iphone'],
                      },
                      description: {
                        value:
                          'A 4.7-inch Retina HD display with 3D Touch. 7000 series aluminum and stronger cover glass. An A9 chip with 64-bit desktop-class architecture. All new 12MP iSight camera with Live Photos. Touch ID. Faster LTE and Wi-Fi. Long battery life and iOS 10 and iCloud. All in a smooth, continuous unibody design.',
                        matchLevel: 'none',
                        matchedWords: [],
                      },
                      brand: {
                        value: 'Apple',
                        matchLevel: 'none',
                        matchedWords: [],
                      },
                      categories: [
                        {
                          value: 'Cell Phones',
                          matchLevel: 'none',
                          matchedWords: [],
                        },
                        {
                          value: '__ais-highlight__iPhone__/ais-highlight__',
                          matchLevel: 'full',
                          fullyHighlighted: true,
                          matchedWords: ['iphone'],
                        },
                      ],
                    },
                  },
                ],
                userData: [
                  {
                    title: 'iPhone Xs',
                    banner:
                      'https://user-images.githubusercontent.com/6137112/80473185-10281600-8946-11ea-9dbf-652dfbb7968b.png',
                    link: 'https://www.apple.com/iphone/',
                  },
                ],
                nbHits: 3977,
                page: 0,
                nbPages: 250,
                hitsPerPage: 4,
                facets: {
                  brand: {
                    Incipio: 306,
                    'Insignia™': 208,
                    Apple: 207,
                    OtterBox: 191,
                    Samsung: 166,
                    Speck: 147,
                    'kate spade new york': 105,
                    mophie: 101,
                    Spigen: 94,
                    ZAGG: 85,
                  },
                  rating: {
                    '0': 505,
                    '1': 35,
                    '2': 45,
                    '3': 342,
                    '4': 2797,
                    '5': 253,
                  },
                },
                facets_stats: {
                  rating: {
                    min: 0,
                    max: 5,
                    avg: 3,
                    sum: 13604,
                  },
                },
                exhaustiveFacetsCount: true,
                exhaustiveNbHits: true,
                exhaustiveTypo: true,
                query: 'iphone',
                queryAfterRemoval: 'iphone',
                params:
                  'hitsPerPage=4&attributesToSnippet=%5B%22description%3A15%22%5D&snippetEllipsisText=%5B%E2%80%A6%5D&maxValuesPerFacet=10&query=iphone&highlightPreTag=__ais-highlight__&highlightPostTag=__%2Fais-highlight__&page=0&clickAnalytics=true&facets=%5B%22brand%22%2C%22rating%22%5D&tagFilters=',
                index: 'instant_search',
                queryID: '1ca631f7ce58174cc2af7f7c9f30389a',
                renderingContent: {
                  facetOrdering: {
                    facets: {
                      order: [
                        'brand',
                        'hierarchicalCategories.lvl0',
                        'categories',
                      ],
                    },
                    values: {
                      brand: {
                        sortRemainingBy: 'count',
                      },
                      'hierarchicalCategories.lvl0': {
                        sortRemainingBy: 'count',
                      },
                    },
                  },
                },
                processingTimeMS: 3,
              },
            ],
            hits: [
              {
                name: 'Apple - iPhone SE 16GB - Space Gray (Verizon)',
                description:
                  'iPhone SE features a 4-inch Retina display, an A9 chip with 64-bit desktop-class architecture, the Touch ID fingerprint sensor, a 12MP iSight camera, a FaceTime HD camera with Retina Flash, Live Photos, LTE and fast Wi-Fi, iOS 9, and iCloud.',
                brand: 'Apple',
                categories: ['Cell Phones', 'iPhone', 'iPhone SE'],
                hierarchicalCategories: {
                  lvl0: 'Cell Phones',
                  lvl1: 'Cell Phones > iPhone',
                  lvl2: 'Cell Phones > iPhone > iPhone SE',
                },
                type: 'Vzw iphone handset',
                price: 449.99,
                price_range: '200 - 500',
                image:
                  'https://cdn-demo.algolia.com/bestbuy-0118/5005506_sb.jpg',
                url: 'https://api.bestbuy.com/click/-/5005506/pdp',
                free_shipping: true,
                rating: 4,
                popularity: 19581,
                objectID: '5005506',
                _snippetResult: {
                  description: {
                    value:
                      '<mark>iPhone</mark> SE features a 4-inch Retina display, an A9 chip with 64-bit desktop […]',
                    matchLevel: 'full',
                  },
                },
                _highlightResult: {
                  name: {
                    value:
                      'Apple - <mark>iPhone</mark> SE 16GB - Space Gray (Verizon)',
                    matchLevel: 'full',
                    fullyHighlighted: false,
                    matchedWords: ['iphone'],
                  },
                  description: {
                    value:
                      '<mark>iPhone</mark> SE features a 4-inch Retina display, an A9 chip with 64-bit desktop-class architecture, the Touch ID fingerprint sensor, a 12MP iSight camera, a FaceTime HD camera with Retina Flash, Live Photos, LTE and fast Wi-Fi, iOS 9, and iCloud.',
                    matchLevel: 'full',
                    fullyHighlighted: false,
                    matchedWords: ['iphone'],
                  },
                  brand: {
                    value: 'Apple',
                    matchLevel: 'none',
                    matchedWords: [],
                  },
                  categories: [
                    {
                      value: 'Cell Phones',
                      matchLevel: 'none',
                      matchedWords: [],
                    },
                    {
                      value: '<mark>iPhone</mark>',
                      matchLevel: 'full',
                      fullyHighlighted: true,
                      matchedWords: ['iphone'],
                    },
                    {
                      value: '<mark>iPhone</mark> SE',
                      matchLevel: 'full',
                      fullyHighlighted: false,
                      matchedWords: ['iphone'],
                    },
                  ],
                },
              },
              {
                name: 'Apple - iPhone SE 64GB - Space Gray (AT&T)',
                description:
                  'iPhone SE features a 4-inch Retina display, an A9 chip with 64-bit desktop-class architecture, the Touch ID fingerprint sensor, a 12MP iSight camera, a FaceTime HD camera with Retina Flash, Live Photos, LTE and fast Wi-Fi, iOS 9, and iCloud.',
                brand: 'Apple',
                categories: ['Cell Phones', 'iPhone', 'iPhone SE'],
                hierarchicalCategories: {
                  lvl0: 'Cell Phones',
                  lvl1: 'Cell Phones > iPhone',
                  lvl2: 'Cell Phones > iPhone > iPhone SE',
                },
                type: 'At&#38;t iphone handset',
                price: 499.99,
                price_range: '200 - 500',
                image:
                  'https://cdn-demo.algolia.com/bestbuy-0118/5005675_sb.jpg',
                url: 'https://api.bestbuy.com/click/-/5005675/pdp',
                free_shipping: true,
                rating: 4,
                popularity: 19311,
                objectID: '5005675',
                _snippetResult: {
                  description: {
                    value:
                      '<mark>iPhone</mark> SE features a 4-inch Retina display, an A9 chip with 64-bit desktop […]',
                    matchLevel: 'full',
                  },
                },
                _highlightResult: {
                  name: {
                    value:
                      'Apple - <mark>iPhone</mark> SE 64GB - Space Gray (AT&amp;T)',
                    matchLevel: 'full',
                    fullyHighlighted: false,
                    matchedWords: ['iphone'],
                  },
                  description: {
                    value:
                      '<mark>iPhone</mark> SE features a 4-inch Retina display, an A9 chip with 64-bit desktop-class architecture, the Touch ID fingerprint sensor, a 12MP iSight camera, a FaceTime HD camera with Retina Flash, Live Photos, LTE and fast Wi-Fi, iOS 9, and iCloud.',
                    matchLevel: 'full',
                    fullyHighlighted: false,
                    matchedWords: ['iphone'],
                  },
                  brand: {
                    value: 'Apple',
                    matchLevel: 'none',
                    matchedWords: [],
                  },
                  categories: [
                    {
                      value: 'Cell Phones',
                      matchLevel: 'none',
                      matchedWords: [],
                    },
                    {
                      value: '<mark>iPhone</mark>',
                      matchLevel: 'full',
                      fullyHighlighted: true,
                      matchedWords: ['iphone'],
                    },
                    {
                      value: '<mark>iPhone</mark> SE',
                      matchLevel: 'full',
                      fullyHighlighted: false,
                      matchedWords: ['iphone'],
                    },
                  ],
                },
              },
              {
                name: 'Apple - iPhone SE 16GB - Space Gray (Sprint)',
                description:
                  'iPhone SE features a 4-inch Retina display, an A9 chip with 64-bit desktop-class architecture, the Touch ID fingerprint sensor, a 12MP iSight camera, a FaceTime HD camera with Retina Flash, Live Photos, LTE and fast Wi-Fi, iOS 9, and iCloud.',
                brand: 'Apple',
                categories: ['Cell Phones', 'iPhone', 'iPhone SE'],
                hierarchicalCategories: {
                  lvl0: 'Cell Phones',
                  lvl1: 'Cell Phones > iPhone',
                  lvl2: 'Cell Phones > iPhone > iPhone SE',
                },
                type: 'Spr iphone handset',
                price: 449.99,
                price_range: '200 - 500',
                image:
                  'https://cdn-demo.algolia.com/bestbuy-0118/5005532_sb.jpg',
                url: 'https://api.bestbuy.com/click/-/5005532/pdp',
                free_shipping: true,
                rating: 4,
                popularity: 19206,
                objectID: '5005532',
                _snippetResult: {
                  description: {
                    value:
                      '<mark>iPhone</mark> SE features a 4-inch Retina display, an A9 chip with 64-bit desktop […]',
                    matchLevel: 'full',
                  },
                },
                _highlightResult: {
                  name: {
                    value:
                      'Apple - <mark>iPhone</mark> SE 16GB - Space Gray (Sprint)',
                    matchLevel: 'full',
                    fullyHighlighted: false,
                    matchedWords: ['iphone'],
                  },
                  description: {
                    value:
                      '<mark>iPhone</mark> SE features a 4-inch Retina display, an A9 chip with 64-bit desktop-class architecture, the Touch ID fingerprint sensor, a 12MP iSight camera, a FaceTime HD camera with Retina Flash, Live Photos, LTE and fast Wi-Fi, iOS 9, and iCloud.',
                    matchLevel: 'full',
                    fullyHighlighted: false,
                    matchedWords: ['iphone'],
                  },
                  brand: {
                    value: 'Apple',
                    matchLevel: 'none',
                    matchedWords: [],
                  },
                  categories: [
                    {
                      value: 'Cell Phones',
                      matchLevel: 'none',
                      matchedWords: [],
                    },
                    {
                      value: '<mark>iPhone</mark>',
                      matchLevel: 'full',
                      fullyHighlighted: true,
                      matchedWords: ['iphone'],
                    },
                    {
                      value: '<mark>iPhone</mark> SE',
                      matchLevel: 'full',
                      fullyHighlighted: false,
                      matchedWords: ['iphone'],
                    },
                  ],
                },
              },
              {
                name: 'Apple - iPhone 6s 32GB - Space Gray (AT&T)',
                description:
                  'A 4.7-inch Retina HD display with 3D Touch. 7000 series aluminum and stronger cover glass. An A9 chip with 64-bit desktop-class architecture. All new 12MP iSight camera with Live Photos. Touch ID. Faster LTE and Wi-Fi. Long battery life and iOS 10 and iCloud. All in a smooth, continuous unibody design.',
                brand: 'Apple',
                categories: ['Cell Phones', 'iPhone'],
                hierarchicalCategories: {
                  lvl0: 'Cell Phones',
                  lvl1: 'Cell Phones > iPhone',
                },
                type: 'Att iph unv handset',
                price: 599.99,
                price_range: '500 - 2000',
                image:
                  'https://cdn-demo.algolia.com/bestbuy-0118/5580377_sb.jpg',
                url: 'https://api.bestbuy.com/click/-/5580377/pdp',
                free_shipping: true,
                rating: 4,
                popularity: 19201,
                objectID: '5580377',
                _snippetResult: {
                  description: {
                    value:
                      'A 4.7-inch Retina HD display with 3D Touch. 7000 series aluminum and stronger […]',
                    matchLevel: 'none',
                  },
                },
                _highlightResult: {
                  name: {
                    value:
                      'Apple - <mark>iPhone</mark> 6s 32GB - Space Gray (AT&amp;T)',
                    matchLevel: 'full',
                    fullyHighlighted: false,
                    matchedWords: ['iphone'],
                  },
                  description: {
                    value:
                      'A 4.7-inch Retina HD display with 3D Touch. 7000 series aluminum and stronger cover glass. An A9 chip with 64-bit desktop-class architecture. All new 12MP iSight camera with Live Photos. Touch ID. Faster LTE and Wi-Fi. Long battery life and iOS 10 and iCloud. All in a smooth, continuous unibody design.',
                    matchLevel: 'none',
                    matchedWords: [],
                  },
                  brand: {
                    value: 'Apple',
                    matchLevel: 'none',
                    matchedWords: [],
                  },
                  categories: [
                    {
                      value: 'Cell Phones',
                      matchLevel: 'none',
                      matchedWords: [],
                    },
                    {
                      value: '<mark>iPhone</mark>',
                      matchLevel: 'full',
                      fullyHighlighted: true,
                      matchedWords: ['iphone'],
                    },
                  ],
                },
              },
            ],
            userData: [
              {
                title: 'iPhone Xs',
                banner:
                  'https://user-images.githubusercontent.com/6137112/80473185-10281600-8946-11ea-9dbf-652dfbb7968b.png',
                link: 'https://www.apple.com/iphone/',
              },
            ],
            nbHits: 3977,
            page: 0,
            nbPages: 250,
            hitsPerPage: 4,
            facets: [],
            facets_stats: {
              rating: {
                min: 0,
                max: 5,
                avg: 3,
                sum: 13604,
              },
            },
            exhaustiveFacetsCount: true,
            exhaustiveNbHits: true,
            exhaustiveTypo: true,
            query: 'iphone',
            queryAfterRemoval: 'iphone',
            params:
              'hitsPerPage=4&attributesToSnippet=%5B%22description%3A15%22%5D&snippetEllipsisText=%5B%E2%80%A6%5D&maxValuesPerFacet=10&query=iphone&highlightPreTag=__ais-highlight__&highlightPostTag=__%2Fais-highlight__&page=0&clickAnalytics=true&facets=%5B%22brand%22%2C%22rating%22%5D&tagFilters=',
            index: 'instant_search',
            queryID: '1ca631f7ce58174cc2af7f7c9f30389a',
            renderingContent: {
              facetOrdering: {
                facets: {
                  order: ['brand', 'hierarchicalCategories.lvl0', 'categories'],
                },
                values: {
                  brand: {
                    sortRemainingBy: 'count',
                  },
                  'hierarchicalCategories.lvl0': {
                    sortRemainingBy: 'count',
                  },
                },
              },
            },
            processingTimeMS: 3,
            disjunctiveFacets: [
              {
                name: 'brand',
                data: {
                  Incipio: 306,
                  'Insignia™': 208,
                  Apple: 207,
                  OtterBox: 191,
                  Samsung: 166,
                  Speck: 147,
                  'kate spade new york': 105,
                  mophie: 101,
                  Spigen: 94,
                  ZAGG: 85,
                },
                exhaustive: true,
              },
              {
                name: 'rating',
                data: {
                  '0': 505,
                  '1': 35,
                  '2': 45,
                  '3': 342,
                  '4': 2797,
                  '5': 253,
                },
                exhaustive: true,
                stats: {
                  min: 0,
                  max: 5,
                  avg: 3,
                  sum: 13604,
                },
              },
            ],
            hierarchicalFacets: [],
            _state: {
              facets: [],
              disjunctiveFacets: ['brand', 'rating'],
              hierarchicalFacets: [],
              facetsRefinements: {},
              facetsExcludes: {},
              disjunctiveFacetsRefinements: {
                brand: [],
              },
              numericRefinements: {
                price: {},
                rating: {},
              },
              tagRefinements: [],
              hierarchicalFacetsRefinements: {},
              index: 'instant_search',
              hitsPerPage: 4,
              attributesToSnippet: ['description:15'],
              snippetEllipsisText: '[…]',
              maxValuesPerFacet: 10,
              query: 'iphone',
              highlightPreTag: '__ais-highlight__',
              highlightPostTag: '__/ais-highlight__',
              page: 0,
              clickAnalytics: true,
            },
          },
          instant_search_rating_asc: {
            _rawResults: [
              {
                hits: [
                  {
                    name: 'Apple - iPhone SE 64GB - Gold (AT&T)',
                    description:
                      'iPhone SE features a 4-inch Retina display, an A9 chip with 64-bit desktop-class architecture, the Touch ID fingerprint sensor, a 12MP iSight camera, a FaceTime HD camera with Retina Flash, Live Photos, LTE and fast Wi-Fi, iOS 9, and iCloud.',
                    brand: 'Apple',
                    categories: ['Cell Phones', 'iPhone', 'iPhone SE'],
                    hierarchicalCategories: {
                      lvl0: 'Cell Phones',
                      lvl1: 'Cell Phones > iPhone',
                      lvl2: 'Cell Phones > iPhone > iPhone SE',
                    },
                    type: 'At&#38;t iphone handset',
                    price: 499.99,
                    price_range: '200 - 500',
                    image:
                      'https://cdn-demo.algolia.com/bestbuy-0118/5005679_sb.jpg',
                    url: 'https://api.bestbuy.com/click/-/5005679/pdp',
                    free_shipping: true,
                    rating: 4,
                    popularity: 14338,
                    objectID: '5005679',
                    _snippetResult: {
                      description: {
                        value:
                          '__ais-highlight__iPhone__/ais-highlight__ SE features a 4-inch Retina display, an A9 chip with 64-bit desktop […]',
                        matchLevel: 'full',
                      },
                    },
                    _highlightResult: {
                      name: {
                        value:
                          'Apple - __ais-highlight__iPhone__/ais-highlight__ SE 64GB - Gold (AT&T)',
                        matchLevel: 'full',
                        fullyHighlighted: false,
                        matchedWords: ['iphone'],
                      },
                      description: {
                        value:
                          '__ais-highlight__iPhone__/ais-highlight__ SE features a 4-inch Retina display, an A9 chip with 64-bit desktop-class architecture, the Touch ID fingerprint sensor, a 12MP iSight camera, a FaceTime HD camera with Retina Flash, Live Photos, LTE and fast Wi-Fi, iOS 9, and iCloud.',
                        matchLevel: 'full',
                        fullyHighlighted: false,
                        matchedWords: ['iphone'],
                      },
                      brand: {
                        value: 'Apple',
                        matchLevel: 'none',
                        matchedWords: [],
                      },
                      categories: [
                        {
                          value: 'Cell Phones',
                          matchLevel: 'none',
                          matchedWords: [],
                        },
                        {
                          value: '__ais-highlight__iPhone__/ais-highlight__',
                          matchLevel: 'full',
                          fullyHighlighted: true,
                          matchedWords: ['iphone'],
                        },
                        {
                          value: '__ais-highlight__iPhone__/ais-highlight__ SE',
                          matchLevel: 'full',
                          fullyHighlighted: false,
                          matchedWords: ['iphone'],
                        },
                      ],
                      type: {
                        value:
                          'At&t __ais-highlight__iphone__/ais-highlight__ handset',
                        matchLevel: 'full',
                        fullyHighlighted: false,
                        matchedWords: ['iphone'],
                      },
                    },
                  },
                ],
                userData: [
                  {
                    title: 'iPhone Xs',
                    banner:
                      'https://user-images.githubusercontent.com/6137112/80473185-10281600-8946-11ea-9dbf-652dfbb7968b.png',
                    link: 'https://www.apple.com/iphone/',
                  },
                ],
                nbHits: 3977,
                page: 0,
                nbPages: 1000,
                hitsPerPage: 1,
                facets: {
                  brand: {
                    Incipio: 306,
                    'Insignia™': 208,
                    Apple: 207,
                    OtterBox: 191,
                    Samsung: 166,
                    Speck: 147,
                    'kate spade new york': 105,
                    mophie: 101,
                    Spigen: 94,
                    ZAGG: 85,
                  },
                  rating: {
                    '0': 505,
                    '1': 35,
                    '2': 45,
                    '3': 342,
                    '4': 2797,
                    '5': 253,
                  },
                },
                facets_stats: {
                  rating: {
                    min: 0,
                    max: 5,
                    avg: 3,
                    sum: 13604,
                  },
                },
                exhaustiveFacetsCount: true,
                exhaustiveNbHits: true,
                exhaustiveTypo: true,
                query: 'iphone',
                params:
                  'hitsPerPage=1&attributesToSnippet=%5B%22description%3A15%22%5D&snippetEllipsisText=%5B%E2%80%A6%5D&maxValuesPerFacet=10&query=iphone&highlightPreTag=__ais-highlight__&highlightPostTag=__%2Fais-highlight__&page=0&clickAnalytics=true&facets=%5B%22brand%22%2C%22rating%22%5D&tagFilters=',
                index: 'instant_search_rating_asc',
                queryID: 'd555c6df3002fc6e88b2e24a1063fced',
                renderingContent: {},
                processingTimeMS: 2,
              },
            ],
            hits: [
              {
                name: 'Apple - iPhone SE 64GB - Gold (AT&T)',
                description:
                  'iPhone SE features a 4-inch Retina display, an A9 chip with 64-bit desktop-class architecture, the Touch ID fingerprint sensor, a 12MP iSight camera, a FaceTime HD camera with Retina Flash, Live Photos, LTE and fast Wi-Fi, iOS 9, and iCloud.',
                brand: 'Apple',
                categories: ['Cell Phones', 'iPhone', 'iPhone SE'],
                hierarchicalCategories: {
                  lvl0: 'Cell Phones',
                  lvl1: 'Cell Phones > iPhone',
                  lvl2: 'Cell Phones > iPhone > iPhone SE',
                },
                type: 'At&#38;t iphone handset',
                price: 499.99,
                price_range: '200 - 500',
                image:
                  'https://cdn-demo.algolia.com/bestbuy-0118/5005679_sb.jpg',
                url: 'https://api.bestbuy.com/click/-/5005679/pdp',
                free_shipping: true,
                rating: 4,
                popularity: 14338,
                objectID: '5005679',
                _snippetResult: {
                  description: {
                    value:
                      '<mark>iPhone</mark> SE features a 4-inch Retina display, an A9 chip with 64-bit desktop […]',
                    matchLevel: 'full',
                  },
                },
                _highlightResult: {
                  name: {
                    value:
                      'Apple - <mark>iPhone</mark> SE 64GB - Gold (AT&amp;T)',
                    matchLevel: 'full',
                    fullyHighlighted: false,
                    matchedWords: ['iphone'],
                  },
                  description: {
                    value:
                      '<mark>iPhone</mark> SE features a 4-inch Retina display, an A9 chip with 64-bit desktop-class architecture, the Touch ID fingerprint sensor, a 12MP iSight camera, a FaceTime HD camera with Retina Flash, Live Photos, LTE and fast Wi-Fi, iOS 9, and iCloud.',
                    matchLevel: 'full',
                    fullyHighlighted: false,
                    matchedWords: ['iphone'],
                  },
                  brand: {
                    value: 'Apple',
                    matchLevel: 'none',
                    matchedWords: [],
                  },
                  categories: [
                    {
                      value: 'Cell Phones',
                      matchLevel: 'none',
                      matchedWords: [],
                    },
                    {
                      value: '<mark>iPhone</mark>',
                      matchLevel: 'full',
                      fullyHighlighted: true,
                      matchedWords: ['iphone'],
                    },
                    {
                      value: '<mark>iPhone</mark> SE',
                      matchLevel: 'full',
                      fullyHighlighted: false,
                      matchedWords: ['iphone'],
                    },
                  ],
                  type: {
                    value: 'At&amp;t <mark>iphone</mark> handset',
                    matchLevel: 'full',
                    fullyHighlighted: false,
                    matchedWords: ['iphone'],
                  },
                },
              },
            ],
            userData: [
              {
                title: 'iPhone Xs',
                banner:
                  'https://user-images.githubusercontent.com/6137112/80473185-10281600-8946-11ea-9dbf-652dfbb7968b.png',
                link: 'https://www.apple.com/iphone/',
              },
            ],
            nbHits: 3977,
            page: 0,
            nbPages: 1000,
            hitsPerPage: 1,
            facets: [],
            facets_stats: {
              rating: {
                min: 0,
                max: 5,
                avg: 3,
                sum: 13604,
              },
            },
            exhaustiveFacetsCount: true,
            exhaustiveNbHits: true,
            exhaustiveTypo: true,
            query: 'iphone',
            params:
              'hitsPerPage=1&attributesToSnippet=%5B%22description%3A15%22%5D&snippetEllipsisText=%5B%E2%80%A6%5D&maxValuesPerFacet=10&query=iphone&highlightPreTag=__ais-highlight__&highlightPostTag=__%2Fais-highlight__&page=0&clickAnalytics=true&facets=%5B%22brand%22%2C%22rating%22%5D&tagFilters=',
            index: 'instant_search_rating_asc',
            queryID: 'd555c6df3002fc6e88b2e24a1063fced',
            renderingContent: {},
            processingTimeMS: 2,
            disjunctiveFacets: [
              {
                name: 'brand',
                data: {
                  Incipio: 306,
                  'Insignia™': 208,
                  Apple: 207,
                  OtterBox: 191,
                  Samsung: 166,
                  Speck: 147,
                  'kate spade new york': 105,
                  mophie: 101,
                  Spigen: 94,
                  ZAGG: 85,
                },
                exhaustive: true,
              },
              {
                name: 'rating',
                data: {
                  '0': 505,
                  '1': 35,
                  '2': 45,
                  '3': 342,
                  '4': 2797,
                  '5': 253,
                },
                exhaustive: true,
                stats: {
                  min: 0,
                  max: 5,
                  avg: 3,
                  sum: 13604,
                },
              },
            ],
            hierarchicalFacets: [],
            _state: {
              facets: [],
              disjunctiveFacets: ['brand', 'rating'],
              hierarchicalFacets: [],
              facetsRefinements: {},
              facetsExcludes: {},
              disjunctiveFacetsRefinements: {
                brand: [],
              },
              numericRefinements: {
                price: {},
                rating: {},
              },
              tagRefinements: [],
              hierarchicalFacetsRefinements: {},
              index: 'instant_search_rating_asc',
              hitsPerPage: 1,
              attributesToSnippet: ['description:15'],
              snippetEllipsisText: '[…]',
              maxValuesPerFacet: 10,
              query: 'iphone',
              highlightPreTag: '__ais-highlight__',
              highlightPostTag: '__/ais-highlight__',
              page: 0,
              clickAnalytics: true,
            },
          },
        },
      }
    )
  )
  .add(
    'with refresh to reload',
    withHits(({ search, container, instantsearch }) => {
      const button = document.createElement('button');
      button.addEventListener('click', () => search.refresh());
      button.innerHTML = 'Refresh InstantSearch';
      const searchBoxContainer = document.createElement('div');

      search.addWidgets([
        instantsearch.widgets.searchBox({ container: searchBoxContainer }),
      ]);

      container.appendChild(button);
      container.appendChild(searchBoxContainer);
    })
  );
