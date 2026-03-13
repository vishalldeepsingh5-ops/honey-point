import Map "mo:core/Map";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Iter "mo:core/Iter";

actor {
  type MenuItem = {
    name : Text;
    description : Text;
    price : Float;
    category : Text;
    vegetarian : Bool;
  };

  module MenuItem {
    public func compare(a : MenuItem, b : MenuItem) : Order.Order {
      Text.compare(a.name, b.name);
    };
  };

  type Reservation = {
    name : Text;
    phone : Text;
    email : Text;
    date : Text;
    time : Text;
    guests : Nat;
    specialRequests : Text;
  };

  type OrderRequest = {
    customerName : Text;
    phone : Text;
    itemsOrdered : Text;
    deliveryPickup : Text;
  };

  let reservations = Map.empty<Text, Reservation>();
  let orders = Map.empty<Text, OrderRequest>();

  var menuItems : [MenuItem] = [
    // Indian Food
    {
      name = "Butter Chicken";
      description = "Creamy tomato-based chicken curry with rich spices, served with naan";
      price = 280.0;
      category = "Indian";
      vegetarian = false;
    },
    {
      name = "Chicken Biryani";
      description = "Aromatic basmati rice slow-cooked with tender chicken and whole spices";
      price = 320.0;
      category = "Indian";
      vegetarian = false;
    },
    {
      name = "Paneer Tikka";
      description = "Grilled cottage cheese cubes marinated in spiced yogurt, served with chutney";
      price = 220.0;
      category = "Indian";
      vegetarian = true;
    },
    {
      name = "Dal Makhani";
      description = "Slow-cooked black lentils in a rich buttery tomato sauce";
      price = 180.0;
      category = "Indian";
      vegetarian = true;
    },
    {
      name = "Samosa (2 pcs)";
      description = "Crispy fried pastry filled with spiced potatoes and peas";
      price = 100.0;
      category = "Indian";
      vegetarian = true;
    },
    {
      name = "Mango Lassi";
      description = "Refreshing chilled yogurt drink blended with sweet Alphonso mango";
      price = 120.0;
      category = "Indian";
      vegetarian = true;
    },
    {
      name = "Palak Paneer";
      description = "Fresh cottage cheese cubes in a smooth spiced spinach gravy";
      price = 210.0;
      category = "Indian";
      vegetarian = true;
    },
    {
      name = "Chicken Tikka Masala";
      description = "Tender grilled chicken in a smoky, creamy masala sauce";
      price = 300.0;
      category = "Indian";
      vegetarian = false;
    },
    {
      name = "Aloo Paratha";
      description = "Whole wheat flatbread stuffed with spiced mashed potato, served with butter and pickle";
      price = 130.0;
      category = "Indian";
      vegetarian = true;
    },
    {
      name = "Chole Bhature";
      description = "Spicy chickpea curry served with fluffy deep-fried bread";
      price = 160.0;
      category = "Indian";
      vegetarian = true;
    },
    {
      name = "Mutton Rogan Josh";
      description = "Slow-braised mutton in Kashmiri-style aromatic red gravy";
      price = 350.0;
      category = "Indian";
      vegetarian = false;
    },
    {
      name = "Masala Dosa";
      description = "Crispy rice crepe filled with spiced potato filling, served with sambar and chutney";
      price = 150.0;
      category = "Indian";
      vegetarian = true;
    },
    {
      name = "Tandoori Chicken (half)";
      description = "Chicken marinated in yogurt and spices, roasted in a clay tandoor oven";
      price = 270.0;
      category = "Indian";
      vegetarian = false;
    },
    {
      name = "Pav Bhaji";
      description = "Spiced mixed vegetable mash served with buttered pav bread";
      price = 140.0;
      category = "Indian";
      vegetarian = true;
    },
    {
      name = "Gulab Jamun (2 pcs)";
      description = "Soft milk-solid dumplings soaked in rose-flavored sugar syrup";
      price = 110.0;
      category = "Indian";
      vegetarian = true;
    },
    // Fast Food
    {
      name = "Classic Burger";
      description = "Beef patty with lettuce, tomato, and cheese in a sesame bun";
      price = 199.0;
      category = "Fast Food";
      vegetarian = false;
    },
    {
      name = "Chicken Nuggets (6 pcs)";
      description = "Golden crispy breaded chicken pieces with dipping sauce";
      price = 179.0;
      category = "Fast Food";
      vegetarian = false;
    },
    {
      name = "Veggie Pizza";
      description = "Pizza loaded with bell peppers, mushrooms, olives and cheese";
      price = 249.0;
      category = "Fast Food";
      vegetarian = true;
    },
    {
      name = "French Fries";
      description = "Crispy golden potato fries seasoned with herbs and spices";
      price = 120.0;
      category = "Fast Food";
      vegetarian = true;
    },
    {
      name = "Chocolate Milkshake";
      description = "Thick creamy chocolate milkshake topped with whipped cream";
      price = 149.0;
      category = "Fast Food";
      vegetarian = true;
    },
    {
      name = "Crispy Chicken Sandwich";
      description = "Fried chicken fillet with coleslaw and mayo in a toasted bun";
      price = 189.0;
      category = "Fast Food";
      vegetarian = false;
    },
  ];

  public query ({ caller }) func getAllMenuItems() : async [MenuItem] {
    menuItems.sort();
  };

  public query ({ caller }) func getMenuByCategory(category : Text) : async [MenuItem] {
    menuItems.filter(func(item) { item.category == category }).sort();
  };

  public shared ({ caller }) func makeReservation(id : Text, reservation : Reservation) : async () {
    reservations.add(id, reservation);
  };

  public shared ({ caller }) func placeOrder(id : Text, order : OrderRequest) : async () {
    orders.add(id, order);
  };

  public query ({ caller }) func getAllReservations() : async [Reservation] {
    reservations.values().toArray();
  };

  public query ({ caller }) func getAllOrders() : async [OrderRequest] {
    orders.values().toArray();
  };
};
