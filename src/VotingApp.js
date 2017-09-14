import React, { Component } from 'react';
import './App.css';
import './semantic/dist/semantic.css';
import image_aqua from './images/products/image-aqua.png';
import image_rose from './images/products/image-rose.png';
import image_steel from './images/products/image-steel.png';
import image_yellow from './images/products/image-yellow.png';

export default class VotingApp extends Component
{
    render()
    {
        return(
            <ProductList />
        );
    }
}

function generateVoteCount() 
{
    return Math.floor((Math.random() * 50) + 15);
}

const products = [
    {
      id: 1,
      title: 'Yellow Pail',
      description: 'On-demand sand castle construction expertise.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/daniel.jpg',
      productImageUrl: image_aqua,
      alt: 'Daniel',
    },
    {
      id: 2,
      title: 'Supermajority: The Fantasy Congress League',
      description: 'Earn points when your favorite politicians pass legislation.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/kristy.png',
      productImageUrl: image_rose,
      alt: 'Kristy',
    },
    {
      id: 3,
      title: 'Tinfoild: Tailored tinfoil hats',
      description: 'We already have your measurements and shipping address.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/veronika.jpg',
      productImageUrl: image_steel,
      alt: 'Veronika',
    },
    {
      id: 4,
      title: 'Haught or Naught',
      description: 'High-minded or absent-minded? You decide.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/molly.png',
      productImageUrl: image_yellow,
      alt: 'Molly',
    },
  ];

class Product extends Component 
{   
    handleUpVote = () => (
        this.props.onVote(this.props.id)
    );
    
    render()
    {   
        return(
            <div className="item">
                <div className="image">
                    <img 
                        src={this.props.productImageUrl}
                        alt="" />
                </div>

                <div className="middle aligned content">
                    <div className="header">
                        <a onClick={this.handleUpVote}>
                            <i className="large caret icon up"></i>
                        </a> 
                        {this.props.votes}
                    </div>
                
                    <div className="description">
                        <a href={this.props.url}>
                            {this.props.title}
                        </a>
                        <p>{this.props.description}</p>
                    </div>

                    <div className="extra">
                        <span>Submitted by:</span>
                        <img 
                            className="ui avatar image" 
                            src={this.props.submitterAvatarUrl}
                            alt={this.props.alt} />
                    </div>
                </div>
            </div>
        );
    }
}

class ProductList extends Component
{
    state = {
        products: [],
    };

    componentDidMount()
    {
        this.setState({products: products});
    }
    
    handleProductUpVote = (productID) => {
        const nextProducts = this.state.products.map((product) => {
            if (product.id === productID)
            {
                return Object.assign({}, product, {votes: product.votes + 1});
            }
            else
            {
                return product;
            }
        });

        this.setState({products: nextProducts});
    }
    
    render()
    {
        const sortedProducts = this.state.products.sort((a, b) => (b.votes - a.votes));
        
        const productComponents = sortedProducts.map((product) => 
            <Product 
                id = { product.id }
                key = { 'product' + product.id }
                title = { product.title }
                description = { product.description }
                url = { product.productImageUrl }
                votes = { product.votes }
                submitterAvatarUrl = { product.submitterAvatarUrl }
                productImageUrl = { product.productImageUrl }
                alt = { product.alt }
                onVote = { this.handleProductUpVote } />
        );
        
        return(
            <div className="ui unstackable items">
                { productComponents }
            </div>
        );
    }
}