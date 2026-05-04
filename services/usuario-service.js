let usuarios = [];
let proxId = 1;

function listarUsuarios() {
    return usuarios;
}

function criarUsuario(dadosUsuario) {
    const novoUsuario = {
        id: proxId++,
        ...dadosUsuario
    };

    usuarios.push(novoUsuario);
    return novoUsuario;
}

function atualizarUsuario(id, dadosUsuario){
    const index = usuarios.findIndex(u => u.id === Number(id));

    if (index === -1) return null;

    usuarios[index] = { ...usuarios[index], ...dadosUsuario };
    return usuarios[index];
}

function removerUsuario(id){
    const index = usuarios.findIndex(u => u.id === Number(id));

    if(index === -1) return null;

    const removido = usuarios[index];
    usuarios.splice(index, 1);
    return removido;
}

module.exports = {
    listarUsuarios,
    criarUsuario,
    atualizarUsuario,
    removerUsuario
};
