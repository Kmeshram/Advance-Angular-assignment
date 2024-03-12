import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }


   lettersValidate(key:any) {
    var keycode = (key.which) ? key.which : key.keyCode;

    if ((keycode > 64 && keycode < 91) || (keycode > 96 && keycode < 123))  
    {     
           return true;    
    }
    else
    {
        return false;
    }
         
}

 ValidateNumber(key:any) {
  var keycode = (key.which) ? key.which : key.keyCode;

  if ((keycode >= 48 && keycode <= 57) )  
  {     
         return true;    
  }
  else
  {
      return false;
  }
}
}
