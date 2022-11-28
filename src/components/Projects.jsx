import axios from "axios";
import React from "react";
import '../App.css'

const MONGOOSE_BACKEND_BASE_URL = 'http://localhost:3000/projects';

class Projects extends React.Component {

    state = {
        projects: [],
        loading: true,
        error: null
    }

    componentDidMount() {
        console.log(`componentDidMount()`);
        this.fetchProjects();
    }       //  close componentDidMount()

    fetchProjects = async () => {
        
        try{
            const res = await axios.get(MONGOOSE_BACKEND_BASE_URL);
            console.log(`response:`, res.data);
            this.setState({
                projects: res.data,
                loading: false
            })
        } catch (err) {
            console.log(`Error loading projects from API`, err);
            this.setState({
                loading: false,
                error: err
            })
        }   //  close catch(err)
       
    }       //  close fetchProjects =

    render() {

        return(

            <div className="App">
                <h1>Projects</h1>

                {
                
                    this.state.loading
                    ?
                    <p>loading secrets</p>
                    :
                    <ul>

                        { this.state.projects.map(
                            p => <li key={ p._id }>
                                    <h4>{p.title}</h4>
                                    <p>{p.description}</p>
                                    <h5>{p.frontLanguage}</h5>
                                    <p className="languageSymbol">{p.frontSymbol}</p>
                                    <h5>{p.backLanguage}</h5>
                                    <p className="languageSymbol">{p.backSymbol}</p> 
                                </li>
                        )}
                        
                    </ul>

                }


            </div>  //  close div
        )
    }       //  render() 

}           //  class Projects 


export default Projects;