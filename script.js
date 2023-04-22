const employees = [
	{ id: 1, name: "John", age: 18, profession: "developer" },
	{ id: 2, name: "Jack", age: 20, profession: "developer" },
	{ id: 3, name: "Karen", age: 19, profession: "admin" },
  ];
  
  const selectInput = document.querySelector("#profession-select");
  const filterBtn = document.querySelector("#filter-btn");
  const employeeCardsDiv = document.querySelector("#employee-cards");
  const nameInput = document.querySelector("#name");
  const professionInput = document.querySelector("#profession");
  const ageInput = document.querySelector("#age");
  const name = nameInput.value;
  const profession = professionInput.value;	
  const age = ageInput.value;
  const addUserBtn = document.querySelector('#add-user-btn');

  addUserBtn.addEventListener('click', handleAddUser);
  
  function handleAddUser() {
	if (!name || !profession || !age) {
	  alert('Please fill out all fields.');
	  return;
	}
  
	const newEmployee = {
	  id: employees.length + 1,
	  name,
	  profession,
	  age
	};
  
	employees.push(newEmployee);

	nameInput.value = '';
	professionInput.value = '';
	ageInput.value = '';
  
	alert('Employee added successfully!');
  }
  
  
  filterBtn.addEventListener("click", function() {
	const selectedValue = selectInput.value;
	
	if (selectedValue === "") {
	  alert("Please select a profession before filtering");
	  return;
	}
	
	const filteredEmployees = employees.filter(function(employee) {
	  return employee.profession === selectedValue;
	});
	
	displayFilteredEmployees(filteredEmployees);
  });
  
  function displayFilteredEmployees(filteredEmployees) {
	let employeeCardsHtml = "";
	
	filteredEmployees.forEach(function(employee) {
	  const employeeCardHtml = `
		<div class="carddiv">
		  <div>${employee.id}.</div> 
		  <div>Name:${employee.name}</div> 
		  <div>Profession:${employee.profession}</div> 
		  <div>Age:${employee.age}</div>
		</div>
	  `;
	  
	  employeeCardsHtml += employeeCardHtml;
	});
	
	employeeCardsDiv.innerHTML = employeeCardsHtml;
  }



  
  