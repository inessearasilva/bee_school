import React, { Component } from "react";
import UtenteDataService from "../services/tutorial.service";
import { withRouter } from '../common/with-router';

class Registo_Utente extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getUtente = this.getUtente.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateUtente = this.updateUtente.bind(this);
    this.deleteUtente = this.deleteUtente.bind(this);

    this.state = {
      currentUtente: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getUtente(this.props.router.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentUtente: {
          ...prevState.currentUtente,
          title: title
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentUtente: {
        ...prevState.currentUtente,
        description: description
      }
    }));
  }

  getUtente(id) {
    UtenteDataService.get(id)
      .then(response => {
        this.setState({
          currentUtente: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentUtente.id,
      title: this.state.currentUtente.title,
      description: this.state.currentUtente.description,
      published: status
    };

    UtenteDataService.update(this.state.currentUtente.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentUtente: {
            ...prevState.currentUtente,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateUtente() {
    UtenteDataService.update(
      this.state.currentUtente.id,
      this.state.currentUtente
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The Utente was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteUtente() {    
    UtenteDataService.delete(this.state.currentUtente.id)
      .then(response => {
        console.log(response.data);
        this.props.router.navigate('/utente');
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentUtente } = this.state;

    return (
      <div>
        {currentUtente ? (
          <div className="edit-form">
            <h4>Utente</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentUtente.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentUtente.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentUtente.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentUtente.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteUtente}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateUtente}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Utente...</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Registo_Utente);