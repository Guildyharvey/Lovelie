class Newsletter {
    constructor() {
        this.bindEvents();
    }

    bindEvents() {
        document.addEventListener('DOMContentLoaded', () => {
            this.initializeNewsletterForm();
        });
    }

    initializeNewsletterForm() {
        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const emailInput = newsletterForm.querySelector('input[type="email"]');
                const submitButton = newsletterForm.querySelector('button[type="submit"]');
                
                if (emailInput.value) {
                    try {
                        submitButton.disabled = true;
                        submitButton.textContent = 'Subscribing...';
                        
                        await this.handleNewsletterSubmission(emailInput.value);
                        
                        emailInput.value = '';
                        submitButton.textContent = 'Subscribed!';
                        setTimeout(() => {
                            submitButton.textContent = 'Subscribe';
                            submitButton.disabled = false;
                        }, 2000);
                    } catch (error) {
                        submitButton.textContent = 'Try Again';
                        submitButton.disabled = false;
                    }
                }
            });
        }
    }

    async handleNewsletterSubmission(email) {
        // In a real application, this would make an API call
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Newsletter subscription for:', email);
                resolve();
            }, 1000);
        });
    }
}

export default new Newsletter();