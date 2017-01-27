function Microux() {
  var vmMicro = this;
  var body = document.querySelector('header');
  var connectionMessage = document.createElement('p');
  this.uiconnection = function(){
    this.isconnection = navigator.onLine;
    //connect
    if(this.isconnection){
      connectionMessage.classList = 'online_status--on online_status--again';
      connectionMessage.innerHTML = "You've connected to the internet again.";
      body.appendChild(connectionMessage);
    }else{
      //unconnection
      connectionMessage.classList = 'online_status--off';
      connectionMessage.innerHTML = "It seems like you lost internet connection.";
      body.appendChild(connectionMessage);
    }
  };
  setInterval(function () {vmMicro.uiconnection();}, 10000);
}
var microux = new Microux();
