const { sql } = require("../config/db");

const fetchTotalRevenue = async () => {
  const result = await sql.query(`
    SELECT SUM(SalesAmount) AS TotalRevenue
    FROM FactSales
  `);

  return result.recordset[0];
};

const fetchTotalOrders = async () => {
  const result = await sql.query(`
    SELECT COUNT(*) AS TotalOrders
    FROM FactSales
  `);

  return result.recordset[0];
};

const fetchAvgOrders = async () => {
  const result = await sql.query(`
    SELECT avg(SalesAmount) AS AvgOrders
    FROM FactSales
  `);


  return result.recordset[0];
};

const fetchTopProducts = async () => {
  const result = await sql.query(`
    SELECT TOP 5 
        p.ProductName,
        SUM(f.SalesAmount) AS TotalSales
    FROM FactSales f
    JOIN DimProduct p 
        ON f.ProductKey = p.ProductKey
    GROUP BY p.ProductName
    ORDER BY TotalSales DESC
  `);

  return result.recordset;
};

const fetchSalesByCity = async () => {
  const result = await sql.query(`
    SELECT 
        s.City,
        SUM(f.SalesAmount) AS TotalSales
    FROM FactSales f
    JOIN DimStore s 
        ON f.StoreKey = s.StoreKey
    GROUP BY s.City
    ORDER BY TotalSales DESC
  `);

  return result.recordset;
};


module.exports = { fetchTotalRevenue,fetchTotalOrders ,fetchAvgOrders,fetchTopProducts,fetchSalesByCity};