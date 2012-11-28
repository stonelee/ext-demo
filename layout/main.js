Ext.onReady(function () {
  var win,
  button = Ext.get('show-btn');
  var fn = {
    time: null,
    createModel : function () {
      return {
        xtype : 'fieldset',
        title : '开拓方式',
        items : [{
          xtype : 'container',
          layout : 'hbox',
          defaultType : 'textfield',
          defaults : {
            flex : 1
          },
          items: [{
            fieldLabel : '生产水平',
            name : 'productionLevel'
          }, {
            xtype : 'textfield',
            fieldLabel : '走向长度',
            name : 'strikeLength'
          }]
        }, {
          xtype : 'container',
          layout : 'hbox',
          defaultType : 'textfield',
          flex : 1,
          items : [{
              xtype : 'textfield',
              fieldLabel : '倾向长度',
              name : 'inclinationLength',
              width : 471
            }
          ]
        }, {
          xtype : 'fieldset',
          collapsible : true,
          title : '水平划分',
          itemId : 'levelDivisions',
          items : [{
            xtype : 'gridpanel',
            height : 200,
            columns : [{
              header : '水平编号',
              dataIndex : 'divisionNum',
              editor : {
                allowBlank : false
              },
              width : 200
            }, {
              header : '水平标高',
              dataIndex : 'level',
              editor : {
                allowBlank : false
              },
              width : 200
            }],
            tbar : [{
              text : '添加',
              action : 'add'
            }, {
              text : '删除',
              action : 'del',
              disabled : true
            }]
          }]
        }]
      };
    },
    createModel2: function () {
      return {
        xtype : 'fieldset',
        title : '开拓方式',
        layout: {
          type: 'table',
          columns: 2
        },
        defaultType : 'textfield',
        items: [{
          fieldLabel : '生产水平',
          name : 'productionLevel'
        }, {
          fieldLabel : '走向长度',
          name : 'strikeLength'
        }, {
          fieldLabel : '倾向长度',
          name : 'inclinationLength',
          colspan: 2
        }, {
          xtype : 'fieldset',
          colspan: 2,
          collapsible : true,
          collapsed: true,
          title : '水平划分',
          itemId : 'levelDivisions',
          items : [{
            xtype : 'gridpanel',
            height : 200,
            columns : [{
              header : '水平编号',
              dataIndex : 'divisionNum',
              editor : {
                allowBlank : false
              },
              width : 200
            }, {
              header : '水平标高',
              dataIndex : 'level',
              editor : {
                allowBlank : false
              },
              width : 200
            }],
            tbar : [{
              text : '添加',
              action : 'add'
            }, {
              text : '删除',
              action : 'del',
              disabled : true
            }]
          }]
        }]
      };
    }
  };

  button.on('click', function () {
    win = Ext.create('widget.window', {
      title: 'Layout Window',
      width: 600,
      height: 350,
      items: [{
        xtype: 'tabpanel',
        items: [{
          title: 'Bogus Tab',
          html: 'Hello world 1'
        }, {
          title: 'Another Tab',
          autoScroll: true,
          height: 325,
          items: [
            fn.createModel(),
            fn.createModel(),
            fn.createModel(),
            fn.createModel(),
            fn.createModel(),
            fn.createModel(),
            fn.createModel(),
            fn.createModel(),
            fn.createModel(),
            fn.createModel()
          ],
          listeners : {
            'beforerender' : function (view, records) {
              fn.time = new Date();
              console.log('beforerender');
            },
            'show' : function (view, records) {
              console.log('model1', new Date() - fn.time);
              console.log('show');
            }
          }
        }, {
          title: 'Closable Tab',
          autoScroll: true,
          height: 350-50,
          items: [
            fn.createModel2(),
            fn.createModel2(),
            fn.createModel2(),
            fn.createModel2(),
            fn.createModel2(),
            fn.createModel2(),
            fn.createModel2(),
            fn.createModel2(),
            fn.createModel2(),
            fn.createModel2()
          ],
          listeners : {
            'beforerender' : function (view, records) {
              fn.time = new Date();
              console.log('beforerender');
            },
            'show' : function (view, records) {
              console.log('model2', new Date() - fn.time);
              console.log('aftershow');
            }
          }
        }]
      }]
    });
    win.show();
  });
});
