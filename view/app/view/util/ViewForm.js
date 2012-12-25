/*
 *@author: stonelee
 *@email: istonelee@gmail.com
 *@blog: http://stonelee.info
 *@description: ViewForm

 加边框,美化后的form控件,作为查看界面使用.

调用方法：
{
  xtype:'util_view_form',
}

参数:
columnNum:列数
labelWidth:label宽度

 */

Ext.define('Demo.view.util.ViewForm', {
  extend: 'Ext.form.Panel',
  alias: 'widget.util_view_form',
  border: 0,
  layout: {
    type: 'table',
    tableAttrs: {
      style: 'width: 98%; border-collapse:collapse; border-spacing:0; border:solid #ccc; border-width:1px 0 0 1px;'
    },
    tdAttrs: {
      style: 'border:solid #ccc; border-width:0 1px 1px 0; padding:2px;'
    }
  },
  autoScroll: true,
  bodyPadding: 5,
  defaults: {
    xtype: 'displayfield',
    style: 'margin-bottom:0;',
    labelSeparator: ''
  },
  fieldDefaults: {
    cls: 'view_wrap',
    fieldBodyCls: 'view_field',
    labelClsExtra: 'view_field_label'
  },
  initComponent: function() {
    this.layout.columns = this.initialConfig.columnNum || 2;
    this.fieldDefaults.labelWidth = this.initialConfig.labelWidth || 140;
    if (this.initialConfig.fieldWidth) {
      this.fieldDefaults.width = this.initialConfig.fieldWidth;
    }
    this.callParent();
  }
});
