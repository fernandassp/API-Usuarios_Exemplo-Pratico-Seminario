const { criarUsuarioDto, atualizarUsuarioDto } = require('../dto/usuarioDTO.js');
const usuariosService = require('../services/usuario-service.js');

function listar(req, res) {
    const usuarios = usuariosService.listarUsuarios();
    res.json(usuarios);
}

function criar(req, res) {
    const { valido, erros, dados } = criarUsuarioDto(req.body);

    if (!valido) {
        return res.status(400).json({erros});
    }
    const novoUsuario = usuariosService.criarUsuario(dados);
    res.status(201).json(novoUsuario);
}

function atualizar(req, res){
    const { valido, erros, dados } = atualizarUsuarioDto(req.body);

    if (!valido){
        return res.status(400).json({ erros });
    }

    const id = Number(req.params.id);
    const atualizado = usuariosService.atualizarUsuario(id, dados);
    if (!atualizado){
        return res.status(404).json({ erro: `Usuário com id ${id} não existe` });
    }
    res.status(200).json(atualizado);
}

function remover(req, res){
    const id = Number(req.params.id);
    const removido = usuariosService.removerUsuario(id);
    if (!removido) return res.status(404).json({ erro: `Usuário de id ${id} não existe` });

    res.status(200).json({msg: "Usuário removido com sucesso"});
}

module.exports = {
    listar,
    criar,
    atualizar,
    remover
};