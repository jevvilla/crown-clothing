import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { collectionsFetchingSelector } from "../../redux/shop/shop.selectors";
import { WithSpinner } from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "../collection/collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: collectionsFetchingSelector,
});

const CollectionsPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionsPageContainer;
