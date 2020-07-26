// In AWS Lamda we dont need a server !!

exports.handler = async (event) => {
    var  result=0;
    
    var intent = event.currentIntent.name;
     var numone = event.currentIntent.slots.numone;
     var numtwo = event.currentIntent.slots.numtwo;
     if(intent === "Add"){
         let numres= parseInt(numone) + parseInt(numtwo);
         result="The result is : " +numres+ ".";
     } else if(intent === "Multiply"){
         let numres = parseInt(numone) * parseInt(numtwo);
         result = "The result is : " +numres+".";
         
     } else if(intent === "HelpCalc"){
         result = "Welcome to the calculator chatbot. You can start typing the function ex- add, multiply followed by the number";
     }
 
     const response = {
         "sessionAttributes": {
         },
         "dialogAction" : { "type" : "Close",
             "fulfillmentState" : "Fulfilled",
             "message" : {
                 "contentType" : "PlainText",
                 "content" : result
             }
                     
         }
     };
     
     return response;
 };
 