// const mypromise = new Promise((resolve, reject) => {
//     let age = 22;
//     if (age >= 18) {
//         resolve("You are eligible to vote.");
//     } else {
//         reject("You are not eligible to vote.");
//     }
// });

// console.log(mypromise);

// mypromise.then((message) => {
//     console.log("Resolved: " + message);
// }).catch((error) => {
//     console.log("error occured: " + error);
// });

// const f1 = async () => {
//     try {
//         const msg = await mypromise;
//         console.log(msg);
//     } catch(error) {
//         console.log("error occured: " );
//     }
// }
fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log("unable to fetch data"));

// const getdata = async () => {
//     try {
//         const data = await fetch('https://fakestoreapi.com/products');
//         console.log(await data.json());
//     } catch(error) {
//         console.log("error occured:", error);
//     }
// }
// getdata();