const { fetchTotalRevenue,fetchTotalOrders,fetchAvgOrders ,fetchTopProducts,fetchSalesByCity} = require("../services/kpiService");

const getTotalRevenue = async (req, res) => {
  try {
    const data = await fetchTotalRevenue();
    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Hata oluştu",
      error: error.message
    });
  }
};

const getTotalOrders = async (req, res) => {
  try {
    const data = await fetchTotalOrders();
    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Hata oluştu",
      error: error.message
    });
  }
};

const getAvgOrders = async (req, res) => {
  try {
    const data = await fetchAvgOrders();
    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Hata oluştu",
      error: error.message
    });
  }
};

const getTopProducts = async (req, res) => {
  try {
    const data = await fetchTopProducts();
    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Hata oluştu",
      error: error.message
    });
  }
};

const getSalesByCity = async (req, res) => {
  try {
    const data = await fetchSalesByCity();
    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Hata oluştu",
      error: error.message
    });
  }
};

module.exports = { getTotalRevenue,getTotalOrders,getAvgOrders,getTopProducts,getSalesByCity};