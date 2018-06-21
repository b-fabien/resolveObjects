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

visible ici:
https://codesandbox.io/s/14wlkrn09q
