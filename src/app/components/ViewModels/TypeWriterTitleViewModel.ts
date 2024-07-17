import { makeObservable, observable, action, runInAction } from 'mobx';

export class TypeWriterTitleViewModel {
    displayedText: string = '';
    isBlinking: boolean = false;
    fullText: string;

    private typingInterval: NodeJS.Timeout | null = null;
    private blinkingTimeout: NodeJS.Timeout | null = null;

    constructor(text: string) {
        this.fullText = text;
        makeObservable(this, {
            displayedText: observable,
            isBlinking: observable,
            startTyping: action,
            stopTyping: action,
            startBlinking: action,
            toggleBlinking: action,
            cleanup: action,
            setDisplayedText: action
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
                this.startBlinking();
            }
        }, 100); // Adjust typing speed here
    }

    setDisplayedText = (text: string) => {
        this.displayedText = text;
    }

    stopTyping = () => {
        if (this.typingInterval) {
            clearInterval(this.typingInterval);
            this.typingInterval = null;
        }
    }

    startBlinking = () => {
        this.toggleBlinking();
    }

    toggleBlinking = () => {
        runInAction(() => {
            this.isBlinking = !this.isBlinking;
        });
        this.blinkingTimeout = setTimeout(() => {
            this.toggleBlinking();
        }, this.isBlinking ? 800 : 400); // Blink on for 800ms, off for 400ms
    }

    cleanup = () => {
        this.stopTyping();
        if (this.blinkingTimeout) {
            clearTimeout(this.blinkingTimeout);
            this.blinkingTimeout = null;
        }
    }
}