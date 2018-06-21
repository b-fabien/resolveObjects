import _ from "lodash";

const resolveObjects = input => {

  let objTemp = {},
    i,
    objSplitValue,
    objSplitLast;
    
  let objSplit = [];

  const inputFinal = {};

/* on boucle sur les clés de l'input */
  Object.keys(input).forEach(key => {

/* la clé qui a plus d'un caractere on le split dans un tableau puis on prends sa valeur de la clé et on le stock */
    if (key.length > 1) {

      objSplit = key.split(".");
      objSplitValue = input[key];

/* tant qu'il y a des entrés dans le tableau de split on lui enleve sa dernier entrés et on le rajoute avec sa valeur dns un objet temporaire puis celui ci est assigné à l'objet de retour */ 
      while (objSplit.length > 0) {

        objSplitLast = objSplit.pop();
        objSplitValue = { [objSplitLast]: objSplitValue };
        objTemp = objSplitValue;
      }

/*sinon on prend sa clé et sa valeur et on l'assigne directement à l'objet de retour*/
    } else {

      objTemp = { [key]: input[key] };
    }

/* a chaque itération on fusionne les objects de retour pour en retourner qu'un qui servira de comparaison avec l'object ouput*/
    _.merge(inputFinal, objTemp);

  });

/* on retourne l'objet fusionné*/
  return inputFinal;
};

module.exports = resolveObject;

