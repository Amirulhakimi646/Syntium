const insuranceCheckbox = document.getElementById('insurance-checkbox');
        const insuranceCharge = document.getElementById('insurance-charge');
        const learnMoreLink = document.getElementById('learn-more-link');
        const popup = document.querySelector('.popup');
        const overlay = document.querySelector('.overlay');
        const closeBtn = document.querySelector('.close-btn');
        const subtotalElement = document.querySelector('.order-summary p:nth-child(1)');
        const totalElement = document.querySelector('.order-summary p:nth-child(3)');
        const installmentsElement = document.querySelector('.order-summary p:nth-child(4)');

        let subtotalAmount = 186.00;
        let insuranceAmount = 5.23;
        let totalAmount = subtotalAmount;

        insuranceCheckbox.addEventListener('change', function () {
            if (this.checked) {
                insuranceCharge.style.display = 'block';
                totalAmount += insuranceAmount;
            } else {
                insuranceCharge.style.display = 'none';
                totalAmount -= insuranceAmount;
            }
            updateTotal();
        });

        learnMoreLink.addEventListener('click', function () {
            overlay.style.display = 'block';
            popup.style.display = 'block';
        });

        closeBtn.addEventListener('click', function () {
            overlay.style.display = 'none';
            popup.style.display = 'none';
        });

        function updateTotal() {
         
            totalElement.textContent = `Total: RM${totalAmount.toFixed(2)}`;
            installmentsElement.textContent = `3 payments of RM${(totalAmount / 3).toFixed(2)} with atome`;
        }

        // Initial total update
        updateTotal();

        
        
        
        
        