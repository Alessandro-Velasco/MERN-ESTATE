import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

export default function ListingItem({ listing }) {
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm-[330px]'>
    <Link to={`/listing/${listing._id}`}>
      <img 
        src={listing.imageUrls[0] || 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimageio.forbes.com%2Fspecials-images%2Fimageserve%2F657b29edf09ae8354c4debba%2FReal-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is%2F960x0.jpg%3Fheight%3D474%26width%3D711%26fit%3Dbounds&tbnid=cubFgwx5sb4LoM&vet=12ahUKEwj0rbWAhYOFAxUk9AIHHencCsQQMygBegQIARB0..i&imgrefurl=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fforbesbusinesscouncil%2F2023%2F12%2F15%2Fstrategies-for-success-in-real-estate%2F&docid=No5T1GQlhkyGMM&w=711&h=474&q=real%20estate&client=avast-a-1&ved=2ahUKEwj0rbWAhYOFAxUk9AIHHencCsQQMygBegQIARB0'} 
        alt="listing cover" 
        className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'/>
       <div className='p-3 flex flex-col gap-2 w-full'>
        <p className='truncate text-lg font-semibold text-slate-700'>{listing.name}</p>
        <div className='flex items-center gap-1'>
          <MdLocationOn className='h-4 w-4 text-green-700'/>
          <p className='text-sm text-gray-600 truncate w-full'>{listing.address}</p>
        </div>
        <p className='text-sm text-gray-600 line-clamp-2'>{listing.description}</p>
        <p className='text-slate-500 mt-2 font-semibold'>
          $
          {listing.offer ? listing.discountPrice.toLocaleString('en-US') : listing.regularPrice.toLocaleString('en-US')}
          {listing.type === 'rent' && ' / month'}
        </p>
        <div className='text-slate-700 gap-4'>
          <div className='font-bold text-xs'>{listing.bedrooms > 1 ? `${listing.bedrooms} beds` : `${listing.bedrooms} bed ` }</div>
          <div className='font-bold text-xs'>{listing.bathrooms > 1 ? `${listing.bathrooms} bath` : `${listing.bedrooms} bath ` }</div>
          
        </div>
     </div>
    </Link>
    
    </div>
  );
}
