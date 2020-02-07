 
            function calculateAvgFlaot(){
                var minFloat = document.getElementsByName("minFloatExt")[0].value;
                var maxFloat = document.getElementsByName("maxFloatExt")[0].value;
                var outcomeFloat = getExteriorFloat(document.getElementById("exteriorSelect").value);
                var avgFloat = (Number(outcomeFloat) - Number(minFloat))/(Number(maxFloat) - Number(minFloat));
                document.getElementById("avgFloatNeeded").innerHTML = "Avg Float Needed: <" + avgFloat + " " + getExteriorName(avgFloat);
            }

            function getExteriorFloat(exteriorName){
                var exteriorFloat = "Was unable to determine ¯\\_(ツ)_/¯";
                if(exteriorName =="Factory New"){
                    exteriorFloat = 0.07;
                }else if(exteriorName =="Minimal Ware"){
                    exteriorFloat = 0.15;
                }else if(exteriorName =="Field Tested"){
                    exteriorFloat = 0.15;
                }else if(exteriorName =="Well-Worn"){
                    exteriorFloat = 0.38;
                }else if(exteriorName =="Battle-Scarred"){
                    exteriorFloat = 0.45;
                }
                return exteriorFloat;
            }
            function getAvgFloat() {
                var floats = document.forms["floats"];
                var text = 0;
                for (let i = 0; i < floats.length-1; i++) {
                    indFl = parseFloat(floats.elements[i].value);
                    text += indFl;
                }
                var avgFloat = text / 10;
                var exteriorName = getExteriorName(avgFloat);
                document.getElementById("avgFloat").innerHTML ="Avg Float: " + avgFloat + " " + exteriorName;
                return avgFloat;
            }

            function calculateOutcome(){
                var minFloat = document.getElementsByName("minFloat")[0].value;
                var maxFloat = document.getElementsByName("maxFloat")[0].value;
                var avgFloat = getAvgFloat();
                var outcomeFloat = outcomeCalculation(minFloat,maxFloat,avgFloat);
                var exteriorName = getExteriorName(outcomeFloat);
                document.getElementById("outcomeFloat").innerHTML ="Float of the Outcome: " + outcomeFloat + " " + exteriorName;
            }

            function outcomeCalculation(minFloat,maxFloat,avgFloat){
                var outcomeFloat = (Number(maxFloat) - Number(minFloat)) * Number(avgFloat) + Number(minFloat);
                return outcomeFloat;
            }

            function getExteriorName(floatValue){
                var exteriorName = "Was unable to determine ¯\\_(ツ)_/¯";
                if(floatValue < 0.07){
                    exteriorName = "Factory New";
                }else if(floatValue >= 0.07 && floatValue < 0.15){
                    exteriorName = "Minimal Ware";
                }else if(floatValue >= 0.15 && floatValue < 0.38){
                    exteriorName = "Field Tested";
                }else if(floatValue >= 0.38 && floatValue < 0.45){
                    exteriorName = "Well-Worn";
                }else if(floatValue >= 0.45){
                    exteriorName = "Battle-Scarred";
                }
                return exteriorName;
            }