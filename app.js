var  btn = document.querySelector('#btn-click');
var txt = document.querySelector('#txt-area');
var output = document.querySelector('#output');
// var serverUrl = "http://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" ;
var serverUrl = "https://api.funtranslations.com/translate/minion.json" ;
// var serverUrl = "https://api.funtranslations.com/translate/ferb-latin.json";


function isOnline() { 
  
    if (!navigator.onLine) { 
        document.getElementById("#output").innerText = "Online"; 
    } else { 
        document.getElementById("#output").innerText = "Offline"; 
    } 
}



    function url(textInput){
        return  serverUrl + "?" + "text=" + textInput

    }

    function errorHandler(error){
            return( "server Error" + error);
    }




   function process(){
   
    if(navigator.onLine){   
                            var textInput = txt.value 
                            console.log(textInput)
                    
                    fetch(url(textInput)).then(respone => respone.json()).then(
                            json => {
                                    var outputText =  json.contents.translated ; 
                                    output.innerText = outputText
                                    console.log(outputText);
                                }
                                )
                        .catch(errorHandler)  

                        }
                        else{
                           var  outputText = "Please!! Connect To Internet.. ,You are offline......";
                                output.innerText = outputText
                                output.style.color = 'green';
                        }
                        // console.log(outputText)
                       
                
                        }





    btn.addEventListener('click',process);
    




 

