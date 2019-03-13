positiveUncrossed = function() {
  var paper=new Raphael("positiveUncrossed", 800, 600);
  var backGround=paper.rect(0,0,800,600);
  backGround.attr({fill:"white"});
  var ball  = paper.circle(700,50,30);
  ball.attr({fill:"yellow"})

  var vehicle = paper.rect(200, 300, 50, 100);
  vehicle.attr({fill: "green"});
  vehicle.click(function(){
    vehicle.animate({x:100, y: 20, transform:"r-75"},1000);
  });

  backGround.click(function(){
    vehicle.remove()
    vehicle = paper.rect(200, 300, 50, 100);
    vehicle.attr({fill: "green"});
    vehicle.click(function(){
      vehicle.animate({x:100, y: 20, transform:"r-75"},1000);
    });
  })
};

positiveCrossed = function() {
  var paper=new Raphael("positiveCrossed", 800, 600);
  var backGround=paper.rect(0,0,800,600);
  backGround.attr({fill:"white"});
  var ball  = paper.circle(700,50,30);
  ball.attr({fill:"yellow"})

  var vehicle = paper.rect(200, 300, 50, 100);
  vehicle.attr({fill: "green"});
  vehicle.click(function(){
    vehicle.animate({x:640, y: 20, transform:"r75"},1000)
  });

  backGround.click(function(){
    vehicle.remove()
    vehicle = paper.rect(200, 300, 50, 100);
    vehicle.attr({fill: "green"});
    vehicle.click(function(){
      vehicle.animate({x:640, y: 20, transform:"r75"},1000)
    });
  });
}

negativeUncrossed = function() {
  var paper=new Raphael("negativeUncrossed", 800, 600);
  var backGround=paper.rect(0,0,800,600);
  backGround.attr({fill:"white"});
  var ball  = paper.circle(700,50,30);
  ball.attr({fill:"yellow"})

  var vehicle = paper.rect(200, 300, 50, 100);
  vehicle.attr({fill: "green"});
  vehicle.click(function(){
    vehicle.animate({x:580, y: 15, transform:"r75"},1000)
  });

  backGround.click(function(){
    vehicle.remove()
    vehicle = paper.rect(200, 300, 50, 100);
    vehicle.attr({fill: "green"});
    vehicle.click(function(){
      vehicle.animate({x:580, y: 15, transform:"r75"},1000)
    });
  });
}

negativeCrossed = function() {
  var paper=new Raphael("negativeCrossed", 800, 600);
  var backGround=paper.rect(0,0,800,600);
  backGround.attr({fill:"white"});
  var ball  = paper.circle(700,50,30);
  ball.attr({fill:"yellow"})

  var vehicle = paper.rect(200, 300, 50, 100);
  vehicle.attr({fill: "green"});
  vehicle.click(function(){
    vehicle.animate({x:580, y: 15, transform:"r-75"},1000)
  });

  var ball2  = paper.circle(300,50,30);
  ball2.attr({fill:"yellow"});
  ball2.hide();

  ball.click(function(){
    ball2.show();
    vehicle.animate({x:400, y: 15, transform:"r75"},1000)
  });

  backGround.click(function(){
    vehicle.remove()
    ball2.hide();
    vehicle = paper.rect(200, 300, 50, 100);
    vehicle.attr({fill: "green"});
    vehicle.click(function(){
      vehicle.animate({x:580, y: 15, transform:"r-75"},1000)
    });
  });
}
