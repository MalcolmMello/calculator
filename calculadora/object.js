class Calculator {  
    constructor(e) {
        this.result = 0
        this.screenContent = '0'
        this.screen = document.querySelector('.screen')
    }

    calc(e) {
        if(this.screenContent === '0') {
            this.screenContent = e
            this.screen.innerHTML = this.screenContent
        } else {
            this.screenContent = this.screenContent + e
            this.screen.innerHTML = this.screenContent
        }
    }

    reset() {
        this.screenContent = '0'
        this.screen.innerHTML = this.screenContent
    }

    del() {
        if(this.screenContent.substring(0, this.screenContent.length - 1) === '') {
            this.screenContent = '0'
            this.screen.innerHTML = this.screenContent
        } else {
            this.screenContent = this.screenContent.substring(0, this.screenContent.length - 1)
            this.screen.innerHTML = this.screenContent
        }
    }
    
    doResult() {
        this.result = eval(this.screenContent).toFixed(2)
        this.screen.innerHTML = this.result
        this.screenContent = this.result
    }
}

const calculator = new Calculator()

const calc = (e) => calculator.calc(e)
const reset = () => calculator.reset()
const takeResult = () => calculator.doResult()
const del = () => calculator.del()

