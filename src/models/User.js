import { Schema, model } from 'mongoose';


// criado uma instancia do objeto Schema herdado da classe moonoose
const UserSchema = new Schema({
    email: String, 
    // passwordd: Number,
    // idade: Number,
    // nome: String,
    // telefone: Number,
    // cidade: String,
    // estado: String,
    // endereco: String,
})

//exporta o modelo  para outro arquivo
export default model('User', UserSchema);