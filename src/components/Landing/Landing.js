import React from 'react';
import { createStyles, makeStyles} from '@material-ui/core/styles';
import {Grid, Container, Box}from '@material-ui/core/';
import Emoji from '../Emoji/Emoji';
import Buttons from '../Buttons/Buttons';
import Logo from '../Logo/Logo';
import headshot from '../../images/headshot.jpg';
import LargeLinks from '../LargeLinks/LargeLinks';
import LargeLinksInternal from '../LargeLinksInternal/LargeLinksInternal';
import './landing.css'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
        flexGrow: 1,       
    },

    welcome: {
        fontSize: "7vw",
        textTransform: 'uppercase',
        marginBottom: '-120px'
    },
    textContainer: {
        marginBottom: '20px'
    },
    text: {
        textAlign: "justify",
        marginTop: "30px",
        marginBottom: '50px'
    },
    logo: {
        paddingTop: '10vh',
        marginBottom: '150px',
    },
    buttonContainer: {
        marginBottom: '60px',
        justifyContent: 'space-between',
        display: 'flex',
        direction: 'row'
    },
    img: {
        display:"inline-block" ,
        maxWidth:"100px",
        height:"auto"       
    },
    links: {
        // marginTop: '-12%'
        marginTop: '20px'
    },
  }),
);


export default function Landing() {
    const classes = useStyles();

    window.onload = function() {
        animateSequence();
        animateRandom();
    };
    
    function animateSequence() {
        var a = document.getElementsByClassName('sequence');
        for (var i = 0; i < a.length; i++) {
            var $this = a[i];
            var letter = $this.innerHTML;
            letter = letter.trim();
            var str = '';
            var delay = 100;
            for (let l = 0; l < letter.length; l++) {
                if (letter[l] != ' ') {
                    str += '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[l] + '</span>';
                    delay += 150;
                } else
                    str += letter[l];
            }
            $this.innerHTML = str;
        }
    }
    
    function animateRandom() {
        var a = document.getElementsByClassName('random');
        for (var i = 0; i < a.length; i++) {
            var $this = a[i];
            var letter = $this.innerHTML;
            letter = letter.trim();
            var delay = 70;
            var delayArray = new Array;
            var randLetter = new Array;
            for (let j = 0; j < letter.length; j++) {
                while (1) {
                    var random = getRandomInt(0, (letter.length - 1));
                    if (delayArray.indexOf(random) == -1)
                        break;
                }
                delayArray[j] = random;
            }
            for (let l = 0; l < delayArray.length; l++) {
                var str = '';
                var index = delayArray[l];
                if (letter[index] != ' ') {
                    str = '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[index] + '</span>';
                    randLetter[index] = str;
                } else
                    randLetter[index] = letter[index];
                delay += 80;
            }
            randLetter = randLetter.join("");
            $this.innerHTML = randLetter;
        }
    }
    
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return (
        <div className={classes.root}>
            <Container maxWidth="md">
                    <section 
                        className={classes.logo}
                    >
                        <Logo title="nicole remy"/>
                    </section>
                    <section className="welcome-container">
                        <h1 className="cssanimation sequence leRotateSkateInLeft">welcome</h1>
                    </section>
                    
                    <section>
                        <h1>full stack developer  · collaborator  · innovator  · learner</h1>
                    </section>
                    <section 
                        className={classes.textContainer}
                    >
                        <h3 
                            className={classes.text}
                        >
                            Hello. My name is Nicole Remy and I am a Full Stack Web Developer with a background in Architecture, Interior Design, Geographic Information Science, and customer service. Welcome to my portfolio.
                        </h3>
                    </section> 
                    <section className={classes.links}>
                        <LargeLinksInternal to='/resume' text="Resume"/>
                        <LargeLinksInternal to='/projects' text="Projects"/> 
                        <LargeLinksInternal to='/about-me' text="AboutMe"/> 
                    </section>
                    {/* <section 
                        className={classes.buttonContainer}
                    >
                        <Buttons to='/resume' text="Resume"/>
                        <Buttons to='/projects' text="Projects"/> 
                        <Buttons to='/about-me' text="AboutMe"/> 
                    </section> */}
            </Container> 
            
        </div>
    )
}


 