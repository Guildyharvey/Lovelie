class ProductHandler {
    constructor() {
        this.bindEvents();
        this.productDetails = {
            'luna-ear-clip': {
                name: 'Luna Ear Clip',
                price: '$85.00',
                image: '/api/placeholder/600/800',
                description: 'Inspired by the gentle glow of moonlight, the Luna ear clip features a delicate curved design that gracefully embraces your ear. Crafted from hypoallergenic materials, this piece offers both comfort and sophistication.',
                details: [
                    'Hypoallergenic materials',
                    'Nickel-free',
                    'Adjustable comfort grip',
                    'Hand-polished finish',
                    'Dimensions: 2.5cm x 1.8cm'
                ]
            },
            'soleil-ear-clip': {
                name: 'Soleil Ear Clip',
                price: '$95.00',
                image: '/api/placeholder/600/800',
                description: 'The Soleil ear clip radiates elegance with its sun-inspired design. Each curve is meticulously crafted to catch and reflect light, creating a subtle sparkle throughout the day.',
                details: [
                    'Premium hypoallergenic materials',
                    'Nickel-free',
                    'Enhanced comfort padding',
                    'Mirror-polished finish',
                    'Dimensions: 2.8cm x 2cm'
                ]
            },
            'flora-ear-clip': {
                name: 'Flora Ear Clip',
                price: '$78.00',
                image: '/api/placeholder/600/800',
                description: 'Delicate and nature-inspired, the Flora ear clip brings a touch of organic beauty to your style. Its lightweight design ensures all-day comfort while maintaining a sophisticated appearance.',
                details: [
                    'Eco-friendly materials',
                    'Nickel-free',
                    'Botanical-inspired design',
                    'Soft-touch finish',
                    'Dimensions: 2.2cm x 1.5cm'
                ]
            },
            'aurora-ear-clip': {
                name: 'Aurora Ear Clip',
                price: '$92.00',
                image: '/api/placeholder/600/800',
                description: 'The Aurora ear clip captures the ethereal beauty of the northern lights. Each piece is carefully designed to create a subtle play of light that changes with your movement.',
                details: [
                    'Premium materials',
                    'Nickel-free',
                    'Lightweight design',
                    'Iridescent finish',
                    'Dimensions: 2.6cm x 1.9cm'
                ]
            },
            'stella-ear-clip': {
                name: 'Stella Ear Clip',
                price: '$89.00',
                image: '/api/placeholder/600/800',
                description: 'The Stella ear clip draws inspiration from starlit nights. Its geometric pattern creates a sophisticated sparkle while maintaining everyday wearability.',
                details: [
                    'High-quality materials',
                    'Nickel-free',
                    'Secure grip design',
                    'Star-inspired pattern',
                    'Dimensions: 2.4cm x 1.7cm'
                ]
            }
        };
    }

    bindEvents() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initialize());
        } else {
            this.initialize();
        }
    }

    initialize() {
        this.initializeViewDetailsButtons();
        this.initializeModal();
    }

    initializeModal() {
        const modal = document.getElementById('productModal');
        const closeBtn = document.getElementById('closeModal');

        // Close modal when clicking the close button
        closeBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
        });

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                modal.classList.add('hidden');
            }
        });
    }

    initializeViewDetailsButtons() {
        const viewDetailsButtons = document.querySelectorAll('.product-hover a');
        
        viewDetailsButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const productCard = e.target.closest('.product-card');
                if (!productCard) {
                    console.error('Product card not found');
                    return;
                }

                const productName = productCard.querySelector('h3')?.textContent || 'Unknown Product';
                const productSlug = productName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                
                this.showProductModal(productSlug);
            });
        });
    }

    showProductModal(productSlug) {
        const product = this.productDetails[productSlug];
        if (!product) {
            console.error('Product details not found');
            return;
        }

        // Update modal content
        document.getElementById('modalProductName').textContent = product.name;
        document.getElementById('modalProductPrice').textContent = product.price;
        document.getElementById('modalProductImage').src = product.image;
        document.getElementById('modalProductImage').alt = product.name;
        document.getElementById('modalProductDescription').textContent = product.description;

        // Update product details list
        const detailsList = document.getElementById('modalProductDetails');
        detailsList.innerHTML = product.details
            .map(detail => `<li>• ${detail}</li>`)
            .join('');

        // Show modal
        document.getElementById('productModal').classList.remove('hidden');
    }
}

// Create and export a single instance
const productHandler = new ProductHandler();
export default productHandler;
