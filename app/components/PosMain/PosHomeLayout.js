import React, { Component, PropTypes } from 'react';
import MainHeaderComponent from 'components/PosMain/MainHeaderComponent';
import MainDetailComponent from 'components/PosMain/MainDetailComponent';
import MainSideBarComponent from 'components/PosMain/MainSideBarComponent';

class PosHomeLayout extends Component {
    
    createMenuObject = () => {
        let menuObject = 
            {
                Name: "FruitSalad",
                Items: [
                    {
                        itemName: "Fruit salad",
                        itemPrice: "$10.00",
                    },
                    {
                        itemName: "Cucumber salad",
                        itemPrice: "$10.00",
                    },
                    {
                        itemName: "Rose apple salad",
                        itemPrice: "$10.00",
                    },
                    {
                        itemName: "Pawpaw salad",
                        itemPrice: "$10.00",
                    },
                    {
                        itemName: "Cucumber salad",
                        itemPrice: "$10.00",
                    },
                    {
                        itemName: "Rose apple salad",
                        itemPrice: "$10.00",
                    },
                    {
                        itemName: "Pawpaw salad",
                        itemPrice: "$10.00",
                    },
                ]
            };
        return menuObject;
    }

    
    render() {
        let navStyleMargin = { marginBottom: '0px' }
        let menuItemObject = this.createMenuObject();

        const {menuObject, onMenuClick} = this.props;

        return (
            <div>
                <nav className="navbar navbar-default navbar-static-top" role="navigation" style={navStyleMargin}>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="index.html">Pos v2.0</a>
                    </div>

                    <MainHeaderComponent />
                    <MainSideBarComponent onMenuClick={onMenuClick}/>
                </nav>
                <MainDetailComponent menuObject={menuItemObject}/>
            </div>
        );
    }
}

PosHomeLayout.propTypes = {
    menuObject: PropTypes.object,
    onMenuClick: PropTypes.func,
};

export default PosHomeLayout;