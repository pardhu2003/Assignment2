const products = [
    { brandName: "Apple", productName: "iPhone 13", price: 79999 },
    { brandName: "Samsung", productName: "Galaxy S21", price: 64999 },
    { brandName: "Apple", productName: "MacBook Air", price: 74999 },
   
    { brandName: "Apple", productName: "iPad Pro", price: 89999 },
  ];
  
  function filterDataByBrand(products, brand) {
    return products.filter((product) => product.brandName === brand);
  }
  
  function filterDataByPrice(products, price) {
    return products.filter((product) => product.price > price);
  }
  
  function filterDataByBrandAndPrice(products, brand, price) {
    return products.filter(
      (product) => (product.brandName === brand || product.brandName === "Samsung") && product.price > price
    );
  }
  
  // Filter data based on brandName "Apple"
  const appleProducts = filterDataByBrand(products, "Apple");
  console.log("Apple Products:", appleProducts);

  const SamsungProducts = filterDataByBrand(products, "Samsung");
  console.log("Samsung Products:", SamsungProducts);
  
  // Filter data where price is greater than 50000
  const Pro1 = filterDataByPrice(products, 50000);
  console.log("The Products greater than 50000:", Pro1);
  
  // Filter data where brandName is "Apple" or "Samsung" and price is higher than 70000
  const Pro2 = filterDataByBrandAndPrice(products, "Apple", 70000);
  console.log("The Products Apple or Samsung, greater than 70000:",Pro2);
  