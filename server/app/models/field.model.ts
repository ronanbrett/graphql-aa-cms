import * as mongoose from 'mongoose';
import { buildSchema, GraphQLObjectType } from 'graphql';


export const couponSchema = new mongoose.Schema({
	couponCode: String
})

export const couponGLConfig = {
	name: 'couponType',
    description: 'Coupon schema',
    class: 'GraphQLObjectType',
    schema: couponSchema,
    exclude: ['_id']
}
export const Coupon = mongoose.model('Coupon', couponSchema);
