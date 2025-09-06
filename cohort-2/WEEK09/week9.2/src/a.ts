// let x: number = 5;    
// console.log(x);


// function greet (firstName: string , lastName : string):string{
//     return `HELLO ${firstName} ${lastName}`;
// }

// greet("John", "Doe");


// function add(x: number, y: number): number {
//     return x + y;
// }   

// const result = add(3, 4);
// console.log(result); // Output: 7


function runAfter1s(fn: () => void): void {
    setTimeout(fn, 1000);
}

runAfter1s(function() {
    console.log("This message is displayed after 1 second");
});