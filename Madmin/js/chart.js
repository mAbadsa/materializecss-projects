window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
		title:{
			text: "Daily Visitors"              
        },
        axisY: {
            includeZero: false
        },
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "line",
			dataPoints: [
				{ label: "sat",  y: 10  },
				{ label: "sun", y: 15  },
				{ label: "mon", y: 25  },
				{ label: "tus",  y: 12  },
				{ label: "wen",  y: 18  },
				{ label: "thr",  y: 18  },
				{ label: "fri",  y: 55  }
			]
		}
		]
    });
    setTimeout(() => {
        chart.render();
    }, 1000);
}