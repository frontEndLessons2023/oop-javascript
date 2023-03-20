class List3 extends List{
    constructor(item, cssClass){
        super(item);
        this.cssClass = cssClass;
    }

    render() {
        let ul = super.render();
        this.cssClass.forEach(element => {
            ul.classList.add(element);
        });
        return ul;
    }
}
