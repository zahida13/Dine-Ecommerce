export const product = {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'type',
      title: 'is For',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'productDetails',
      title: 'Product Details',
      type: 'string',
    },
   
    {
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid'
      }
    },
    {
      name: 'stripePriceAPIID',
      title: 'Stripe Price API ID',
      type: 'string',
    }
  ]
}
