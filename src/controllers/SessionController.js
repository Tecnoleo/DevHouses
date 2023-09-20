// metodos: index, show, update, destroy, store
/*
    index: listar as sessões
    store: cria uma nova sessão
    show: mostrar uma sessão
    update: atualiza uma sessão
    destroy: apaga uma sessão


*/

import User from '../models/User';

class SessionController{

    async store(req, res){
        const {email} = req.body;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        let user = await User.findOne({email});

        if(!user)
        {
            user = await User.create({email});
        }
        // let user = await User.create(
        //     {
        //         email
        //     }
        // )

        return res.json(user)
    }
    
}
export default new SessionController();