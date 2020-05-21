//counting cards
function countCards(card) {
   //var count = 0;
   switch (card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
         count++;
         break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
         count--;
         break;
   }
   if (count > 0) {
      return "Bet";
   } else {
      return "Hold";
   }
}
function lookUpProfile(name, profile) {
   let contacts = [
      {
        "firstName": "Tatsuro",
        "lastName": "Yamashita",
        "number": "27323025",
        "likes": ["flowers", "nature", "animals"]
      },
      {
        "firstName": "",
        "lastName": "Laine",
        "number": "12191871",
        "likes": ["Pizza", "Coding", "Brownie Points"]
      }
      {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "3171438",
        "likes": ["Pizza", "Coding", "Brownie Points"]
      }
      {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "5003299868",
        "likes": ["Pizza", "Coding", "Brownie Points"]
      }
   ];

}
