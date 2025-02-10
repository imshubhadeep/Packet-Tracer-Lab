function generateTableRows() {
    let tableContent = "";
    for (let i = 0; i < 36; i++) {
        tableContent += `
            <tr class="border-2 border-black w-full">
                <td class="border-2 border-black px-2 py-3"></td>
                <td class="border-2 border-black px-2 py-3"></td>
                <td class="border-2 border-black px-2 py-3"></td>
                <td class="border-2 border-black px-2 py-3"></td>
                <td class="border-2 border-black px-2 py-3"></td>
                <td class="border-2 border-black px-2 py-3"></td>
                <td class="border-2 border-black px-2 py-3"></td>
                <td class="border-2 border-black px-2 py-3"></td>
                <td class="border-2 border-black px-2 py-3"></td>
            </tr>
        `;
    }
    document.getElementById("table-body").innerHTML = tableContent;
}

window.onload = generateTableRows;
