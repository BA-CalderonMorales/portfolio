import { makeObservable, observable, action } from 'mobx';

export class TypeWriterTitleViewModel {
    displayedText: string = '';
    isBlinking: boolean = true;
    fullText: string;

    private typingInterval: NodeJS.Timeout | null = null;

    constructor(text: string) {
        this.fullText = text;
        makeObservable(this, {
            // observables
            displayedText: observable,
            isBlinking: observable,

            // actions
            startTyping: action,
            stopTyping: action,
            setDisplayedText: action,
            toggleBlinking: action
        });
    }

    startTyping = () => {
        let currentIndex = 0;
        this.typingInterval = setInterval(() => {
            if (currentIndex <= this.fullText.length) {
                this.setDisplayedText(this.fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                this.stopTyping();
            }
        }, 100); // Adjust typing speed here
    }

    stopTyping = () => {
        if (this.typingInterval) {
            clearInterval(this.typingInterval);
        }
    }

    setDisplayedText = (text: string) => {
        this.displayedText = text;
    }

    toggleBlinking = () => {
        this.isBlinking = !this.isBlinking;
    }

    cleanup = () => {
        this.stopTyping();
    }
}