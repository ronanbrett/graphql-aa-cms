import * as mongoose from 'mongoose';
import { buildSchema, GraphQLObjectType } from 'graphql';


export const BaseFieldSchema = new mongoose.Schema({
    key: String,
    type: String,
    label: String,
    required: Boolean,
    order: Number,
    helpId: Number,
    validators: [String],
    value: String,
    childFields: { type: mongoose.Schema.Types.ObjectId, ref: 'Field' }
})

export const TextFieldSchema = new mongoose.Schema({
    type: { type: String, default: 'text' },
    value: { type: String}
})




export const FieldSchema = mongoose.model('Field', BaseFieldSchema);
export const TextField = FieldSchema.discriminator('TextField', TextFieldSchema);


