setInterval(()=>{
    document.getElementById("abcd").innerHTML="projects reviewed by experts"
    
},1000)

setTimeout(()=>{
    document.getElementById("bcd").innerHTML="credible endorsements given by teammates"
},2000)

setTimeout(()=>{
    document.getElementById("fgh").innerHTML="rack record of high-quality community participation"
    
},3000)

setTimeout(()=>{
    
    document.getElementById("ddd").innerHTML="better problem solving"
},4000)

setTimeout(()=>{
    var text=prompt("Did you like my Profile")
    if(text==null||text==""){
        var text1=prompt("Thank You for your response and tell me some tips to improve myself")
        if(text1==null||text1==""){
            document.getElementsByClassName("aa")[0].innerHTML="Thank you for cooperation "
            

        }
        else{
            document.getElementsByClassName("aa")[0].innerHTML="click Submit button below to submit"
            function myfunc(){
                window.location.href="http://google.com"
            }
        }
    

    }else{
        document.getElementsByClassName("aa")[0].innerHTML="Thank you for your Response"
    }
},15000)








