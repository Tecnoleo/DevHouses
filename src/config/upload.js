import multer from "multer"; 
import path from "path";
export default{
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {

            /* SÓMENTE ARMAZENAMENTO DO PROCESSO, PQ,SÃO APENAS DUAS VARIAVEIS MAIS NADA... */
            const ext =  path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);
            /* NÃO FAZEM NADA SEM AÇAÃO E O CB => CALLBACK É A AÇÃO POIS É UM METODO */

            
            cb(null, `${name}-${Date.now()}${ext}`)
        }
    })
}