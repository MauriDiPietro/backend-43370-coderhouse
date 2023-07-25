import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const UserSchema = new mongoose.Schema({
  first_name: { 
    type: String, 
    required: true,
    index: true
  },
  last_name: { type: String, required: true },
  email:  { type: String, required: true, unique: true },  
  gender:  { type: String, required: true },
  pets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'pets',
      default: []
    }
  ],
  age: { type: Number },
  date: { type: String }
});

UserSchema.pre('find', function(){
  this.populate('pets')
});

UserSchema.plugin(mongoosePaginate);

export const UserModel = mongoose.model(
  'users',
  UserSchema
); 


