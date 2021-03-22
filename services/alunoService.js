const alunoDAO = require('../dados/alunoDAO');
class AlunoService{
    static async obterAlunos(){
        let alunos = alunoDAO.obterAlunos();
        return alunos;
    }
    static async obterAlunoPorId(idAluno){
        let alunos = await this.obterAlunos();
        let alunoFiltrado = alunos.find(a => a.id == idAluno);
        return alunoFiltrado;
    }

    static async inserirAluno(nome){
        let aluno = {};
        aluno.id = Date.now();
        aluno.nome = nome;
        let alunoSalvo = alunoDAO.salvarAluno(aluno);
        return alunoSalvo;
    }
}
module.exports = AlunoService;