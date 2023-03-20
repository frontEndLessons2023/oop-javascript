class List {
    constructor(item){
        this.item = item;
    }

    render() {
        let ul = document.createElement('ul');
        this.item.forEach(e => {
            let li = document.createElement('li');
            li.textContent = e;
            ul.appendChild(li);
        });
        return ul;
    }
}

