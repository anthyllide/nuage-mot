function nuage_mots(){
	
	var diff_mot = {}; //WARNING : créer un array vide
	var articles = document.getElementsByName("Article"),
    article = 'Noël sapin guirlande boule Noël étoile filante sapin cloche Père-Noël Noël guirlande Père-Noël filante Père-Noël filante guirlande Noël Noël Père-Noël',
    cloudDiv = document.getElementById('cloud'); 
    
    var mots = article.split(" ");
    
    //Création de la div tags
    var cloudDiv  = document.createElement('div');
        
    cloudDiv.id = 'cloud';
        
    document.getElementById('tags').appendChild(cloudDiv);
    
    
    function diff_mots(mots){
    
        for(var i = 0; i<mots.length; i++){
        
        
            console.log(typeof(diff_mot[mots[i]]));
        
            if(typeof(diff_mot[mots[i]]) === 'undefined'){
            
                diff_mot[mots[i]] = 1;
            
             } else if (typeof(diff_mot[mots[i]]) !== 'undefined') {
            
                 diff_mot[mots[i]] += 1;
                
             }
        
          
        }
        
       console.log(diff_mot);

        
        return diff_mot;
    
    }
    
    function createParagraph (mot){
        
        
        var newWord = document.createElement ('span');
        
        newWord.setAttribute('class', '');
        
        var word = document.createTextNode(mot);
        
        newWord.appendChild(word);
        
        cloudDiv.appendChild(newWord);        
       
        return newWord;
    }

    
    
    // création des "p" avec application des classes
    

    var diff_mot = diff_mots(mots);
    
    console.log(diff_mot);
    
    for(var id in diff_mot ){
            
       var newWord =  createParagraph(id); 
    
            if (diff_mot[id]<= 5 && diff_mot[id] > 3){
            
                newWord.className = 'font1';
            
            } else if (diff_mot[id] == 3){
            
            newWord.className = 'font2';
            
            } else if (diff_mot[id] <= 2 ){
                
            newWord.className = 'font3';
            
              }
      
               
    }   
    
}
    
            
            
                
                
                
                
			     
                        
                      

                    
                     				
            
          
            
            



