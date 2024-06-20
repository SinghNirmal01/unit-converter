function convertUnit() {
    const value = parseFloat(document.getElementById('valueInput').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    
    if (isNaN(value)) {
        alert('Please enter a valid number');
        return;
    }

    const conversionRates = {
        meters: {
            meters: 1,
            kilometers: 0.001,
            feet: 3.28084,
            inches: 39.3701
        },
        kilometers: {
            meters: 1000,
            kilometers: 1,
            feet: 3280.84,
            inches: 39370.1
        },
        feet: {
            meters: 0.3048,
            kilometers: 0.0003048,
            feet: 1,
            inches: 12
        },
        inches: {
            meters: 0.0254,
            kilometers: 0.0000254,
            feet: 0.0833333,
            inches: 1
        }
    };

    const result = value * conversionRates[fromUnit][toUnit];
    document.getElementById('result').textContent = `Result: ${result.toFixed(4)} ${toUnit}`;
}