Ext.Loader.setConfig({
  enabled: true
});

Ext.application({
  name: 'Demo',
  autoCreateViewport: true,
  controllers: ['Wind']
});
