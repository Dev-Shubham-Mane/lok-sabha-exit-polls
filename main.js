// Exit poll results data
const exitPollResults = [
    {
        source: "India News- D-Dynamics",
        NDA: 371,
        INDIA: 125,
        OTH: 47
    },
    {
        source: "Jan Ki Baat",
        NDA: "362-392",
        INDIA: "141-161",
        OTH: "10-20"
    },
    {
        source: "News Nation",
        NDA: "342-378",
        INDIA: "153-169",
        OTH: "21-23"
    },
    {
        source: "Republic Bharat- Matrize",
        NDA: "353-368",
        INDIA: "118-133",
        OTH: "43-48"
    },
    {
        source: "Republic TV – P MARQ",
        NDA: 359,
        INDIA: 154,
        OTH: 30
    },
    {
        source: "NDTV Poll of Polls",
        NDA: 365,
        INDIA: 142,
        OTH: 36
    },
    {
        source: "My Axis India",
        NDA: "361-401",
        INDIA: "131-166",
        OTH: "8-20"
    }

];

// Function to create HTML table from data
function createTable(data) {
    let table = "<table><tr><th>Source</th><th>NDA</th><th>I.N.D.I.A</th><th>OTH</th></tr>";
    data.forEach(entry => {
        table += "<tr>";
        table += `<td>${entry.source}</td>`;
        table += `<td>${entry.NDA}</td>`;
        table += `<td>${entry.INDIA}</td>`;
        table += `<td>${entry.OTH}</td>`;
        table += "</tr>";
    });
    table += "</table>";
    return table;
}

// Display exit poll table in HTML
document.getElementById("exitPollTable").innerHTML = createTable(exitPollResults);
