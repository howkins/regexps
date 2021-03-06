regex = window.regex || {};
regex = function () {
  valid = function(type, subject, range){
    if(typeof(range) == undefined){
      var range = '';
    }
    var re;
    var pattern;
    var splitArray;
    switch(type){
      case 'integer': pattern = /^\d+$/;break;
      case 'float': pattern = /^[-+]?[0-9]*\.[0-9]+([eE][-+]?[0-9]+)?$/;break;
      case 'email': pattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;break;
      case 'date': pattern = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;break;
      case 'range':
        splitArray = range.split("-");
        if(splitArray.length == 2){
          var rangeFrom = parseInt(splitArray[0]);
          var rangeTo = parseInt(splitArray[1]);
          var x = parseInt(subject);

          if (x >= rangeFrom && x <= rangeTo) {
            return true;
          }else{
            return false;
          }
        }
        break;
      case 'dayofweek':
        pattern = /^(sun|sunday|mon|monday|tue|tuesday|wed|wednesday|thu|thursday|fri|friday|sat|saturday)$/gi
        break;
      default: re = false;
    }
    if(typeof(pattern) == 'object' || re != false){
      re = pattern.exec(subject);
      if(re != null){
        re = true;
      }else{
        re = false;
      }
    }else {
      re = false;
    }
    return re
  };

  return {
    "valid" :  valid,
  }
}();
