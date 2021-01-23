const firebaseConfig = {
  apiKey: "AIzaSyCkA4y5cHjJJYkNJtU2f9XYunZEjJqonPo",
  authDomain: "supermarket-c3d90.firebaseapp.com",
  projectId: "supermarket-c3d90",
  storageBucket: "supermarket-c3d90.appspot.com",
  messagingSenderId: "892753178768",
  appId: "1:892753178768:web:b2b984ce4af4d35b312815"
}; 

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

const docRef = firestore.doc("shopping-cart/cart"); 
const data = "Product Data";
const addToCartButton = document.querySelector("#relatedAddBtn");

addToCartButton.addEventListener("click", function(){
  const textToSave = data;
  docRef.set({
    added: textToSave
  }).then(function(){
    console.log("Saved");
  }).catch(function(error) {
    console.log("Error")
  });
})

getCartData = function() {
  docRef.onSnapshot(function(doc) {
    if(doc && doc.exists) {
      const loadedData = doc.data();
      console.log("loadedData",loadedData);
    }
  })
}

getCartData();