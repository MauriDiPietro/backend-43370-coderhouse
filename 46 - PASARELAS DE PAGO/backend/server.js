import express from "express";
import cors from "cors";
import "dotenv/config";
import mercadopago from 'mercadopago';
import PaymentService from "./services/payment.service.js";
const service = new PaymentService();

const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.REACT_APP }));

const products = [
  { id: 1, name: "papas", price: 1000 },
  { id: 2, name: "queso", price: 500 },
  { id: 3, name: "hamburguesa", price: 1500 },
  { id: 4, name: "soda", price: 1000 },
  { id: 5, name: "golosinas", price: 800 },
];

app.post("/api/payments/payment-intents", async (req, res) => {
  const { id } = req.query;
  const productRequest = products.find((prod) => prod.id === Number(id));
  if (!productRequest)
    return res.status(404).json({ msg: "Product Not Found!" });
  const paymentIntentInfo = {
    amount: productRequest.price,
    currency: 'usd',
    metadata: {
        userId: 'userId_mongo',
        orderDetails: JSON.stringify({
            [productRequest.name]: 2
        }),
        address: JSON.stringify({
            street: 'Brandsen',
            number: 805
        })
    }
  };
  const result = await service.createPaymentIntent(paymentIntentInfo);
  console.log(result);
  res.json({
    status: 'success',
    payload: result
  })
});


//npm i mercadopago@1.5.17

app.get('/create-order', async(req, res)=>{
  mercadopago.configure({
    access_token: 'TEST-7954226258817139-110821-bd67c96659e52f1c2ef93a3a5c6a265f-1479458708'
  })

  const result = await mercadopago.preferences.create({
    items: [
      {
        title: 'Yerba Mate Coderhouse',
        unit_price: 2000,
        currency_id: 'ARS',
        quantity: 1,
      }
    ]
  });

  res.json(result)
})

app.listen(8080, () => console.log("server ok"));
