const findTheOldest = function (people) {
  // Add 'age' property to each person object in array

  people.forEach((person) => {
    if ("yearOfDeath" in person) {
      person["age"] = person.yearOfDeath - person.yearOfBirth;
    } else {
      person["age"] = new Date().getFullYear() - person.yearOfBirth;
    }
  });
  // Sort oldest to youngest

  people.sort((a, b) => {
    if (a.age > b.age) {
      return -1;
    } else {
      return 1;
    }
  });
  // Remove added property
  
  people.forEach((person) => {
    delete person.age;
  });

  return people[0].name;
};

// Do not edit below this line
module.exports = findTheOldest;
