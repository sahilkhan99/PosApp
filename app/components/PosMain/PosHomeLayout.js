import React, { Component, PropTypes } from 'react';
import MainHeaderComponent from 'components/PosMain/MainHeaderComponent';
import MainDetailComponent from 'components/PosMain/MainDetailComponent';
import MainSideBarComponent from 'components/PosMain/MainSideBarComponent';
// import NavigationMenu from 'components/PosMain/NavigationMenu';

class PosHomeLayout extends Component {
    constructor(props) {
        super(props);
        
    }

    handleOnToggleClick = () => {
        this.props.onToggleSideNavClick();
    }

    /**Update checkout transaction item quantity */
    handleOnTransactionUpdate = (transactionItem) => {
        if(this.props.onTransactionUpdate){
            this.props.onTransactionUpdate(transactionItem);
        }
    }


    /*Add menu item to checkout component */
    handleOnMenuItemAdd = () => {
        if(this.props.onTransactionUpdate){
            this.props.onTransactionUpdate();
        }
    }

    createMenuObject = (menu) => {
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

        if(menu && menu.Items && menu.Items.length > 0 )
            return menu;

        return menuObject;
    }

    
    render() {
        let navStyleMargin = { marginBottom: '0px' }
        const {menuObject,
            onMenuClick,
            transactions,
            onTransactionUpdate,
            isMobile,
            toggleSideNav} = this.props;

        let menuItemObject = this.createMenuObject(menuObject);
        console.log(">>> printing pos home layout");
        

        return (
            <div>
                <nav className="navbar navbar-default navbar-static-top" role="navigation" style={navStyleMargin}>
                    <div className="navbar-header">
                        <button type="button" onClick={this.handleOnToggleClick}
                            className="navbar-toggle"
                            data-toggle="collapse"
                            data-target=".navbar-collapse">
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
                <MainDetailComponent 
                    menuObject={menuItemObject}
                    transactions ={transactions}
                    onTransactionUpdate = {this.handleOnTransactionUpdate}/>
            </div>
        );
    }
}


PosHomeLayout.propTypes = {
    menuObject: PropTypes.object,
    onMenuClick: PropTypes.func,
    transactions: PropTypes.array,
    onTransactionUpdate: PropTypes.func,
    isMobile: PropTypes.bool,
    toggleSideNav: PropTypes.bool,
    onToggleSideNavClick: PropTypes.func,
};

export default PosHomeLayout;