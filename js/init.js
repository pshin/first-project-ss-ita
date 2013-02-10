var mainController = new MainController();
init = function() {
  
  mainController.init();
  menu_add();
  
  //mainController.render_model(); FOR DEMO EDIT MODEL - start rendering exist model


  zagal_vidom.addEventListener("click", function(){ mainController.saveTabDataToCard(1) ;} , false);
  zagal_vidom.addEventListener("click", function(){ mainController.dataModelToCard(1);} , false);
  edu.addEventListener("click", function(){ mainController.saveTabDataToCard(2) ;}, false);
  edu.addEventListener("click", function(){ mainController.dataModelToCard(2);}, false);
  post_edu.addEventListener("click", function(){ mainController.saveTabDataToCard(3) ;}, false);
  post_edu.addEventListener("click", function(){ mainController.dataModelToCard(3);}, false);
	work_fam.addEventListener("click", function(){ mainController.saveTabDataToCard(4) ;}, false);
  work_fam.addEventListener("click", function(){ mainController.dataModelToCard(4);}, false);
	place.addEventListener("click", function(){ mainController.saveTabDataToCard(5) ;}, false);
  place.addEventListener("click", function(){ mainController.dataModelToCard(5);}, false);
  preview.addEventListener("click", mainController.render_preview, false);
  edit.addEventListener("click", mainController.render_model, false);
}



window.onload = function() {
	init();
}

