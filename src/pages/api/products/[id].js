import Products from '@/data/products';

async function handler(req, res) {
  const { id } = req.query;
  console.log(`[${req.method}] [Products] ${id}`);

  let product = null;

  switch(req.method) {
  case 'GET':
    product = await Products.findById(id);

    console.log(product);
    res.status(200).json(product);
    break;

  case 'PUT':
    product = req.body;
    console.log(product);

    await Products.update(id, product);

    res.status(200).json(product);
    break;

  case 'DELETE':
    await Products.destroy(id);

    res.status(200).json({ msg: 'Deleted successfully' });
    break;

  default:
    res.status(400).json({ msg: 'Invalid route' });
  }
}

export default handler;
