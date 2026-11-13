# Architecture

```mermaid
flowchart TD
  Browser[Browser] --> HTML[index.html]
  HTML --> Cards[Static food item cards]
  HTML --> CSS[food.css]
  HTML --> JS[food.js]
  Cards --> Click[Card click event]
  Click --> Data[Read data-title and data-price]
  Data --> Rule[Delivery charge calculation]
  Rule --> Popup[Create order summary overlay]
  Popup --> Back[Back button removes overlay]
```

## Data flow
Food item names and prices are stored in HTML data attributes. The script reads those values when a card is clicked, computes the displayed total, and constructs popup elements in the DOM. There is no server-side order service.
