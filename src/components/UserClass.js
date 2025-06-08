import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
            },
        };
        //console.log(this.name+"Child Constructor");
    }

    async componentDidMount() {
        //console.log(this.name+"Child component Did Mount");

        // Api call
        const data = await fetch("https://api.github.com/users/mohitkmr04");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);
    }
    
    render() {
        // const {name, location} = this.props;
        //console.log("Child Render");
        
        const {name,location,avatar_url} = this.state.userInfo;
        
        return (
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Location: Chennai</h3>
                <h3>Contact: kmrmohit04@gmail.com</h3>
            </div>
        );
    }
}

export default UserClass;