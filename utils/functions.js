const url = "https://spiestestserver-8l55.onrender.com/"
import { question } from 'readline-sync'
import {
    readFile,
    writeFile
} from "fs"


async function getPeopleList() {
    try {
        const res = await fetch(url + "people")
        const data = await res.text()
        writeFile("people.json", data, (err) => {
            if (err) {
                console.error('An error occurred:', err);
            } else {
                console.log('File written successfully');
            }
        })
    } catch (error) {
        console.error(error.message);
    }
}

async function getCallRecords() {
    try {
        const res = await fetch(url + "transcriptions")
        const data = await res.text()
        writeFile("transcriptions.json", data, (err) => {
            if (err) {
                console.error('An error occurred:', err);
            } else {
                console.log('File written successfully');
            }
        })
    } catch (error) {
        console.error(error.message);
    }
}


function getPeopleArray() {
    return new Promise((resolve, reject) => {
        readFile("people.json", (err, data) => {
            const parsedData = JSON.parse(data)
            resolve(parsedData)
        })
    })
}

export const people = await getPeopleArray()


export function searchPeopleByName() {
    const nameForSearch = question("enter the name of the person you're looking for: ")
    const personObj = people.find(person => person.name == nameForSearch)
    if (personObj) {
        console.log(personObj);
    } else {
        console.log("no such name in the system.");
    }
}


export function searchPeopleByAge() {
    const ageForSearch = question("enter the age of the person you're looking for: ")
    const personObj = people.filter(person => person.age == ageForSearch)
    if (personObj != (0)) {
        console.log(personObj);
    } else {
        console.log("no person at this age in the system.");
    }
}



function showMenu(menu) {
    console.log("");
    menu.forEach(element => {
        console.log(element)
    });
    console.log("");
}

export function getChoice(menu) {
    showMenu(menu)
    let choice = Number(question("enter your choice here: "))
    console.log("");
    while (isNaN(choice) || choice < 1 || choice > menu.length) {
        console.log("no such option");
        showMenu(menu)
        choice = Number(question("enter your choice here: "))
        console.log("");
    }
    return choice
}


function getTranscriptionsleArray() {
    return new Promise((resolve, reject) => {
        readFile("transcriptions.json", (err, data) => {
            const parsedData = JSON.parse(data)
            resolve(parsedData)
        })
    })
}

export const records = await getTranscriptionsleArray()


