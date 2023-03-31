import { client, productsCollection } from './mongoConnect.js'
//only one . next to mongo because all in the same file 

const deleteProducts = async () => {
  //start try catch 
  try {
    await client.connect()
    const itemDeleted = await productsCollection.deleteOne({ name: "one scoop" })
    console.log(itemDeleted)
  } catch (error) {
    console.error(err)
  } finally {
    await client.close()
  }
}

//deleteProducts()



