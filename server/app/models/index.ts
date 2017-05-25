import { } from './entity.model';
import { couponSchema, Coupon, couponGLConfig } from './field.model';
import { } from './section.model';

import createType from 'mongoose-schema-to-graphql';


// export * from './entity.model';
export * from './field.model';
// export * from './section.model';

export function initModels() {
	let def = createType(couponGLConfig);
	console.log(def);
}
