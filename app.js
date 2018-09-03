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
    let nameContains = employeeList[i].name;
   
    if (nameMatch === namePrompt) {
      //update  object if name matches
      
    }
    }
   
}

else if (command === 'add') {
  
render(employeeList);

  /*
  const namePrompt = prompt('What is your name?');
  const officePrompt = prompt('What is your office number?');
  const phonePrompt = prompt('What is your phone number?');
   */
  
  /*   Code works in console log but displays weird [object, Object]
    everywhere else
    
    let newObject = [
    {
    name: namePrompt,
    officeNum: officePrompt,
    phoneNum: phonePrompt
    }
  ];

  employeeList.push(newObject);
  document.write(employeeList);
*/


}
else if (command === 'delete') {
    
  const namePrompt = prompt('What is your name?');
  for (i = 0; i < employeeList.length; i++) {
    let nameContains = employeeList[i].name;
          
    if (nameContains.includes(namePrompt)) {
      let index = function () 
      {return employeeList[i].findIndex(namePrompt); }
      employeeList.splice(index, 1);
    }
    render(employeeList);
    }
   
}

