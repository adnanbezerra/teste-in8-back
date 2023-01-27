import Joi from 'joi';

export const NewCartItemSchema = Joi.object({
  productId: Joi.number().required(),
  productProvider: Joi.string().allow('brazilian', 'european').required(),
});
