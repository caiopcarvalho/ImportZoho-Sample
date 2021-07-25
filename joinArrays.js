arrayItems1 = [{"id":123,"name":"Leite","posicao":1},{"id":456,"name":"Manteiga","posicao":2},{"id":789,"name":"Rosca","posicao":4}];

arrayItems2 = [{"id":123,"name":"Leite","posicao":1},{"id":101,"name":"Queijo","posicao":3}];

// concatenar os dois arrays
// no arrays só pode ter objetos únicos
// ordenar o arrays com objetos únicos

arrayConcat = [...arrayItems1,...arrayItems2];

let result = [];

const mpItem = new Map();

for(const item of arrayConcat){
    if(!mpItem.has(item.id)){
        mpItem.set(item.id,true);
        result.push({
            id:item.id,
            name:item.name,
            posicao:item.posicao
        })
    }
}

result = result.sort((a,b)=>{
        return a.posicao - b.posicao
});

console.log(result)
