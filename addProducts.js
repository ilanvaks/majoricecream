import { client, productsCollection } from './mongoConnect.js'

const addProducts = async () => {

  const products = [{
    name: "One Scoop",
    price: 4.99,
    stock: 50,
  },
    {firstname: "Second Scoop",
    price: 10.99,
    stock: 50,
  },
    {firstname: "waffle cone",
    price: 1.99,
    stock: 40,
  },
    {firstname: "sundae",
    price: 0.99,
    stock: 10,
  },
    {firstname: "bannana split",
    price: 6.99, 
    stock: 55,
  }
]
  
  try {
    await client.connect()
    const addedProducts = await productsCollection.insertMany(products)
    console.log(addedProducts)
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
}