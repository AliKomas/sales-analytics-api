const express = require("express");
const router = express.Router();

const { getTotalRevenue, getTotalOrders,getAvgOrders,getTopProducts,getSalesByCity } = require("../controllers/kpiController");

router.get("/total-revenue", getTotalRevenue);
router.get("/total-orders", getTotalOrders);
router.get("/avg-order-value", getAvgOrders);
router.get("/top-products", getTopProducts);
router.get("/sales-by-city", getSalesByCity);

module.exports = router;