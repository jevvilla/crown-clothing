import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { collectionsFetchingSelector } from "../../redux/shop/shop.selectors";
import { WithSpinner } from "../with-spinner/with-spinner.component";
import CollectionsOverview from "../collections-overview/collections-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: collectionsFetchingSelector,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
