export default {
  namespaced: true,
  state() {
    return {
      packageinfo: [
        {
          id: 1,
          name: "weekend plan",
          daystay: 3,
          price: 10000,
          hotelname: "Sea girl",
          accumodation: 2,
          location:'rampura',
          rating:4,
          lists: [
            {
              id: 1,
              name: "Room Size : 15 X 15",
              icon: "mdi-bed",
            },
            {
              id: 2,
              name: "Bed : Queen Size",
              icon: "mdi-bed-queen",
            },
            {
              id: 3,
              name: "Pickup & Drop",
              icon: "mdi-car-convertible",
            },
            {
              id: 4,
              name: "Free Wifi",
              icon: "mdi-wifi",
            },
            {
              id: 5,
              name: "Breakfast, Lunch, Dinner",
              icon: "mdi-food-variant",
            },
            {
              id: 6,
              name: "Air Condition : Available",
              icon: "mdi-air-conditioner",
            },
            {
              id: 7,
              name: "Amenities : Swimming Pool",
              icon: "mdi-pool",
            },
            {
              id: 8,
              name: "Hot & cold Water",
              icon: "mdi-fire",
            },
          ],
          des: "distinctio quo a dolore illo dolorum at quae. Vitae,tenetur. Aut atque repellendus quaerat architecto explicabo fugit quibusdam similique enim dolorem, asperiores nemo vero laudantium eius repudiandae harum tenetur labore qui animi. Earum id alias culpa.Fuga est cum possimus odit, recusandae ratione tenetur incidunt quisquam autem ipsam? Maiores sequi quo accusamus amet nesciunt, dolore deserunt libero similique atque ratione tempora non nemo cum nulla commodi? Dolore quidem itaque non quas dolorum, harum corrupti iusto?",
          info: "distinctio quo a dolore illo dolorum at quae. Vitae,tenetur. Aut atque repellendus quaerat architecto explicabo fugit quibusdam similique enim dolorem, asperiores nemo vero laudantium eius repudiandae harum tenetur labore qui animi. Earum id alias culpa.Fuga est cum possimus odit, recusandae ratione tenetur incidunt quisquam autem ipsam? Maiores sequi quo accusamus amet nesciunt, dolore deserunt libero similique atque ratione tempora non nemo cum nulla commodi? Dolore quidem itaque non quas dolorum, harum corrupti iusto?",
          
          image1:'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
          image: [
            "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
          ],
          transport: [
            {
              id: 1,
              busname: "Green line",
              condition: "AC",
              from: "dhaka",
              to: "cox-bazzer",
              time: "10.00",
               price:2000,
            },
            {
              id: 2,
              busname: "Green line",
              condition: "double deck",
              from: "dhaka",
              to: "cox-bazzer",
              time: "10.00",
               price:2000,
            },
            {
              id: 3,
              busname: "Star Line",
              condition: "AC",
              from: "dhaka",
              to: "cox-bazzer",
              time: "10.00",
               price:2000,
            },
            {
              id: 4,
              busname: "Sentmartin",
              condition: "AC",
              from: "dhaka",
              to: "cox-bazzer",
              time: "10.00",
              price:2000,
            },
          ],
        },
        {
          id: 2,
          name: "friends plan",
          daystay: 3,
          price: 10000,
          hotelname: "Sea girl",
          accumodation: 2,
          location:'rampura',
          rating:4,
          des: "distinctio quo a dolore illo dolorum at quae. Vitae,tenetur. Aut atque repellendus quaerat architecto explicabo fugit quibusdam similique enim dolorem, asperiores nemo vero laudantium eius repudiandae harum tenetur labore qui animi. Earum id alias culpa.Fuga est cum possimus odit, recusandae ratione tenetur incidunt quisquam autem ipsam? Maiores sequi quo accusamus amet nesciunt, dolore deserunt libero similique atque ratione tempora non nemo cum nulla commodi? Dolore quidem itaque non quas dolorum, harum corrupti iusto?",
          info: "distinctio quo a dolore illo dolorum at quae. Vitae,tenetur. Aut atque repellendus quaerat architecto explicabo fugit quibusdam similique enim dolorem, asperiores nemo vero laudantium eius repudiandae harum tenetur labore qui animi. Earum id alias culpa.Fuga est cum possimus odit, recusandae ratione tenetur incidunt quisquam autem ipsam? Maiores sequi quo accusamus amet nesciunt, dolore deserunt libero similique atque ratione tempora non nemo cum nulla commodi? Dolore quidem itaque non quas dolorum, harum corrupti iusto?",
          
          lists: [
            {
              id: 1,
              name: "Room Size : 15 X 15",
              icon: "mdi-bed",
            },
            {
              id: 2,
              name: "Bed : Queen Size",
              icon: "mdi-bed-queen",
            },
            {
              id: 3,
              name: "Pickup & Drop",
              icon: "mdi-car-convertible",
            },
            {
              id: 4,
              name: "Free Wifi",
              icon: "mdi-wifi",
            },
            {
              id: 5,
              name: "Breakfast, Lunch, Dinner",
              icon: "mdi-food-variant",
            },
            {
              id: 6,
              name: "Air Condition : Available",
              icon: "mdi-air-conditioner",
            },
            {
              id: 7,
              name: "Amenities : Swimming Pool",
              icon: "mdi-pool",
            },
            {
              id: 8,
              name: "Hot & cold Water",
              icon: "mdi-fire",
            },
          ],
          image1:'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
          image: [
            "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
          ],
          transport: [
            {
              id: 1,
              busname: "Green line",
              condition: "AC",
              from: "dhaka",
              to: "cox-bazzer",
              time: "10.00",
               price:2000,
            },
            {
              id: 2,
              busname: "Green line",
              condition: "double deck",
              from: "dhaka",
              to: "cox-bazzer",
              time: "10.00",
               price:2000,
            },
            {
              id: 3,
              busname: "Star Line",
              condition: "AC",
              from: "dhaka",
              to: "cox-bazzer",
              time: "10.00",
               price:2000,
            },
            {
              id: 4,
              busname: "Sentmartin",
              condition: "AC",
              from: "dhaka",
              to: "cox-bazzer",
              time: "10.00",
              price:2000,
            },
          ],
        },
        {
          id: 3,
          name: "holyday plan",
          daystay: 3,
          price: 10000,
          hotelname: "Sea girl",
          accumodation: 2,
          des: "distinctio quo a dolore illo dolorum at quae. Vitae,tenetur. Aut atque repellendus quaerat architecto explicabo fugit quibusdam similique enim dolorem, asperiores nemo vero laudantium eius repudiandae harum tenetur labore qui animi. Earum id alias culpa.Fuga est cum possimus odit, recusandae ratione tenetur incidunt quisquam autem ipsam? Maiores sequi quo accusamus amet nesciunt, dolore deserunt libero similique atque ratione tempora non nemo cum nulla commodi? Dolore quidem itaque non quas dolorum, harum corrupti iusto?",
          info: "distinctio quo a dolore illo dolorum at quae. Vitae,tenetur. Aut atque repellendus quaerat architecto explicabo fugit quibusdam similique enim dolorem, asperiores nemo vero laudantium eius repudiandae harum tenetur labore qui animi. Earum id alias culpa.Fuga est cum possimus odit, recusandae ratione tenetur incidunt quisquam autem ipsam? Maiores sequi quo accusamus amet nesciunt, dolore deserunt libero similique atque ratione tempora non nemo cum nulla commodi? Dolore quidem itaque non quas dolorum, harum corrupti iusto?",
          
          lists: [
            {
              id: 1,
              name: "Room Size : 15 X 15",
              icon: "mdi-bed",
            },
            {
              id: 2,
              name: "Bed : Queen Size",
              icon: "mdi-bed-queen",
            },
            {
              id: 3,
              name: "Pickup & Drop",
              icon: "mdi-car-convertible",
            },
            {
              id: 4,
              name: "Free Wifi",
              icon: "mdi-wifi",
            },
            {
              id: 5,
              name: "Breakfast, Lunch, Dinner",
              icon: "mdi-food-variant",
            },
            {
              id: 6,
              name: "Air Condition : Available",
              icon: "mdi-air-conditioner",
            },
            {
              id: 7,
              name: "Amenities : Swimming Pool",
              icon: "mdi-pool",
            },
            {
              id: 8,
              name: "Hot & cold Water",
              icon: "mdi-fire",
            },
          ],
          location:'rampura',
          rating:4,
          image1:'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
          image: [
            "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
          ],
          transport: [
            {
              id: 1,
              busname: "Green line",
              condition: "AC",
              from: "dhaka",
              to: "cox-bazzer",
              time: "10.00",
               price:2000,
            },
            {
              id: 2,
              busname: "Green line",
              condition: "double deck",
              from: "dhaka",
              to: "cox-bazzer",
              time: "10.00",
               price:2000,
            },
            {
              id: 3,
              busname: "Star Line",
              condition: "AC",
              from: "dhaka",
              to: "cox-bazzer",
              time: "10.00",
               price:2000,
            },
            {
              id: 4,
              busname: "Sentmartin",
              condition: "AC",
              from: "dhaka",
              to: "cox-bazzer",
              time: "10.00",
              price:2000,
            },
          ],
        },
        {
          id: 4,
          name: "family plan",
          daystay: 3,
          price: 10000,
          hotelname: "Sea girl",
          accumodation: 2,
          des: "distinctio quo a dolore illo dolorum at quae. Vitae,tenetur. Aut atque repellendus quaerat architecto explicabo fugit quibusdam similique enim dolorem, asperiores nemo vero laudantium eius repudiandae harum tenetur labore qui animi. Earum id alias culpa.Fuga est cum possimus odit, recusandae ratione tenetur incidunt quisquam autem ipsam? Maiores sequi quo accusamus amet nesciunt, dolore deserunt libero similique atque ratione tempora non nemo cum nulla commodi? Dolore quidem itaque non quas dolorum, harum corrupti iusto?",
          info: "distinctio quo a dolore illo dolorum at quae. Vitae,tenetur. Aut atque repellendus quaerat architecto explicabo fugit quibusdam similique enim dolorem, asperiores nemo vero laudantium eius repudiandae harum tenetur labore qui animi. Earum id alias culpa.Fuga est cum possimus odit, recusandae ratione tenetur incidunt quisquam autem ipsam? Maiores sequi quo accusamus amet nesciunt, dolore deserunt libero similique atque ratione tempora non nemo cum nulla commodi? Dolore quidem itaque non quas dolorum, harum corrupti iusto?",
          
          lists: [
            {
              id: 1,
              name: "Room Size : 15 X 15",
              icon: "mdi-bed",
            },
            {
              id: 2,
              name: "Bed : Queen Size",
              icon: "mdi-bed-queen",
            },
            {
              id: 3,
              name: "Pickup & Drop",
              icon: "mdi-car-convertible",
            },
            {
              id: 4,
              name: "Free Wifi",
              icon: "mdi-wifi",
            },
            {
              id: 5,
              name: "Breakfast, Lunch, Dinner",
              icon: "mdi-food-variant",
            },
            {
              id: 6,
              name: "Air Condition : Available",
              icon: "mdi-air-conditioner",
            },
            {
              id: 7,
              name: "Amenities : Swimming Pool",
              icon: "mdi-pool",
            },
            {
              id: 8,
              name: "Hot & cold Water",
              icon: "mdi-fire",
            },
          ],
          location:'rampura',
          rating:4,
          image1:'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
          image: [
            "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
          ],
          transport: [
            {
              id: 1,
              busname: "Green line",
              condition: "AC",
              from: "dhaka",
              to: "cox-bazzer",
              time: "10.00",
              price:2000,
            },
            {
              id: 2,
              busname: "Green line",
              condition: "double deck",
              from: "dhaka",
              to: "cox-bazzer",
              time: "10.00",
              price:2000,
            },
            {
              id: 3,
              busname: "Star Line",
              condition: "AC",
              from: "dhaka",
              to: "cox-bazzer",
              time: "10.00",
              price:2000,
            },
            {
              id: 4,
              busname: "Sentmartin",
              condition: "AC",
              from: "dhaka",
              to: "cox-bazzer",
              time: "10.00",
              price:2000,
            },
          ],
        },
      ],
    };
  },
  getters: {
    getSelectedId: (state) => (id) => {
      return state.packageinfo.find((p) => p.id == id);
    },
  },
  mutations: {},
  actions: {},
};
