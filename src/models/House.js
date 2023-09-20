import { Schema, model, mooongose} from 'mongoose';

const HouseSchema = new Schema({
    thumbnail:String, 
    description: String,
    price: Number,
    location: String,
    status: Boolean, 
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
    // passwordd: Number,
    // idade: Number,
    // nome: String,
    // telefone: Number,
    // cidade: String,
    // estado: String,
    // endereco: String,
},
{
    toJSON:{
        virtuals: true
    }
})
HouseSchema.virtual('thumbnail_url').get(function (req, res){

    return `http://localhost:3333/files/${this.thumbnail}`
});
export default model('House', HouseSchema);