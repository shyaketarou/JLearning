const domNode = document.getElementById('app');
const root = ReactDOM.createRoot(domNode);
const shayke = {
    gender: 'male',
    age: 12,
    jp: 'N1',
    espano: '0'
}



let age = 15

function Header({ title }) {
    console.log(title)
    return (<h1>{title}</h1>)
}
function Homepage() {
    const [likes, setLikes] = React.useState(0);


    function handleClick() {
        console.log("increment like count")
        setLikes(likes + 1)
    }
    
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']
    return (<div>
        <Header title="eqwe" />
        <Header title="ewqewqeweq" />
        <ul>
            {names.map((name) => (
                <li>{name}</li>
            ))}
            {/* <li key={name}>{name}</li> */}
        </ul>
        <button onClick={handleClick}>Like({likes})</button>

    </div>)
}

root.render(<Homepage />);




console.log('I am 5 years old')


console.log(`I am ${age} years old`)






// let result = 1
// console.log(result)
// function sad(x) {
//     x = x+1
//     return x
// }
// console.log(sad(23))
// let age = sad(18)
// console.log(age)


// let number = [1, 2, 3]
// let firstnumber = number[0]
// let secondnumber = number[1]

// let ages = 20
// let over18 = false
// let drinkbeer = over18 ? 1 : 0
// console.log(drinkbeer)  