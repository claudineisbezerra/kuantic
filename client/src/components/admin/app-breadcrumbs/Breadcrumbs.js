export const breadcrumbs = {
  root: {
    name: '/',
    displayName: 'Home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: 'menu.dashboard',
    },
    {
      name: 'planning',
      displayName: 'menu.planning',
      disabled: true,
      children: [
        {
          name: 'sales-projection',
          displayName: 'menu.salesProjection',
        },
      ],
    },
    {
      name: 'purchase',
      displayName: 'menu.purchase',
      disabled: true,
      children: [
        {
          name: 'best-sellers',
          displayName: 'menu.bestSellers',
        },
        {
          name: 'abc-curve',
          displayName: 'menu.abcCurve',
        },
        {
          name: 'nos-list',
          displayName: 'menu.nosList',
        },
        {
          name: 'product-grids',
          displayName: 'menu.productGrids',
        },
        {
          name: 'monthly-budget',
          displayName: 'menu.monthlyBudget',
        },
        {
          name: 'competition-by-portfolio',
          displayName: 'menu.competitionByPortfolio',
        },
        {
          name: 'repurchase',
          displayName: 'menu.repurchase',
        },
      ],
    },
    {
      name: 'pricing',
      displayName: 'menu.pricing',
      disabled: true,
      children: [
        {
          name: 'matrix-pricing',
          displayName: 'menu.matrixPricing',
        },
        {
          name: 'campaign-pricing',
          displayName: 'menu.campaignPricing',
        },
        {
          name: 'stock-pricing',
          displayName: 'menu.stockPricing',
        },
        {
          name: 'competition-by-product',
          displayName: 'menu.competitionByProduct',
        },
        {
          name: 'competition-by-portfolio',
          displayName: 'menu.competitionByPortfolio',
        },
      ],
    },
    {
      name: 'marketing',
      displayName: 'menu.marketing',
      disabled: true,
      children: [
        {
          name: 'google-analytics',
          displayName: 'menu.googleAnalytics',
        },
        {
          name: 'facebook-twitter',
          displayName: 'menu.facebookTwitter',
        },
        {
          name: 'remarketing',
          displayName: 'menu.remarketing',
        },
      ],
    },
    {
      name: 'statistics',
      displayName: 'menu.statistics',
      disabled: true,
      children: [
        {
          name: 'charts',
          displayName: 'menu.charts',
        },
        {
          name: 'progress-bars',
          displayName: 'menu.progressBars',
        },
      ],
    },
    {
      name: 'forms',
      displayName: 'menu.forms',
      disabled: true,
      children: [
        {
          name: 'form-elements',
          displayName: 'menu.formElements',
        },
        {
          name: 'form-wizards',
          displayName: 'menu.formWizards',
        },
        {
          name: 'medium-editor',
          displayName: 'menu.mediumEditor',
        },
      ],
    },
    {
      name: 'tables',
      displayName: 'menu.tables',
    },
    {
      name: 'ui',
      displayName: 'menu.uiElements',
      disabled: true,
      children: [
        {
          name: 'typography',
          displayName: 'menu.typography',
        },
        {
          name: 'buttons',
          displayName: 'menu.buttons',
        },
        {
          name: 'collapse',
          displayName: 'menu.collapse',
        },
        {
          name: 'filters',
          displayName: 'menu.filters'
        },
        {
          name: 'color-pickers',
          displayName: 'menu.colorPickers',
        },
        {
          name: 'timelines',
          displayName: 'menu.timelines',
        },
        {
          name: 'notifications',
          displayName: 'menu.notifications',
        },
        {
          name: 'dropdowns',
          displayName: 'menu.dropdowns',
        },
        {
          name: 'icon-sets',
          displayName: 'menu.icons',
          children: [
            {
              displayName: 'concrete',
              name: 'icon-set',
            },
          ],
        },
        {
          name: 'spinners',
          displayName: 'menu.spinners',
        },
        {
          name: 'grid',
          displayName: 'menu.grid',
        },
        {
          name: 'modals',
          displayName: 'menu.modals',
        },
        {
          name: 'file-upload',
          displayName: 'menu.fileUpload',
        },
        {
          name: 'tags',
          displayName: 'menu.tags',
        },
        {
          name: 'cards',
          displayName: 'menu.cards',
        },
        {
          name: 'tree-view',
          displayName: 'menu.treeView',
        },
      ],
    },
    {
      name: 'extra',
      displayName: 'menu.extra',
    },
    {
      name: 'maps',
      displayName: 'menu.maps',
      disabled: true,
      children: [
        {
          name: 'google-maps',
          displayName: 'Google Maps',
        },
        {
          name: 'yandex-maps',
          displayName: 'Yandex Maps',
        },
        {
          name: 'leaflet-maps',
          displayName: 'Leaflet Maps',
        },
        {
          name: 'bubble-maps',
          displayName: 'Bubble Maps',
        },
        {
          name: 'line-maps',
          displayName: 'Line Maps',
        },
      ],
    },
    {
      name: 'pages',
      displayName: 'menu.pages',
      disabled: true,
      children: [
        {
          name: '404-pages',
          displayName: '404 Pages',
        },
      ],
    },
    {
      name: 'settings',
      displayName: 'menu.settings',
      disabled: true,
      children: [
        {
          name: 'configurations',
          displayName: 'menu.configurations',
        },
        {
          name: 'dailyindicators',
          displayName: 'menu.dailyindicators',
        },
        {
          name: 'summaryindicators',
          displayName: 'menu.summaryindicators',
        },
      ],
    },
    {
      name: 'about',
      displayName: 'menu.about',
    },
    {
      name: 'profile',
      displayName: 'menu.profile',
    },
    {
      name: 'my-profile',
      displayName: 'menu.myProfile',
    },
  ],
}
