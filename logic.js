function getQueryVariable(variable, defaultValue)
{
   var query = window.location.search.substring(1);
   var vars = query.split("&");
   if (vars.length == 0) return defaultValue || false;
   for (var i=0;i<vars.length;i++) {
           var pair = vars[i].split("=");
           if(pair[0] == variable){return decodeURIComponent(pair[1]);}
   }
   return(defaultValue);
}

var TARGET = 'MERRY CHRISTMAS!'
  var to=getQueryVariable('to','You');
    var from = getQueryVariable('from','Mark Bosco');

    var strings = [to,from]

function prepare(){
   for (var i = 0; i < strings.length; i++) {
       strings[i] = strings[i].slice(0,8)
       
}
return
}


function toHex(input){
    output=''
    for (var i = 0; i < input.length; i++) {
    output += input.charCodeAt(i).toString(16).replace(/^(.{2})(.+)/, '$2$1');
        //fix endians
    }
    return output.match(/.{1,2}/g);
}

function makeArrays(){
    
    strings.forEach(function(part, index, array) {
      array[index] = toHex(array[index]);
    });
}

function xor(){
    output = ''
    for (var i = 0; i < strings[1].length; i++) {
    char = String.fromCharCode(parseInt(strings[1][i],16) ^ parseInt(strings[0][i%strings[0].length],16))
    output += char
        
    }
    return output

}

var HOST = 'https://mbctfcard.pythonanywhere.com/'
function getFlag(){
    to=getQueryVariable('to','You');
    from = getQueryVariable('from','Mark Bosco');

    strings = [to,from]
    prepare()
    makeArrays()
    if (xor() == 'MERRY CHRISTMAS!'){
       x= fetch(HOST+`?from=${from}&to=${to}`)
  .then((response) =>response.text())
           .then((text) => {window.alert(text)});
           
    }
        
    
    else{

        window.alert("Sorry, there are no flags here for you.")
    }

    
}


