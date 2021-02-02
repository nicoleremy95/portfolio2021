import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Carousel from 'react-material-ui-carousel';
import Featured from '../Featured/Featured';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
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
import PersonIcon from '@material-ui/icons/Person';
import mongodbIcon from '@iconify-icons/simple-icons/mongodb';
import mysqlIcon from '@iconify-icons/grommet-icons/mysql';
import antDesignOutlined from '@iconify-icons/ant-design/ant-design-outlined';
import handlebarsIcon from '@iconify-icons/logos/handlebars';
import materializecssIcon from '@iconify-icons/logos/materializecss';
import budgetTrackerImg from "../../images/budgetTracker.png";
import employeeDirectoryImg from "../../images/employeeDirectory.png";
import planitImg from "../../images/planit.png";
import pawsLifeImg from "../../images/pawslife.png";
import drinkMeImg from "../../images/drinkme.png"
import employeeProfilesImg from "../../images/employeeProfilesImg.png";
import passwordGeneratorImg from "../../images/passwordGenerator.png";
import codingAssesmentImg from "../../images/codingAssesment.png";
import bxlJquery from '@iconify-icons/bx/bxl-jquery';


const useStyles = makeStyles((Theme) =>
  createStyles({
    tech: {
      margin: "2%vw",
    },
    portfoliocard: {
      marginTop: '10vh'
    }
  }),
);
const featuredArr =[
  {
    name: "PLANiT",
      img: planitImg,
    featured: true,
    tech: [
      <FontAwesomeIcon icon={faCss3} size="2x"/> ,
      // <FontAwesomeIcon icon={faHtml5} size="2x" /> ,
      <FontAwesomeIcon icon={faJs} size="2x"/> ,
      <FontAwesomeIcon icon={faReact} size="2x" /> ,
      <FontAwesomeIcon icon={faNode} size="2x" /> ,
      <FontAwesomeIcon icon={faNpm} size="2x"/> ,
      <Icon className="Portfolio-tech-icons" icon={antDesignOutlined}  height="30"/>,
      <Icon className="Portfolio-tech-icons" icon={mongodbIcon}  height="30"/>,
    ],
     type: 5
      // <Badge badgeContent={5} color="secondary">
      //   <PeopleAltIcon/>
      // </Badge>
      ,
     role: "Project Manager",
     work: "frontend design · backend logic · voting · comments · photo upload · user authentication",
     description: "Colloborative travel planning app",
     info: "PLANiT is a collaborative travel planning app for groups looking to make the most of their next adventure. Users can create a trip, invite guests, vote on travel plans, and render/email a final itinerary. Along with a chat room unique to each map, communicating has never been more accessible and centralized. Whether you are trying coordinate plans with a group or are just having fun dreaming about your next vacation, planning a trip has never been easier or as stress free! PLANiT - connecting our world to your plan!",
     githubFront: "https://github.com/zackdeacon/planit-frontend",
     githubBack: "https://github.com/zackdeacon/planit-backend",
     app: "https://travelplanit.herokuapp.com/",
   } ,
   {
    name: "PawsLife",
     img: pawsLifeImg,
     featured: true,
    tech: [
     <FontAwesomeIcon icon={faCss3} size="2x"/> ,
     <FontAwesomeIcon icon={faJs} size="2x"/> ,
     // <FontAwesomeIcon icon={faHtml5} size="2x" /> ,
     <FontAwesomeIcon icon={faNode} size="2x" /> ,
     // <FontAwesomeIcon icon={faNpm} size="2x"/> ,
     <Icon icon={materializecssIcon}  height="30"/>,
     <Icon icon={mysqlIcon}  height="30"/>,
     <Icon icon={handlebarsIcon}  width="30"/>,
        
    ],
    type: 4
      //  <Badge badgeContent={4} color="secondary">
      //    <PeopleAltIcon/>
      //  </Badge>
    ,
    role: "Frontend Lead",
    work: "frontend design · backend logic · API routes · CRUD Functionality",
    description: "Social community website of pet owners and pet service providers",
    info: "PawsLife is a social community website of pet owners and pet service providers. Pawslife gives the user the ability to create an account as a pet owner of a dog or cat, and or a pet provider for dogs or cats. As an owner, a user can keep track of all of their pets for which they can book provider services. As a provider, a user can post pet care services for other members of pawslife to book. This application has full CRUD for user accounts and CRD for pets and posts.",
    github: "https://github.com/rickyg218/PawsLIfe-",
    app: "https://pawslife.herokuapp.com/"
  },

]
const portfolioArr= [
    {
      name: "PLANiT",
        img: planitImg,
      featured: true,
      tech: [
        <FontAwesomeIcon icon={faCss3} size="2x"/> ,
        // <FontAwesomeIcon icon={faHtml5} size="2x" /> ,
        <FontAwesomeIcon icon={faJs} size="2x"/> ,
        <FontAwesomeIcon icon={faReact} size="2x" /> ,
        <FontAwesomeIcon icon={faNode} size="2x" /> ,
        <FontAwesomeIcon icon={faNpm} size="2x"/> ,
        <Icon className="Portfolio-tech-icons" icon={antDesignOutlined}  height="30"/>,
        <Icon className="Portfolio-tech-icons" icon={mongodbIcon}  height="30"/>,
      ],
       type: 5
        // <Badge badgeContent={5} color="secondary">
        //   <PeopleAltIcon/>
        // </Badge>
        ,
       role: "Project Manager",
       work: "frontend design · backend logic · voting · comments · photo upload · user authentication",
       description: "Colloborative travel planning app",
       info: "PLANiT is a collaborative travel planning app for groups looking to make the most of their next adventure. Users can create a trip, invite guests, vote on travel plans, and render/email a final itinerary. Along with a chat room unique to each map, communicating has never been more accessible and centralized. Whether you are trying coordinate plans with a group or are just having fun dreaming about your next vacation, planning a trip has never been easier or as stress free! PLANiT - connecting our world to your plan!",
       githubFront: "https://github.com/zackdeacon/planit-frontend",
       githubBack: "https://github.com/zackdeacon/planit-frontend",
       app: "https://travelplanit.herokuapp.com/",
     } ,

     {
       name: "PawsLife",
        img: pawsLifeImg,
        featured: true,
       tech: [
        <FontAwesomeIcon icon={faCss3} size="2x"/> ,
        <FontAwesomeIcon icon={faJs} size="2x"/> ,
        // <FontAwesomeIcon icon={faHtml5} size="2x" /> ,
        <FontAwesomeIcon icon={faNode} size="2x" /> ,
        // <FontAwesomeIcon icon={faNpm} size="2x"/> ,
        <Icon icon={materializecssIcon}  height="30"/>,
        <Icon icon={mysqlIcon}  height="30"/>,
        <Icon icon={handlebarsIcon}  width="30"/>,
           
       ],
       type:  4
          // <Badge badgeContent={4} color="secondary">
          //   <PeopleAltIcon/>
          // </Badge>
        ,
       role: "Frontend Lead",
       work: "frontend design · backend logic · API routes · CRUD Functionality",
       description: "Social community website of pet owners and pet service providers",
       info: "PawsLife is a social community website of pet owners and pet service providers. Pawslife gives the user the ability to create an account as a pet owner of a dog or cat, and or a pet provider for dogs or cats. As an owner, a user can keep track of all of their pets for which they can book provider services. As a provider, a user can post pet care services for other members of pawslife to book. This application has full CRUD for user accounts and CRD for pets and posts.",
       github: "https://github.com/rickyg218/PawsLIfe-",
       app: "https://pawslife.herokuapp.com/"
     },
     {
       name: "drinkMe",
        img: drinkMeImg,
       tech: [
        <FontAwesomeIcon icon={faCss3} size="2x"/> ,
        <FontAwesomeIcon icon={faJs}  size="2x" /> ,
        <FontAwesomeIcon icon={faHtml5} size="2x" /> ,
        <FontAwesomeIcon icon={faBootstrap} size="2x" /> ,

       ],
       type: 4
          // <Badge badgeContent={4} color="secondary">
          //   <PeopleAltIcon/>
          // </Badge>
          
        ,
       role: "Project Manager",
       work: "backend lead · beer routes",
       description: "Find cocktail recipes, nearby grocery stores for ingredients, and local breweries near you!",
       info: "Don’t feel like going out to a bar or restaurant with your friends to grab a drink? Go ahead and invite them over! No stress if you don’t know what drink to make or how to make it, drinkME allows you to find the drink that fits the mood by giving you the ability to generate recipes on the fly. If you're not in the mood for cocktails, we can also help you find the perfect beer and local brewery so you can be on your way to a night full of memories! This application uses four APIs; Google , Punk, Open Brewery, and CocktailDB. For style, we used Materialize.",
       github: "https://github.com/derek-watson14/drinkME",
       app: "https://derek-watson14.github.io/drinkME/"
     },
     {
       name: "Budgets",
        img: budgetTrackerImg,
       tech: [
         //TODO: 
          <FontAwesomeIcon icon={faCss3} size="2x"/> ,
          <FontAwesomeIcon icon={faHtml5} size="2x" /> ,
          <FontAwesomeIcon icon={faJs} size="2x"/> ,
          <FontAwesomeIcon icon={faNode} size="2x" /> ,
          <FontAwesomeIcon icon={faNpm} size="2x"/> ,
          <Icon className="Portfolio-tech-icons" icon={mongodbIcon}  height="30"/>,
          <Icon className="Portfolio-tech-icons" icon={bxlJquery}  height="30"/>,
          

       ],
       type: <PersonIcon/>,
       role: null,
       description: "Online and offline budget tracker application",
       info: "Budgets is an application that allows the user to update their budget offline and online. The user has the ability to add deposits and add expenses both online and offline. This ability is from the manifest.webmanifest.json and the service worker file. This application is deployed to Heroku. If you go to the deployed site, you can click the app install to install the application to your computer.",
       github: "https://github.com/nicoleremy95/budget-tracker",
       app: "https://ner-budget-tracker.herokuapp.com/"
     },
     {
       name: "Directory",
       img: employeeDirectoryImg,
       tech: [
         //TODO: api, 
          <FontAwesomeIcon icon={faCss3} size="2x"/> ,
          <FontAwesomeIcon icon={faHtml5} size="2x" /> ,
          <FontAwesomeIcon icon={faJs} size="2x"/> ,
          <FontAwesomeIcon icon={faNpm} size="2x" /> ,
          <FontAwesomeIcon icon={faReact} size="2x" /> ,

      
       ],
       type:  <PersonIcon/>,
       role: null,
       description: "React accessing a public random user directory api",
       info: "This application is an employee directory made with React accessing a public random user directory api.The user can sort and filter through the employees. This application is deployed to Heroku. If you go to the deployed site, you can click the app install to install the application to your computer.",
       github: "https://github.com/nicoleremy95/employeedirectory",
       app: "https://serene-shelf-43817.herokuapp.com/"
     },
     {
       name: "Employees",
        img: employeeProfilesImg,
       tech: [
          //TODO: cli,
          <FontAwesomeIcon icon={faNode} size="2x" /> ,
          <FontAwesomeIcon icon={faNpm} size="2x"/> ,
            
       ],
       type:  <PersonIcon/>,
       role: null,
       description: "CLI creates a website with employee information",
       info: "'Employees' manages a company's employees using node and MySQL through a command-line application using the Inquirer package. The user is prompted to choose from a list of options to either view, add, or update either an employee, role, or department. Please note, to run on your computer, please update the 'password' on line 27 of the index.js file to your MySQL password. Run the program in terminal with node app.js and make sure to install inquirer",
       github: "https://github.com/nicoleremy95/template_engine_employee_summary",
       app: "https://drive.google.com/file/d/1QwCm1s24y60vBc7kDLJNDbWrIdjgMnMF/view?usp=sharing",
     },
     {
       name: "Assesment",
        img: codingAssesmentImg,
       tech: [
        
          <FontAwesomeIcon icon={faCss3} size="2x"/> ,
          <FontAwesomeIcon icon={faHtml5} size="2x" /> ,
          <FontAwesomeIcon icon={faJs} size="2x"/> ,
          <FontAwesomeIcon icon={faBootstrap} size="2x" /> ,

       ],
       type:  <PersonIcon/>,
       role: null,
       description: "60 second coding assesment using Javascript.",
       info: "You have 60 seconds to complete the quiz. When you answer a question right, you will gain a point, if you answer the question incorrectly, you lose 5 seconds from your time. The quiz also shows your quiz progress and the time left; both of these elements clear out and go back to their starting values when the record score button is clicked. This quiz uses local storage to keep track of the user's score.",
       github: "https://github.com/nicoleremy95/hw4_coding_assesment",
       app: "https://nicoleremy95.github.io/hw4_coding_assesment/"
     },
     {
       name: "Passwords",
        img: passwordGeneratorImg,
       tech: [
          <FontAwesomeIcon icon={faCss3} size="2x"/> ,
          <FontAwesomeIcon icon={faHtml5} size="2x" /> ,
          <FontAwesomeIcon icon={faJs} size="2x"/> ,
          <FontAwesomeIcon icon={faBootstrap} size="2x" /> ,

       
       ],
       type:  <PersonIcon/>,
       role: null,
       description: "Random password generator",
       info: "'Passwords' is a password generator that will randomly choose a password given set criteria from the user. This will allow the user to use the resulting password to protect their sensitive data. Upon specified categories, you will have a genereated password between 8-28 characters.",
       github: "https://github.com/nicoleremy95/hw3_passwordgenerator",
       app: "https://nicoleremy95.github.io/hw4_coding_assesment/"
     },
    
   ]
export default function Portfolio() {
  const classes = useStyles();
  
    return (
        <div>
          <div>
            <Featured/>
          </div> 
          <div className={classes.portfoliocard}>
            {portfolioArr.map(project =>(
            
              <PortfolioCard 
                name={project.name} 
                featured={project.featured}
                info={project.info}
                work={project.work}
                type={project.type}
                img={project.img} 
                role={project.role}
                tech={project.tech.map(thing =>(
                  <span
                    className={classes.tech}>{thing}
                  </span>
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
