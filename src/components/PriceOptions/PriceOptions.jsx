import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    
        const priceOptions = [
          {
            "id": "1",
            "name": "Basic Membership",
            "features": [
              "Access to gym equipment",
              "Locker room access",
              "Standard fitness classes",
              "Fitness assessment",
              "No contract commitment"
            ],
            "price": "$29.99"
          },
          {
            "id": "2",
            "name": "Premium Membership",
            "features": [
              "All features of Basic Membership",
              "Unlimited access to all classes",
              "Personal trainer sessions (2 per month)",
              "Nutritional consultation",
              "No contract commitment"
            ],
            "price": "$49.99"
          },
          {
            "id": "3",
            "name": "Family Membership",
            "features": [
              "All features of Premium Membership",
              "Access for up to 2 adults and 2 children",
              "Childcare services",
              "Discounts on merchandise",
              "No contract commitment"
            ],
            "price": "$89.99"
          }
        ];
       
      
    return (
        <div>
            <h2 className="text-5xl">Best Prices in the town</h2>
           <div className="grid md:grid-cols-3 gap-6">
           {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption> )
            }
           </div>
        </div>
    );
};

export default PriceOptions;