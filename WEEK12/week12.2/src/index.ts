interface User {
    name: string;
    age :number;
};

function sumOfAge(user1:User, user2: User){
    return user1.age+ user2.age;
}

const age = sumOfAge({name:'Taro', age:30},{name:'akash',age:25});
console.log(age);
