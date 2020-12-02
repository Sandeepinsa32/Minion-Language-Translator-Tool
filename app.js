var  btn = document.querySelector('#btn-click');
var txt = document.querySelector('#txt-area');
var output = document.querySelector('#output');
// var serverUrl = "http://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" ;
var serverUrl = "https://api.funtranslations.com/translate/minion.json" ;

https://api.funtranslations.com/translate/minion.json

function url(textInput){
    return  serverUrl + "?" + "text=" + textInput

}

function errorHandler(error){
        return( "server Error" + error);
}



   function process(){
        var textInput = txt.value ;
        console.log(textInput);
        // console.log(url(textInput))
        fetch(url(textInput))
        .then(respone => respone.json())
        .then(
            json => 
            output.innerText = (json.contents.translated)
            )
        .catch(errorHandler)
        
    }

btn.addEventListener('click',process);
    


// .then(json => console.log(json))

 

