function load(){ 
/* --------------- Pie Chart ------------------- */
  var pieChartData = [
   
        {
            value: 40,
            color: "yellow",
			label:'ff'
        },
        {
            value: 30,
            color: "green",
			label:'pp'
        },
        {
            value: 30,
            color: "orange",
			label:'dd'
        }
        ]
var Line = new Chart(document.getElementById("pieChart").getContext("2d")).Pie(pieChartData); 
		}
		
/* --------------- DoughNut Chart ------------------- */
		 var DoughNutChartData = [
        {
            value: 50,
            color: "orange"
        },
        {
            value: 10,
            color: "red"
        },
        {
            value: 40,
            color: "green"
        }
        ]
        var Doughnut = new Chart(document.getElementById("doughNutChart").getContext("2d")).Doughnut(DoughNutChartData);
/* --------------- Bar Chart ------------------- */
		  
		
		var data = {
				 	
			    labels: ["HTML5", "CSS3", "Bootstrap", "Angular", "Javascript", "Ajax", "jQuery"],
			    datasets: [
			        {
			            
			            fillColor: "blue",
			            strokeColor: "rgba(220,220,220,1)",
			            pointColor: "rgba(220,220,220,1)",
			            pointStrokeColor: "#fff",
			            pointHighlightFill: "#fff",
			            pointHighlightStroke: "rgba(220,220,220,1)",
			            data: [65, 59, 80, 81, 56, 55, 40]
			        }
			    ]
				
			};
			var BarChart = new Chart(document.getElementById('barChart').getContext('2d')).Bar(data);
	/* --------------- Line Chart ------------------- */
		var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            
            fillColor: "#989898",
            strokeColor: "blue",
            pointColor: "red",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        }
		]
		};
		var LineChart = new Chart(document.getElementById('lineChart').getContext('2d')).Line(data);