import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "eyJ0b2tlblR5cGUiOiJBQ0NFU1MiLCJhbGciOiJIUzI1NiJ9.eyJCT0RZIjoie1widXVpZFwiOlwiYmJlZDA4MzFmOTMwNzczNTEzZDY4Yjk4XCIsXCJpZFwiOlwiMDEwMTExMTIyMjJcIixcImxhc3RNb2RpZmllZERhdGVcIjpcIjIwMjQtMDktMTdUMTk6NTU6MTkuNjg0XCIsXCJqb2luRGF0ZVwiOlwiMjAyNC0wOS0xN1QxOTo1NToxOS42ODRcIn0iLCJpc3MiOiJmaXRCdWRkeSIsImp0aSI6ImJiZWQwODMxZjkzMDc3MzUxM2Q2OGI5OCIsImV4cCI6MTcyODEzNzMyNywibmJmIjoxNzI4MTM3MzI3LCJpYXQiOjE3Mjg3NDIxMjd9.qg0-p8LZcyBDKiYKbl-ovoxY76IkpYjn91TuoDh27Is",
  },
});

export default api;
