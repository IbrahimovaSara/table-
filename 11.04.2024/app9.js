


function addInfo() {
    var name = document.getElementById("txtName").value;
    var surname = document.getElementById("txtSurname").value;
    var age = document.getElementById("txtAge").value;

    var table = document.getElementById("infoTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = surname;

    var newRow2 = table.insertRow(table.rows.length);
    var cell4 = newRow2.insertCell(0);
    cell4.setAttribute("colspan", "3");
    cell4.innerHTML = age;

    document.getElementById("txtName").value = "";
    document.getElementById("txtSurname").value = "";
    document.getElementById("txtAge").value = "";
}

