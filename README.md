# resolveObjects
on à un tableau teste avec deux object, INPUT doit être remagné pour correspondre à l'OUPUT
const tests = [
  {
    input: {
      a: {
        b: {
          c: "z"
        }
      },
      "a.b.d": "y"
    },
    output: {
      a: {
        b: {
          c: "z",
          d: "y"
        }
      }
    }
  }
];

ce que l'on peut remarqué c'est que les clés 'a' des objets ont des similitudes et que la composition de la deuxieme clé de input correspond aux différent niveaux de la clé 'a' de l'output

une solution serait de regarder chaque clé avec un seule caractère
celui qui en a plus d'un on le split et on le rajoute dans un tableau puis on prends sa valeur et on le stock aussi temporairement
on boucle sur le tableau de la clé splité et tant que celui ci est rempli on enleve sa dernier valeur et on en crée un objet avec la valeur stockée temporairement puis on l'assigne dans une variable globale 
et on l'assique a une variable temporaire qui sert de retour
Sinon si la clé a un nombre de caractère inférieur ou égale à 1 on prends l'objet en entier et on l'assigne à la variable globale 
à chaque itération on fusionne les variables pour en retourner qu'un (variable globale finale)

visible ici:
https://codesandbox.io/s/14wlkrn09q
