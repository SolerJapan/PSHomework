

$(() => {
    $('form').on('click', (event) => {
        
		event.preventDefault();
        const userInput = $(event.target).val();
        let userInput2 = $('input[type="number"]').val();
		console.log(userInput)     
		if (userInput2 ==""){
		    userInput2 = 10;
		}
		
	if($(event.target).val() =="MANHATTAN"||$(event.target).val() =="BRONX"||
	   $(event.target).val() =="BROOKLYN"||$(event.target).val() =="QUEENS"||
	   $(event.target).val() =="STATEN ISLAND")
		{
			$('ol').html(``)
		}
		
		console.log(userInput2)
        const promise = $.ajax({
            url:`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=` + userInput
        })  
        
		
		    promise.then(
            (data) => {
				console.log(data)
			    var count = 0;
				for (let index = 0; index < data.length; index++) {
					if (count < Number(userInput2)) {
					
					$('ol').append(`
						<li =main>
						<strong></strong><span id="borough">${
						data[index].borough
						}</span> :						
						<strong></strong><span id="descriptor">${
						data[index].descriptor
						}</span>
						<br>
						</li>
						</section></span></div>
                        <input type="submit" value="NYPD Response" onclick="response(${count.toString()})" class="btn btn-warning">
						<div ><strong>Resolution description</strong>:<span>${
						data[index].resolution_description
						}</span></div>
						
						<hr>
				    `);
					count++;
					console.log(data[index]);
					}
				}
			},
            () => {
                console.log('bad request')
            }
        );
    })
})
function response(x) {
  var myNodelist = document.querySelectorAll('div');
  console.log(x);
  $(myNodelist[x]).animate(
    {
      height: 'toggle',
    },
    'slow'
  );
}
function resetForms() {
    $('ol').clear
}

function myReset() {
  location.reload(true);
}