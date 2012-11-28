Ext.onReady(function () {

  blink.flag = true;
  blink.task = {
    run: function() {
      blink.flag ? blink.self.setIcon('clock_red.png'): blink.self.setIcon('clock.png');
      blink.flag = !blink.flag;
    },
    interval: 300
  };
  function blink(btn){
    blink.self = btn;
    Ext.TaskManager.start(blink.task);
  }
  blink.stop = function(){
    blink.self.setIcon('application_view_tile.png');
    blink.flag = true;

    Ext.TaskManager.stop(blink.task);
  };

  voice.self = null;
  function voice(){
    var file = 'mail.wav';
    if (Ext.isIE) {
      //Ext.DomHelper方式创建无效
      var sound = document.createElement('bgsound');
      sound.setAttribute('src', file);
      sound.setAttribute('loop', 1);
      sound.setAttribute('autostart', true);
      document.body.appendChild(sound);
      voice.self = sound;
    } else {
      voice.self = Ext.DomHelper.append(document.body, {tag: 'embed', src: file, hidden: true, autostart: true, loop: false});
    }
  }
  voice.stop = function(){
    Ext.removeNode(voice.self);
  };

  Ext.get('newMessage').on('click', function() {
    var btn = Ext.getCmp('btn');
    blink(btn);
    voice();
  });

  Ext.create('Ext.Button', {
    id: 'btn',
    text: 'Click me',
    icon: 'application_view_tile.png',
    renderTo: Ext.getBody(),
    handler: function() {
      blink.stop();
      voice.stop();
    }
  });
});
