function criarAluno(n,n1,n2){
    return {
        nome:n,
        nota1:n1,
        nota2:n2,
        media:function calcAluno(){
            return (this.nota1 + this.nota2)/2
        }
    }

}

var turma = [
      criarAluno("luis",9,9),
      criarAluno("Ramon",8,8)
]

for(var i of turma){
    console.log(i.nome + " - " + 
                i.nota1 + " - " + 
                i.nota2 + " - " +
                i.media())

}