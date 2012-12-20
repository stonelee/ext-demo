Ext.onReady(function() {
  // 闪烁
  function blink(btn) {
    blink.self = btn;
  }
  blink.start = function() {
    blink.stop();
    Ext.TaskManager.start(blink.task);
  };
  blink.stop = function() {
    if (blink.running) {
      Ext.TaskManager.stop(blink.task);
    }
    blink.running = false;

    blink.flag = true;
    blink.self.setIconCls('icon_application_view_tile');
  };
  blink.task = {
    run: function() {
      blink.self.setIconCls(blink.flag ? 'icon_clock_red' : 'icon_clock');
      blink.flag = !blink.flag;
      blink.running = true;
    },
    interval: 300
  };

  // 声音
  function voice() {}
  voice.start = function(isLoop) {
    voice.stop();

    var file = 'static-resources/mail';
    var loop;
    if (Ext.isIE) {
      loop = isLoop === true ? 'infinite' : 1;
      // Ext.DomHelper方式创建无效
      var sound = document.createElement('bgsound');
      sound.setAttribute('src', file + '.wav');
      sound.setAttribute('loop', loop);
      sound.setAttribute('autostart', true);
      document.body.appendChild(sound);
      voice.self = sound;
    } else {
      var opts = {
        tag: 'audio',
        children: [{
          tag: 'source',
          src: file + '.ogg',
          type: 'audio/ogg'
        }, {
          tag: 'source',
          src: file + '.mp3',
          type: 'audio/mp3'
        }]
      };
      if (isLoop === true) {
        opts.loop = 'loop';
      }

      voice.self = Ext.DomHelper.append(document.body, opts);
      voice.self.play();
    }
  };
  voice.stop = function() {
    Ext.removeNode(voice.self);
  };
  voice.self = null;

  Ext.create('Ext.Button', {
    id: 'btn',
    text: 'stop',
    icon: 'application_view_tile.png',
    renderTo: Ext.getBody(),
    handler: function() {
      blink.stop();
      voice.stop();
    }
  });

  //使用
  var btn = Ext.getCmp('btn');
  blink(btn);
  voice();

  Ext.get('start').on('click', function() {
    blink.start();
    voice.start();
  });
  Ext.get('loop').on('click', function() {
    blink.start(true);
    voice.start(true);
  });

});
