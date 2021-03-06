const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];

const command = prompt('What do you command?');

if (command === 'print') {
    for (i = 0; i < employeeList.length; i++) {
      render(employeeList[i].name);
      render(employeeList[i].officeNum);
      render(employeeList[i].phoneNum);
    }
}
else if  (command === 'verify')  { 
   const namePrompt = prompt('What is your name?');
   let message = '';
   for (i = 0; i < employeeList.length; i++) {
    let nameMatch = employeeList[i].name;
          
    if (nameMatch === namePrompt) {
      render('true');
    }
    else {
      render('false');
    }
  }
 
}
else if (command === 'lookup') {
  const namePrompt = prompt('What is your name?');
  for (i = 0; i < employeeList.length; i++) {
    let nameMatch = employeeList[i].name;
          
    if (nameMatch === namePrompt) {
      render(employeeList[i].name);
      render(employeeList[i].officeNum);
      render(employeeList[i].phoneNum);
    }
} }
else if (command === 'contains') {
  const stringPrompt = prompt('What is your string?');
  let givenString = 'Sar';
  for (i = 0; i < employeeList.length; i++) {
    let nameContains = employeeList[i].name;
          
    if (nameContains.includes(givenString)) {
      render(employeeList[i].name);
      render(employeeList[i].officeNum);
      render(employeeList[i].phoneNum);
    }
    }

}
else if (command === 'update')  {
 
  const namePrompt = prompt('What is your name?');
  const fieldPrompt = prompt('What is your field?');
  const valuePrompt = prompt('What is your value?');
  
  for (i = 0; i < employeeList.length; i++) {
    let nameMatch = employeeList[i].name;
          
    if (nameMatch === namePrompt) {
     employeeList[i][fieldPrompt] = valuePrompt;

    }
}

for (i = 0; i < employeeList.length; i++) {
  render(employeeList[i].name);
  render(employeeList[i].officeNum);
  render(employeeList[i].phoneNum);
}
   
}

else if (command === 'add') {
  const namePrompt = prompt('What is your name?');
  const officePrompt = prompt('What is your office number?');
  const phonePrompt = prompt('What is your phone number?');
 

  let newEmployee = new Object();

    newEmployee.name = namePrompt;
    newEmployee.officeNum = officePrompt;
    newEmployee.phoneNum = phonePrompt;
    employeeList.push(newEmployee);
 
   for (i = 0; i < employeeList.length; i++) {
    render(employeeList[i].name);
    render(employeeList[i].officeNum);
    render(employeeList[i].phoneNum);
  }
  

}
else if (command === 'delete') {
const namePrompt = prompt('What is your name?');
let findIndex = function() {
  return employeeList.name === namePrompt;
};
let returnIndex = employeeList.findIndex(findIndex);
employeeList.splice(returnIndex, 1);
  

for (i = 0; i < employeeList.length; i++) {
  render(employeeList[i].name);
  render(employeeList[i].officeNum);
  render(employeeList[i].phoneNum);
} 
}

else if (command === 'greet') {
  const namePrompt = prompt('What is your name?');
  let greeting = 'Why, hello there';
  document.write(greeting + "  " + namePrompt + "!");
} 

