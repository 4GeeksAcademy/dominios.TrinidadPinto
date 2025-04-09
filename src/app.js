let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

let extensions = ['.com', '.net', '.us', '.io', '.co', '.es', '.tv'];

function generarNombres(pronoun, adj, noun, extensions) {
  let nombresDominio = [];

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let e = 0; e < extensions.length; e++) {
          
          let dominio = pronoun[p] + adj[a] + noun[n] + extensions[e];
          nombresDominio.push(dominio);

          if (extensions[e] === '.es') {
            
            if (noun[n] === 'racoon') {
              nombresDominio.push(pronoun[p] + adj[a] + 'racoo' + extensions[e]);
            }
          }
        }
      }
    }
  }
  return nombresDominio
}
let dominios = generarNombres(pronoun, adj, noun, extensions);
console.log(dominios);