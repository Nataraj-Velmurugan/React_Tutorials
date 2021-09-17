import React, { Component } from 'react';
import List from './List';

class Create extends Component {
    constructor() {
        super();
        this.state = {
            allNotes: [],
            name: '',
            title: '',
            subject: '',
            note: {
                name: '',
                title: '',
                subject: '',
            },
            showList: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
       
        console.log(this.state)
        let updatedNote = {...this.state.note}
        updatedNote.name = this.state.name;
        updatedNote.title = this.state.title;
        updatedNote.subject = this.state.subject;

        let customAllNotes = [...this.state.allNotes]
        customAllNotes.push(updatedNote)

        this.setState({
            allNotes: customAllNotes
        })

        this.setState({
            showList: true
        })

        e.preventDefault();
        
    };

    getInputText(event) {
        console.log(event.target.getAttribute("name"))
        this.setState({
            [event.target.getAttribute("name")]: event.target.value
        })
    }

    render() {
        return (
            <div >
                <span > Name </span>
                <input type='text' name='name' onChange={this.getInputText.bind(this)} ></input>
                <br />
                <span > Title </span>
                <input type='text' name='title' onChange={this.getInputText.bind(this)} ></input>
                <br />
                <span > Subject </span>
                <input type='text' name='subject' onChange={this.getInputText.bind(this)} ></input>
                <br />
                <input type='button' value='add' onClick={this.handleSubmit} />
                <div >
                    <List propsNotes={this.state.allNotes} status = {this.state.showList} alpha={this.state.allNotes}/>
                </div >
            </div>
        );
    }
}

export default Create;