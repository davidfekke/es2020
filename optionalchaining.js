let customer = {
    name: 'Carl',
    details: { age: 82 }
  };
  const customerCity = customer?.city ?? 'Unknown city';
  console.log(customerCity); // Unknown city
  
  let customer2 = {
      name: "David",
      details: { age: 50 },
      city: 'Jacksonville'
  }
  
  const customerCity2 = customer2?.city ?? 'Unknown city';
  console.log(customerCity2); // Jacksonville
  