const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all elements with class "price"
    const prices = document.querySelectorAll('.price');

    // Calculate the total price
    let totalPrice = Array.from(prices).reduce((sum, priceElement) => {
        const price = parseFloat(priceElement.textContent);
        return sum + price;
    }, 0);

    // Create a new row for displaying the total price
    const table = document.querySelector('table');
    const newRow = table.insertRow(-1);

    // Create two cells in the new row
    const itemNameCell = newRow.insertCell(0);
    const totalPriceCell = newRow.insertCell(1);

    // Set the content for the cells
    itemNameCell.textContent = "Total Price";
    totalPriceCell.textContent = `Rs ${totalPrice.toFixed(2)}`;
};

getSumBtn.addEventListener("click", getSum);
