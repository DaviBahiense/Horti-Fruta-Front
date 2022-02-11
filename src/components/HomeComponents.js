import axios from "axios";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    async function promisse() {
      const products = axios.get("http://localhost:5000/getProducts");

      return products;
    }
  }, []);

  return products;
}
