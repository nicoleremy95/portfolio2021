import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//Brands Style: fas
import { faHome } from "@fortawesome/free-solid-svg-icons";
//Brands Style : fab
import { 
  faJs, 
  faCss3,
  faReact,
  faNode,
  faNpm,
  faHtml5,
  faBootstrap
} from '@fortawesome/free-brands-svg-icons';
import { Icon, InlineIcon } from '@iconify/react';

import mongodbIcon from '@iconify-icons/simple-icons/mongodb';
import mysqlIcon from '@iconify-icons/grommet-icons/mysql';
import antDesignOutlined from '@iconify-icons/ant-design/ant-design-outlined';
import handlebarsIcon from '@iconify-icons/logos/handlebars';
import materializecssIcon from '@iconify-icons/logos/materializecss';



const useStyles = makeStyles((Theme) =>
  createStyles({
    tech: {
      // display: 'flex',
      margin: "20px"
      // justifyContent: 'space-between'
    }
  }),
);

const portfolioArr= [
    {
      name: "PLANiT",
  //    img: planitImg,
      tech: [
        <FontAwesomeIcon icon={faCss3} size="3x"/> ,
        <FontAwesomeIcon icon={faHtml5} size="3x" /> ,
        <FontAwesomeIcon icon={faJs} size="3x"/> ,
        <FontAwesomeIcon icon={faReact} size="3x" /> ,
        <FontAwesomeIcon icon={faNode} size="3x" /> ,
        <FontAwesomeIcon icon={faNpm} size="3x"/> ,
        <Icon className="Portfolio-tech-icons" icon={antDesignOutlined}  height="50"/>,
        <Icon className="Portfolio-tech-icons" icon={mongodbIcon}  height="50"/>,
      ],
       type: "Group Project: 5",
       role: "Project Manager",
       work: "Backend & Frontend: voting, comments, photo upload, user authentication",
       description: "Collaborative travel planning app",
       info: "PLANiT is a collaborative travel planning app for groups looking to make the most of their next adventure. Users can create a trip, invite guests, vote on travel plans, and render/email a final itinerary. Along with a chat room unique to each map, communicating has never been more accessible and centralized. Whether you are trying coordinate plans with a group or are just having fun dreaming about your next vacation, planning a trip has never been easier or as stress free! PLANiT - connecting our world to your plan!",
       githubFront: "https://github.com/zackdeacon/planit-frontend",
       githubBack: "https://github.com/zackdeacon/planit-frontend",
       app: "https://travelplanit.herokuapp.com/",
     } ,

     {
       name: "PawsLife",
    // //    img: pawsLifeImg,
       tech: [
        <FontAwesomeIcon icon={faCss3} size="3x"/> ,
        <FontAwesomeIcon icon={faJs} size="3x"/> ,
        <FontAwesomeIcon icon={faHtml5} size="3x" /> ,
        <FontAwesomeIcon icon={faNode} size="3x" /> ,
        <FontAwesomeIcon icon={faNpm} size="3x"/> ,
        <Icon icon={materializecssIcon}  height="50"/>,
        <Icon icon={mysqlIcon}  height="50"/>,
        <Icon icon={handlebarsIcon}  width="50"/>,
           
       ],
       type: "Group Project: 4",
       role: "Frontend Lead",
       work: "Routes, Front End Design, CRUD Functionality",
       description: "Social community website of pet owners and pet service providers",
       info: "PawsLife is a social community website of pet owners and pet service providers. Pawslife gives the user the ability to create an account as a pet owner of a dog or cat, and or a pet provider for dogs or cats. As an owner, a user can keep track of all of their pets for which they can book provider services. As a provider, a user can post pet care services for other members of pawslife to book. This application has full CRUD for user accounts and CRD for pets and posts.",
       github: "https://github.com/rickyg218/PawsLIfe-",
       app: "https://pawslife.herokuapp.com/"
     },
     {
       name: "drinkMe",
    // //    img: drinkMeImg,
       tech: [
        <FontAwesomeIcon icon={faCss3} size="3x"/> ,
        <FontAwesomeIcon icon={faJs}  size="3x" /> ,
        <FontAwesomeIcon icon={faHtml5} size="3x" /> ,
        <FontAwesomeIcon icon={faBootstrap} size="3x" /> ,

       ],
       type: "Group Project: 4",
       role: "Project Manager",
       work: "Backend lead",
       description: "Find cocktail recipes, nearby grocery stores for ingredients, and local breweries near you!",
       info: "Don’t feel like going out to a bar or restaurant with your friends to grab a drink? Go ahead and invite them over! No stress if you don’t know what drink to make or how to make it, drinkME allows you to find the drink that fits the mood by giving you the ability to generate recipes on the fly. If you're not in the mood for cocktails, we can also help you find the perfect beer and local brewery so you can be on your way to a night full of memories! This application uses four APIs; Google , Punk, Open Brewery, and CocktailDB. For style, we used Materialize.",
       github: "https://github.com/derek-watson14/drinkME",
       app: "https://derek-watson14.github.io/drinkME/"
     },
     {
       name: "Budgets",
    // //    img: budgetTrackerImg,
       tech: [
         //TODO: HTML, jquery, mongodb, node, npm

       ],
       type: null,
       role: null,
       description: "Online and offline budget tracker application",
       info: "Budgets is an application that allows the user to update their budget offline and online. The user has the ability to add deposits and add expenses both online and offline. This ability is from the manifest.webmanifest.json and the service worker file. This application is deployed to Heroku. If you go to the deployed site, you can click the app install to install the application to your computer.",
       github: "https://github.com/nicoleremy95/budget-tracker",
       app: "https://ner-budget-tracker.herokuapp.com/"
     },
     {
       name: "Directory",
    // //    img: employeeDirectoryImg,
       tech: [
         //TODO: react, api, npm
      
       ],
       type: null,
       role: null,
       description: "React accessing a public random user directory api",
       info: "This application is an employee directory made with React accessing a public random user directory api.The user can sort and filter through the employees. This application is deployed to Heroku. If you go to the deployed site, you can click the app install to install the application to your computer.",
       github: "https://github.com/nicoleremy95/employeedirectory",
       app: "https://serene-shelf-43817.herokuapp.com/"
     },
     {
       name: "Employees",
    // //    img: employeeProfilesImg,
       tech: [
          //TODO: node, cli, npm, 
            
       ],
       type: null,
       role: null,
       description: "This CLI creates a website with employee information. Run the program in terminal with node app.js and make sure to install inquirer",
       info: "This application manages a company's employees using node and MySQL through a command-line application using the Inquirer package. The user only has to type node index.js in the terminal to begin the application. After this, the user is prompted to choose from a list of options to either view, add, or update either an employee, role, or department. The application already has a built-in data table and table data for reference found in the schema.sql and seeds.sql file respectively; this should be input into MySQL.To handle edge cases, I added a validate property on each inqurier prompt object validating either a number, string, or empty input. There is also a recursive function that continues to ask the user questions until they choose EXIT. Please note, to run on your computer, please update the 'password' on line 27 of the index.js file to your MySQL password.",
       github: "https://github.com/nicoleremy95/template_engine_employee_summary",
       app: "https://drive.google.com/file/d/1QwCm1s24y60vBc7kDLJNDbWrIdjgMnMF/view?usp=sharing",
     },
     {
       name: "Assesment",
    // //    img: codingAssesmentImg,
       tech: [
         //TODO: html, javascript, bootstrap
       ],
       type: null,
       role: null,
       description: "60 second coding assesment using Javascript.",
       info: "You have 60 seconds to complete the quiz. When you answer a question right, you will gain a point, if you answer the question incorrectly, you lose 5 seconds from your time. The quiz also shows your quiz progress and the time left; both of these elements clear out and go back to their starting values when the record score button is clicked.I have made this quiz dynamic through JavaScript. It features only one HTML and elements that appear and disappear with the help of CSS display, and appending new elements to the page with Javascript. The quiz is also mobile responsive and adapts to the users screen size.This quiz also uses local storage to keep track of the user's score. The quiz then appends the user's score to the top of the page.",
       github: "https://github.com/nicoleremy95/hw4_coding_assesment",
       app: "https://nicoleremy95.github.io/hw4_coding_assesment/"
     },
     {
       name: "Passwords",
    // //    img: passwordGeneratorImg,
       tech: [
        //  <Icon className="Portfolio-tech-icons" icon={html5} height="25" />,          
        //  <Icon className="Portfolio-tech-icons" icon={javascriptIcon} height="25"/>,          
        //  <Icon className="Portfolio-tech-icons" icon={bootstrapIcon} height="25"/>
       ],
       type: null,
       role: null,
       description: "Random password generator that generates a password between 8-128 characters",
       info: "In this project, I have created a password generator that will randomly choose a password given set criteria from the user. This will allow the user to use the resulting password to protect their sensitive data.When you click the generate password button, it will prompt you to specify the length between 8-128 characters. If you do not enter a value in this range, I have an alert that will tell the user it is not a valid answer, and while loop that will repeat the question.After this, it will ask you to confirm yes or cancel to the following questions; do you want to use upper case characters?, do you want to use lowercase characters?, do you want to use numbers?, do you want to use symbols? Each of these questions results in an array of values that will ultimately be put into the function to create the password. If the user answers 'cancel' to all of these questions, an alert will tell the user to select at least one of characters, and a while loop will bring them to the beginning of the confirm section again.The resulting array will then by mixed, trimmed to the length specified by the user, and then the resulting array should be transferred into a string for the generate password function.",
       github: "https://github.com/nicoleremy95/hw3_passwordgenerator",
       app: "https://nicoleremy95.github.io/hw4_coding_assesment/"
     },
    
   ]
export default function Portfolio() {
  const classes = useStyles();
  
    return (
        <div>
            <div className="Portfolio-cards">
            {portfolioArr.map(project =>(
              <PortfolioCard 
                name={project.name} 
                info={project.info}
                work={project.work}
                type={project.type}
                img={project.img} 
                role={project.role}
                // tech={project.tech}
                tech={project.tech.map(thing =>(
                  <span
                   className={classes.tech}>{thing}
                  </span>
                    // <div className={classes.tech}>{thing}</div>
                  
                ))}
                description={project.description}
                github={project.github}
                githubFront={project.githubFront}
                githubBack={project.githubBack}
                app={project.app}
              />
            ))}
        </div>
        </div>
    )
}
