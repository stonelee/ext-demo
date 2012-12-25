Ext.define('Demo.view.Viewport', {
  extend: 'Ext.container.Viewport',
  layout: 'fit',
  requires: ['Demo.view.Main'],

  initComponent: function() {
    this.items = {
      layout: 'border',
      border: 0,
      items: [{
        xtype: 'main',
        region: 'center'
      }]
    };

    this.callParent();
  }
});
