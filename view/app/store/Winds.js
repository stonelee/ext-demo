Ext.define('Demo.store.Winds', {
  extend: 'Ext.data.Store',
  model: 'Demo.model.Wind',
  proxy: {
    type: 'ajax',
    url: 'wind.json',
    reader: {
      type: 'json',
      root: 'data'
    }
  }
});
