import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {InjectRepository} from '@nestjs/typeorm';
import {UsuarioEntity} from "./usuario-entity";
import {FindManyOptions} from "../../node_modules/typeorm/find-options/FindManyOptions";

@Injectable()
export class UsuarioService {
  usuarios: Usuario[] = [

  ];
  registroActual = 4;

  // Inyectar Dependencias
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly _usuarioRepository: Repository<UsuarioEntity>,
  ) {
  }


  buscar(parametros?: FindManyOptions<UsuarioEntity>)

    : Promise<UsuarioEntity[]> {
    return this._usuarioRepository.find(parametros);
  }

  async crear(nuevoUsuario: Usuario): Promise<UsuarioEntity> {


    // Instanciar una entidad -> .create()
    const usuarioEntity = this._usuarioRepository
      .create(nuevoUsuario);

    // Guardar una entidad en la BDD -> .save()

    console.log("va a guardar")

    const usuarioCreado = await this._usuarioRepository
      .save(usuarioEntity);


    return usuarioCreado;


  }

  actualizar(idUsuario: number,
             nuevoUsuario: Usuario): Promise<UsuarioEntity> {

    nuevoUsuario.id = idUsuario;

    const usuarioEntity = this._usuarioRepository.create(nuevoUsuario);

    return this._usuarioRepository.save(usuarioEntity);
  }


  borrar(idUsuario: number): Promise<UsuarioEntity> {


    // CREA UNA INSTANCIA DE LA ENTIDAD
    const usuarioEntityAEliminar = this._usuarioRepository
      .create({
        id: idUsuario
      });


    return this._usuarioRepository.remove(usuarioEntityAEliminar)
  }

  buscarPorId(idUsuario: number): Promise<UsuarioEntity> {
    return this._usuarioRepository.findOne(idUsuario);
  }

  buscarPorNombreOBiografia(busqueda: string): Usuario[] {
    return this.usuarios.filter(
      (usuario) => {

        // Si la busqueda contiene algo del nombre
        const tieneAlgoEnElnombre = usuario

          .nombre .includes(busqueda); // True / False

        // Si la busqueda contiene algo de la bio
        const tieneAlgoEnLaBio = usuario
          .correo.includes(busqueda);// True / False


        return tieneAlgoEnElnombre || tieneAlgoEnLaBio;
      }
    )
  }

  async login(nombre: string, password: string)
    : Promise<boolean> {
    // 1) Buscar al usuario por nombre
    // 2) Comparar si el password es igual al password

    async login(nombre: string, password: string)
        : Promise<boolean> {
        // 1) Buscar al usuario por nombre
        // 2) Comparar si el password es igual al password

        const usuarioEncontrado = await this._usuarioRepository
            .findOne({
                where: {
                    nombre: nombre
                }
            });
        if (usuarioEncontrado) {

            if (usuarioEncontrado.password === password) {
                return true;
            } else {
                return false;
            }

        } else {
            return false;
        }
      });
    if (usuarioEncontrado) {

      if (usuarioEncontrado.password === password) {
        return true;
      } else {
        return false;
      }

    } else {
      return false;
    }
  }
}

export interface Usuario {
  id: number;

  nombre: string;
  correo: string;
  fechaNacimiento: string;

  password?: string;
}