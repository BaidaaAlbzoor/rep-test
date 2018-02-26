let useresFromFile = fs.readFileSync("./users.json");
let js = JSON.parse(useresFromFile);

const fs = require('fs');

function agesAvg() {
    let sum = 0;
    let count = 0;
    js.forEach(js => {
        if (js.gender === "Male") {
            age = js.age;

            sum = sum + Number(age);

            count++;
        }
    });
    console.log(sum);
    if (count > 0) {
        // console.log(count);
        let avg = sum / count;
        return avg;
    }
    else {
        //  console.log("count < 0");
        return 0;
    }
}

function sortUsersByName() {
    js.sort(function (a, b) {

        var name1 = a.full_name.toLowerCase();
        //console.log(a.name);
        var name2 = b.full_name.toLowerCase();
        //console.log(b.name);
        if (name1 < name2) {
            return -1;
        }
        if (name1 > name2) {
            return 1;
        }

        // names are equal
        return 0;
    });


    sortedUsers = JSON.stringify(js);
    fs.writeFileSync("./sortedUsers.json", sortedUsers);

}

console.log(agesAvg());
sortUsersByName();
