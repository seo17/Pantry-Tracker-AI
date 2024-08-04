"use server";
import { firestore } from "@/firebase";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { redirect } from "next/navigation";
import OpenAI from "openai";

// Firebase Crud Operations
export async function getInventory() {
  const inventory = [];

  const querySnapshot = await getDocs(collection(firestore, "inventory"));
  querySnapshot.forEach((doc) => {
    const { quantity, category } = doc.data();
    inventory.push({
      name: doc.id,
      category,
      quantity,
    });
  });

  return inventory;
}

export async function deleteInventoryItem(item) {
  await deleteDoc(doc(firestore, "inventory", item));
}

export async function addInventoryItem(items) {
  if (Array.isArray(items) === false) {
    items = [{ ...items }];
  }

  console.log(items);

  for (const item of items) {
    const { name, quantity, category } = item;

    const quantityAsInt = parseInt(quantity);

    const docRef = doc(collection(firestore, "inventory"), name);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      await setDoc(docRef, { quantity: quantityAsInt, category });
    } else {
      await setDoc(docRef, { quantity: quantityAsInt, category });
    }
  }
}

// Open AI
export async function describeImage(image) {
  const openai = new OpenAI({
    apiKey: process.env.OPEN_AI,
    organization: process.env.ORGANIZATION,
  });

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: [
          {
            type: "text",
            text: "Return a JSON structure based on the requirements of the user. Only return JSON structure, nothing else. Do not return ```json, alway return {'items': [{name: 'bottle water', category: 'Drink', quantity: 1}]}",
          },
        ],
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Create a JSON structure for all items/products/produce/Baking/Breakfast/ Grains/ Canned Goods/ Oil & vinegar/Spices/Drinks/Snacks/Fruits in the image. Return only the JSON structure ",
          },
          {
            type: "image_url",
            image_url: {
              url: image,
              detail: "low",
            },
          },
        ],
      },
    ],
    max_tokens: 1000,
  });

  const result = JSON.parse(response.choices[0].message.content);

  console.log(result);

  await addInventoryItem(result.items);

  redirect("/");
}
