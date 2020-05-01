import React from "react";
import { connect } from "react-redux";

import { collectionSelector } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";

import {
  CollectionPageContainer,
  TitleContainer,
  ItemsContainer,
} from "./collection.styles";

const CollectionPage = ({ collection }) => {
  return (
    collection && (
      <CollectionPageContainer>
        <TitleContainer>{collection.title}</TitleContainer>
        <ItemsContainer>
          {collection.items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </ItemsContainer>
      </CollectionPageContainer>
    )
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: collectionSelector(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
