let myResume =[{
    "personal_details": {
      "name": "Harshavardhan Rajinikanth",
      "email": "rharshva@gmail.com",
      "phone": 9865956418,
      "degree": "B.Tech"
      
    },
    "education": 
      {
        "institution": "Sri Krishna College of Engineering and Technology",
        "department": "Information Technology",
        "studyType": "Full-Time",
        "batch_start_year": 2016,
        "batch_end_year": 2020,
        "cgpa": 8.27
      },

    "skills": 
      {
        "programming_languages": "Python, Java, Javascript, MySQL, CSS, GCP, R, C, C++",
        "level": "Intermediate",
        "project": 
          "Data Transfer using LiFi Technology, Drowsiness Driver Detection, Blood Bank Application"
        
      },

    "interests": 
      {
        "hobbies": "Numismatics, Philately, Target Shooting, Origami",
      },

      "languages": 
      {
        "languages_known": "English, Tamil, Kannada",
      }
    
  }];




  //For Loop

for(let i = 0 ; i < myResume.length ; i++){
  var Access = myResume[i];

  console.log(Access.personal_details.name);
  console.log(Access.education);
  console.log(Access.skills.project);
}

o/p:
Harshavardhan Rajinikanth
{
  institution: 'Sri Krishna College of Engineering and Technology',
  department: 'Information Technology',
  studyType: 'Full-Time',
  batch_start_year: 2016,
  batch_end_year: 2020,
  cgpa: 8.27
}
Data Transfer using LiFi Technology, Drowsiness Driver Detection, Blood Bank Application




//For Each Loop

let Access = Object.values(myResume);
//console.log(Access);

Access.forEach((key) => console.log(key));

o/p:
{
  personal_details: {
    name: 'Harshavardhan Rajinikanth',
    email: 'rharshva@gmail.com',
    phone: 9865956418,
    degree: 'B.Tech'
  },
  education: {
    institution: 'Sri Krishna College of Engineering and Technology',
    department: 'Information Technology',
    studyType: 'Full-Time',
    batch_start_year: 2016,
    batch_end_year: 2020,
    cgpa: 8.27
  },
  skills: {
    programming_languages: 'Python, Java, Javascript, MySQL, CSS, GCP, R, C, C++',  
    level: 'Intermediate',
    project: 'Data Transfer using LiFi Technology, Drowsiness Driver Detection, Blood Bank Application'
  },
  interests: { hobbies: 'Numismatics, Philately, Target Shooting, Origami' },       
  languages: { languages_known: 'English, Tamil, Kannada' }
}



//For of Loop

let Access = Object.values(myResume);
for(elements of Access){
    console.log(elements);
}

o/p:
{
  personal_details: {
    name: 'Harshavardhan Rajinikanth',
    email: 'rharshva@gmail.com',
    phone: 9865956418,
    degree: 'B.Tech'
  },
  education: {
    institution: 'Sri Krishna College of Engineering and Technology',
    department: 'Information Technology',
    studyType: 'Full-Time',
    batch_start_year: 2016,
    batch_end_year: 2020,
    cgpa: 8.27
  },
  skills: {
    programming_languages: 'Python, Java, Javascript, MySQL, CSS, GCP, R, C, C++',  
    level: 'Intermediate',
    project: 'Data Transfer using LiFi Technology, Drowsiness Driver Detection, Blood Bank Application'
  },
  interests: { hobbies: 'Numismatics, Philately, Target Shooting, Origami' },       
  languages: { languages_known: 'English, Tamil, Kannada' }
}



//For in Loop

for(var key in myResume){
    console.log(myResume[key]);
  }
o/p:
{
  personal_details: {
    name: 'Harshavardhan Rajinikanth',
    email: 'rharshva@gmail.com',
    phone: 9865956418,
    degree: 'B.Tech'
  },
  education: {
    institution: 'Sri Krishna College of Engineering and Technology',
    department: 'Information Technology',
    studyType: 'Full-Time',
    batch_start_year: 2016,
    batch_end_year: 2020,
    cgpa: 8.27
  },
  skills: {
    programming_languages: 'Python, Java, Javascript, MySQL, CSS, GCP, R, C, C++',  
    level: 'Intermediate',
    project: 'Data Transfer using LiFi Technology, Drowsiness Driver Detection, Blood Bank Application'
  },
  interests: { hobbies: 'Numismatics, Philately, Target Shooting, Origami' },       
  languages: { languages_known: 'English, Tamil, Kannada' }
}