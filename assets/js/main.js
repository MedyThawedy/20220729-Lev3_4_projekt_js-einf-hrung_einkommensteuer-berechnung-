let tarif;
let zve;
let est;
let rBoxJaNein;

function fn_show_splitting_div() {
    document.getElementById('splitting_div').style.display = 'grid';
    document.getElementById('inputZve').disabled = true;
}

function fn_hide_splitting_div() {
    document.getElementById('splitting_div').style.display = 'none';
    document.getElementById('inputZve').disabled = false;
}


function fn_tarif_check() {

    // https://blog.devgenius.io/how-to-get-the-value-of-a-selected-radio-button-with-javascript-e5ac43a6f41a

    const jaOderNein = document.querySelectorAll('input[name="rJaNein"]');

    for (const f of jaOderNein) {
        if (f.checked) {
            console.log(f.value);
            rBoxJaNein = f.value;
        }
    }

    // Question? = else if ( /*(rBoxJaNein != 'Ja') && (rBoxJaNein != 'Nein')*/ ??? rBoxJaNein == ' ' rBoxJaNein == 'Undefined ') 
    console.log(rBoxJaNein)

    if (rBoxJaNein == 'ja') {
        tarif = 'Grundtarif';
    } else {
        tarif = 'Splittingtarif';
    }

    console.log(tarif);
    // Zve einen Wert zuweisen
    zve = document.getElementById('inputZve').value;

    fn_berechne_est(parseInt(zve), tarif);

} /* 
    zve = zve / 2;
        console.log(`zve after splitting ${zve}`);
  */

function fn_berechne_est(zve, tarif) {
    console.log('fn_berechne_est wurde aufgerufen und zve = ' + zve);
    console.log('Tarif = ' + tarif);
    if (tarif == 'Splittingtarif') {
        zve = zve / 2;
        console.log('zve after splitting =' + zve)
    }

    // Fall unterscheiden;



    // Fall 1 zu versteuernde Einkommen kleiner als oder gleich 9.744
    if (zve <= 9744) {
        est = 0;
        console.log(`est = ${est} = Fall 1 zu versteuernde Einkommen kleiner als oder gleich 9.744`);
        document.getElementById('outputEst').value = est;
        document.getElementById('idTextAreaOutput').value = est;
    }
    // Fall 2 zu versteuernde Einkommen im Bereich von 9745 bis 14753 
    else if ((zve >= 9745) && (zve <= 14753)) {
        let y = ((zve - 9744) / 10000);
        console.log(`y = ${y}`);
        est = (((995.21 * y) + 1400) * y);

        console.log(`est = ${est} = Fall 2 zu versteuernde Einkommen im Bereich von 9745 bis 14753`);
        document.getElementById('outputEst').value = est;
        document.getElementById('idTextAreaOutput').value = est;
    }
    //Fall 3
    else if ((zve >= 14754) && (zve <= 57918)) {
        let z = ((zve - 14753) / 10000);
        console.log(`z = ${z}`);
        est = (((208.85 * z) + 2397) * z) + 950, 96;

        console.log(`est = ${est} = Fall 3 zu versteuernde Einkommen im Bereich von 14754 bis 57918`);
        document.getElementById('outputEst').value = est;
        document.getElementById('idTextAreaOutput').value = est;
    }
    //Fall 4
    else if ((zve >= 57919) && (zve <= 274612)) {

        est = (0.42 * zve) - 9136.63;

        console.log(`est = ${est} = Fall 4 zu versteuernde Einkommen im Bereich von 57919 bis 274612`);
        document.getElementById('outputEst').value = est;
        document.getElementById('idTextAreaOutput').value = est;
    }

    //Fall 5
    else if ((zve >= 274613)) {

        est = (0.45 * zve) - 17374.99;
        console.log(`est = ${est} = Fall 5 zu versteuernde Einkommen im Bereich von 274613`);
        document.getElementById('outputEst').value = est;
        document.getElementById('idTextAreaOutput').value = est;
    }


}






