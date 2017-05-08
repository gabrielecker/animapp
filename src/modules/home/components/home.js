import React, { Component } from 'react';
import { Statistic, Icon, Divider, Grid, Embed, Button, Segment } from 'semantic-ui-react';
import { Link } from 'react-router';
import ScreenHeader from '../../../components/shared/screen-header';

class Home extends Component {

  renderStatistic(statistic) {
    return (
      <Statistic>
        <Statistic.Value>
          <Link to={statistic.path}>
            <Icon name={statistic.icon.name} color={statistic.icon.color} />
            {statistic.value}
          </Link>
        </Statistic.Value>
        <Statistic.Label>{statistic.description}</Statistic.Label>
      </Statistic>
    );
  }

  render() {
    return (
      <Grid stackable>
        <Grid.Row>
          <ScreenHeader>Seja bem vindo ao Animapp!</ScreenHeader>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Segment>
              Através desta plataforma você pode <Link to="/pets">adotar um pet</Link>, se <Link to="/shelters/new">cadastrar como lar temporário</Link> ou <Link to="donations">fazer uma doação</Link>.
              Se você encontrou um pet abandonado e precisa de ajuda, você também pode <Link to="/pets/new">cadastra-lo na plataforma</Link>.
            </Segment>
            <Button size="huge" color="red" fluid><Icon name="heart" />Adotar</Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row><Divider horizontal>Este Mês</Divider></Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Statistic.Group widths="three" size="mini">
              {this.renderStatistic({ icon: { name: 'heart', color: 'red' }, value: 15, path: '/pets', description: 'Adoções' })}
              {this.renderStatistic({ icon: { name: 'home', color: 'blue' }, value: 17, path: '/shelters/new', description: 'Lares temporários' })}
              {this.renderStatistic({ icon: { name: 'money', color: 'green' }, value: 'R$ 1.750,50', path: '/donations', description: 'Em doações' })}
            </Statistic.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row><Divider horizontal>Adote</Divider></Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Embed
              id="jc5XQSVeQ2c"
              placeholder="./assets/image/animapp_logo.png"
              source="youtube"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Home;
