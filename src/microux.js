function Microux() {
  var vmMicro = this,
      header = document.querySelector('header'),
      Message = document.createElement('p');
  this.uiMessage = function(message, classUI, messageElement, messageContainer){
    messageContainer.classList = classUI;
    messageContainer.innerHTML = message;
    messageElement.appendChild(messageContainer);
  };
  this.uiMessageDisabled = function(messageElement){
    messageElement.classList = '';
    messageElement.innerHTML = '';
  };
  this.uiconnection = function(){
    this.isconnection = navigator.onLine;
    //connect
    if(this.isconnection && Message.classList == 'online_status--off'){
      this.uiMessage('You\'ve connected to the internet again.', 'online_status--on online_status--again', header, Message);
    }else if(!this.isconnection){
      //unconnection
      this.uiMessage('It seems like you lost internet connection.', 'online_status--off',header, Message);
    }
  };
  setInterval(function () {vmMicro.uiconnection();}, 2000);

  this.uiBattery = function(){
    var battery  = navigator.getBattery(),
        levelMessage = document.createElement('p');
    battery.then(function(battery){
      battery.addEventListener('chargingchange', function(){
        updateCharge();
      });

      function updateCharge(){
        if(battery.charging){
          vmMicro.uiMessageDisabled(Message);
        }
        updateLevel();
      }

      function updateLevel(){
        if((battery.level*100) < 20 && !battery.charging){
          vmMicro.uiMessage('It seems like your battery are low. :/', 'battery_status--off', header, Message);
        }
      }
    });
  }
  this.uiBattery();
}
var microux = new Microux();
