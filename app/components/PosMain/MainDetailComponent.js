import React, { Component, PropTypes } from 'react';
import MainCheckoutComponent from 'components/PosMain/MainCheckoutComponent';
import MenuItemComponent from 'components/PosMain/MenuItems/MenuItemComponent';
class MainDetailComponent extends Component {

    createGroupedArray(arr, chunkSize) {
        var groups = [], i;
        for (i = 0; i < arr.length; i += chunkSize) {
            groups.push(arr.slice(i, i + chunkSize));
        }
        return groups;
    }

    createMenuComponent(menuText, index) {
        return (
            <div key={index} className="col-lg-4 col-md-6">
                <MenuItemComponent LinkText="Add to cart"
                    MenuText={menuText}
                    MenuIconClass="fa fa-compass fa-5x"
                    MenuColorClass="panel-primary" />
            </div>
        );
    }

    createMenuDetailComponent(menuObject) {
        let menuArrayObject = this.createGroupedArray(menuObject.Items, 3);
        let menuDetailReactElement  = menuArrayObject.map((itemSubArray, index) => {
            return (
                <div key = {`menuItemKey${index}`}className="row">
                    {itemSubArray.map( (item, index) => {
                        return this.createMenuComponent(item.itemName, index);
                    })}
                </div>
            )    
        });
        return menuDetailReactElement;
    }

    render() {
        const { menuObject } = this.props;
        let createMenuDetailComponent = this.createMenuDetailComponent(menuObject);

        return (
            <div id="page-wrapper">
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="row">
                            {createMenuDetailComponent}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <MainCheckoutComponent />
                    </div>
                </div>
            </div>
        );
    }
}

MainDetailComponent.propTypes = {
    menuObject: PropTypes.object,
};

export default MainDetailComponent;