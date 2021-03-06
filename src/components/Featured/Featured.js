import React from 'react'
import Carousel from 'react-material-ui-carousel';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Logo from '../Logo/Logo';
import Tooltip from '@material-ui/core/Tooltip';
import GitHubIcon from '@material-ui/icons/GitHub';
import DevicesIcon from '@material-ui/icons/Devices';
import LargeLinksExternal from '../LargeLinksExternal/LargeLinksExternal';
import { Container } from '@material-ui/core';
import planitThumbnail from '../../images/planitThumbnail.png'
import pawslifeThumbnail from '../../images/pawslifeThumbnail.png'

const featuredArr =[
  {
    name: "PLANiT",
    img: planitThumbnail,
    featured: true,
    tech: [
      // <FontAwesomeIcon icon={faCss3} size="2x"/> ,
      // // <FontAwesomeIcon icon={faHtml5} size="2x" /> ,
      // <FontAwesomeIcon icon={faJs} size="2x"/> ,
      // <FontAwesomeIcon icon={faReact} size="2x" /> ,
      // <FontAwesomeIcon icon={faNode} size="2x" /> ,
      // <FontAwesomeIcon icon={faNpm} size="2x"/> ,
      // <Icon className="Portfolio-tech-icons" icon={antDesignOutlined}  height="30"/>,
      // <Icon className="Portfolio-tech-icons" icon={mongodbIcon}  height="30"/>,
    ],
    //  type: 
      // <Badge badgeContent={5} color="secondary">
      //   <PeopleAltIcon/>
      // </Badge>,
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
     img: pawslifeThumbnail,
     featured: true,
    tech: [
    //  <FontAwesomeIcon icon={faCss3} size="2x"/> ,
    //  <FontAwesomeIcon icon={faJs} size="2x"/> ,
    //  // <FontAwesomeIcon icon={faHtml5} size="2x" /> ,
    //  <FontAwesomeIcon icon={faNode} size="2x" /> ,
    //  // <FontAwesomeIcon icon={faNpm} size="2x"/> ,
    //  <Icon icon={materializecssIcon}  height="30"/>,
    //  <Icon icon={mysqlIcon}  height="30"/>,
    //  <Icon icon={handlebarsIcon}  width="30"/>,
        
    ],
    // type:  
      //  <Badge badgeContent={4} color="secondary">
      //    <PeopleAltIcon/>
      //  </Badge>
    // ,
    role: "Frontend Lead",
    work: "frontend design · backend logic · API routes · CRUD Functionality",
    description: "Social community website of pet owners and pet service providers",
    info: "PawsLife is a social community website of pet owners and pet service providers. Pawslife gives the user the ability to create an account as a pet owner of a dog or cat, and or a pet provider for dogs or cats. As an owner, a user can keep track of all of their pets for which they can book provider services. As a provider, a user can post pet care services for other members of pawslife to book. This application has full CRUD for user accounts and CRD for pets and posts.",
    github: "https://github.com/rickyg218/PawsLIfe-",
    app: "https://pawslife.herokuapp.com/"
  },

]

const useStyles = makeStyles((Theme) =>
  createStyles({
    root: {
      backgroundColor: "var(--mainColor)",
      backgroundImage: "linear-gradient(315deg, rgba(230, 164, 144, 0), rgba(230, 164, 144, 0.2))",
      // padding: '1vh'
    },
    appTitle: {
      fontSize: "7vw",
      textTransform: 'uppercase',
    },
    featured: {
      background: "-webkit-linear-gradient(var(--thirdColor), var(--fourthColor))",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      textTransform: 'uppercase',
      textAlign: 'center',
      fontSize: "7vw",
    },
    carouselContent: {
      marginTop: '10vh'
    },
    links: {
      marginTop: '-5%'
    },
    logo: {
      paddingTop: '20px',
      marginBottom: '20px'
    },
    image: {
      // maxHeight:"10vw",
      maxWidth:"9vw"
    },
    // imageContainer: {
    //   top: 100,

    // }
  }),
);

export default function Featured(item) {
  const classes = useStyles();
    return (
        <div className={classes.root}>
          <Container maxWidth="md">
          <section className={classes.logo}>
            <Logo title="featured apps" />
          </section>
          <section className={classes.carousel}>
            <Carousel >
              {featuredArr.map((item, i) => (
                <div className={classes.carouselContent}>
                  <div className={classes.appTitle}>
                    <h1>{item.name} <span className={classes.imageContainer}><img className={classes.image} src={item.img}/></span></h1>
                  </div> 
                  <div className={classes.links}>
                  
                    <LargeLinksExternal to={item.app} text="View App"/>  
                    
                  </div>
                  
                    {item.githubFront && item.githubBack? 
                            <div>
                                <Tooltip title="view GitHub Views">
                                  <LargeLinksExternal to={item.githubFront} text="GitHub Views"/>  
                                </Tooltip>
                                <Tooltip title="view GitHub API">
                                  <LargeLinksExternal to={item.githubBack} text="GitHub API"/>  
                                </Tooltip>
                            </div>
                            : 
                            <div>
                                <Tooltip title="view GitHub">
                                <LargeLinksExternal to={item.github} text="GitHub"/>  
                                </Tooltip>
                            </div>
                        }
                        <h1>{item.description}</h1>
                    <h3>{item.info}</h3>
                </div>
              ))}
            </Carousel>
          </section> 
          </Container>       
           </div>
    )
}
