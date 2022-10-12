var lessons = ["math", "english","art","сhemistry", "biology"];
    function lessonsCheck (string,array){
        for(let i=0;i<array.length;i++){
            if(string===array[i]){
                return console.log(array[i],'найден');
            }
        }
    }
    console.log (lessons[3])