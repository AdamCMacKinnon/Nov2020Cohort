// class Button{
//     constructor(data1, data2, data3){ 
//         this.data1 = data1;
//         this.data2 = data2;
//         this.data3 = data3;

//     }
//     sum(){
//         return this.data1 + this.data2 + this.data3

//     }
//     method2 = ()=>{
        
//     }
// }

// let button = new Button(1,2,3)

// console.log(button.sum());


class Button{
    constructor(node,color,text) {

        this.state = {
            node: node,
            color: color,
            text: text,
            count: 0
        }
    }

    createButton(){
        let button = document.createElement('button');
        button.textContent = `${this.state.text} ${this.state.count}`;
        button.style.backgroundColor = this.state.color;

        button.addEventListener('click', (e) => {
            this.state.count += 1;
            button.textContent = `${this.state.text} ${this.state.count}`
        });

        this.state.node.appendChild(button);
    }

    render(){
        this.createButton()
    }
}