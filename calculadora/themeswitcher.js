class ThemeSwitcher {
    constructor(theme) {
        this.body = document.querySelector('body')
        this.screen = document.querySelector('.screen')
        this.keyboard = document.querySelector('.keyboard')
        this.keys = document.querySelectorAll('.keys')
        this.delKeys = document.querySelectorAll('.reset--del')
        this.resultButton = document.querySelector('.result')
        this.titleArea = document.querySelector('.title')
        this.theme1 = {
            titleColor: '#FFF',
            backgroundColor: 'hsl(222, 26%, 31%)',
            keyResultBackground: 'hsl(176, 100%, 44%)',
            keyDelBackground: 'hsl(225, 21%, 49%)',
            keyPadyBackground: '#CCC',
            keyColor: 'hsl(224, 36%, 15%)',
            screenBackground: 'hsl(224, 36%, 15%)',
            screenColor: '#fff',
            resultBackground: 'hsl(6, 63%, 50%)'
        }
        this.theme2 = {
            titleColor: '#000',
            backgroundColor: 'hsl(0, 0%, 90%)',
            keyResultBackground: 'hsl(176, 100%, 44%)',
            keyDelBackground: 'hsl(185, 42%, 37%)',
            keyPadyBackground: 'hsl(0, 0%, 93%)',
            keyColor: 'hsl(60, 10%, 19%)',
            screenBackground: '#FFF',
            keyboardBackground: 'hsl(0, 5%, 81%)',
            screenColor: '#000',
            resultBackground: 'hsl(25, 98%, 40%)'
        }
        this.theme3 = {
            titleColor: 'hsl(52, 100%, 62%)',
            backgroundColor: 'hsl(268, 75%, 9%)',
            keyResultBackground: 'hsl(176, 100%, 44%)',
            keyDelBackground: 'hsl(281, 89%, 26%)',
            keyPadyBackground: ' hsl(268, 47%, 21%)',
            keyColor: 'hsl(52, 100%, 62%)',
            screenBackground: 'hsl(268, 71%, 12%)',
            screenColor: '#fff',
            resultBackground: 'hsl(176, 100%, 44%)'
        }
    }
    setTheme(theme) {
        switch(theme) {
            case 'theme1':
                this.body.style.backgroundColor = this.theme1.backgroundColor
                this.titleArea.style.color = this.theme1.titleColor
                this.screen.style.backgroundColor = this.theme1.screenBackground
                this.screen.style.color = this.theme1.screenColor
                this.keyboard.style.backgroundColor = this.theme1.screenBackground
                this.keys.forEach((item) => {
                    item.style.backgroundColor = this.theme1.keyPadyBackground
                    item.style.color = this.theme1.keyColor
                })
                this.delKeys.forEach((item) => {
                    item.style.backgroundColor = this.theme1.keyDelBackground
                })
                this.resultButton.style.backgroundColor = this.theme1.resultBackground
            break
            case 'theme2':
                this.body.style.backgroundColor = this.theme2.backgroundColor
                this.titleArea.style.color = this.theme2.titleColor
                this.screen.style.backgroundColor = this.theme2.screenBackground
                this.screen.style.color = this.theme2.screenColor
                this.keyboard.style.backgroundColor = this.theme2.keyboardBackground
                this.keys.forEach((item) => {
                    item.style.backgroundColor = this.theme2.keyPadyBackground
                    item.style.color = this.theme2.keyColor
                })
                this.delKeys.forEach((item) => {
                    item.style.backgroundColor = this.theme2.keyDelBackground
                })
                this.resultButton.style.backgroundColor = this.theme2.resultBackground
            break
            case 'theme3':
                this.body.style.backgroundColor = this.theme3.backgroundColor
                this.titleArea.style.color = this.theme3.titleColor
                this.screen.style.backgroundColor = this.theme3.screenBackground
                this.screen.style.color = this.theme3.screenColor
                this.keyboard.style.backgroundColor = this.theme3.screenBackground
                this.keys.forEach((item) => {
                    item.style.backgroundColor = this.theme3.keyPadyBackground
                    item.style.color = this.theme3.keyColor
                })
                this.delKeys.forEach((item) => {
                    item.style.backgroundColor = this.theme3.keyDelBackground
                })
                this.resultButton.style.backgroundColor = this.theme3.resultBackground
            break
        }
    }
    
}

const themeSwitcher = new ThemeSwitcher()

const theme1 = () => themeSwitcher.setTheme("theme1")
const theme2 = () => themeSwitcher.setTheme("theme2")
const theme3 = () => themeSwitcher.setTheme("theme3")