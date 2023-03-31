import { client, productsCollection } from './mongoConnect.js'

const editCollection = async () => {
  try {
  await client.connect
  // collection.findOne({name: "Canteloupe" }) plug and play from yesterday
  const updatedCollection = await productsCollection.findOneAndUpdate({ name: "" }, { $set: { name: "" } }) // original name switches to what i want new name to be 
   console.log(updatedCollection)
  } catch (error) {
    console.log(error)
  }
}

//editCollection()
