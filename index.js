// let a = 10;
// let a = 56; bad idea in js

// var 
// var b=20;
// var b=12;

// var isVerify=true;


// console.log(b)

// var isVerify=false;

// const  

// const user="arvind";

// const user="fuiherguiwer"
// user="iuhrufg"
// console.log(user);


const checkNumber = (num) => {
    if (!num || num == "" || num == null) {
        return "please enter valid"
    }
    if (num % 2 == 0) {
        return "even"
    }
    return "odd"
}

function checkNumber1(num) {
    if (!num || num == "" || num == null) {
        return "please enter valid"
    }
    if (num % 2 == 0) {
        return "even"
    }
    return "odd"
}


function checkNumber2(num) {
    if (num || num !== "" || num !== null) {
        if (num % 2 == 0) {
            console.log("even");
        }
        else {
            console.log("odd");
        }
    }
}



// console.log(checkNumber1(4));
// checkNumber2(4);
// console.log(checkNumber(44)
// )


// array 

// const num=[];

// num[0]=5;
// console.log(num);

// for(let item=1;item<=10;item++){
//     num[item-1]=item;
// }

// console.log(num);


// const arr = [7, 5, 6, 2, 90, 34, 1, 4, 7, 39, 52];

// console.log(typeof arr.sort());

// for (let i = 0; i < arr.length; i++) {
//     for (let ind = 1; ind <arr.length; ind++) {
//         if (arr[ind] > arr[ind + 1]) {
//             let temp = arr[ind];
//             arr[ind] = arr[ind + 1];
//             arr[ind + 1] = temp
//         }
//     }
//     console.log(arr[i]);
// console.log(arr[]);
// }
// console.log(arr)

// let devisibleBy13=arr.filter((item)=>item%13==0);
// // console.log(devisibleBy13)
// arr.map((number)=>{
//     console.log(number)
// });


// arr.push(4);
// arr.pop();
// arr.shift();
// arr.unshift(3)
// console.log(arr.slice(0,3));
// console.log(arr)

// console.log(arr+[3,5,45,46,4,62]);
// console.log(arr.concat([2,3,4,5,6,7,8]));


// object 

// const user = {
//     name: "Arvind",
//     role: "mern developer",
//     location: "lucknow",
//     profilePic: "gdyewgdweefhue.png",
//     skills: ["MongoDB", "ExpressJs", "ReactJs", "NodeJs"],
//     tech: {
//         frontend: "Reactjs",
//         backend: "ExpressJs",
//     }
// }

// console.log(user.location);
// console.log(user.profilePic);

// console.log(user["location"])
// console.log(user["profilePic"])

// console.log(user.tech.frontend);
// console.log(user.name)
// console.log(user.role)

// console.log("ReactJs");
// console.log(user.name.replace("Arvind","mohan"));
// console.log(user);
// user.name="Raj"
// user.skills.push("tailwind");
// console.log(user);

// for (let item in user) {
//     console.log(item)
// }











// const arr = [9, 5, 1, 8, 3, 9, 3, 2, 0, 1];

// for (let i = 0; i < arr.length-1; i++) {
//     console.log(i)
//     for (let j = 0; j < arr.length-i-1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }
// for (let i = 0; i < arr.length; i++) {

//     console.log(arr[i]);
// }






// const printUserDetails=(details)=>{
    // console.log(details.name);
    // console.log(details.role);
    // console.log(details.skills);
    // console.log(details.tech.frontend);
    // console.log(details.tech.backend);
    // console.log(details.profilePic);
// }


// const user = {
//     name: "Arvind",
//     role: "mern developer",
//     location: "lucknow",
//     profilePic: "gdyewgdweefhue.png",
//     skills: ["MongoDB", "ExpressJs", "ReactJs", "NodeJs"],
//     tech: {
//         frontend: "Reactjs",
//         backend: "ExpressJs",
//     }
// }


// const user2 = {
//     name: "Raj",
//     role: "Laravel developer",
//     location: "Sitapur",
//     profilePic: "gdyewgdweefhue.png",
//     skills: ["php","Mysql","bootstrap"],
//     tech: {
//         frontend: "html",
//         backend: "php",
//     }
// }
// printUserDetails(user);
// printUserDetails(user2);

