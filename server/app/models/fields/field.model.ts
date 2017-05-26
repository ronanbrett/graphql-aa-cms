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
    placeholder: String,
    value: String,
    childFields: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Field' }]
})

export const TextFieldSchema = new mongoose.Schema({
    type: { type: String, default: 'text' },
    value: { type: String }
})

export const AutocompleteFieldSchema = new mongoose.Schema({
    type: { type: String, default: 'autocomplete' },
    value: { id: String, description: String },
    autoCompleteType: String,
    url: String
})

export const DropdownFieldSchema = new mongoose.Schema({
    options: [{ id: String, description: String }],
    value: { id: String, description: String },
})

export const DateFieldSchema = new mongoose.Schema({
    type: { type: String, default: 'dropdown' },
    options: [{ id: String, description: String }],
    value: { id: String, description: String },
})

export const RadioFieldSchema = new mongoose.Schema({
    type: { type: String, default: 'radio' },
    options: [{ id: String, description: String }],
    value: { id: String, description: String },
})

export const CurrencyFieldSchema = new mongoose.Schema({
    type: { type: String, default: 'currency' },
    value: Number
})


export const FieldSchema = mongoose.model('Field', BaseFieldSchema);
export const TextField = FieldSchema.discriminator('TextField', TextFieldSchema);
export const AutocompleteField = FieldSchema.discriminator('Autocomplete', AutocompleteFieldSchema);
export const DropdownField = FieldSchema.discriminator('Dropdown', DropdownFieldSchema);
export const DateField = FieldSchema.discriminator('Date', DateFieldSchema);
export const RadioField = FieldSchema.discriminator('Radio', RadioFieldSchema);
export const CurrencyField = FieldSchema.discriminator('Currency', CurrencyFieldSchema);


