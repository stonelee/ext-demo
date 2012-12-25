Ext.define('Demo.view.Main', {
  extend: 'Demo.view.util.ViewForm',
  alias: 'widget.main',
  title: '通风系统',
  initComponent: function() {
    this.initialConfig.fieldWidth = 400;
    this.items = [{
      xtype: 'box',
      html: '<span class="x-panel-header-text x-panel-header-text-default">矿井通风</span>',
      colspan: 2
    }, {
      fieldLabel: '通风方式',
      name: 'ventilatingMethod',
      colspan: 2
    }, {
      fieldLabel: '主扇型号',
      name: 'mainFanType'
    }, {
      fieldLabel: '备扇型号',
      name: 'reserveFanType'
    }, {
      fieldLabel: '矿井总入风量',
      name: 'inWindVolume'
    }, {
      fieldLabel: '矿井总排风量',
      name: 'outWindVolume'
    }, {
      xtype: 'gridpanel',
      colspan: 2,
      title: '按年份显示瓦斯涌出量',
      itemId: 'gasgrade',
      height: 200,
      width: '100%',
      columns: [{
        header: '年份',
        dataIndex: 'gasLevel',
        flex: 0.6
      }, {
        header: '绝对涌出量',
        dataIndex: 'absoluteVolume',
        flex: 1
      }, {
        header: '相对涌出量',
        dataIndex: 'relativeVolume',
        flex: 1
      }]
    }];

    this.callParent();
  }

});
