//counting cards
function countCards(card) {
   var count = 0;
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
      return count + " Bet";
   } else {
      return count + " Hold";
   }
}

//looking up profiles of people based on name input

var contacts = [
   {
      firstName: "Tatsuro",
      lastName: "Yamashita",
      number: "27323025",
      likes: [" flowers", " nature", " animals"],
   },
   {
      firstName: "Jim",
      lastName: "Baker",
      number: "12191871",
      likes: [" business", " evading taxes", " guns"],
   },
   {
      firstName: "Nat",
      lastName: "Peterson",
      number: "3171438",
      likes: [" Pizza", " Coding", " cooking"],
   },
   {
      firstName: "sante",
      lastName: "PC",
      number: "5003299868",
      likes: [" eyes", " computers", " vitamin B12"],
   },
];

function lookUpProfile(name, prop) {
   for (var i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === name) {
         if (prop in contacts[i]) {
            return contacts[i][prop];
         } else return "No such property";
      }
   }
   return "no such contact";
}

function generateWholeNumbers(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}
