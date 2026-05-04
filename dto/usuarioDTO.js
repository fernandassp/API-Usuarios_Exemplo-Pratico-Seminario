function criarUsuarioDto(body) {
    const { nome, idade, telefone } = body;

    const erros = [];

    if(!idadeValida(idade)) erros.push("Idade deve um número maior ou igual a zero");
    if(!nomeValido(nome)) erros.push("Nome é obrigatório");
    if(!telefoneValido(telefone)) erros.push("Telefone é obrigatório");

    if (erros.length > 0) {
        return { 
            valido: false, erros 
        };
    }

    return {
        valido: true,
        dados: { nome , idade, telefone }
    };
}

function atualizarUsuarioDto(body) {
    const { nome, idade, telefone } = body;
    const dados = {};
    const erros = [];

    if (nome !== undefined){
        if(nomeValido(nome)) dados.nome  = nome;
        else erros.push("Nome informado incorretamente");
    }
    if (idade !== undefined){
        if(idadeValida(idade)) dados.idade = idade;
        else erros.push("Idade informada incorretamente - deve ser um número maior ou igual a 0");
    }
    if (telefone !== undefined){
        if(telefoneValido(telefone)) dados.telefone = telefone;
        else erros.push("Telefone informado incorretamente");
    }

    if (Object.keys(dados).length === 0 && erros.length === 0) {
        erros.push("Nenhum campo válido informado")
        return { valido: false, erros };
    }

    if(erros.length > 0) return { valido: false, erros }

    return { valido: true, dados };

}

function nomeValido(nome){
    if (!nome)
        return false;
    return true;
}
function idadeValida(idade){
    if(typeof idade !== 'number' || idade < 0 || idade === null)
        return false;
    return true;
}
function telefoneValido(telefone){
    if(!telefone)
        return false;
    return true;
}

module.exports = { criarUsuarioDto, atualizarUsuarioDto };