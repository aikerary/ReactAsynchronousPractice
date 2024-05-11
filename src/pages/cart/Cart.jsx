import React from "react";
import Fruta from "../../components/fruta/Fruta";

const Cart = () => {
    const fruta=
        {
            id: 14,
            name: "Persimmon",
            price: 3.3,
            vendors: [
              {
                id: 3,
                name: "True Fruits Inc.",
                self_link: "/shop/v2/vendors/3",
              },
            ],
            image_link: "/shop/v2/products/14/image",
          };
  return (
    <section>
      <Fruta
        fruta={fruta}
      />
    </section>
  );
};

export default Cart;
