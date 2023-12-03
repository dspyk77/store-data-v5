import { getDbConnection } from '@/data/db-connection';

export default class Products {

  static async findAll() {
    const dbConnection = await getDbConnection();

    var results = await dbConnection.execute(`
      SELECT *
      FROM products
    `);

    const items = results[0];

    return items;
  }

  static async findById(id) {
    const dbConnection = await getDbConnection();

    var results = await dbConnection.execute(`
      SELECT *
      FROM products
      WHERE id = ${id}
    `);

    var product = results[0][0];

    return product;
  }

  static async create(product) {
    const dbConnection = await getDbConnection();

    var sql = `
      INSERT INTO products (name, category, price, weight)
      VALUES (?, ?, ?, ?)
    `;
    var values = [product.name, product.category, product.price, product.weight];

    await dbConnection.execute(sql, values);
  }

  static async update(id, product) {
    const dbConnection = await getDbConnection();

    var sql = `
      UPDATE products
      SET name = ?,
          category = ?,
          price = ?,
          weight = ?
      WHERE id = ?
    `;
    var values = [product.name, product.category, product.price, product.weight, id];

    await dbConnection.execute(sql, values);
  }

  static async destroy(id) {
    const dbConnection = await getDbConnection();

    var sql = `
      DELETE FROM products
      WHERE id = ?
    `;

    await dbConnection.execute(sql, [id]);
  }
}
