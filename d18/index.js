//criando a classe livro
class Livro {
    Titulo
    Autor
    Editora
    AnoDePublicacao
    Disponibilidade = true
    constructor(Titulo, Autor, Editora, AnoDePublicacao) {
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.AnoDePublicacao = anoDePublicacao
    }
}

//criando objetos da classe livro
let livros = []
livros.push(new Livro("livro1", "Marcos", "editora A", 2001)) 
livros.push(new Livro("livro2", "Marcos", "editora F", 1997)) 
livros.push(new Livro("livro3", "Carlos", "editora F", 2010)) 
livros.push(new Livro("livro4", "Carlos", "editora A", 2005))
livros.push(new Livro("livro5", "Fábio",  "editora C", 2020))

//criando classe biblioteca
class Biblioteca {
    Nome
    Endereço
    Telefone
    AcervoLivros = []
    constructor(Nome, Endereço, Telefone, Aacervo) {
        this.Nome = nome
        this.Endereço = endereço
        this.Telefone = telefone
        this.AcervoLivros = acervo
    }

    BuscarLivroPeloTitulo(titulo) {
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo === titulo) {
                console.log(livro)
            }
        })
    }

    EmprestarLivro(titulo) {
        let emprestado = false
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo == titulo) {
                if (livro.Disponibilidade == true) {
                    livro.Disponibilidade = false
                } 
            }
        })
        if (emprestado) {
            return true
        } else {
            return false
        }
    }

    DevolverLivro(titulo) {
         livros.forEach(livro => {
            if (livro.Titulo == titulo) {
                livro.Disponibilidade = true
                console.log("Livro devolvido")
            }
        })
    }


}

let biblioteca = new Biblioteca("Biblioteca", "123456", "Rua2")

biblioteca.BuscarLivroPeloTitulo("livro2")
biblioteca.EmprestarLivro("livro1")
biblioteca.DevolverLivro("livro1")