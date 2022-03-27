import {Listing} from './Listing';


const  fetchListingData = () =>{
    return Listing;
}

const ListingsComponent = () =>{
    const listingData = fetchListingData();

    return(
        <div className='listing-container'>
            <h2>Listings</h2>
            <ul className='listing-list'>
                {
                    listingData.map((listing)=>{
                        <listing key={listing.id} address={listing} />
                    })
                }
            </ul>
        </div>
    )
}

export default ListingsComponent;