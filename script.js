const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const form = document.getElementById('ageCalculatorForm');
const result = document.getElementById('ageResult');
const birthMonthInput = document.getElementById('birthMonth');
const monthNameDisplay = document.getElementById('monthNameDisplay');

birthMonthInput.addEventListener('input', function() {
    const birthMonth = parseInt(birthMonthInput.value);

    if (birthMonth >= 1 && birthMonth <= 12) {
        const birthMonthName = monthNames[birthMonth - 1];

        monthNameDisplay.textContent = birthMonthName;
    } else {
        
        monthNameDisplay.textContent = '';
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const birthDate = parseInt(document.getElementById('birthDate').value);
    const birthMonth = parseInt(document.getElementById('birthMonth').value);
    const birthYear = parseInt(document.getElementById('birthYear').value);

    if (!birthDate || !birthMonth || !birthYear) {
        alert('Please enter valid date of birth.');
        return;
    }

    const today = new Date();
    const birthDateObj = new Date(birthYear, birthMonth - 1, birthDate);

    let ageYears = today.getFullYear() - birthDateObj.getFullYear();
    let ageMonths = today.getMonth() - birthDateObj.getMonth();
    let ageDays = today.getDate() - birthDateObj.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    const html = `
        <div style="text-align: center;">
            <h3>Your age</h3>
            <table>
                <tr>
                    <th>Years</th>
                    <td>${ageYears}</td>
                </tr>
                <tr>
                    <th>Months</th>
                    <td>${ageMonths}</td>
                </tr>
                <tr>
                    <th>Days</th>
                    <td>${ageDays}</td>
                </tr>
            </table>
        </div>
    `;

    result.innerHTML = html;
});
