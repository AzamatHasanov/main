document.addEventListener('DOMContentLoaded', () => {
    const addEntryButton = document.getElementById('add-entry');
    const descriptionInput = document.getElementById('description');
    const amountInput = document.getElementById('amount');
    const typeSelect = document.getElementById('type');
    const entryList = document.getElementById('entry-list');
    const totalIncomeElement = document.getElementById('total-income');
    const totalExpenseElement = document.getElementById('total-expense');
    const netBalanceElement = document.getElementById('net-balance');

    let totalIncome = 0;
    let totalExpense = 0;

    addEntryButton.addEventListener('click', () => {
        const description = descriptionInput.value.trim();
        const amount = parseFloat(amountInput.value.trim());
        const type = typeSelect.value;

        if (description && !isNaN(amount)) {
            const listItem = document.createElement('li');
            listItem.textContent = `${description} - ${amount} AZN`;
            listItem.classList.add(type === 'income' ? 'income' : 'expense');
            entryList.appendChild(listItem);

            if (type === 'income') {
                totalIncome += amount;
            } else {
                totalExpense += amount;
            }

            totalIncomeElement.textContent = `${totalIncome} AZN`;
            totalExpenseElement.textContent = `${totalExpense} AZN`;
            netBalanceElement.textContent = `${totalIncome - totalExpense} AZN`;

            descriptionInput.value = '';
            amountInput.value = '';
        }
    });
});