```html
  <kuantic-tree-view
    showIcons
    :kuanticTreeRoot="treeViewRoot"
  />
```

```javascript
import KuanticTreeViewRootMapper from '~kuantic-admin/src/kuantic-theme/kuantic-components/kuantic-tree-view/KuanticTreeRootMapper.js'

  data () {
    kuanticTreeRoot: KuanticTreeRootMapper.map([
      {
        label: 'Open category',
        isOpen: true,
        children: [
          {
            label: 'Custom icon',
            icon: 'ion ion-md-flower'
          },
          {
            label: 'Selected',
            selected: true
          },
          {
            label: 'Nested category',
            children: [
              {
                label: 'Nested item',
              }
            ]
          }
        ]
      },
      { label: 'Another item' },
    ])
  }
```

* **showIcons**: _boolean_ -- Show icons. This applies to custom icons as well
* **kuanticTreeRoot**: _KuanticTreeRoot_ -- Object representing the tree view. You can expose it and modify externally. Tree will follow the changes.

[Find DEMOs here!](https://kuantic.epicmax.co/#/ui/tree-view)


