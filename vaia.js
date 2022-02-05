
//  problem Solving:problem 1: Start

function anaToVori(ana){

    // convert ana to vori.
    if(ana >= 0){
        const gold = ana / 16;
        return gold; 
    }

    else{
        const stirng = "Please write number.";
        return stirng;       
    }

};

var Totalgold = anaToVori(48);
console.log(Totalgold);

//  problem Solving:problem 1: Ends


//  problem Solving:problem 2: Start

function pandaCost(singara, comuca, jilafi){

    if(singara >= 0 && comuca >= 0 && jilafi >= 0){
        let totalSingara = 7 * singara;
        let totalcomuca = 10 * comuca;
        let totalJilafi = 15 * jilafi;
        let total = totalSingara + totalcomuca + totalJilafi;
        return total;
    }
    else{
        let stirng = "Please write number.";
        return stirng; 
    }
}

let itemsOfFood = pandaCost(1, 1, 1);
console.log(itemsOfFood);

//  problem Solving:problem 2: Ends

//  problem Solving:problem 3 Start

function picnicBudget(totalPeoples){

    var firstAllPeople = 5000;
    var secondAllPeople = 4000;
    var lastAllPeopleMoney = 3000;

    if(totalPeoples <= 100){
        var firstPeople = totalPeoples * firstAllPeople;
        return firstPeople;
    }

    else if(totalPeoples <= 200){
        var firstPeople = 100 * firstAllPeople;
        var secodPeople = totalPeoples - 100;
        var secodAllPeoplesMoney = secodPeople * secondAllPeople;
        var TotalMoney = secodAllPeoplesMoney + firstPeople;
        return TotalMoney;
    }
    else{
        var firstPeople = 100 * firstAllPeople;
        var secodAllPeoplesMoney = 100 * secondAllPeople;
        var ThirdPeople = totalPeoples - 200;
        var thirdPeople = ThirdPeople * lastAllPeopleMoney;
        var TotalMoney = firstPeople + secodAllPeoplesMoney + thirdPeople;
        return TotalMoney;
    }
};

var PeoplesTotalMoney = picnicBudget(100);
console.log(PeoplesTotalMoney);

//  problem Solving:problem 3 Ends


// problem Solving: problem - 4 Start

function oddFriend(friendsElement){
    let string = "";
    for(var element of friendsElement){
        let name = element;
        if(name.length % 2 == 1){
           string += name;
           break;
        }
    }
    return string;
};


var MyFriends = ["Rafi", "Hossain", "Abul", "Bappa", "Hasina", "Kalam", "setu"];
var firstOddFriend = oddFriend(MyFriends);
console.log(firstOddFriend);

// problem Solving: problem - 4 Ends




