# 📊 Sales Analytics API

Node.js ve SQL Server kullanarak geliştirilmiş basit bir KPI (Key Performance Indicator) API projesi.

## 🚀 Features

* Total Revenue
* Total Orders
* Average Order Value
* Top Products
* Sales by City
* Dynamic filtering (city, top)

## 🛠 Tech Stack

* Node.js
* Express.js
* SQL Server
* mssql

## 📌 Endpoints

* `/api/kpi/total-revenue`
* `/api/kpi/total-orders`
* `/api/kpi/average-order-value`
* `/api/kpi/top-products`
* `/api/kpi/sales-by-city`

## 🔥 Example

```
/api/kpi/top-products?city=Istanbul&top=5
```

## ▶️ Run Project

```bash
npm install
npm run dev
```
