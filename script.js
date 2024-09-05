const resume = {
    "About": [{
        "Name": "Sujitha R",
        "Email-Id": "learningsuji@gmail.com",
        "Address": "Kast nagar, Bangalore",
        "phone number": "776078512"
    }],
    "Education": [

        {
            "Bachelors": {
                "Degree": "Bsc, ComputerScience",
                "year": "2013 - 2016",
                "university": "Bharathidasan University",
                "CGP": "7.8"

            }
        },
        
        {
            "Masters": {
                "Degree": "Masters of Computer Application(MCA)",
                "year": "2016 - 2018",
                "university": "AnnaUniversity",
                "CGP": "8.2"
            }
        }

    ],

    "skills":
    {
        "Programming languages": "python,javascript",
        "Others": "Html,CSS,SQL"

    }
    ,
    "Languages": [{ 1: "Tamil" }, { 2: "English" }],
    "Profile": [{
        "Linkedin": "https://www.linkedin.com/in/sujitha-rajakumar-a7baab18b/"
    },
    { "github": "https://github.com/Sujibalaji" }]

}
//For loop

for (var i = 0; i < resume.About.length; i++) {
    console.log(resume.About[i]);
}
//for in
for (let id in resume.Profile) {
    console.log(resume.Profile[id]);
}

//for of

for (let education of resume.Education) {
    console.log(education);
}
//for Each
resume.Languages.forEach((Languages) => console.log(Languages));