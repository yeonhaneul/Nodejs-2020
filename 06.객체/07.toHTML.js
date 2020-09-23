let products = [
    {name: '바나나', price: 1200},
    {name: '사과', price: 2000},
    {name: '배', price: 3000},
    {name: '고구마', price: 700},
    {name: '감자', price: 600},
    {name: '수박', price: 5000},
];

let html =`<table border="1px solid black" style="text-align: center;">
    <tr>
        <th>품목</th>
        <th>가격</th>
    </tr>
    `;

    for (let item of products) {
    html += `<tr>
        <td>${item.name}</td>
        <td>${item.price}</td>
    </tr>
    `;
    }
html +=`</table>`
console.log(html);