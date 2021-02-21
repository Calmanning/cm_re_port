import { useState } from 'react'
import { Col, Row, Container } from "../components/Grid";
import Works from "../components/Works"
import "./style.css"

const Portfolio = () => {
    const[works, setWorks] = useState([
        
        {
                id: 1,
                name: "So Thirsty",
                site: "https://sothirstyproject.herokuapp.com/",
                repo: "",
                img: "../../images/so_thirsty.png"
        },
        
        {
                id: 2,
                name: "Hey Bartender",
                site: "https://sothirstyproject.herokuapp.com/",
                repo: "",
                img: "../../images/hey_bartender.png"
        },
       
        {
                id: 3,
                name: "Name Finder",
                site: "https://sothirstyproject.herokuapp.com/",
                repo: "",
                img: "../../images/pageIamge.bmp"
        },
        
        {
                id: 4,
                name: "Weather App",
                site: "https://sothirstyproject.herokuapp.com/",
                repo: "",
                img: "../../images/weather_app.png"
        },
        
        {
                id: 5,
                name: "Password Generator",
                site: "https://sothirstyproject.herokuapp.com/",
                repo: "",
                img: "../../images/Password_Gen.png"
        },
    ])

    return (
        <Container >
           <div className=" row tree">
                <div className="col-sm-4">
                <Works works={works} />
                </div>
            </div>

        </Container>
    )
}

export default Portfolio 
