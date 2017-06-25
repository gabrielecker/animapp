import React, { Component, PropTypes } from 'react';
import { Grid, Form, Divider, Checkbox, Image, Segment, Message } from 'semantic-ui-react';
import ScreenHeader from '../shared/screen-header';
import {
  validatePet
} from '../../utils/pet-validator-util';

export default class PetNew extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      size: '',
      sex: '',
      castrated: false,
      dewormed: false,
      picture: '',
      information: '',
    };
  }

  handleChange(field, event, { value }) {
    const updatedValue = {};

    switch (field) {
      case 'castrated':
      case 'dewormed':
        updatedValue[field] = !this.state[field];
        break;
      default:
        updatedValue[field] = value || event.target.value;
    }

    this.setState(updatedValue);
  }

  handleSubmit(event) {
    const { registerPet, setLoading } = this.props;
    const { name, type, size, sex, castrated, dewormed, picture, information } = this.state;

    event.preventDefault();
    const errors = validatePet(this.state);
    if(errors.name || errors.type || errors.size || errors.sex){
      this.setState({errors});
    }else {


      setLoading(true);

      registerPet({
        name,
        type,
        size,
        sex,
        castrated,
        dewormed,
        pictures: [picture],
        information,
      }).then(res => {
        setLoading(false);
        this.context.router.push(`/pets/${res.payload.data.id}`);
      });
    }
  }

  errorsMessage(){
    const {errors} = this.state;
    const errorsList = [];
    if(errors){
      for(let field in errors){
        if(errors[field]) errorsList.push(errors[field]);
      }
    }

    if(errorsList.length){
      return <Message error header="Preencha os campos corretamente!" list={errorsList} />
    }else{
      return '';
    }
  }

  renderPetForm(){
    const { errors } = this.state;
    return (
      <Grid stackable>
        <Grid.Row>
          <ScreenHeader>Cadastrar Pet</ScreenHeader>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <p>Preencha todos os campos corretamente para cadastrar o pet, afinal, quanto mais informações e fotos você por, mais fácil será para encontrarmos um novo lar!</p>
              <p>Por gentileza não abuse dessa página.</p>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row><Divider horizontal>Formulário</Divider></Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            {this.errorsMessage()}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Form>
              <Form.Group>
                <Form.Input
                  label="Nome"
                  value={this.state.name}
                  onChange={(event, value) => this.handleChange('name', event, value || {})}
                  width={16}
                />
              </Form.Group>
              <Form.Group >
                <Form.Select
                  label="Tipo"
                  value={this.state.type}
                  onChange={(event, value) => this.handleChange('type', event, value || {})}
                  options={[{ key: 'd', text: 'Cão', value: 'd' }, { key: 'c', text: 'Gato', value: 'c' }]}
                  width={4}
                />
                <Form.Select
                  label="Porte"
                  value={this.state.size}
                  onChange={(event, value) => this.handleChange('size', event, value || {})}
                  options={[{ key: 'b', text: 'Grande', value: 'b' }, { key: 'm', text: 'Médio', value: 'm' }, { key: 's', text: 'Pequeno', value: 's' }]}
                  width={6}
                />
                <Form.Select
                  label="Sexo"
                  value={this.state.sex}
                  onChange={(event, value) => this.handleChange('sex', event, value || {})}
                  options={[{ key: 'm', text: 'Macho', value: 'm' }, { key: 'f', text: 'Fêmea', value: 'f' }]}
                  width={6}
                />
              </Form.Group>
              <Form.Group>
                <Form.Field
                  value={this.state.castrated}
                  onChange={(event, value) => this.handleChange('castrated', event, value || {})}
                  control={Checkbox}
                  label={<label>Castrado</label>}
                />
                <Form.Field
                  value={this.state.dewormed}
                  onChange={(event, value) => this.handleChange('dewormed', event, value || {})}
                  control={Checkbox}
                  label={<label>Vermifugado</label>}
                />
              </Form.Group>
              <Form.Group>
                <Form.Input
                  value={this.state.picture}
                  onChange={(event, value) => this.handleChange('picture', event, value || {})}
                  label="URL da foto"
                  width={16}
                />
              </Form.Group>
              <Form.Group>
                <Image.Group size="large">
                  <Image src={this.state.picture} />
                </Image.Group>
              </Form.Group>
              <Form.Group>
                <Form.TextArea
                  value={this.state.information}
                  onChange={(event, value) => this.handleChange('information', event, value || {})}
                  label="Complemento"
                  placeholder="Informações complementares do pet..."
                  width={16}
                />
              </Form.Group>
              <Form.Group>
                <Form.Button
                  onClick={event => this.handleSubmit(event)}
                  positive
                  fluid
                  width={16}
                >
                  Cadastrar
                </Form.Button>
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

  renderLoginWarning(){
    return(
      <h1>Você deve estar logado para cadastrar um pet!</h1>
    )
  }

  render() {
    const {accountInfo} = this.props;
    debugger;
    return accountInfo && accountInfo.token ? this.renderPetForm() : this.renderLoginWarning();
  }
}

PetNew.propTypes = {
  registerPet: React.PropTypes.function,
  setLoading: React.PropTypes.function,
};

