import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from '../components/admin/AppLayout'
import AuthLayout from '../components/auth/AuthLayout'
import lazyLoading from './lazyLoading'

Vue.use(Router)

const demoRoutes = []
if (process.env.NODE_ENV === 'development') {
  const VueBook = require('vue-book')

  demoRoutes.push(
    VueBook.createRoute({
      requireContext: require.context('./..', true, /.demo.vue$/),
      path: '/demo',
    }),
    VueBook.createRoute({
      requireContext: require.context('./../components', true, /.vue$/),
      path: '/presentation',
    }),
  )

  Vue.use(VueBook.VueBookComponents)
}

const EmptyParentComponent = {
  template: '<router-view></router-view>',
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...demoRoutes,
    {
      path: '*',
      redirect: { name: 'dashboard' }
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: lazyLoading('auth/login/Login'),
          props: true,
          meta: {
            requiresAuth: false
          }
        },
        {
          path: 'signup',
          name: 'signup',
          component: lazyLoading('auth/signup/Signup'),
          props: true,
          meta: {
            requiresAuth: false
          }
        },
        {
          path: '',
          redirect: { name: 'login' },
        },
      ],
    },
    {
      path: '/404',
      name: '404',
      component: EmptyParentComponent,
      children: [
        {
          path: 'not-found-advanced',
          name: 'not-found-advanced',
          component: lazyLoading('pages/404-pages/KuanticPageNotFoundSearch'),
        },
        {
          path: 'not-found-simple',
          name: 'not-found-simple',
          component: lazyLoading('pages/404-pages/KuanticPageNotFoundSimple'),
        },
        {
          path: 'not-found-custom',
          name: 'not-found-custom',
          component: lazyLoading('pages/404-pages/KuanticPageNotFoundCustom'),
        },
        {
          path: '/pages/not-found-large-text',
          name: 'not-found-large-text',
          component: lazyLoading('pages/404-pages/KuanticPageNotFoundLargeText'),
        },
      ],
    },
    {
      path: '/admin',
      name: 'admin',
      component: AppLayout,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: lazyLoading('dashboard/Dashboard'),
          default: true,
          meta: {
            requiresAuth: false
          }
        },
        {
          path: 'planning',
          name: 'planning',
          component: EmptyParentComponent,
          children: [
            {
              path: 'sales-projection',
              name: 'sales-projection',
              component: lazyLoading('planning/sales/SalesProjection'),
              meta: {
                requiresAuth: false,
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/sales-projection',
              },
            },
          ],
        },
        {
          path: 'purchase',
          name: 'purchase',
          component: EmptyParentComponent,
          children: [
            {
              path: 'best-sellers',
              name: 'best-sellers',
              component: lazyLoading('purchase/best-sellers/BestSellers'),
              meta: {
                requiresAuth: false,
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/best-sellers',
              },
            },
            {
              path: 'abc-curve',
              name: 'abc-curve',
              component: lazyLoading('purchase/abc-curve/AbcCurve'),
              meta: {
                requiresAuth: false,
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/abc-curve',
              },
            },
            {
              path: 'nos-list',
              name: 'nos-list',
              component: lazyLoading('purchase/nos-list/NosList'),
              meta: {
                requiresAuth: false,
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/nos-list',
              },
            },
            {
              path: 'product-grids',
              name: 'product-grids',
              component: lazyLoading('purchase/product-grids/ProductGrids'),
              meta: {
                requiresAuth: false,
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/product-grids',
              },
            },
            {
              path: 'monthly-budget',
              name: 'monthly-budget',
              component: lazyLoading('purchase/monthly-budget/MonthlyBudget'),
              meta: {
                requiresAuth: false,
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/monthly-budget',
              },
            },
            {
              path: 'repurchase',
              name: 'repurchase',
              component: lazyLoading('purchase/repurchase/Repurchase'),
              meta: {
                requiresAuth: false,
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/repurchase',
              },
            },
          ],
        },
        {
          path: 'pricing',
          name: 'pricing',
          component: EmptyParentComponent,
          children: [
            {
              path: 'matrix-pricing',
              name: 'matrix-pricing',
              component: lazyLoading('pricing/matrix-pricing/MatrixPricing'),
              meta: {
                requiresAuth: false,
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/matrix-pricing',
              },
            },
            {
              path: 'campaign-pricing',
              name: 'campaign-pricing',
              component: lazyLoading('pricing/campaign-pricing/CampaignPricing'),
              meta: {
                requiresAuth: false,
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/campaign-pricing',
              },
            },
            {
              path: 'stock-pricing',
              name: 'stock-pricing',
              component: lazyLoading('pricing/stock-pricing/StockPricing'),
              meta: {
                requiresAuth: false,
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/stock-pricing',
              },
            },
            {
              path: 'competition-by-product',
              name: 'competition-by-product',
              component: lazyLoading('pricing/competition-by-product/CompetitionByProduct'),
              meta: {
                requiresAuth: false,
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/competition-by-product',
              },
            },
            {
              path: 'competition-by-portfolio',
              name: 'competition-by-portfolio',
              component: lazyLoading('pricing/competition-by-portfolio/CompetitionByPortfolio'),
              meta: {
                requiresAuth: false,
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/competition-by-portfolio',
              },
            },
          ],
        },
        {
          path: 'marketing',
          name: 'marketing',
          component: EmptyParentComponent,
          children: [
            {
              path: 'google-analytics',
              name: 'google-analytics',
              component: lazyLoading('marketing/google-analytics/GoogleAnalytics'),
              meta: {
                requiresAuth: false,
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/google-analytics',
              },
            },
            {
              path: 'facebook-twitter',
              name: 'facebook-twitter',
              component: lazyLoading('marketing/facebook-twitter/FacebookTwitter'),
              meta: {
                requiresAuth: false,
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/facebook-twitter',
              },
            },
            {
              path: 'remarketing',
              name: 'remarketing',
              component: lazyLoading('marketing/remarketing/Remarketing'),
              meta: {
                requiresAuth: false,
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/remarketing',
              },
            },
          ],
        },
        {
          path: 'statistics',
          name: 'statistics',
          component: EmptyParentComponent,
          children: [
            {
              path: 'charts',
              name: 'charts',
              component: lazyLoading('statistics/charts/Charts'),
              meta: {
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/Charts',
              },
            },
            {
              path: 'progress-bars',
              name: 'progress-bars',
              component: lazyLoading('statistics/progress-bars/ProgressBars'),
              meta: {
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/Progress-Bars',
              },
            },
          ],
        },
        {
          path: 'forms',
          name: 'forms',
          component: EmptyParentComponent,
          children: [
            {
              path: 'form-elements',
              name: 'form-elements',
              component: lazyLoading('forms/form-elements/FormElements'),
              meta: {
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/inputs',
              },
            },
            {
              path: 'form-wizards',
              name: 'form-wizards',
              component: lazyLoading('forms/form-wizard/FormWizard'),
              meta: {
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/Wizards',
              },
            },
            {
              path: 'medium-editor',
              name: 'medium-editor',
              component: lazyLoading('forms/medium-editor/MediumEditor'),
              meta: {
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/Medium-Editor',
              },
            },
          ],
        },
        {
          path: 'tables',
          name: 'tables',
          component: lazyLoading('tables/Table'),
          meta: {
            wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/Tables',
          },
        },
        {
          path: 'ui',
          name: 'ui',
          component: EmptyParentComponent,
          children: [
            {
              path: 'typography',
              name: 'typography',
              component: lazyLoading('ui/typography/Typography'),
            },
            {
              path: 'buttons',
              name: 'buttons',
              component: lazyLoading('ui/buttons/Buttons'),
              meta: {
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/Buttons',
              },
            },
            {
              path: 'color-pickers',
              name: 'color-pickers',
              component: lazyLoading('ui/color-pickers/ColorPickers'),
              meta: {
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/Color-Pickers',
              },
            },
            {
              path: 'timelines',
              name: 'timelines',
              component: lazyLoading('ui/timelines/Timelines'),
              meta: {
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/Timelines',
              },
            },
            {
              path: 'dropdowns',
              name: 'dropdowns',
              component: lazyLoading('ui/dropdowns/Dropdowns'),
              meta: {
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/Dropdowns',
              },
            },
            {
              path: 'notifications',
              name: 'notifications',
              component: lazyLoading('ui/notifications/Notifications'),
            },
            {
              path: 'icons',
              component: lazyLoading('ui/icons/Icons'),
              children: [
                {
                  path: '', // Default route
                  name: 'icon-sets',
                  component: lazyLoading('ui/icons/SetsList'),
                },
                {
                  path: ':name',
                  name: 'icon-set',
                  component: lazyLoading('ui/icons/IconSet'),
                  props: true,
                },
              ],
            },
            {
              path: 'spinners',
              name: 'spinners',
              component: lazyLoading('ui/spinners/Spinners'),
            },
            {
              path: 'grid',
              name: 'grid',
              component: lazyLoading('ui/grid/Grid'),
            },
            {
              path: 'modals',
              name: 'modals',
              component: lazyLoading('ui/modals/Modals'),
              meta: {
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/Modals',
              },
            },
            {
              path: 'cards',
              name: 'cards',
              component: lazyLoading('ui/cards/Cards'),
              meta: {
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/Cards',
              },
            },
            {
              path: 'file-upload',
              name: 'file-upload',
              component: lazyLoading('ui/file-upload/FileUpload'),
              meta: {
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/File-Upload',
              },
            },
            {
              path: 'tags',
              name: 'tags',
              component: lazyLoading('ui/tags/Tags'),
              meta: {
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/Tags',
              },
            },
            {
              path: 'tree-view',
              name: 'tree-view',
              component: lazyLoading('ui/tree-view/TreeView'),
              meta: {
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/Tree-view',
              },
            },
            {
              path: 'collapse',
              name: 'collapse',
              component: lazyLoading('ui/collapse/Collapse')
            },
            {
              path: 'filters',
              name: 'filters',
              component: lazyLoading('ui/filters/Filters')
            }
          ]
        },
        {
          path: 'extra',
          name: 'extra',
          component: lazyLoading('extra/Extra'),
          meta: {
            wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/Tabs',
          },
        },
        {
          path: 'maps',
          name: 'maps',
          component: EmptyParentComponent,
          children: [
            {
              path: 'google-maps',
              name: 'google-maps',
              component: lazyLoading('maps/google-maps/GoogleMapsPage'),
              meta: {
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/Maps',
              },
            },
            {
              path: 'yandex-maps',
              name: 'yandex-maps',
              component: lazyLoading('maps/yandex-maps/YandexMapsPage'),
              meta: {
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/Maps',
              },
            },
            {
              path: 'leaflet-maps',
              name: 'leaflet-maps',
              component: lazyLoading('maps/leaflet-maps/LeafletMapsPage'),
              meta: {
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/Maps',
              },
            },
            {
              path: 'bubble-maps',
              name: 'bubble-maps',
              component: lazyLoading('maps/bubble-maps/BubbleMapsPage'),
              meta: {
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/Maps',
              },
            },
            {
              path: 'line-maps',
              name: 'line-maps',
              component: lazyLoading('maps/line-maps/LineMapsPage'),
              meta: {
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/Maps',
              },
            },
          ],
        },
        {
          path: 'pages',
          name: 'pages',
          component: EmptyParentComponent,
          children: [
            {
              path: '404-pages',
              name: '404-pages',
              component: lazyLoading('pages/404-pages/404PagesPage'),
            },
          ],
        },
        {
          path: 'settings',
          name: 'settings',
          component: EmptyParentComponent,
          children: [
            {
              path: 'configurations',
              name: 'configurations',
              component: lazyLoading('settings/configurations/Configurations'),
              meta: {
                requiresAuth: false,
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/settings/configurations',
              },
            },
            {
              path: 'dailyindicators',
              name: 'dailyindicators',
              component: lazyLoading('settings/indicators/DailyIndicator'),
              meta: {
                requiresAuth: false,
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/settings/indicators',
              },
            },
            {
              path: 'summaryindicators',
              name: 'summaryindicators',
              component: lazyLoading('settings/indicators/SummaryIndicator'),
              meta: {
                requiresAuth: false,
                wikiLink: 'https://github.com/claudineisbezerra/kuantic/wiki/settings/indicators',
              },
            },
          ],
        },
        {
          path: 'about',
          name: 'about',
          component: lazyLoading('about/About'),
          meta: {
            requiresAuth: false
          }
        },
        {
          path: 'profile',
          name: 'profile',
          component: EmptyParentComponent,
          children: [
            {
              path: 'my-profile',
              name: 'my-profile',
              component: lazyLoading('profile/my-profile/MyProfile'),
              props: true,
              meta: {
                requiresAuth: true
              }
            },
            // {
            //   path: '/profile/:handle',
            //   name: 'profile',
            //   component: lazyLoading('profile/Profile'),
            //   meta: {
            //     requiresAuth: false,
            //     transitionName: 'router-anim',
            //     enterActive: 'animated fadeIn'
            //   },
            // },

            // {
            //   path: '/user/:handle',
            //   name: 'userProfile',
            //   component: lazyLoading('profile/UserProfile'),
            //   props: true,
            //   meta: {
            //     requiresAuth: false,
            //     transitionName: 'router-anim',
            //     enterActive: 'animated fadeIn'
            //   }
            // },

            // {
            //   path: '/user/:handle/edit',
            //   name: 'editUserProfile',
            //   component: lazyLoading('profile/EditUserProfile'),
            //   props: true,
            //   meta: {
            //     requiresAuth: false,
            //     transitionName: 'router-anim',
            //     enterActive: 'animated fadeIn'
            //   }
            // }
          ],
        },

      ],
    },
  ],
})
