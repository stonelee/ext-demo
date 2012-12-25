Ext.define('Demo.controller.Wind', {
  extend: 'Ext.app.Controller',
  stores: ['Winds'],
  refs: [{
    selector: 'main',
    ref: 'mainView'
  }],

  init: function() {
    this.control({
      main: {
        render: this.onRender
      }
    });
  },

  onRender: function() {
    var self = this;
    var store = this.getWindsStore();
    store.load({
      callback: function(records) {
        var record = records[0];
        self.getMainView().loadRecord(record);
      }
    });
  }
});
