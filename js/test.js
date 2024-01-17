// const films = [
//     {
//         name: 'Titanic',
//         rating: 9
//     },
//     {
//         name: 'Die hard 5',
//         rating: 5
//     },
//     {
//         name: 'Matrix',
//         rating: 8
//     },
//     {
//         name: 'Some bad film',
//         rating: 4
//     }
// ];

// function showGoodFilms(arr) {
//     return arr.filter(film => film.rating >= 8);
// }

// function showListOfFilms(arr) {
//     return arr.reduce((acc, curr) =>`${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
// }

// showListOfFilms(films);

// function setFilmsIds(arr) {
//     return arr.map((film, i) => {
//         film.id = i;
//         return film;
//     });
// }

// const tranformedArray = setFilmsIds(films);

// // При срабатывании every на первом фильме он натыкается на id = 0;
// // // 0 - это неправда в логическом ключе, поэтому и весь метод возвращает false
// // // Учитывайте этот момент
// // function checkFilms(arr) {
// //     return arr.every(film => film.id || film.id === 0 ? true : false)
// // }

// // // Еще короче, так как условие все равне вернет true или false:
// // // function checkFilms(arr) {
// // //     return arr.every(film => film.id || film.id === 0)
// // // }

// // // Максимально коротко, но еще читаемо:
// // // const checkFilms = (arr) => arr.every(film => film.id || film.id === 0)

// // checkFilms(tranformedArray);


// const funds = [

//     {amount: 2400},

//     {amount: 500},
//     {amount: 10400}

// ];

console.log('prepearing')

let construction = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log('getting data')
        let data = {
            name: "Timur"
        }
        resolve(data)
    },2000)
})

construction.then((data)=>{
        return new Promise(function(resolve, reject){
            setTimeout(()=>{
                console.log('updating data')
                data.age = 20
                resolve(data)
            },2000)
        })
    }).then((data)=>{
        console.log(data)})



// const getTotalIncomeAmount = (data) => {
//     return data.some(item => item.amount < 0) ? data.reduce((acc, curr) => acc + curr.amount, 0) : getPositiveIncomeAmount(data);
// }

// getTotalIncomeAmount(funds);



// const getPositiveIncomeAmount = (data) => {
//     let sum = 0

//     let posnum = data.filter(item => item.amount > 0)
//     //console.log(posnum[1].amount)
//     for (let i = 0; i < posnum.length; i++){
//         sum += posnum[i].amount
//     }

//     return sum
    
// };
// getPositiveIncomeAmount(funds)

// let x='8283-124-124-0'
// console.log(x.replace(/-/g,'AAA'))


