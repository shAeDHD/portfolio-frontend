import axios from "axios";
import React from "react";
import '../App.css'

const MONGOOSE_BACKEND_BASE_URL = 'http://localhost:3000/projects';

class Projects extends React.Component {

    componentDidMount() {
        console.log(`componentDidMount()`);
        this.fetchProjects();
    }

    fetchProjects = async () => {
        
        const res = await axios.get(MONGOOSE_BACKEND_BASE_URL);
        console.log(`response:`, res.data);
        
    }

    render() {

        return(

            <div className="App">
                <h1>Projects</h1>
            </div>
        )
    }       //  render() 

}           //  class Projects 

export default Projects;