function MainController() {

  var card = new Card();
  var controller_education = new Education_controller(card.getValue("education_model") || [[],[]]);
  var controller_family = new Family_controller(card.getValue("family_model") || []);
  var previous_tab = 1;
  var self_controller = this;

  this.init = function () {
    controller_education.init();
    controller_family.init();





    self_controller.hash = {"inputs":{"1":[last_name, first_name, patronymic, day_birth, month_birth,
                                      year_birth, citizen, INN, sex, pasport_series, pasport_number, pasport_issued, date],
                                      "2":[education],
                                      "4":[last_job, job_degree, leave, pension, family],
                                      "5":[partmen, pasport_partmen] },
                          "checkboxes":{ "1":[army],
                                         "3":[aspirant, aduktur, doctor] }/*,

                          "models":{ "2":{ "model":"education_model", "set":1  },
                                     "3":{ "model":"post_education_model", "set":2 },
                                     "4":{ "model":"family_model", "set":controller_family.getFamilyModel }
                          }   */
    }
  }


  this.saveTabDataToCard = function (current_tab) {

    //	var hash = $.parseJSON(input_hash.value);
    var hash = self_controller.hash;
    for (controls in hash) {
      for (element in hash[controls][previous_tab]) {
        switch (controls) {
          case "inputs" :
            console.log(hash[controls][previous_tab][element].id,
              hash[controls][previous_tab][element].value);
            card.setValue(hash[controls][previous_tab][element].id,
              hash[controls][previous_tab][element].value);
            break;
          case "checkboxes" :
            console.log(hash[controls][previous_tab][element].id,
              hash[controls][previous_tab][element].checked);
            card.setValue(hash[controls][previous_tab][element].id,
              hash[controls][previous_tab][element].checked);
            break;
/*          case "models" :
            console.log(hash[controls][previous_tab]["model"],
              hash[controls][previous_tab]["set"]());
            break;   */
        }

      }
    }

    previous_tab = current_tab;
  }


 this.dataModelToCard = function (current_tab) {
   var hash = self_controller.hash;
   for (controls in hash) {
     for (element in hash[controls][current_tab]) {
       switch (controls) {
         case "inputs" :
           curr = card.getValue(hash[controls][current_tab][element].id);
           if (curr !=undefined) {
            hash[controls][current_tab][element].value = curr;
            console.log("get"  + curr);
           }
           break;
         case "checkboxes" :
           curr = card.getValue(hash[controls][current_tab][element].id);
           if (curr !=undefined)   {
             hash[controls][current_tab][element].checked = curr;
             console.log( "get" + curr);
           }
           break;
/*         case "models" :
           console.log(hash[controls][entering_tab]["model"],
             hash[controls][entering_tab]["set"]());
           break;      */
       }

     }
 }
 }


  this.render_model = function () {
    var inputs_key = ["r_last_name", "r_first_name", "r_patronymic", "day_birth", "month_birth", "r_year_birth",
      "citizen", "r_INN", "r_sex", "r_pasport_series", "r_pasport_number", "pasport_issued", "date",
      "education", "last_job", "job_degree", "leave", "pension", "family", "partmen", "pasport_partmen"];
    var inputs_ch = [army, aspirant, aduktur, doctor];
    var inputs_ch_key = ["army", "aspirant", "aduktur", "doctor"];
    var inputs = [last_name, first_name, patronymic, day_birth, month_birth, year_birth,
      citizen, INN, sex, pasport_series, pasport_number, pasport_issued, date,
      education, last_job, job_degree, leave, pension, family, partmen, pasport_partmen];


    var curr;
    var controller_education = new Controller_education(card.getValue("education_model") || [
      [],
      []
    ]);
    var controller_family = new Controller_family(card.getValue("family_model") || []);
    controller_education.render_education();
    controller_education.render_post_education();
    controller_family.render_family();

    for (var i = 0; i < inputs.length; i++) {
      curr = card.getValue(inputs_key[i]);
      if (curr !== undefined) {
        inputs[i].value = curr;
      }
    }

    for (var i = 0; i < inputs_ch.length; i++) {
      curr = card.getValue(inputs_ch_key[i]);
      inputs_ch[i].checked = curr;
    }

  }


  this.render_preview = function () {
    var inputs_ch_key = ["army", "aspirant", "aduktur", "doctor"];
    var inputs_key = ["r_last_name", "r_first_name", "r_patronymic", "day_birth", "month_birth", "r_year_birth",
      "citizen", "r_pasport_series", "r_pasport_number", "pasport_issued", "date",
      "education", "last_job", "job_degree", "leave", "pension", "family", "partmen", "pasport_partmen"];
    var inputs_ch = [army, aspirant, aduktur, doctor];
    var inputs = [p_last_name, p_first_name, p_patronymic, p_day_birth, p_month_birth, p_year_birth,
      p_citizen, p_pasport_series, p_pasport_number, p_pasport_issued, p_date,
      p_education, p_last_job, p_job_degree, p_leave, p_pension, p_family,
      p_partmen, p_pasport_partmen];

    var controller_education = new Education_controller(card.getValue("education_model") || [
      [],
      []
    ]);
    var controller_family = new Family_controller(card.getValue("family_model") || []);
    controller_education.render_education();
    controller_education.render_post_education();
    controller_family.render_family();

    for (var i = 0; i < inputs.length; i++) {
      curr = card.getValue(inputs_key[i]);
      if (curr !== undefined) {
        inputs[i].innerHTML = curr;
      }
    }


    for (var i = 0; i < inputs_ch.length; i++) {
      curr = card.getValue(inputs_ch_key[i]);
      inputs_ch[i].checked = curr;
    }


  }

}

