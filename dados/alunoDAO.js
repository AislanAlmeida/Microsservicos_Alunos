const fs = require('fs');

class AlunoDAO{
    static salvarAluno(aluno){
        // let data = [];
        // data.push(atividade);
        // JSON.stringify(data);

        const previous = this.obterAlunos();
        if(previous){
            previous.push(aluno);
            let dadosAtualizados = JSON.stringify(previous);
            try {
                fs.writeFileSync('./dados/alunos.json',dadosAtualizados,'utf8');
                console.log('Aluno salvo com sucesso');
                return aluno;
            } catch (error) {
                console.error(`Erro ao escrever o arquivo: ${error}`);
                return null;
            }

        }
        else{
            let data = [];
            data.push(aluno);
            data = JSON.stringify(data);

            try {
                fs.writeFileSync('./dados/alunos.json',data,'utf8');
                console.log('Aluno salvo com sucesso');
                return aluno;
            } catch (error) {
                console.error(`Erro ao escrever o arquivo: ${error}`);
                return null;
            }
        }
    }

    static obterAlunos(){
        try {
            const data = fs.readFileSync('./dados/alunos.json', 'utf8');
            const atividades = JSON.parse(data);
            return atividades;
        } catch (error) {
            console.log(`Erro ao ler o arquivo: ${error}`);
            return null;
        }
    }
}
module.exports = AlunoDAO;