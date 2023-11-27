function convertTemperature() {
    
    const degreeInput = document.getElementById('degreeInput').value;
    const celsius = parseFloat(degreeInput);

    
    if (isNaN(celsius)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;

    document.getElementById('celsiusOutput').value = celsius.toFixed(2);
    document.getElementById('fahrenheitOutput').value = fahrenheit.toFixed(2);
    document.getElementById('kelvinOutput').value = kelvin.toFixed(2);
}