//list of all calculator keys storing them as object
// "text" is the value to show on the keyboard
// "type" is the type of value of the element
// "value" is the value of the element
// "positions where the element belongs in the calculator

const List = [
    { text: "1", type: "number", value: 1, position: "left" },
    { text: "2", type: "number", value: 2, position: "left" },
    { text: "3", type: "number", value: 3, position: "left" },
    { text: "4", type: "number", value: 4, position: "left" },
    { text: "5", type: "number", value: 5, position: "left" },
    { text: "6", type: "number", value: 6, position: "left" },
    { text: "7", type: "number", value: 7, position: "left" },
    { text: "8", type: "number", value: 8, position: "left" },
    { text: "9", type: "number", value: 9, position: "left" },
    { text: "0", type: "number", value: 0, position: "botton" },
    { text: ".", type: "operation", value: ".", position: "botton" },
    { text: "AC", type: "operation", value: "AC", position: "botton" },
    { text: "+", type: "operation", value: "+", position: "top" },
    { text: "x", type: "operation", value: "*", position: "top" },
    { text: "/", type: "operation", value: "/", position: "top" },
    { text: "-", type: "operation", value: "-", position: "top" },
    { text: "=", type: "operation", value: "=", position: "right" },
]

export default List;