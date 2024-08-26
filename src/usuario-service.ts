import NotFountException from "./exceptions/not-fount-exception";
import UsuarioRepositorio from "./infra/usuarioRepositorio";
import { UsarioSchema } from "./infra/usuarioSchema";

class UsuarioService {
    private readonly usuarioRepositorio: UsuarioRepositorio;
    constructor(usuarioRepositorio: UsuarioRepositorio) {
        this.usuarioRepositorio = usuarioRepositorio;
    }

    buscarId(id: number): UsarioSchema {
        const usuario = this.usuarioRepositorio.buscaPorId(id);
        if (!usuario) {
            throw new NotFountException('Usuario não encontrado.');
        }
        return usuario;
    }
}

export default UsuarioService;