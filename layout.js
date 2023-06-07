document.getElementById('output').style.visibility = 'hidden';

document.getElementById('lbsInput').addEventListener('input', function (e) {
    document.getElementById('output').style.visibility = 'visible';
    let lbs = e.target.value;
    document.getElementById('gramsOutput').innerHTML = lbs * 1000;
    document.getElementById('metricOutput').innerHTML = lbs / 1000;
    document.getElementById('poundOutput').innerHTML = lbs * 2.2046;
})