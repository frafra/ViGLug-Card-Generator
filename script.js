$(document).ready(function(){
  logo = new Image();
  logo.src = 'viglogo.png';
  c = document.getElementById("mycanvas");
  ctx = c.getContext("2d");

  c.width=600;
  c.height=400;
  

  name="nickname";
  ind="identification";
  text="descriviti";
  email="miaemail@email.com";
  irc="ircnickname";
  logo.onload=bdraw();
  
  writeText();
  update();
  $('input').keyup(function() {
    upd=$(this).attr('name');
    switch(upd){
      case 'nickname': name=$(this).val(); break;
      case 'identification': ind=$(this).val(); break;
      case 'irc': irc=$(this).val(); break;
      case 'email': email=$(this).val(); break;
    }
    update();
  });

   $('textarea').keyup(function() {
    text=$(this).val();
    update();
   });
});

function update(){
  c.height=c.height;
  ctx.font = '20pt Calibri';
  ctx.fillStyle = '#333';
  ctx.fillText(name, 350, 50);
  
  ctx.font = '11pt Calibri';
  ctx.fillStyle = '#666';
  ctx.fillText(ind, 355, 70);
  
  
  ctx.font = '17pt Calibri';
  ctx.fillStyle = '#333';
  writeText();
  //ctx.fillText(text, 300, 100);

  ctx.font = '14pt Calibri';
  ctx.fillStyle = '#444';
  ctx.fillText(email, 300, 290);
  ctx.fillText("IRC: "+irc, 300, 260);
  bdraw();
  
  var dataURL = c.toDataURL();
  document.getElementById('mycanvas').src = dataURL;
}

function bdraw(){
  ctx.beginPath();
  ctx.rect(0, 350, c.width, 50);
  ctx.fillStyle = '#f89406';
  ctx.fill();
  
  ctx.font = '20pt Calibri';
  ctx.fillStyle = 'white';
  ctx.fillText('#weareviglug', 440, 385);
  
  ctx.drawImage(logo,60,60,150,220);
  
}

/*300-500  100-250*/
function writeText() {
  var words = text.split(' ');
  var line = '';
  var x=300;
  var y=120;

  for(var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + ' ';
    var metrics = ctx.measureText(testLine);
    var testWidth = metrics.width;
    console.log(testWidth);
    if (testWidth > 250 && n > 0) {
      ctx.fillText(line, x, y);
      line = words[n] + ' ';
      y += 25;
    }
    else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
}
