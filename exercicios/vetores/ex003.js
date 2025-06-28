let valores= [];
const addValor = (x) =>{
    valores.push([valores.length + 1, x]);
}

const media = ()=> {
    let soma= 0;
    for (x of valores){
        soma += x[1];
    }
    return (soma / valores.length).toFixed(2);
}

const drawBasic = () =>{
    let data= new google.visualization.DataTable()
    data.addColumn('number', 'pos');
    data.addColumn('number', 'X');
    data.addRows(valores);
    let option= {
        hAxis: {title: 'Posição'}, 
        vAxis: {title: 'Valor de X'}
    };

    let chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, option);
}