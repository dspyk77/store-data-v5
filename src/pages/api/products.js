import Products from '@/data/products';

async function handler(req, res) {
  console.log(`[${req.method}] [Products]`);

  switch(req.method) {
  case 'GET':
    const products = await Products.findAll();

    console.log(products);
    res.status(200).json(products);
    break;

  case 'POST':
    const product = req.body;
    console.log(product);

    await Products.create(product);

    res.status(200).json(product);
    break;

  default:
    res.status(400).json({ msg: 'Invalid route' });
  }
}

export default handler;
