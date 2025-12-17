import { records, getChoice, people, searchPeopleByAge, searchPeopleByName } from "./utils/functions.js"

const menu = [
    "1. Get people list",
    "2. Get Call Records/Transcriptions",
    "3. Search People by Name",
    "4. Search People by Age",
    "5. Find Dangerous People",
    "6. Exit"
]



function init(menu) {
    let flag = true
    while (flag) {
        const choice = getChoice(menu)
        switch (choice) {
            case 1:
                console.log(people);
                break;
            case 2:
                console.log(records);
                break;
            case 3:
                searchPeopleByName()
                break;
            case 4:
                searchPeopleByAge()
                break;
            case 5:
                console.log("this function is in development");
                break;
            case 6:
                flag = false
                break;
        }
    }
}
init(menu)