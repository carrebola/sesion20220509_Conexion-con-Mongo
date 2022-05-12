const m_usuarios = require("../modelos/m_usuarios")

module.exports = {
    leerUsuarios : async (req, res)=>{
        try {
            const usuariosEncontrados = await m_usuarios.find()
            res.json(usuariosEncontrados)
        } catch (error) {
            res.json(
                {
                    mensaje: 'se ha producido un error' + error
                }
            )
        }
    },
    leerUsuarioId: async (req, res)=>{
        const id=req.params.id
        try {
            const usuarioEncontrado =  await m_usuarios.findById(id)
            res.json({
                error: null,
                data: usuarioEncontrado
            })
        } catch (error) {
            res.status(400).json({error})
        }
    }, 
    crearUsuario: async (req, res)=>{
        // // ****************    Crear usuario **********************
         // Creamos el objeto usando el model que creaos anteriormente
         const usuario = new m_usuarios({
             nombre: req.body.nombre,
             apellidos: req.body.apellidos,
             email: req.body.email
         });
         // Usamos .save() del model para almacenar los datos en Mongo
         try {
             //inserta un nuevo usuario
             const usuarioGuardado = await usuario.save()
             res.json({
                 error: null,
                 data: usuarioGuardado
             })
         } catch (error) {
             res.status(400).json({error})
         }
     },
     modificarUsuarioId: async (req, res)=>{
        // // ****************    Modificar usuario **********************
         // Creamos el objeto usando el model que creaos anteriormente
         const id = req.params.id
         try {
            const usuarioModificado = await m_usuarios.findByIdAndUpdate(id, 
                {
                    nombre: req.body.nombre,
                    apellidos: req.body.apellidos,
                    email: req.body.email
                }
            );
             res.json({
                 error: null,
                 data: usuarioModificado
             })
         } catch (error) {
             res.status(400).json({error})
         }
     },  
    borrarUsuarioId: async (req, res)=>{
        var id=req.params.id
        console.log(id);
        try {
            const usuariosEncontrados = await m_usuarios.findByIdAndDelete(id)
            res.json(
                {
                    error: null,
                    datos: usuariosEncontrados
                }
            )
        } catch (error) {
            res.json(
                {
                    mensaje: 'se ha producido un error' + error
                }
            )
        }
    }
}





