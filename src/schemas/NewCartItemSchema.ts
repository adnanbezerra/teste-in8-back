import Joi from 'joi';

export const NewCartItemSchema = Joi.object({
  userId: Joi.number().required(),
  productId: Joi.number().required(),
  productProvider: Joi.string().allow('brazilian', 'european').required(),
});
